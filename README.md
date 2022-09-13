# Secret Escapes Tech Test

## Available Scripts

To run the project

#### 
With HTTPS:  `git clone https://github.com/AttyC/secret_escapes.git`
  
With SSH: `git clone git@github.com:AttyC/secret_escapes.git`)

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### PLEASE NOTE: when testing the app I got frequent errors getting the data from SaleCard to SaleDetails - it's been very up and down. But it does work!  
  
  
## Styling
The app uses Styled Components for styling, importing a theme. I started the theme but didn't complete it due to time. The ThemeProvider enables the theme is available to all components.
  
## How to use the app.
1. Search for hotels by inputting text, e.g. 'London' into the searcj box. Press Entre to get the results.
  
2. A list of results will be returned or if none are availabe, a message will ask you to go back and search again. 
  
### What I would do with more time:
  
* Make sure the navigation works properly
* Refactor the fetch queries into a separate file, probably using a custom hook.
* Check performance - clicking through to the Sales Deatils is temperamental - I don't * know if this is the graphql endpoint or my code - !
* Add a back button and redisplay the search box when navigating back to the home page.
* Deal with error catching proeprly in the fetch requests and in the messages displayed to the user.
* Style the app more so it loks beautiful and clear to use. 
* Add unit and integration tests.
