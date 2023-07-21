import './App.css'
import { Nav } from './components/nav';
import { Beginnings } from './components/beginnings';
import { Email } from './components/email';
import { Entertainment } from './components/entertainment';
import { MasterArea } from './components/masterArea';
import { Reserve } from './components/reserve';

const App = () => {
  return (
    <>
    <Nav/>
    <Beginnings/>
    <Email/>
    <Entertainment/>
    <MasterArea/>
    <Reserve/>
    </>
  )
}

export default App
