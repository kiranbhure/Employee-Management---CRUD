import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import ListEmployeeConponent from './Components/ListEmployeeConponent'
// import CreateEmployee from './Components/CreateEmployee';
// import UpdateEmployee from './Components/UpdateEmployee'

import Header from './Components/Header';
import Footer from './Components/Footer';
import ListEmpl from './Components/ListEmpl';
import CreateEmpl from './Components/CreateEmpl';
import UpdateEmpl from './Components/UpdateEmpl';
import DetailsEmpl from './Components/DetailsEmpl';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        
        {/* <Routes>  // class components
          <Route path="/" exact element={ <ListEmployeeConponent/>} />
          <Route path="/employees" element={ <ListEmployeeConponent/>} />
          <Route path="/add-employee" element={ <CreateEmployee/>} />
          <Route path="/update-employee/:id" element={ <UpdateEmployee/> }  />
        </Routes> */}


        <Routes> 
          <Route path="/" exact element={ <ListEmpl/> } />
          <Route path="/employees" element={ <ListEmpl/>} />
          <Route path="/add-employee" element={ <CreateEmpl/>} />
          <Route path="/update-employee/:id" element={ <UpdateEmpl/>} />
          <Route path="/show-details/:id" element={ <DetailsEmpl/>} />
        </Routes>
        

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
