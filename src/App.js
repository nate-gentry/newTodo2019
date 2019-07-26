import React, { Component } from 'react';
import './App.css';
import  Form  from './components/Form';

class App extends Component {
  constructor(){
    super()
    this.state = {
      message : "Welcome to new Todo in 2019 🐷 🐷 🐷",
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
    // this.formSubmited = this.formSubmited.bind(this)  // if we do wiout fat error => 
  }
  }
  
  ChangeEvent(event){
    console.log(event.target.value);
    this.setState({
      newTodo : event.target.value
    })
    // when you grab some stuff  from input you shoud bind or fat arror (=>)
  }

formSubmitted(event){
  event.preventDefault()// we need this to not refresh the page
  //   when we have this we should bind function  
  console.log(this.state.newTodo)

  this.setState({
    // when you don't want just push to arr you should use a speard operator ... "[...this.state.todos]" and then you need { title   and done will be false }
    //  if we want to clear the input we should add newTod : "" to our setState and we need update value in our input to this.state.Newtodo 
    newTodo : '',
    todos : [...this.state.todos, {
      title : this.state.newTodo,
      done : false 
    }]
  })
}

toggleDone(event, index){
  // we do copy because we don't want to mutet the arr 
  const todos = [...this.state.todos]// copy the  arr
  todos[index] = {...todos[index]} // copy the todo
  todos[index].done = event.target.checked  // update our property
  this.setState({
    todos
  })
}

removeTodo(index){
  const todos = [...this.state.todos]// copy the  arr
  todos.splice(index , 1)
  this.setState({
  todos
  })
}

allDone(){
  const todos = this.state.todos.map(todo => {
    return {
      ...todo,
      done: true
    }
  })
  this.setState({
    todos
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
        <br/>
        <main className="container"> 
         <Form  
        //  each function from component should be pass from parent to child with props ⬇️    
        // and then we need bind THIS  
         newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)} 
          ChangeEvent={this.ChangeEvent.bind(this)} />
          {/*  when we want to show all list you should create some li with will be arr and then we nee map it and return value depends of our obj */}
         <ul>
           {this.state.todos.map((todo, index) => {
              return (<li key={todo.title}> 
                        <input  onChange={(event)=> this.togleDone(event, index)} type="checkbox" checked={todo.done}/> 
                        <span style={{textDecoration: todo.done ?' line-through' : 'inherit'}}>{todo.title}</span>
                        <button onClick={() => this.removeTodo(index)} type="button" className="remove" className="btn btn-outline-warning" >Remove </button>
                     </li>)
                   })}
            </ul>
         <button onClick={()=> this.allDone()} type="button" className="btn btn-success">All Done </button>
        </main>
      </div>
    );
  }
}

export default App

