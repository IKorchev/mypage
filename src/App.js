import  React  from 'react'
import { Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Home  from './pages/home'
import  Contact  from './pages/contact'
import  Projects  from './pages/projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'


function App() {


  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
   </>
  );
}

export default App;
