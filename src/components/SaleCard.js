import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const SaleCardWrapper = styled.div`
  background: ${props => props.theme.bgLight}
  h1 {
    text-decoration: underline;
  }
`

const SaleCard = ({sale}) => {
  const [saleId, setSaleId ] = useState(false)
  let navigate = useNavigate()

  const handleSaleClick =()=> navigate(`/sale/${saleId}`,{state:{sale: sale}});
      
  useEffect(() => {
    setSaleId(sale.id)
  }, [sale])

  return (
    <>
      <SaleCardWrapper onClick={() => handleSaleClick()}>
        <h1>{sale.editorial.title}</h1>
        <h2>{sale.editorial.destinationName}</h2>
        {sale.photos[0] && <img src={sale.photos[0].url} alt='sale-img'/>}
      </SaleCardWrapper>
    </>
  )
}

export default SaleCard;
