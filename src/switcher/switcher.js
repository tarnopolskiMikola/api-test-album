import React from 'react'

const Switcher = ({buttonHandler}) => {
    const Photos = 'https://jsonplaceholder.typicode.com/photos';
    const Albums = 'https://jsonplaceholder.typicode.com/albums';
    const Posts = 'https://jsonplaceholder.typicode.com/posts';
    const Comments = 'https://jsonplaceholder.typicode.com/comments';
    const Todos = 'https://jsonplaceholder.typicode.com/todos';
    return(
        <div>
            <button type="button" className="btn btn-warning" onClick={() =>(buttonHandler(Photos))}>Photos</button>
            <button type="button" className="btn btn-warning" onClick={() =>(buttonHandler(Albums))}>Albums</button>
            <button type="button" className="btn btn-warning" onClick={() =>(buttonHandler(Posts))}>Posts</button>
            <button type="button" className="btn btn-warning" onClick={() =>(buttonHandler(Comments))}>Comments</button>
            <button type="button" className="btn btn-warning" onClick={() =>(buttonHandler(Todos))}>Todos</button>
        </div>
    )
}
export default Switcher