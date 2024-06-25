import logo from './logo.svg';
import './App.css';
import TextUtils from './Components/TextUtils';
import { useState } from 'react';
import dark from './Components/dark.svg';
import light from './Components/light.svg';
import About from './Components/About';

function App() {

  const[mode, setMode] = useState('light');
  const toggleMode = (m) => {
    if(m == 'light'){
      document.querySelector('#light-icon').style.display='none';
      document.querySelector('#dark-icon').style.display='block';
      setMode('light')
      }
      else{
        document.querySelector('#dark-icon').style.display='none';
        document.querySelector('#light-icon').style.display='block';
        setMode('dark')
      }
    }
  return (
    <div className={`App bg-${mode}`} >
      <div className='container'>
        <div className='row'>
          <div className='col m-auto'>
            <nav className=' navbar navbar-expand-lg' data-bs-theme={mode}>
              <div className='container-fluid'>
                <a className='navbar-brand' href='/'>Navbar</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                  <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                      <a className='nav-link active' aria-current='page' href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='/'>Link</a>
                    </li>
                    <li className='nav-item dropdown'>
                      <a className='nav-link dropdown-toggle' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                        Dropdown
                      </a>
                      <ul className='dropdown-menu'>
                        <li><a className='dropdown-item' href='/'>Action</a></li>
                        <li><a className='dropdown-item' href='/'>Another action</a></li>
                        <li><hr className='dropdown-divider'/></li>
                        <li><a className='dropdown-item' href='/'>Something else here</a></li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='/'>About</a>
                    </li>
                  </ul>
                  <div className='mode-icon'>
                    <img src={dark} onClick={() => toggleMode('dark')} id='dark-icon' />
                    <img src={light} onClick={() => toggleMode('light')} id='light-icon' style={{display:'none'}} />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <TextUtils mode={mode}/>
        <About mode={mode}/>
      </div>
    </div>
  );
}

export default App;
