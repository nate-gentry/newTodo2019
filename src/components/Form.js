 import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (

        <form>
         <fieldset>
            <legend>Todo</legend>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                </div>
              </div>
          </fieldset>
        </form>
     
    )
  }
}

export default Form
