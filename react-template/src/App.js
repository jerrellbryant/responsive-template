import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import Aside from './components/Aside'
import Footer from './components/Footer'
import {ThemeContext} from './components/themeContext';
import {useContext} from 'react';


function App() {
  
const {data} = useContext(ThemeContext);

  return (
    <Router>
     <header>
            <div className="container container-flex">
                <div className="site-title">
                    <h1>{data.title}</h1>
                    <p className="subtitle">{data.subtitle}</p>
                </div>
                <nav>
                    <ul>
                        <li><Link className="current-page" to="/">home</Link></li>
                        <li><Link to="/about">about me</Link></li>
                        <li><Link to="/posts">recent posts</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    <div className="container container-flex">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/posts" element={<Posts />}/>
          <Route path="*" element={<Error />}/>
      </Routes>
      <Aside />
        </div>
      <Footer/>
    </Router>
  );
}

export default App;