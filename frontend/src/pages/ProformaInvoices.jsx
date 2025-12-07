import React,{useEffect, useState} from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import SalesSummury from '../components/SalesSummury';
import SalesTable from '../components/SalesTable';
import Pagination from '../components/Pagination';
import {getTransactions} from '../services/transactionService.jsx'
const ProformaInvoice = () => {
  const [search,setSearch]=useState([
    {
      text:'',
      startPage:1,
      endPage:12,

     }]);
     const [data,setData]=useState({data:[],totals:{}});
     useEffect(()=>{
         getTransactions(search[search.length-1]).then(setData);
     },[search])
  
  return (
    <div className=' pr-[20px]'>
      <div className='w-[1236px] h-[166px] gap-[16px]'>
        <Header  search={search} setSearch={setSearch}/>
        <Filter  search={search} setSearch={setSearch}/>
        <SalesSummury  totals={data.totals}/>
      </div>
      <SalesTable data={data?.data||[]}/>
      <Pagination initialePage={parseInt((search[search.length-1].endPage)/12)} search={search} setSearch={setSearch}/>
    </div>
  );
};

export default ProformaInvoice;