import './App.css';
import Home from './components/layouts/Main.jsx';
import About from './components/About.jsx';
import ClassComponent from './components/ClassComponent.jsx';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import ClassHeader from './components/class/ClassHeader.jsx';
import AdminDashboard from "./admin/dashboard/dashboard.jsx";
import Instruction from "./admin/Instruction/instruction.jsx";
import Instruction1 from './admin/Instruction/Instruction1.jsx';
import Exampage from './admin/exam/Exampage.jsx';
import Result from './admin/exam/Result.jsx';
import ResultGraph from './admin/exam/resultGraph.jsx';
import ExamQuestion from './admin/exam/ExamQuestion.jsx';   
import FAQs from './components/FAQs/FAQs.jsx';
import QuizPage from './admin/quizz/QuizPage.jsx';
import UserProfile from './admin/quizz/UserProfile.jsx';
function App() {
    return ( 
       
        <Router>
                <Routes> 
                    <Route exact path="/" element={<Home/>}></Route> 
                    <Route path="/about"  element={<About/>}/>
                    <Route exact path="/classes/:id"  element={<ClassComponent/>} />
                    {/* <Route path="/classes"  element={<ClassComponent/>}/> */}
                    <Route path="/classHeader"  element={<ClassHeader/>}/>
                    {/* <Route path="/dashboard"  element={<AdminDashboard/>}/> */}
                    <Route path='/instruction' element={<Instruction/>}/>
                    <Route path='/instruction-details' element={<Instruction1/>}/>
                    <Route path='/result' element={<Result/>}/>
                    <Route path= "/admin-dashboard" element={<ResultGraph/>}/>
                    
                    <Route exact path='/exam' element={<ExamQuestion />} />
                    <Route path='/faqs' element={<FAQs />} />
                    <Route path='/quiz' element={<QuizPage />} />
                    <Route path='/profile' element={<UserProfile />} />
                </Routes> 
        </Router>  
    );
}

export default App;