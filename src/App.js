
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { PriceContext } from './components/PriceContext';
import PricingList from './components/pricingList/PricingList';



function App() {

  const [value, setValue] = useState(false)


  return (
    <PriceContext.Provider value={{value, setValue}}>
      <div className="App">
        <Header />
        <PricingList />
      
      </div>
      
    </PriceContext.Provider>
    
  );
}

export default App;
