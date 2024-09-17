import React from "react";
import { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#b0e0e6" }}>
      <h3>Should you use a dropdown?</h3>
      <select value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          Select
        </option>
        <option value="yes">Yes</option>
        <option value="no">Probably not</option>
      </select>
      <p>You selected: {selectedOption}</p>
    </div>
  );
}

export default Dropdown;
