import './App.css'


import Header from './Header/Header';
import Cards from './Cards/Cards';
import Credit from './Credit/Credit';
import { useState } from 'react';

function App() {
  const [name, setName] = useState([]);
  const [credit, setCredit] = useState(20)
  const [hour, setHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  

  const handleCourse = (title, price, time) =>{
    
    if(hour + parseFloat(time) <= 20){
      
      const isNewTitle = !name.includes(title);
      if(isNewTitle){
        const newName = [...name, title]
        setName(newName);

        setCredit(credit - parseFloat(time))
        setHour(hour + parseFloat(time));
        const newPrice = totalPrice + parseFloat(price);
        setTotalPrice(newPrice);
      }
      else{
        return alert('This item already added')
      }

    }
    else{
      return alert('Credit is Limited in 20');
      
    }

  }

return (
    <div className='container mx-auto my-12'>

    <Header></Header>
    <div className='flex flex-col md:flex-row md:gap-5'>
    <Cards handleCourse={handleCourse}></Cards>
    <Credit name={name} hour={hour} totalPrice={totalPrice} credit={credit}></Credit>

    </div>
 

    </div>
  )
}

export default App
