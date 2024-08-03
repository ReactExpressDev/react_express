import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { colors, Typography } from '@mui/material'
import styled from '@emotion/styled'

interface Data {
  id: number
  name: string
  // その他のフィールド
}

function App(){
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL
        const response = await fetch(`${apiUrl}/api/data`)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const Root = styled('div')({
    color: 'white',
    backgroundColor: 'black',
    margin: 0,
    minHeight: '100vh',
  })

  return (
    <Root>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <Button variant="contained">
        MUI Button
      </Button>
      <Typography>Data from Database</Typography>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </Root>
  )
}

export default App
