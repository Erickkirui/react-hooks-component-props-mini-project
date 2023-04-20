import React from "react"

function Article({posts}){
    return(
        <article>
            <h3>{posts.title}</h3>
            <small>{posts.date}</small>
            <p>{posts.preview}</p>
        </article>


    )
}
export default Article