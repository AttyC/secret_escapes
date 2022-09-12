import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import './App.css';

function App() {

  const [data, setData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
 
const GET_SALES = gql`
  query Sales($query: String!, $travelTypes: String!){
    saleSearch(query: $query, travelTypes: "HOTEL_ONLY") { 
      resultCount
    }
  }
`;

function DisplaySales() {

  const { loading, error, data } = useQuery(GET_SALES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  else return <p>YAY</p>

  // return data.locations.map(({ id, name, description, photo }) => (
  //   <div key={id}>
  //     <h3>{name}</h3>
  //     <img width="400" height="250" alt="location-reference" src={`${photo}`} />
  //     <br />
  //     <b>About this location:</b>
  //     <p>{description}</p>
  //     <br />
  //   </div>
  // ));
}

  const formHandler = (event) => {
    event.preventDefault()
    // fetchData()
  }

  const handleInputChange = (event) => setSearchTerm(event.target.value)
  console.log(searchTerm)
  return (
    // <form onSubmit={formHandler}>
    //   <label>
    //     Search:
    //     <input type="search" name="search" onChange={handleInputChange}/>
    //   </label>
    // </form>
        <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayLocations />
    </div>
  );
}

export default App;
