 import React  from 'react'

const Form  = (props) => {
    return (
      <form onSubmit={props.formSubmitted}>
      {/* ⬇️⬇️⬇️deferent version of bind function ⬆️⬆️⬆️ but we need update and state  */}
      {/*  ✅   <form onSubmit={this.formSubmited.bind(this)}>  */}
        <label>New Todo</label>
          <input id="newTodo" onChange={props.ChangeEvent} className="form-control" name="newTodo" value={props.newTodo}/>
          {/* When we create new component all this.state should be a props  */}
          <button type="submit" className="btn btn-primary">Create Todo</button>
        </form>
    )
}


export default Form
