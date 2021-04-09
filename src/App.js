import React, { useState } from 'react';
import Main from './components/Main';
import Container from './components/Container';
import Header from './components/Header';
import DataAreaContext from './utils/DataAreaContext'

function App() {

  const [searchvalue, setsearchvalue] = useState("")

  return (
    <div className="App">
   <Container>
      {/* <DataAreaContext.Provider value={{handleSearchChange: (e) => {
        console.log(e.target.value); 
    }, searchvalue,setsearchvalue}}> */}
     {/* <Header /> */}
     <Main />
     {/* </DataAreaContext.Provider> */}
   </Container>
    </div>
  );
}

export default App;