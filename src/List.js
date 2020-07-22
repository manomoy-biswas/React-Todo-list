import React from "react";
import {faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List =(props) => {
  return(
    <div className="row">
      <div className = "col-1 text-right">
        <div className="checkbox"/>
      </div>
      <div className="col-7 text-left">
        <p className="list-item">{props.data}</p>
      </div>
      <div className="col-4"> 
        <button className="btn btn-danger" type="button" onClick={()=> props.removedata(props.index)}><FontAwesomeIcon icon={faTrash}/></button>
      </div>
    </div>
  );
}

export default List;