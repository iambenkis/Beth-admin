import './App.css'
import AddBoat from './components/AddBoat'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import User from './components/UserList'
import Books from './components/ReservationList'
import Boats from './components/BoatList'
import Login from './components/login'
import Protected from './components/protected'
import Header from './components/header'

function App() {
  return (
    <div className="App   bg-gray-100">
      <Router>
        <Protected>
          <>
            <Nav />
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/add-boat" element={<AddBoat />} />
              <Route path="/users" element={<User />} />
              <Route path="/books" element={<Books />} />
              <Route path="/boats" element={<Boats />} />
            </Routes>
          </>
        </Protected>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
