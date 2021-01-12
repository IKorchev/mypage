import Home from './Pages/home'
import Projects from './Pages/projects'
import Navbar from './components/navbar'
import AboutMe from './Pages/aboutme'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
   <>
   <Navbar />
   <Home />
   <Projects />
   <AboutMe />
   </>
  );
}

export default App;
