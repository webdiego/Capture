//IMPORT PAGES
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import MovieDetail from './pages/MovieDetails'
//Global Style
import GlobalStyle from './components/GlobalStyled'
import Nav from './components/Nav'
//Router
import {Switch , Route , useLocation} from 'react-router-dom'
//Animation
import {AnimatePresence} from 'framer-motion'
import TopScroll from './components/TopScroll'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle/>
      <TopScroll/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>

      <Switch location={location} key={location.pathname} > 
      <Route path="/" exact>
      <AboutUs/>
      </Route>
      <Route path="/work" exact>
      <OurWork/>
      </Route>
      <Route path="/work/:id">
        <MovieDetail />
      </Route>
      <Route path="/contact">
      <ContactUs/>  
      </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
