import React from 'react'

const Switcher = ({buttonHandler}) => {
    const Photos = 'https://jsonplaceholder.typicode.com/photos';
   
    return(
        <div>
            <button type="button" className="btn btn-warning" onClick={() =>(buttonHandler(Photos))}>Photos</button>
           
        </div>
    )
}
export default Switcher