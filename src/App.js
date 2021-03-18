import './App.css';
import About from './components/AboutComponent';
import Home from './components/HomeComponent';
import Intro from './components/IntroComponent';
import Projects from './components/ProjectsComponent';
import Sidebar from './components/SidebarComponent';
import Timeline from './components/TimelineComponent';

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
