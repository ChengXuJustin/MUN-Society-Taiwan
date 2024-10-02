import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import './css/index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { About, Events, Contact, Home } from './pages'


function App() {

  //Determine the Background of each page
  const location = useLocation();

  const getBGcolor = () => {
    switch (location.pathname) {
      case '/MUN-Society-Taiwan':
        return "var(--dark-blue-bg)"
      case '/home':
        return "var(--dark-blue-bg)"
      case '/MUN-Society-Taiwan/about':
        return "#ffffff"
      case '/MUN-Society-Taiwan/events':
        return "var(--dark-blue-bg)"
      case '/MUN-Society-Taiwan/contact':
        return "var(--dark-blue-bg)"
      default: return "transparent"
    }
  }


  return (
    

    <div style={{paddingTop:150, backgroundColor: getBGcolor()}}>
      
      <div id='toIndex'></div>
    
      {location.pathname === "/chengxujustin.github.io/MUN-Society-Taiwan" && (
        <Home />
      )}

      <Routes>
        {/* <Route path="/home" element={<Home />}/> */}
        <Route path="/MUN-Society-Taiwan/about" element={<About />}/>
        <Route path="/MUN-Society-Taiwan/events" element={<Events />}/>
        <Route path="/MUN-Society-Taiwan/contact" element={<Contact />}/>
      </Routes>
      
      <Header /> 
      <Footer />
    </div>
  )
}

export default App
