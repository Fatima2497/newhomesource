
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SingleProject from './pages/SingleProject'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='SingleProject' element={<SingleProject />} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
