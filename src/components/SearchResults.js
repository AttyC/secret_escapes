import SaleCard from "./SaleCard";
import styled from 'styled-components'

const List = styled.ul`
  background: ${props => props.theme.bgLight};
  border-radius: 3px;
  border: 2px solid #bc2a5a;
  color:  ${props => props.theme.headingColour};
  display: flex;
  flex-wrap: wrap;
  li {
    list-style-type: none;
    width: 50%;
  }
  margin: 3rem auto;
  padding: 1rem;
  width: 80%;
`
const SearchResults = ({searchResults}) => {
  return  (
    <>
      {searchResults && <h1>There are {searchResults?.resultCount} lovely places for you to browse:</h1>}
      {searchResults?.resultCount === 0 && <h1>Please go back and search again</h1>}
      {searchResults && searchResults.sales?.map(
        sale => (
          <List>
            <li key={sale.id}>
            <SaleCard sale={sale} />
            </li>
          </List>
        )
      )}
    </>
  )
}

export default SearchResults;