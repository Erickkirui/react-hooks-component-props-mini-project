import React from "react";

function About({ img,alt,about }) {
    return (
     <aside>
        <img src={img} alt={alt}></img>
        <p>{about}</p>
     </aside>
    );
  }



export default About