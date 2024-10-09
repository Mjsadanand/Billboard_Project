import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';

function App() {
  return (
<div className='grid-container'>
<Header/>
<Sidebar/>
<Home/>
</div>
  );
}

export default App;
