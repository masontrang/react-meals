import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';

function Filter() {
  // Create a state variable for each button
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showButton3, setShowButton3] = useState(false);
  const [showButton4, setShowButton4] = useState(false);

  // Use the useCollapse hook for each button
  const {
    getCollapseProps: getCollapseProps1,
    getToggleProps: getToggleProps1,
  } = useCollapse();
  const {
    getCollapseProps: getCollapseProps2,
    getToggleProps: getToggleProps2,
  } = useCollapse();
  const {
    getCollapseProps: getCollapseProps3,
    getToggleProps: getToggleProps3,
  } = useCollapse();
  const {
    getCollapseProps: getCollapseProps4,
    getToggleProps: getToggleProps4,
  } = useCollapse();

  // Define a function to toggle the show state of each button
  const toggleButton1 = () => setShowButton1((prev) => !prev);
  const toggleButton2 = () => setShowButton2((prev) => !prev);
  const toggleButton3 = () => setShowButton3((prev) => !prev);
  const toggleButton4 = () => setShowButton4((prev) => !prev);

  return (
    <div className="filter">
      {/* Create a checkbox for each button */}
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            checked={showButton1}
            onChange={toggleButton1}
          />
          Button 1
        </label>
        <label>
          <input
            type="checkbox"
            checked={showButton2}
            onChange={toggleButton2}
          />
          Button 2
        </label>
        <label>
          <input
            type="checkbox"
            checked={showButton3}
            onChange={toggleButton3}
          />
          Button 3
        </label>
        <label>
          <input
            type="checkbox"
            checked={showButton4}
            onChange={toggleButton4}
          />
          Button 4
        </label>
      </div>

      {/* Create a collapsible div for each button */}
      <div className="buttons">
        <div {...getCollapseProps1()}>
          {/* Pass the color prop to the button */}
          <button color="red">Button 1</button>
        </div>
        <div {...getCollapseProps2()}>
          <button color="green">Button 2</button>
        </div>
        <div {...getCollapseProps3()}>
          <button color="blue">Button 3</button>
        </div>
        <div {...getCollapseProps4()}>
          <button color="yellow">Button 4</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
