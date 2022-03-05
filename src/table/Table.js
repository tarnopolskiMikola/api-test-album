import React from 'react'

const Table = ({sortData , Date}) => {
 
    return (

        <div className="table">
      
           
            <th  onClick={()=>{sortData('idd')}}>Sort id</th>
            
            <th >title</th>
           
            <th >thumbnailUrl</th>
               {Date.map(
                 item=>(
                   <tr key={item.id}>
                   <td>{item.id}</td>
                   <td> --ALBUM--{item.albumId}</td>
                   <td>{item.title}</td>
                   {/* <td>{item.url}</td> */}
                   <td> <img src={item.thumbnailUrl} alt="ok"/></td>
                   <td>{item.thumbnailUrl}</td>
                   </tr>
                
               ))}
      
      </div>
    )
}

export default Table