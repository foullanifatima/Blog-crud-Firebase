import Home from './Pages/Home'
import { BlogProvider } from './Context/BlogContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Add from './Pages/Add'

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </BlogProvider>
  )
}

export default App
