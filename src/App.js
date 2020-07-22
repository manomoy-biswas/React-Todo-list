import React from 'react';
import './App.css';
import ToDoList from "./TodoList.js";
import List from "./List.js";
import Form from "./component/Form.js";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      value: "",
      data:[]
    };
  }
  handleEvent =(event) =>{
    event.preventDefault();
    this.setState({
      value:"",
      data: [...this.state.data, this.state.value]
    })
  }
  onChange = (event) =>{
    this.setState({value: event.target.value});
  }
  onRemove = i =>{
    this.setState(state=>{
      const data = state.data.filter((item, j) => i !==j);
      return {
        data,
      };
    });
  };
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <div>
          <ToDoList/>
        </div>
        <div class="page-wrapper">
          <div class="wrapper">
            <div class="card">
              <div class="card-body">
                {this.state.data.map((item, index) =><List data = {item} updatedData = {this.onChange} removedata={this.onRemove} index ={index}></List>)}
                <hr />
                <Form onChange={this.onChange} value={this.state.value} handleEvent={this.handleEvent} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    );
  }
}

export default App;
