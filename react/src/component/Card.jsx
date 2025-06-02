import React from 'react';//import react component

function Card(props) { //functional component card is defined,props is object to hold data
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}> 
      {/*wraps content*/ props.children} 
    </div>
  );
}

export default Card; //allows to import card from other file
