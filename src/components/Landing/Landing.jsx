import React, { useEffect, useState } from "react";
import { getCrypto } from "../services/api";
import Spinner from "../helper/Spinner.jsx";
import Table from "../Table";

const Landing = () => {

  const [coins , setCoins] = useState([])
  const [search , setSearch] = useState('')


  useEffect(() => {
    const fetchAPI = async () => {
      const result = await getCrypto();
      setCoins(result)
    };
    fetchAPI();
  }, [coins]);

  const changeHandler = (event)=>{
       setSearch(event.target.value)
  }

  const filterCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
         <input  value={search} onChange={changeHandler} className="w-100 mb-3 mt-3 form-control" type="text" placeholder="Search coin" id="" />
         {
          coins.length  ? 
          <Table coins={filterCoins}/> :

        <Spinner/>
        }
        
    </>
  )
};

export default Landing;
