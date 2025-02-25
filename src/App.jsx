import './App.css';
import Profile from "./Profile.jsx";

function App() {



  const handleclick = (something) => {
    console.log(something)
  };

  return (
    <div>
      <h2>Profile List</h2>


      <button onClick={ () => handleclick("Button 1 is clicked")}>Button 1 </button>
      <button onClick={() => handleclick("Button 2 is clicked") }>Button 2 </button>


      {/* {Profile.map((student) => {
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
      })} */}

    </div>
  );
}

export default App;
