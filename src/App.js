import './App.css';
import Home from './components/HomeComponent';
import Sidebar from './components/SidebarComponent';


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
