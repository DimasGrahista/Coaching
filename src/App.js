import './App.css';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Valopage from './pages/Valopage';
import Thespage from './pages/Thespage';
import Rainsixpage from './pages/Rainsixpage';
import Pubgpage from './pages/Pubgpage';
import Deadlpage from './pages/Deadlpage';
import Cs2page from './pages/Cs2page';
import Apexpage from './pages/Apexpage';
import LolPage from './pages/Lol';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<Aboutpage/>} />
        <Route path='/valo' element={<Valopage/>} />
        <Route path='/rainsix' element={<Rainsixpage/>} />
        <Route path='/cs2' element={<Cs2page/>} />
        <Route path='/pubg' element={<Pubgpage/>} />
        <Route path='/thes' element={<Thespage/>} />
        <Route path='/deadl' element={<Deadlpage/>} />
        <Route path='/apex' element={<Apexpage/>} />
        <Route path='/lol' element={<LolPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
