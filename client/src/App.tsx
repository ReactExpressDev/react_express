import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

interface Data {
  id: number;
  name: string;
  // その他のフィールド
}

const App: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/api/data`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Data from Database</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Button variant="contained" color="primary">
        MUI Button
      </Button>
    </div>
  );
}

export default App;
