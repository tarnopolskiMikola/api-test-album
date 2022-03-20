import React from 'react'

const Table = ({sortData , Date,}) => {
//  console.log(Date)
    return (

        <div className="table">
      
           
             
      <th  onClick={()=>{sortData('idd')}}>SORT ID CLICK ME!</th>
           
          
               {Date.map(
                 item=>(
                   
                   <tr key={item.id}>
                   <td>{item.id}</td>
                   <td>{item.UserId}{item.albumId}{item.postId}</td>
                   <td>{item.title}{item.name}</td>
                   <td>{item.email}{item.completed}</td>
                   <td>{item.body}</td>
                   {/* <td>{item.url}</td> */}
                   <td> <img src={item.thumbnailUrl} alt=""/></td>
                  
                   </tr>
                
               ))}
      
      </div>
    )
}

export default Table