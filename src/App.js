import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav className='navbar'>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={menu} className="App-menu" alt="logo" />
        </nav>
        <div className='content'>
          <h1>
            Say hello to ReactJS
          </h1>
          <p>You will learn how to use </p>
          <p>the most popular frontend library,</p>
          <p>and become a super Ninja developer.</p>
          <button type="button">Awesome!</button>
        </div>
      </header >

      <section className='footer-area'>
        <div className='image-box'>
          <img src={icon1} className="App-1" alt="1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='image-box'>
          <img src={icon2} className="App-2" alt="2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className='image-box'>
          <img src={icon3} className="App-3" alt="3" />
          <h2>Single-way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className='image-box'>
          <img src={icon4} className="App-4" alt="4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>


    </div >
  );
}

export default App;
