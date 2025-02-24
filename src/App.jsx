import './App.css';
import Profile from "./Profile.jsx";

function App() {


  return (
    <div>
      <h2>Profile List</h2>

      {Profile.map((student) => {
        const validGender = ["Male", "Female"].includes(student.gender) ? student.gender : "Invalid";
                return (
        <div key={student.id}>
          <p> <b>Rollno: </b>{student.rollno},</p>
          <p><b>Name: </b>{student.name},</p>
          <p> <b>Gender: </b>{validGender},</p>
          <p><b>Std: </b>{student.std}</p>
          <hr />
        </div>
        );
      })}

    </div>
  );
}

export default App;
