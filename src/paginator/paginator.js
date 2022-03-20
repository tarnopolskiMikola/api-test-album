import React from 'react'
import  './paginator.css'
const Paginator = ({
    pages,
    currentPagef,
    onNextClick,
    onPreviousClick,
    currentPage,
    currentPageActiv,
    pageBefore,
    afterBefore,
    lastBlockRowPagination,
    TotalCountPage}) => {
  
 
    return(
    //     <nav aria-label="...">
    //     <ul className="pagination">
    //       <li className="page-item">
    //         <span className="page-link">Previous</span>
    //       </li>
    //       {
    //       pages.map(p=>{
    //        return(
    //       <li  key={p}  className="page-item ok ">
    //         <span className="page-link">
             
    //           <span className="sr-only"> {p}</span>
    //         </span>
    //       </li>
    //         )
    //     })
    // }
    //       <li className="page-item">
    //         <a className="page-link"  href="/#" alt="i">Next</a>
    //       </li>
    //     </ul>
    //   </nav>


<div className=" ">
    {/* <button className="Previous">
      <a className="Previous-a" href="/#" onClick={()=>{onPreviousClick()}} >Previous</a>
    </button> */}
    <div className="containerr" > 
     {/* <li   className="pageItem ">
      
        {
          pages.map(p=>{
           return(
           
              <span  key={p} className={(currentPage===p)?`Item-p ${currentPageActiv}` : `Item-p ` } onClick={()=>{currentPagef(p)}}> {p}</span>
           
            )
        })
    }

</li> */}
     
     <div className="pagination-form"> 
      
     <button className={(TotalCountPage === 0 || currentPage === 1  )?`Previous-hide` : `Previous`}  onClick={()=>{onPreviousClick()}}>
              <a   href="/#"  >Previous</a>
    </button>

     <div>
     <span   className={(TotalCountPage=== 0 || currentPage === 1)?`Item-p-hide` : `Item-p`} onClick={()=>{currentPagef(lastBlockRowPagination)}}> {lastBlockRowPagination}</span>
     <span   className={(TotalCountPage=== 0  || currentPage === 1)?`Item-p-hide` : `Item-p`}> ....... </span>
     <span   className={(afterBefore=== 0 || TotalCountPage=== 0)?`Item-p-hide` : `Item-p`} onClick={()=>{currentPagef(afterBefore)}}> {afterBefore}</span>
     <span className={(TotalCountPage===0)?`Item-p-hide` : `Item-p active`}    onClick={()=>{currentPagef(currentPage)}}>{currentPage} </span>
     <span   className={(pageBefore=== 0 || TotalCountPage=== 0 || pageBefore>TotalCountPage)?`Item-p-hide` : `Item-p`} onClick={()=>{currentPagef(pageBefore)}}> {pageBefore}</span>
     <span   className={(TotalCountPage=== 0|| currentPage === TotalCountPage  )?`Item-p-hide ` : `Item-p`}> ....... </span>
     <span   className={(TotalCountPage=== 0 || currentPage === TotalCountPage )?`Item-p-hide` : `Item-p`} onClick={()=>{currentPagef(TotalCountPage)}}> {TotalCountPage}</span>
     </div>

     <button className={(TotalCountPage===0 || currentPage === TotalCountPage )?`Item-p-hide` : `next`} onClick={()=>{onNextClick()}}>
             <a   href="/#"   >Next</a>
     </button>
    </div>
     
</div>
 

</div>
    )
}

export default Paginator