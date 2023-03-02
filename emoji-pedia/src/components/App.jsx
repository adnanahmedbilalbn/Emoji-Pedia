import React from "react";
import Term from "./Term"
import Emoji from "../emojipedia.js";
import Navbar from "./Navbar";

function createTerm (props){

  return(
    <Term
     key={props.id}
      img = {props.emoji}
      name={props.name}
      detail ={props.meaning}
      
    />
  )
}

function App() {

  return (

    <div>
    <Navbar />
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      {Emoji.map(createTerm)}

      </dl>

 
    </div>

  );
}

export default App;