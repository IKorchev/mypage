import  React  from 'react'
import { Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Home  from './pages/home'
import  Contact  from './pages/contact'
import  Projects  from './pages/projects'
import  About  from './pages/about'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
   </>
  );
}

export default App;
