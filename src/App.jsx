
import './App.css'
import Banner from './components/Header/Banner/Banner'
import NavBar from './components/Header/NavBar/NavBar'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>
      <header>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <div className='mt-24'>
        <Recipes></Recipes>
      </div>


    </>
  )
}

export default App
