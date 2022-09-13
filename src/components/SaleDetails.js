import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

const SaleDetails = () => {

  const [ saleResult, setSaleResult ] = useState({})
  const location = useLocation();
  const saleId = location.state.sale.id
  
  const fetchSaleData = (saleId) => {
    fetch('https://staging.sparrow.escapes.tech/graphql/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: 
        `query {
          sale(saleId: "${saleId}") {
            editorial {
              title
              destinationName
              hotelDetails
            }
            prices {
              leadRate {
                forDisplay
              }
            }
            photos {
              url
            }
          }
        }
      `,
      variables: { saleId },
      })
    })
    .then(res => res.json())
    .then(res => setSaleResult(res.data.sale))
  }

  useEffect(()=> {
    fetchSaleData(saleId)
  }, [saleId])
     
   return  (
    <div className='results-container'>
      {saleResult && (
        <>
          <h1 className='sale-card-title'>{saleResult.editorial.title}</h1>
          <h2 className='sale-card-title'>{saleResult.editorial.destinationName}</h2>
          {saleResult.photos[0] && <img src={saleResult.photos[0].url} alt='sale-img' />}
          <p dangerouslySetInnerHTML={{__html: saleResult.editorial.hotelDetails}} />
        </> 
      )}
      {!saleResult && <h1 className='sale-card-title'>Fetching you some lovely hotels...</h1>}
    </div>
  )
}

export default SaleDetails;