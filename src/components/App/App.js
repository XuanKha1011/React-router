import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
// import Login from '../Login/Login';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  // const token = getToken();

  // if (!token) {
  //   return <Login setToken={token} />
  // }


  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/preferences' element={<Preferences />}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

