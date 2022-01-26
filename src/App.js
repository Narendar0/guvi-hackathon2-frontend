import './App.css';
import "./booking.css";
import Register from './Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserLogin from './UserLogin';
import AdminDashboard from './AdminComponents/AdminDashboard';
import UserDashboard from './UserComponents/UserDashboard';
import AdminLogin from './AdminComponents/AdminLogin';
import AddTheater from './AdminComponents/AddTheater';
import EditTheater from './AdminComponents/EditTheater';
import MoviesList from './AdminComponents/MoviesList';
import AddMovie from './AdminComponents/AddMovie';
import EditMovie from './AdminComponents/EditMovie';
import UserMoviesList from './UserComponents/UserMovieList';
import AdminProfile from './AdminComponents/AdminProfile';
import BookTicket from './UserComponents/BookTicket';
import BookingStatus from './UserComponents/BookingStatus';


function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserLogin/>} />
    <Route path="/adminlogin" element={<AdminLogin/>} />
      <Route path="/register" element={<Register />}/>
      {/* Admin Routes */}
      <Route path="/admindashboard" element={<AdminDashboard/>}/> 
      <Route path="/add-theater" element={<AddTheater/>}/>
      <Route path="/movielist" element={<MoviesList/>}/>
       <Route path="/edit-theater/:id" element={<EditTheater/>}/>
      <Route path="/add-movie" element={<AddMovie/>}/>
      <Route path="/edit-movie/:id" element={<EditMovie/>}/>
      <Route path="/admin-profile" element={<AdminProfile/>}/>
      {/* User Routes */}
      <Route path="/userdashboard" element={<UserDashboard/>}/>
      <Route path="/usermovielist" element={<UserMoviesList/>}/>
      <Route path="/book-ticket" element={<BookTicket/>}/>
      <Route path="/bookingstatus" element={<BookingStatus/>}/>

    </Routes> 
  </BrowserRouter>
    </>
  );
}

export default App; 