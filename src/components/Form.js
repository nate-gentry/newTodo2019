 import React  from 'react'

const Form  = (props) => {
    return (
      <form onSubmit={props.formSubmited}>
      {/* ⬇️⬇️⬇️defernt version of bind function ⬆️⬆️⬆️ but we need update and state  */}
      {/*  ✅   <form onSubmit={this.formSubmited.bind(this)}>  */}
        <label>New Todo</label>
          <input id="newTodo" onChange={props.ChangeEvent} className="form-control" name="newTodo" value={props.newTodo}/>
          {/* When we crette new component all this.state shoud be a props  */}
          <button type="submit" className="btn btn-primary">Create Todo</button>
        </form>
    )
  }


export default Form
