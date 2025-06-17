import React, { useEffect, useState } from 'react';

function Axios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts') // Sends a GET request to the specified URL
      .then((response) => setData(response.data))            // save to state
      .catch((error) => console.error('Error:', error));     // handle errors
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Axios;
