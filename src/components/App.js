import React, { useState } from 'react'
import { useNavigate , Routes, Route} from "react-router-dom";
import styled from 'styled-components'

import Home from './Home';
import SearchResults from './SearchResults';
import SaleDetails from './SaleDetails';

const Form = styled.form`
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function App() {

  const [searchResults, setSearchResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const fetchData = () =>  {   
    fetch('https://staging.sparrow.escapes.tech/graphql/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: 
        `query {
          saleSearch(query: "${searchTerm}", travelTypes: "HOTEL_ONLY") {
            resultCount
            sales(limit: 10, offset: 0) {
              id
              editorial {
                title
                destinationName
              }
              photos {
                url
              }
            }
          }
        }   
      `,
      variables: { searchTerm },
      })
    })
    .then(res => res.json())
    .then(res =>  setSearchResults(res.data.saleSearch))
  }

  const formHandler = (event) => {
    event.preventDefault()
    setLoading(true)
    fetchData()
    setLoading(false)
    navigate(`/search?query=${searchTerm}`);
  }

  const handleInputChange = (event) => setSearchTerm(event.target.value)

  return (
    <>
    {!searchResults && 
    <Form onSubmit={formHandler} className='search-form'>
    <label>
      Search:
      <input type="search" name="search" onChange={handleInputChange}/>
    </label>
  </Form>}
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/search" element={<SearchResults searchResults={searchResults} />} />
        <Route exact path="/sale/:id" element={<SaleDetails />} />           
      </Routes>
    </> 
  );
}

export default App;
