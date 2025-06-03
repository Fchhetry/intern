import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LoadNError() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // loading indicator
  const [error, setError] = useState(null);     // error message

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);   // done loading
      })
      .catch((err) => {
        setError('Failed to fetch data.');
        setLoading(false);   // done loading even if error
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LoadNError;
