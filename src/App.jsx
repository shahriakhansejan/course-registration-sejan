import './App.css'


import Header from './Header/Header';
import Cards from './Cards/Cards';
import Credit from './Credit/Credit';


function App() {

  return (
    <div className='container mx-auto my-12'>

    <Header></Header>
    <div className='flex flex-col md:flex-row md:gap-5'>
    <Cards></Cards>
    <Credit></Credit>
    </div>
 

    </div>
  )
}

export default App
