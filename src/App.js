import React, { useState } from 'react'
import './App.css';

function App() {

  const [data, setData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('London')

  const fetchData =() =>  {   
    console.log( 'getting the data ...')
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
    .then(res => console.log(res.data))
  }

  const formHandler = (event) => {
    event.preventDefault()
    fetchData()
  }

  const handleInputChange = (event) => setSearchTerm(event.target.value)
  console.log(searchTerm)
  return (
    <form onSubmit={formHandler}>
      <label>
        Search:
        <input type="search" name="search" onChange={handleInputChange}/>
      </label>
    </form>
  );
}

export default App;
