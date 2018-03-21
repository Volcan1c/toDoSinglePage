import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Todos = props => {
  return props.todos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }
  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const todos = [...this.state.todos, 
                        this.state.inputText];
          this.setState({todos, inputText: ""});
        }}>
          <input 
            type="text"
            name="inputText"
            value={this.state.inputText}
            onChange={(e) => {
              this.setState({[e.target.name]: e.target.value});
            }}
          />
        </form>
      
        <ol className = "todo-list">
          <Todos todos={this.state.todos} />
        </ol>
      </div>
    );
  }
}

export default App;
