import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Data {
  id: number;
  name: string;
  // その他のフィールド
}

const App: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Database</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
