import React, { useEffect, useState } from 'react';

function Fetch() {
  const [data, setData] = useState([]); //data is the state variable to hold fetched posts and setData updates the data

  useEffect(() => { //runs once after the componebt mounts
    fetch('https://jsonplaceholder.typicode.com/posts') // sends  HTTP GET request to the placeholder API to get a list of posts
      .then((response) => response.json())              // converts the raw HTTP response to JSON
      .then((json) => setData(json))                    // Stores the parsed JSON data in the data state using setData
      .catch((error) => console.error('Error:', error)); // Catches and logs any error if the fetch fails
  }, []);

  return (
    <div>
    <h2>Posts</h2>
      <ul>
        {data.map((item) => ( //loops though every post in data
          <li key={item.id}>{item.title}</li> // uniquely identify each item in the list
        ))}
      </ul> 
    </div>
  );
}

export default Fetch;
