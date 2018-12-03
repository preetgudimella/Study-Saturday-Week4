
import React from 'react';



const StudentList = props => {
  console.log('Here are props in StudentList', props);
  return (

    <tbody>
      {props.students.map(student => {                                             {/*  Since getStudents has obtained all the student data from the back-end, mapping the students array  */}
        return (
          <tr key={student.id}>
            <td>{student.fullName}</td>
            <td onClick= {() => props.selectStudent(student)}>Details</td>
            <td>Click on Details</td>
          </tr>
        );
      })}
    </tbody>

  )
}



export default StudentList;
