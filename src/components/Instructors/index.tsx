import React from 'react';

const Instructors: React.FC<any> = ({ instructors }) => {
  if (!instructors || instructors.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ color: "forestgreen" }}>🧑‍🏫 Instructors</h2>
      <ul>
        {instructors.map((instructor, index) => (
          <li key={`instructor-${index}`}>{instructor}</li>
        ))}
      </ul>
    </div>
  );
};

export default Instructors;