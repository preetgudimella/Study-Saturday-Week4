import React from 'react';



const StudentList = props => {
  console.log('here are props in StudentList', props);
  return (
    <tbody>
      {props.students.map(student => {                                                  {/*  Since getStudents has obtained all the student data from the back-end, Mapping t*/}
        return (
          <tr key={student.id}>
            <td>{student.fullName}</td>                                                 {/* column */}
            <td onClick= {() => props.selectStudent(student)}>Click For Details</td>    {/*  ??? what's happening here?  */}
          </tr>
        );
      })}
    </tbody>
  )
}



export default StudentList;
