import React from "react";
// class Form extends React.Component{
  const Form = (props) =>{
    return(
      <form className="form-group" onSubmit = {props.handleEvent}>
        <div className="row">
          <div className="col-8">
            <input type="text" className="form-control" value = {props.value} placeholder="Enter Todo Item" onChange={props.onChange} />
          </div>
          <div className=" col-4">
          <button type="submit" class = "btn btn-primary">Add Item</button>
          </div>
        </div>
      </form>
    )
}
export default Form;