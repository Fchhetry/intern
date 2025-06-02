import React from 'react';

function IplList() {
  const Teams = ['CSK', 'RCB', 'PBSK', 'GT'];

  return (
    <div>
      <h2>Teams List</h2>
      <ul>
        {Teams.map((Team, index) => (
          <li key={index}>{Team}</li>
        ))}
      </ul>
    </div>
  );
}

export default IplList;