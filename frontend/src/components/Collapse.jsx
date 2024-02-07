import { useState } from 'react';
import './Collapse.css';

function Collapse(props) {
  const [isCollapsed, setCollapsed] = useState(false);

  function handleClick() {
    setCollapsed(!isCollapsed);
  }
  return (
    <>
      {isCollapsed ? (
        <div onClick={handleClick} className="Title">
          <h3>{props.title}</h3>
        </div>
      ) : (
        <div onClick={handleClick} className="Title">
          <div>
            <h3>{props.title}</h3>
            <h3>*</h3>
          </div>

          <p>Step 1</p>
          <p>Step 2</p>
          <p>Step 3</p>
          <p>Step 4</p>
          <p>Step 5</p>
        </div>
      )}
    </>
  );
}
export default Collapse;
