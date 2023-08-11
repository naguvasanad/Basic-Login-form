import './App.css';
import { BiSolidLogIn,BiSolidUser } from 'react-icons/bi';
import { BsFillLockFill } from 'react-icons/bs';

function App() {
  return (
    <div className="container">
      <form>
        <h1>Login<BiSolidLogIn /></h1>
        <div className='input__box'>
          <input type='text' placeholder='Name' required/>
          <BiSolidUser className='icon'/>
        </div>
        <div className='input__box'>
          <input type='password' placeholder='Password' required/>
          <BsFillLockFill className='icon'/>
        </div>
        <div className='remember__forgot'>
          <label><input type='checkbox'/>Remember Me</label>
          <a href='#'>Forgot Password?</a>
        </div>
        <button type='submit' className='submit__btn'>Login</button>
        <div className='register__link'>
          <p>Don't have an account? <a href='#'>Rgister here</a></p>
        </div>
      </form>
    </div>
  );
}

export default App;
