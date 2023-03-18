import './App.css';
import Header from './components/layouts/Header';
// import 'antd/dist/antd.css';
import UserContext from './contexts/user_context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserListPage from './pages/user/UserListPage';
import ContactPage from './pages/contact/ContactPage';
import UserDetails from './pages/user/UserDetails';

function App() {
  const [user, setUser] = useState(null);

  const loadUser = () => {
    axios.get('user.json')
      .then((reponse) => {
        setUser(reponse.data);
      }).catch((error) => {
        console.error(error);
      })
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Header bgColor="light" size='sm' />
            </div>
          </div>
          <div className='col-12'>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/user" element={<UserListPage />} />
              <Route exact path="/contact" element={<ContactPage />} />
              <Route exact path="/user/:id" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
