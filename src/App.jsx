import './App.css';
import { Route, Routes } from 'react-router-dom';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import Register from './pages/Register';
import Activate from './pages/Activate';
import User from './components/User';
import Signin from './pages/Signin';
import Signout from './components/Signout';
import ShortUrlGenerator from './components/ShortUrlGenerator';
import ShortUrl from './components/ShortUrl';
import Redirect from './components/Redirect';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<User />} />
        <Route path='/shorturls' element={<ShortUrl />} />
        <Route path='/shorturls/:shorturl' element={<Redirect />} />
        <Route path='/generateshorturl' element={<ShortUrlGenerator />} />
      </Route>
      <Route path='/signin' element={<Signin />} />
      <Route path='/signout' element={<Signout />} />
      <Route path='/register' element={<Register />} />
      <Route path='/activate?' element={<Activate />} />
      <Route path="/forgot" element={<ForgetPassword />} />
      <Route path="/resetPassword?" element={<ResetPassword />} />
    </Routes>
  )
}

export default App
