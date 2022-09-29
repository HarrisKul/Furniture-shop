import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './pages/components/Header';
import Main from './pages/Main';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
