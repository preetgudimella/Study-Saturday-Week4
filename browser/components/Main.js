/*

1) Created button in render()
    - <button onClick={}>Add New Student</button>
2) Added toggleForm: false to this.state
3) Created handleClick()
4) Added handleClick method to onClick on <button></button>
    - <button onClick={this.handleClick}>Add New Student</button>
5) Created NewStudentForm component

15) Created addStudent()
16) Bound addStudent to constructor method

18) Added addStudent prop to <NewStudentForm /> in render()
    - {this.state.toggleForm ? <NewStudentForm addStudent={this.addStudent} /> : null};

*/



import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList';
import SingleStudent from './SingleStudent';
import NewStudentForm from './NewStudentForm';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      toggleForm: false,                                                                    // Form is hidden by default
    };
    this.selectStudent = this.selectStudent.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }



  componentDidMount() {
    this.getStudents();                                                                     // ??? why not add addStudent here also?
  }



  async getStudents() {
    console.log('fetching all students');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
      console.log('This is State 1', this.state);
    } catch (error) {
      console.error(error);
    }
  }



  selectStudent(student) {
    return this.setState({
      selectedStudent: student
    });
  }



  async addStudent(student) {
    console.log('fetching a student to add')
      const { data } = await axios.post('/student', student)                                // router.post('/', function(req, res, next) {
      this.setState({
        students: [...this.state.students, data],
        toggleForm: false,
      })
      console.log('This is State 2', this.state);
    }



  handleClick(event) {
    return this.setState({
        toggleForm: !this.state.toggleForm                                                  // Form is visible upon clicking the button
    });
  }

  render() {
    console.log('this is the state in main', this.state);
    return (
      <div>
        <h1>Students</h1>
        <button onClick={this.handleClick}>Add New Student</button>

        {this.state.toggleForm ? <NewStudentForm addStudent={this.addStudent} /> : null}    {/*  Also: {this.state.toggleForm && <NewStudentForm />}  */}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>

          <StudentList students={this.state.students} selectStudent={this.selectStudent} />
        </table>

        {this.state.selectedStudent.id ? (<SingleStudent student={this.state.selectedStudent} />) : null}
      </div>
    );
  }
}
