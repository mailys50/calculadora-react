import './App.css';
import delightLogo from './img/delight.png'

function App() {
  return (
    <div className="App">
      <div className='contenedorLogo'>
        <img
          className='logo'
          src={delightLogo}
          alt='imagen del logo' />
      </div>
      <div className='contenedorCalculadora'></div>
    </div>
  );
}

export default App;
