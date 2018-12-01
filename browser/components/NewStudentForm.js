/*

6) set up the form w/in <form></form>
    - https://reactjs.org/docs/forms.html
7) Created labels
    - Added an input field for each label (allow single-line text to be inputted)
8) Created a submit button
9) Created handleChange(event)
10) Bound handleChange w/in constructor method
11) Added onChange for each input
12) Created handleSubmit(event)
13) Bound handleSubmit w/in constructor method
14) Added value for each input

17) Added this.props.addStudent(this.state);

*/



import React, { Component } from 'react';



class NewStudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      background: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value                             // Name of event target (eg name='firstName' and name='lastName' w/in input in <form> <label></label> <input></input> </form>)
                                                                          // Value of event target (eg value={taskName} and value={assignee} w/in input in <form> <label></label> <input></input> </form>)
    })
  }



  handleSubmit(event) {
    event.preventDefault();
    this.props.addStudent(this.state);                                    // ??? what's happening here?
    this.setState({
      firstName: '',                                                      // resets input to '' upon clicking submit
      lastName: '',
      email: '',
      background: ''
    })
  }



  render() {
    const { firstName, lastName, email, background } = this.state;

    return (

      <form onSubmit={this.handleSubmit}>                                                                 {/* ??? onChange NOT on form ...?  */}

        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={this.handleChange} />           {/*  type="?" is a validation  */}
                                                                                                          {/*  Also:    value={this.state.firstName} - same below for lastName, email, background  */}
                                                                                                          {/* ??? onChange on <input /> so that the target in event.target.name accesses ...?  */}
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={email} onChange={this.handleChange} />                  {/*  type="email" validates that an email is inputted  */}
        </label>

        <label>
          Background (correct):
          <textarea name="background" value={background} onChange={this.handleChange} />
        </label>

        <label>
          Background (incorrect):
          <textarea name="firstName" value={firstName} onChange={this.handleChange} />
        </label>

        <label>
          Year:
          <select>
            <option default value="Select a Year">Select a Year</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
        </label>

        <button type="submit">Submit New Student</button>

      </form>
    );
  }
}

export default NewStudentForm;
