import React, { useContext } from 'react';
import MyContext from './Context';

function BaiMot() {
  const {arrStudent} = useContext(MyContext);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>University ID</th>
            <th>Major</th>
            <th>GPA</th>
            <th>Full Time</th>
            <th>Detail</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {arrStudent.map((cont, index) => (
            <tr>
              <td>{cont.id}</td>
              <td>{cont.name}</td>
              <td>{cont.age}</td>
              <td>{cont.email}</td>
              <td>{cont.universityId}</td>
              <td>{cont.major}</td>
              <td>{cont.gpa}</td>
              <td className={cont.fullTime ? 'fulltime1' : 'fulltime2'}>
                {cont.fullTime ? 'Full Time' : 'Past Time'}
              </td>
              <td>
                <button style={{ color: 'white', backgroundColor: 'blue' }}>Detail</button>
              </td>
              <td>
                <button style={{ color: 'black', backgroundColor: 'yellow' }}>Update</button>
              </td>
              <td>
                <button style={{ color: 'white', backgroundColor: 'red' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BaiMot;
