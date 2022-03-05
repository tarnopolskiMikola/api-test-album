import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Loader from './loader/loader'
import Table from './table/Table'
function App() {

  const baseUrl =  'https://jsonplaceholder.typicode.com/photos'
  const [Date, setDate] = useState([])

  const sortData = (field) => {
    console.log(field);

   const copyData =  Date.concat();
  //  console.log(copyData + "oooo1111oooo");
   const sortData = copyData.sort(
  
   (a, b)=> {return a[field] > b[field] ? 1 : -1}
   );
   console.log( sortData.length);
   console.log( sortData);
   setDate(sortData);
  }



   const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>{
    axios(baseUrl)
    .then(
      (res)=>{
        
        // console.log(res.data)
        setDate(res.data)
        setIsLoading(false)
      }
    )
  }, [])
  



  return (
    <div className="container">
       
          {isLoading ? <Loader/> : <Table Date={Date} sortData={sortData}/>}
     
    </div>
  );
}

export default App;
