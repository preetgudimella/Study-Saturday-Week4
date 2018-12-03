
// final

import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList'
import SingleStudent from './SingleStudent';
import NewStudentForm from './NewStudentForm';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      toggleForm: false
    };
    this.selectStudent = this.selectStudent.bind(this)
    this.getStudents = this.getStudents.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.addStudent = this.addStudent.bind(this)
  }



  componentDidMount() {                                                                     // Ensuring that you get the intended info before rendering
    this.getStudents();
  }



  async getStudents() {
                                                                                            // 1)  app.js (required student.js)
                                                                                                //  app.use('/student', Student)
                                                                                            // 2) student.js in routes folder
                                                                                                // router.get('/', function(req, res, next) {
                                                                                                //   Student.findAll().then(students => res.json(students));                               // Getting all the students
                                                                                                // });
                                                                                            // 3) Main.js
                                                                                                // Axios.get('/student')
    console.log('Fetching all students')
    try {
      const res = await axios.get('/student');                                              // Fetching data
      this.setState({
        students: res.data
      });
    } catch (err) {
      console.error(err);
    }
  }



  selectStudent(student) {
    return this.setState({
      selectedStudent: student                                                              // student refers to the student that is mapped over in the child component StudentList in StudentList.js
    })
  }



  async addStudent(student) {
    console.log('Fetching a student to add')
      const res = await axios.post('/student', student)                                // router.post('/', function(req, res, next) {
      this.setState({
        students: [...this.state.students, res.data],
        toggleForm: false,
      })
      console.log('This is State 2', this.state);
    }



  handleClick(event) {
    return this.setState({
        toggleForm: !this.state.toggleForm                                                  // Form is visible upon clicking the button
    });
  }



// Removed the <tbody> and </tbody> tags since they are already in StudentList.js
  render() {
    console.log('This is the state in Main', this.state);
    return (

      <div>                                                                                 {/*  JSX requires that we have a wrapper component - ie tag, container  */}
        <h1>Students</h1>
        <button onClick={this.handleClick}>Add New Student</button>                         {/*  Initial: <button onClick={}>Add New Student</button>  */}
        {this.state.toggleForm ? <NewStudentForm addStudent={this.addStudent} /> : null}    {/*  Also: {this.state.toggleForm && <NewStudentForm />}  */}

        <table>

          <thead>
            <tr>
              <th>Full Name</th>
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

export default Main;










// 2

// import React, { Component } from 'react';
// import axios from 'axios';

// import StudentList from './StudentList'
// import SingleStudent from './SingleStudent';

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       students: [],
//       selectedStudent: {},
//       toggleForm: false
//     };
//     this.selectStudent = this.selectStudent.bind(this)
//     this.getStudents = this.getStudents.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//     this.addStudent = this.addStudent.bind(this)
//   }



//   componentDidMount() {                                                                     // Ensuring that you get the intended info before rendering
//     this.getStudents();
//   }



//   async getStudents() {
//                                                                                             // 1)  app.js (required student.js)
//                                                                                                 //  app.use('/student', Student)
//                                                                                             // 2) student.js in routes folder
//                                                                                                 // router.get('/', function(req, res, next) {
//                                                                                                 //   Student.findAll().then(students => res.json(students));                               // Getting all the students
//                                                                                                 // });
//                                                                                             // 3) Main.js
//                                                                                                 // Axios.get('/student')
//     console.log('Fetching all students')
//     try {
//       const res = await axios.get('/student');                                              // Fetching data
//       this.setState({
//         students: res.data
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }



//   selectStudent(student) {
//     return this.setState({
//       selectedStudent: student                                                              // student refers to the student that is mapped over in the child component StudentList in StudentList.js
//     })
//   }



//   async addStudent(student) {
//     console.log('Fetching a student to add')
//       const res = await axios.post('/student', student)                                // router.post('/', function(req, res, next) {
//       this.setState({
//         students: [...this.state.students, res.data],
//         toggleForm: false,
//       })
//       console.log('This is State 2', this.state);
//     }



//   handleClick(event) {
//     return this.setState({
//         toggleForm: !this.state.toggleForm                                                  // Form is visible upon clicking the button
//     });
//   }



// // Removed the <tbody> and </tbody> tags since they are already in StudentList.js
//   render() {
//     console.log('This is the state in Main', this.state);
//     return (

//       <div>                                                                                 {/*  JSX requires that we have a wrapper component - ie tag, container  */}
//         <h1>Students</h1>
//         <button onClick={this.handleClick}>Add New Student</button>                         {/*  Initial: <button onClick={}>Add New Student</button>  */}

//         <table>

//           <thead>
//             <tr>
//               <th>Full Name</th>
//               <th>Tests</th>
//             </tr>
//           </thead>

//           <StudentList students={this.state.students} selectStudent={this.selectStudent} />

//         </table>

//         {this.state.selectedStudent.id ? (<SingleStudent student={this.state.selectedStudent} />) : null}

//       </div>
//     );
//   }
// }

// export default Main;










// 1

// import React, { Component } from 'react';
// import axios from 'axios';

// import StudentList from './StudentList'
// import SingleStudent from './SingleStudent';

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       students: [],
//       selectedStudent: {},
//       toggleForm: false
//     };
//     this.selectStudent = this.selectStudent.bind(this)
//     this.getStudents = this.getStudents.bind(this)
//     this.handleClick = this.handleClick.boudn(this)

//   }



//   componentDidMount() {                                                                     // Ensuring that you get the intended info before rendering
//     this.getStudents();
//   }



//   async getStudents() {
//                                                                                             // 1)  app.js (required student.js)
//                                                                                                 //  app.use('/student', Student)
//                                                                                             // 2) student.js in routes folder
//                                                                                                 // router.get('/', function(req, res, next) {
//                                                                                                 //   Student.findAll().then(students => res.json(students));                               // Getting all the students
//                                                                                                 // });
//                                                                                             // 3) Main.js
//                                                                                                 // Axios.get('/student')
//     console.log('Fetching all students')
//     try {
//       const res = await axios.get('/student');                                              // Fetching data
//       this.setState({
//         students: res.data
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }



//   selectStudent(student) {
//     return this.setState({
//       selectedStudent: student                                                              // student refers to the student that is mapped over in the child component StudentList in StudentList.js
//     })
//   }



//   handleClick(event) {
//     return this.setState({
//         toggleForm: !this.state.toggleForm                                                  // Form is visible upon clicking the button
//     });
//   }



// // Removed the <tbody> and </tbody> tags since they are already in StudentList.js
//   render() {
//     console.log('This is the state in Main', this.state);
//     return (

//       <div>                                                                                 {/*  JSX requires that we have a wrapper component - ie tag, container  */}
//         <h1>Students</h1>
//         <button onClick={this.handleClick}>Add New Student</button>                         {/*  Initial: <button onClick={}>Add New Student</button>  */}

//         <table>

//           <thead>
//             <tr>
//               <th>Full Name</th>
//               <th>Tests</th>
//             </tr>
//           </thead>

//           <StudentList students={this.state.students} selectStudent={this.selectStudent} />

//         </table>

//         {this.state.selectedStudent.id ? (<SingleStudent student={this.state.selectedStudent} />) : null}

//       </div>
//     );
//   }
// }

// export default Main;
