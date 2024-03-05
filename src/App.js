import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';     //for react routing
import{Container} from 'react-bootstrap';    // importing  diff bootstrap components from react bootstrap
import ProductsPage from './Pages/ProductsPage.js';


function App() {
  return (
     <Router> 
        <main  className='py-2'> 
          <Container fluid>               
      <Routes>
        <Route  path="/" element={<ProductsPage/>} exact />
      </Routes>
          </Container>
        </main> 
     </Router>
 
  );
}

export default App;

