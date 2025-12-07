import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import ProformaInvoices from './pages/ProformaInvoices'
import PageNotAvailable from './pages/PageNotAvailible';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          
         
           <Route path="/" element={<Layout />}>
            <Route index element={<ProformaInvoices />} />
          </Route> 
          <Route path="/Dashboard" element={<Layout/>}>
            <Route index element={<PageNotAvailable/>}/>
          </Route>
          <Route path="/Intake" element={<Layout/>}>
            <Route index element={<PageNotAvailable/>}/>
          </Route>
           <Route path="/Nexus" element={<Layout/>}>
            <Route index element={<PageNotAvailable/>}/>
          </Route>
           <Route path="/Pre-Active" element={<Layout/>}>
            <Route index element={<PageNotAvailable/>}/>
          </Route>
          <Route path="/Active" element={<Layout/>}>
            <Route index element={<PageNotAvailable/>}/>
          </Route>
           <Route path="/Blocked" element={<Layout/>}>
            <Route index element={<PageNotAvailable/>}/>
          </Route>
           <Route path="/Closed" element={<Layout/>}>
            <Route index element={<PageNotAvailable/>}/>
          </Route>
           <Route path="/Final-Invoices" element={<Layout/>}>
            <Route index element={<PageNotAvailable/>}/>
          </Route>

          <Route path="/proforma-invoices" element={<Layout />}>
            <Route index element={<ProformaInvoices />} />
          </Route>

          <Route path="*" element={<PageNotFound/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;