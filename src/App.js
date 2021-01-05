import  React  from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Home  from './pages/home'
import  Contact  from './pages/contact'
import  Projects  from './pages/projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'


function App() {


  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
   </HashRouter>
  );
}

// // const Home = () => <div><h2>Home</h2></div>
// const Projects = () => <div><h2>About</h2></div>
// const Contact = () => <div><h2>About</h2></div>

export default App;
