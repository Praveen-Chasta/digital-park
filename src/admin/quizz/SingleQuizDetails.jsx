import './single_quiz.css'


function SingleQuizDetails () {
    return (
        <>
            <div className='singleQuiz-main-container'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className='username-container'>
                                <h3>Class 5</h3>
                                <h3>Student Name: Diksha</h3>
                            </div>
                            <div className='date'>
                                <p className='text-right'>Date : 18/6/2024</p>
                            </div>
                            <div className="search-container">  
                                <div className='d-flex align-item-center'>
                                    <p>Show</p>
                                    <select>
                                        <option value="">6</option>      
                                    </select>
                                    <p>Entries</p>
                                </div>
                                <div className='d-flex align-item-center'>
                                    <p>Search :</p><span><input type="search" placeholder="Search" /></span>
                                </div>
                            </div>
                            <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>Questions</th>
                              <th>Answer</th>
                              <th>Points</th>
                              <th>Negative Marking</th>
                            </tr>
                          </thead>
                          <tbody>
                          
                            <tr>
                                <td className="align-middle">Q1 : What is the sum of the angles in a triangle?</td>
                                <td className="align-middle" >
                                    <input type ="radio"/>
                                    90 degree
                                </td>
                                <td className="align-middle"> 0</td>
                                <td className="align-middle">10.0</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><strong>Total Point</strong></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><strong>Total Negative</strong></td>
                                <td></td>
                                <td></td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleQuizDetails