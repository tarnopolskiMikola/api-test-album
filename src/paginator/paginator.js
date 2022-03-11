import React from 'react'
import  './paginator.css'
const Paginator = ({
    pages,
    currentPagef,
    onNextClick,
    onPreviousClick}) => {
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
<button className="Previous">
      <a className="Previous-a" href="/#" onClick={()=>{onPreviousClick()}} >Previous</a>
    </button>
    <div className="container" > 
     <li   className="pageItem ">
        {
          pages.map(p=>{
           return(
           
              <span key={p} className="Item"  onClick={()=>{currentPagef(p)}}> {p}</span>
           
            )
        })
    }
    </li>
</div>
<button className="next">
      <a className="next-a" href="/#" onClick={()=>{onNextClick()}} >Next</a>
    </button>

</div>
    )
}

export default Paginator