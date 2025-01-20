// import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from './pages/landing';
import Authenticatiom from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeet from './pages/videoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';

function App() {
  return (
   <>
   <Router>
    <AuthProvider>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/auth' element={<Authenticatiom/>}/>
      <Route path='/home' element={<HomeComponent/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/:url' element={<VideoMeet/>}/>
    </Routes>
    </AuthProvider>
   </Router>
   </>
  );
}

export default App;
