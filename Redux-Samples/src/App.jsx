
import './App.css'
import Navbar from './components/Navbar'
import  MyContext  from './components/MyContext'
function App() {


 const userName = "Kevin"
  return (
    <MyContext.Provider value={userName}>
      <Navbar/>
    </MyContext.Provider>
  )
}

export default App
