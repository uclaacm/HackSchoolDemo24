import './App.css';
import GreetingCard from './components/Greetings';
import hacklogo from './assets/hacklogo.png';
import garfield from './assets/garfield.gif';

const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <GreetingCard message="Hello, welcome to my website!" imgSrc={hacklogo} imgAlt="Hack Logo" />
      <GreetingCard message="Thanks for visiting!" imgSrc={garfield} imgAlt="Garfield" />
    </div>
  );
};


export default App;


