import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/User/Login/Login';
import Register from './containers/User/Register/Register';
import Profile from './containers/User/Profile/Profile';
import Update from './containers/User/Update/Update';
import Delete from './containers/User/Delete/Delete';
import FilmDetail from './containers/FilmDetail/FilmDetail';

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white w-full h-max">
      <div className="App">
        <BrowserRouter>

        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/Update" element={<Update/>}/>
            <Route path="/Delete" element={<Delete/>}/>
            <Route path="/detail" element={<FilmDetail/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
