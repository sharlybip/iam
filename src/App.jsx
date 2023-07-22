import './App.css'
import { Nav } from './components/nav';
import { Beginnings } from './components/beginnings';
import { Email } from './components/email';
import { Entertainment } from './components/entertainment';
import { MasterArea } from './components/masterArea';
import { Reserve } from './components/reserve';
import { Companies } from './components/companies';
import { Footer } from './components/footer';

const App = () => {
  return (
    <>
    <Nav/>
    <Beginnings/>
    <Email/>
    <Entertainment/>
    <MasterArea/>
    <Reserve/>
    <Companies/>
    <Footer/>
    </>
  )
}

export default App
