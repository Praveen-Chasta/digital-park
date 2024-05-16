import './App.css';
import Home from './components/layouts/Main.jsx';
import About from './components/About.jsx';
import ClassComponent from './components/ClassComponent.jsx';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import ClassHeader from './components/class/ClassHeader.jsx';
function App() {
    return ( 
       
        <Router>
                <Routes> 
                    <Route path="/" element={<Home/>}></Route> 
                    <Route path="/about"  element={<About/>}/>
                    <Route path="/classes/:id"  element={<ClassComponent/>}/>
                    <Route path="/classHeader"  element={<ClassHeader/>}/>
                    
                </Routes> 
        </Router>  
    );
}

export default App;