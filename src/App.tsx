import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/home.page'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
