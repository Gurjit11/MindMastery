import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import Feedback from './pages/Feedback';
import Row from './components/Row';
import Playvideo from './pages/Playvideo';
// import Chubot from './pages/Chubot';
import QuizCard from './pages/QuizCard';

function App() {
  return (
    <div className="">
      <AuthContextProvider>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/type/:type' element={<Row />} />
            <Route path='/video/:idtaken' element={<Playvideo />} />
            {/* <Route path='/bot' element={<Chubot />} /> */}
            <Route path='/quiz/:type' element={<QuizCard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
