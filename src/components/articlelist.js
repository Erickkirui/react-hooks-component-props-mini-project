import React from "react";
import Article from "./article";
 
function Articlelist({posts}){

    return(
        <main>
              {posts.map((posts) => (
        <Article key={posts.id} posts={posts} />
      ))}

        </main>
    )
}
export default Articlelist