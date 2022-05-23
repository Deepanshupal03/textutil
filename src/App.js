
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar title="text util" home="home"/>
<div className="container"><TextForm heading="enter your text to analyze"/></div>
    </>
  );
}

export default App;
