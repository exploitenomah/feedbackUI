
// Assets Imports 
import { GlobalStyle } from './assets/styles/GlobalStyles'
import { FeedbackProvider } from './context/FeedbackContext/FeedbackContext'


//External Imports 
import React from 'react'


//Custom Components Imports
import Header from './components/Header/Header'


//Pages imports
import Home from './pages/Home'

const App = () => {

  return (
    <FeedbackProvider>
     <GlobalStyle/>
      <Header />
      <Home />
    </FeedbackProvider>
  )
}

export default App;
