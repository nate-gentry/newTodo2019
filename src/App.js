import React, { Component } from 'react';
import './App.css';
import { Form } from './components/Form';

class App extends Component {
  constructor(){
    super()
    this.state = {
      message : "Welcome to new Todo in 2019",
      newTodo : '',
      todos : [
        {
        title: "Love React",
        done: false 
      },
        {
        title: "Love React Native ",
        done: false 
      },
        {
        title: "learn JS",
        done: false 
      },
    ]
    }
    // this.formSubmited = this.formSubmited.bind(this)  // if we do wiout fat error => 
  }

  ChangeEvent(event){
    console.log(event.target.value);
    this.setState({
      newTodo : event.target.value
    })
    // when you grab some stuff  from input you shoud bind or fat arror (=>)
  }

formSubmited(event){
  event.preventDefault()// we need this to not refres the page
  //   when we have this we shoud bind function  
  console.log(this.state.newTodo)

  this.setState({
    // when you dont want just push to arr you shoud use a sper operator ... "[...this.state.todos]" and then you need { title   and done will be false }
    //  if we want to clear the input we shoud add newTod : "" to our setState and we need update value in our input to this.state.Newtodo 
    newTodo : '',
    todos : [...this.state.todos, {
      title : this.state.newTodo,
      done : false 
    }]
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <h2 className="navbar-brand" className="text-success" href="#">{this.state.message}</h2>
         </nav>
        </header>
        <main className="container"> 
        <form onSubmit={(event) => this.formSubmited(event)}>
        {/* ⬇️⬇️⬇️defernt version of bind function ⬆️⬆️⬆️ but we need update and state  */}
        {/*  ✅   <form onSubmit={this.formSubmited.bind(this)}>  */}
          <label>New Todo</label>
            <input id="newTodo" onChange={(event) =>this.ChangeEvent(event)} className="form-control" name="newTodo" value={this.state.newTodo}/>
            <button type="submit" className="btn btn-primary">Submit Todo</button>
          </form>
         {/* <Form /> */}
          {/*  when we want to show all list you shoud create some li with will be arr and then we nee map it and retern value depens of our obj */}
         <ul>
           {this.state.todos.map(todo => {
              return <li key={todo.title}>{todo.title}</li>
           })}
         </ul>
        </main>
      </div>
    );
  }
}

export default App;


