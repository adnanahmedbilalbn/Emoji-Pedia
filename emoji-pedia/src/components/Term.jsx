import React from "react";

function Term(props){
    return(

        <div className="term ">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
           {props.img}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>
          {props.detail}
        </dd>
      </div>
      
    )
}
export default Term;