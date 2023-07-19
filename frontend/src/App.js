import './App.css';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom"
import {  Student } from './Components/Student/Student';
import { Instructor } from './Components/Instructor/Instructor';

function App() {
  return (
    <div className="App">
            <Navbar/>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/student' element={<Student/>}></Route>
            <Route path='/instructor' element={<Instructor/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
