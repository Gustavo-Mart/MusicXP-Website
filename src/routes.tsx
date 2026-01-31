import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './screens/App'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}
