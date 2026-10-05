import { useRef, useState } from 'react';

function UserDetails() {
  const nameInput = useRef(null);
  const courseInput = useRef(null);

  const [student, setStudent] = useState(null);

  const saveDetails = () => {
    const name = nameInput.current.value;
    const course = courseInput.current.value;

    setStudent({
      name,
      course
    });
  };

  const focusName = () => {
    nameInput.current.focus();
  };

  return (
    <section className="card">
      <h1>User Details</h1>

      <p className="description">
        Enter your details and display them using React.
      </p>

      <div className="form-group">
        <label>Student Name</label>

        <input
          ref={nameInput}
          type="text"
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label>Course</label>

        <input
          ref={courseInput}
          type="text"
          placeholder="Enter your course"
        />
      </div>

      <div className="button-row">
        <button onClick={saveDetails}>
          Save Details
        </button>

        <button onClick={focusName}>
          Focus Name
        </button>
      </div>

      {student && (
        <div className="result-box">
          <h2>Student Information</h2>

          <p>
            <strong>Name:</strong> {student.name}
          </p>

          <p>
            <strong>Course:</strong> {student.course}
          </p>
        </div>
      )}
    </section>
  );
}

export default UserDetails;