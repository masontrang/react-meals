import { useState } from 'react';

function Collapse(props) {
  const [isCollapsed, setCollapsed] = useState(false);

  function handleClick() {
    setCollapsed(!isCollapsed);
  }
  return (
    <>
      {isCollapsed ? (
        <div onClick={handleClick}>
          <h3>{props.title}</h3>
        </div>
      ) : (
        <div onClick={handleClick}>
          <h3>{props.title}</h3>
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
