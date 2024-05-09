import './App.css';
import Home from './components/layouts/Main.jsx';
import About from './components/About.jsx';
import ClassComponent from './components/ClassComponent.jsx';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Dashboard from './components/backend/dashboard.jsx';

function App() {
    return ( 
       
        <Router>
                <Routes> 
                    <Route path="/" element={<Home/>}></Route> 
                    <Route path="/about"  element={<About/>}/>
                    <Route path="/classes"  element={<ClassComponent/>}/>
                    <Route path="/dashboard"  element={<Dashboard/>}/>
                    
                </Routes> 
        </Router>  
    );
}

export default App;