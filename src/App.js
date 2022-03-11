import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Loader from './loader/loader';
import Table from './table/Table';
import Paginator from './paginator/paginator';
import Switcher from './switcher/switcher';
function App() {
let baseUrl = "https://jsonplaceholder.typicode.com/photos" 
  const [Date, setDate] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage]  = useState();
  const [isButtonClick, setIsButtonClick] = useState(false)



  const limitCountPage = 50;
  let  totalCountRow =  Date.length  
  const  TotalCountPage = totalCountRow/limitCountPage;
  const lastBlockRow = currentPage*limitCountPage
  const firstBlockRow =  lastBlockRow - limitCountPage
  const currentBlockRows = Date.slice(firstBlockRow,lastBlockRow)
 
  // console.log(firstBlockRow + "-------firstBlockRow--------")
  // // console.log( TotalCountPage)
  // console.log( currentBlockRows + "----currentBlockRows----")
 // console.log(pages )
  const buttonHandler = (url) => {
    baseUrl =  url
  
console.log(Date)
     setIsButtonClick(true)
     console.log(url)
  }

 
  console.log(isButtonClick + '-------isButtonClick-------')
  ////////////////////////////////////////////////////////sortData///////////////////////////////////////////////////
  const sortData = (field) => {
    console.log(field);

   const copyData =  Date.concat();
  //  console.log(copyData + "oooo1111oooo");
   const sortData = copyData.sort(
  
   (a, b)=> {return a[field] > b[field] ? 1 : -1}
   );
  //  console.log( sortData.length);
  //  console.log( sortData);
   setDate(sortData);
  }
/////////////////////////////////////////////////////////sortData///////////////////////////////////////////////////////

const currentPagef = (pag) =>{
  setCurrentPage(pag);
  console.log(pag+"  -----CurrentPage---------")
}
 

 ////////////////////////////////////////////// useEffect////////////////////////////////////////////////
  useEffect(() =>{
   

    axios(baseUrl)
    .then(
      (res)=>{
        
        // console.log(res.data)
        setDate(res.data)
        setIsLoading(false)
      }
    )
     
   
  }, [baseUrl])
 /////////////////////////////////////////////////// useEffect///////////////////////////////////////////////////// 
  ////////////////////////////////////////////////////onNextClick////////////////////////////////////////////////////////////////////
 const onNextClick =() =>{
    if(currentPage>TotalCountPage-1){
      return  
    }
    setCurrentPage(currentPage+1)
  }
///////////////////////////////////////////////////////onNextClick///////////////////////////////////////////////////////
///////////////////////////////////////////////////////onPreviousClick//////////////////////////////////////////////////////
const onPreviousClick =() =>{
  if(currentPage<2){
    return  
  }
  setCurrentPage(currentPage-1)
}
///////////////////////////////////////////////////////onPreviousClick////////////////////////////////////////////////////////////////
 
  let pages = []
  for(let i=1; i<=  TotalCountPage; i++){
    pages.push(i)
  }
 

  return (
    <div className="container">
      
      <Paginator pages={pages}
                 currentPagef={currentPagef}
                 onNextClick={onNextClick}
                 onPreviousClick={onPreviousClick}  /> 
      <Switcher buttonHandler={buttonHandler}/>
                  
          {isLoading ? <Loader/> :  <Table Date={currentBlockRows} sortData={sortData}/>}

     
    </div>
  );
}

export default App;
