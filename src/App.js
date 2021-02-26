//IMPORT PAGES
import AboutUs from './pages/AboutUs'
//Global Style
import GlobalStyle from './components/GlobalStyled'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
      <GlobalStyle/>
      <AboutUs/>
    </div>
  );
}

export default App;
