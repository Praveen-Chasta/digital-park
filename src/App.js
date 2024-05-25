import './App.css';
import Home from './components/layouts/Main.jsx';
import About from './components/About.jsx';
import ClassComponent from './components/ClassComponent.jsx';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import ClassHeader from './components/class/ClassHeader.jsx';
import AdminDashboard from "./admin/dashboard/dashboard.jsx";
import Exam from "./admin/dashboard/dashboard.jsx";


function App() {
    return ( 
       
        <Router>
                <Routes> 
                    <Route path="/" element={<Home/>}></Route> 
                    <Route path="/about"  element={<About/>}/>
                    <Route path="/classes/:id"  element={<ClassComponent/>}/>
                    <Route path="/classHeader"  element={<ClassHeader/>}/>
                    <Route path="/dashboard"  element={<AdminDashboard/>}/>
                    <Route path='/dashboard/exam' element={Exam}/>
                    
                    
                </Routes> 
        </Router>  
    );
}

export default App;