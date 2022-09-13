import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchResults from './SearchResults'

const Home = () => {

  const [searchResults, setSearchResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const fetchData = () =>  {   
    setLoading(true)
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
    setLoading(false)
  }

  const formHandler = (event) => {
    event.preventDefault()
    fetchData()
    navigate(`/search?query=${searchTerm}`);
  }

  const handleInputChange = (event) => setSearchTerm(event.target.value)

  return (
    <>
    <form onSubmit={formHandler}>
      <label>
        Search:
        <input type="search" name="search" onChange={handleInputChange}/>
      </label>
    </form>
        {searchResults &&  <SearchResults searchResults={searchResults} />}
        </>
  )
}

export default Home;