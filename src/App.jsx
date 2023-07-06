
import './App.css'
import Dashboard from './components/Dashboard';
import Left from './components/Left';
import NavBar from './components/NavBar';
import Right from './components/Right';

function App() {

  return (
    // <div className="flex gap-5 justify-start">
    //   <Left />
    //   <Right />
    // </div>
    <div className='lg:w-[100%] lg:h-[100vh]'>
      <NavBar/>
      <Dashboard/>
    </div>
  )
}

export default App
