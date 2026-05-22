import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AiPage from './pages/AiPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ai" element={<AiPage />} />
    </Routes>
  )
}
