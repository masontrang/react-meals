// import React, { useState } from 'react';

// // A custom button component that takes a label and a color as props
// const Button = ({label, color}) => {
//   // Define some styles for the button
//   const buttonStyle = {
//     backgroundColor: color,
//     border: 'none',
//     borderRadius: '10px', // Change the border radius to 10px
//     padding: '15px 30px',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     color: 'white',
//     cursor: 'pointer',
//     boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
//     transition: 'all 0.3s ease', // Add a transition for the hover effect
//     backdropFilter: 'blur(10px)', // Add a backdrop filter to create a glass effect
//     opacity: '0.8' // Reduce the opacity to make the button transparent
//   };

//   // Define a function to handle the mouse enter event
//   const handleMouseEnter = (event) => {
//     // Get the button element from the event target
//     const button = event.target;
//     // Set the opacity to 1 to make the button opaque
//     button.style.opacity = '1';
//     // Set the transform to scale up the button slightly
//     button.style.transform = 'scale(1.05)';
//   };

//   // Define a function to handle the mouse leave event
//   const handleMouseLeave = (event) => {
//     // Get the button element from the event target
//     const button = event.target;
//     // Set the opacity back to 0.8
//     button.style.opacity = '0.8';
//     // Set the transform back to normal
//     button.style.transform = 'scale(1)';
//   };

//   // Return the JSX element for the button
//   return (
//     <button
//       style={buttonStyle}
//       onMouseEnter={handleMouseEnter} // Add the mouse enter event handler
//       onMouseLeave={handleMouseLeave} // Add the mouse leave event handler
//     >
//       {label}
//     </button>
//   );
// };

// // A custom dropdown component that takes a color and a content as props
// const Dropdown = ({color, content}) => {
//   // Define some styles for the dropdown
//   const dropdownStyle = {
//     width: '100%', // Set the width to 100% of the area
//     height: 'calc(100vh - 100px)', // Set the height to the remaining vertical space
//     backgroundColor: 'white', // Set the background color to white
//     border: `5px solid ${color}`, // Set the border color to match the button color
//     borderRadius: '10px', // Set the border radius to 10px
//     display: 'flex', // Use flexbox to align the items
//     flexDirection: 'column', // Set the flex direction to column
//     justifyContent: 'center', // Center the items vertically
//     alignItems: 'center' // Center the items horizontally
//   };

//   // Return the JSX element for the dropdown
//   return (
//     <div style={dropdownStyle}>
//       {/* Render the content prop for the dropdown */}
//       {content}
//     </div>
//   );
// };

// // A component that renders four buttons with different labels and colors
// const FourButtons = () => {
//   // Define an array of objects with the button properties
//   const buttons = [
//     {label: 'Hello', color: '#FFC107'},
//     {label: 'World', color: '#2196F3'},
//     {label: 'React', color: '#F44336'}, // Change the label from Bing to React
//     {label: 'Awesome', color: '#8BC34A'} // Add a fourth button with a light green color
//   ];

//   // Define some styles for the component
//   const componentStyle = {
//     display: 'flex', // Use flexbox to align the buttons
//     justifyContent: 'space-between', // Add some space between the buttons
//     margin: '20px' // Add some margin to the component
//   };

//   // Define a state variable to store the index of the active button
//   const [active, setActive] = useState(null);

//   // Define a state variable to store the content of the dropdown
//   const [content, setContent] = useState(null);

//   // Define a state variable to store the number of clicks for each button
//   const [clicks, setClicks] = useState([0, 0, 0, 0]);

//   // Define a function to handle the click event on the buttons
//   const handleClick = (index) => {
//     // If the clicked button is already active, set the active index to null
//     // Otherwise, set the active index to the clicked button index
//     setActive(active === index ? null : index);

//     // Get the current number of clicks for the clicked button
//     const currentClicks = clicks[index];

//     // If the current number of clicks is less than 10, increment it by 1
//     // Otherwise, reset it to 0
//     const newClicks = currentClicks < 10 ? currentClicks + 1 : 0;

//     // Update the clicks state with the new number of clicks for the clicked button
//     setClicks([
//       ...clicks.slice(0, index),
//       newClicks,
//       ...clicks.slice(index + 1)
//     ]);

//     // Switch on the button index and the new number of clicks and set the content state accordingly
//     switch (index) {
//       case 0:
//         // Set the content to a random greeting based on the new number of clicks
//         setContent(
//           <div>
//             <h3>Random Greeting</h3>
//             <p>{getRandomGreeting(newClicks)}</p>
//           </div>
//         );
//         break;
//       case 1:
//         // Set the content to a random country based on the new number of clicks
//         setContent(
//           <div>
//             <h3>Random Country</h3>
//             <p>{getRandomCountry(newClicks)}</p>
//           </div>
//         );
//         break;
//       case 2:
//         // Set the content to a random emoji based on the new number of clicks
//         setContent(
//           <div>
//             <h3>Random Emoji</h3>
//             <p>{getRandomEmoji(newClicks)}</p>
//           </div>
//         );
//         break;
//       case 3:
//         // Set the content to a random number based on the new number of clicks
//         setContent(
//           <div>
//             <h3>Random Number</h3>
//             <p>{getRandomNumber(newClicks)}</p>
//           </div>
//         );
//         break;
//       default:
//         // Set the content to null
//         setContent(null);
//     }
//   };

//   // Define a function to get a random greeting based on a number
//   const getRandomGreeting = (number) => {
//     // Define an array of greetings
//     const greetings = [
//       'Hello',
//       'Hi',
//       'Hey',
//       'Bonjour',
//       'Hola',
//       'Namaste',
//       'Salam',
//       'Konnichiwa',
//       'Guten Tag',
//       'Ciao'
//     ];

//     // Return the greeting at the given index of the array
//     return greetings[number];
//   };

//   // Define a function to get a random country based on a number
//   const getRandomCountry = (number) => {
//     // Define an array of countries
//     const countries = [
//       'China',
//       'India',
//       'United States',
//       'Indonesia',
//       'Pakistan',
//       'Brazil',
//       'Nigeria',
//       'Bangladesh',
//       'Russia',
//       'Mexico'
//     ];

//     // Return the country at the given index of the array
//     return countries[number];
//   };

//   // Define a function to get a random emoji based on a number
//   const getRandomEmoji = (number) => {
//     // Define an array of emojis
//     const emojis = [
//       '😀',
//       '😍',
//       '😎',
//       '😂',
//       '😡',
//       '😱',
//       '😴',
//       '😷',
//       '👍',
//       '👏'
//     ];

//     // Return the emoji at the given index of the array
//     return emojis[number];
//   };

//   // Define a function to get a random number based on a number
//   const getRandomNumber = (number) => {
//     // Define an array of numbers
//     const numbers = [
//       42,
//       7,
//       13,
//       21,
//       69,
//       100,
//       314,
//       666,
//       101,
//       0
//     ];

//     // Return the number at the given index of the array
//     return numbers[number];
//   };

//   // Return the JSX element for the component
//   return (
//     <div>
//       <div style={componentStyle}>
//         {/* Map over the buttons array and render a Button component for each item */}
//         {buttons.map((button, index) => (
//           <div key={index} onClick={() => handleClick(index)}>
//             <Button label={button.label} color={button.color} />
//           </div>
//         ))}
//       </div>
//       {/* If there is an active button and content, render a Dropdown component with the same color and content */}
//       {active !== null && content && (
//         <div
//           style={{
//             position: 'relative', // Set the position to relative
//             left: '0',
//             margin: '1rem',
//               top: '-10px' // Adjust the top position slightly
//           }}
//         >
//           <Dropdown color={buttons[active].color} content={content} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FourButtons;