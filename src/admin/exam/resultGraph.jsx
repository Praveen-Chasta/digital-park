import {Chart} from 'chart.js/auto'
import { useRef, useEffect } from "react";
import Header from "../layouts/Header/Header.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import './resultGraph.css';
import ChartComponent from '../chartComponent/ChartComponent';
import { current } from '@reduxjs/toolkit';

// ChartJs.register(
//   CategoryScale, LinearScale, PointElement, LinearElement,Title, Tooltip, Legend
// )

function ResultGraph() {

  const pieChartData = {
    // labels: [
    //   'Red',
    //   'Blue',
    //   'Yellow',
    //   'green'
    // ],
    datasets: [{
      label: 'Pie Dataset',
      data: [300, 50, 100, 50],
      backgroundColor: [
        "rgba(255, 73, 85, 1)",
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        "rgba(62, 190, 66, 1)"

      ],
      hoverOffset: 4
    }]
  }

  const lineChartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
      label: 'Result Dataset',
      data: [10, 20, 40, 80, 60, 90, 50, 66, 80, 100],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
      tension: 0.1,
    }],
  };

  const barChartData = {
    labels: ["1-3 Questions", "4-6 Questions", "7-10 Questions", "11-15 Questions", "16-20 Questions"],
    datasets: [{
      label: 'Result Dataset',
      data: [100, 100, 40, 80, 60, 90, 50, 66, 80, 100],
      fill: false,
      backgroundColor: [
        "rgba(223, 239, 245, 1)"

      ],
      borderColor: [
        "rgba(223, 239, 245, 1)"
      ],
      borderWidth: 2,
    }],
  };

  const barChartOptions = {
    indexAxis: 'y',  // Ensures the bar chart is horizontal
  };

  const barChartDataOne = {
    labels: ["Average Score", "Your Score"],
    datasets: [{
      label: 'Result Dataset',
      data: [80, 60],
      fill: false,
      backgroundColor: [
        "rgba(255, 73, 85, 1)",
        "rgba(254, 212, 45, 1)"

      ],
      borderColor: [
        "rgba(255, 73, 85, 1)",
        "rgba(254, 212, 45, 1)"
      ],
      borderWidth: 2,
    }],
  };

  const barChartOptionsOne = {
    indexAxis: 'y',  // Ensures the bar chart is horizontal
  };

  const barChartDataTwo = {
    labels: ["Average Score", "Your Score"],
    datasets: [{
      label: 'Result Dataset',
      data: [80, 60],
      fill: false,
      backgroundColor: [
        "rgba(255, 73, 85, 1)",
        "rgba(254, 212, 45, 1)"


      ],
      borderColor: [
        "rgba(255, 73, 85, 1)",
        "rgba(254, 212, 45, 1)"
      ],
      borderWidth: 2,
    }],
  };

  const barChartOptionsTwo = {
    indexAxis: 'y',  // Ensures the bar chart is horizontal
  };


   return (
    <div className="resultGraph-top-container">
        <Header />
        <Sidebar />
        <div className="container-fluid resultGraph-main-container"> 
          <div className="row">
            <div className="col-lg-4 col-md-10 col-sm-9 resultGraph-container mb-4 p-0"> 
                  <h1 className="charts-heading">Marks Obtained</h1>
                  <hr className="m-0"/>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <ChartComponent type="pie" data={pieChartData} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717416504/Rectangle_4153252_jxzdq4.png" alt="" />
                          <p className="charts-para">English(45%)</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153255_iotvyv.png" alt="" />
                          <p className="charts-para">Science(25%)</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153253_uopwty.png" alt="" />
                          <p className="charts-para">Hindi(20%)</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153254_qjifih.png" alt="" />
                          <p className="charts-para">Maths(10%)</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-10 col-sm-9 answer-percent-container mb-4 p-0">
                  <h1 className="ans-cont-1-heading">Answered Given</h1>
                    <div className="col-lg-12 ans-cont-1">
                        <p className="ans-cont-1-p-1">Answer</p>
                        <p>Percent</p>
                        <p className="ans-cont-1-p-3">Image Distance</p>
                    </div>
                    <div className="col-lg-12 ans-cont-2">
                        <p className="ans-cont-1-p-1">Never</p>
                        <p className="text-center">31.45%</p>
                        <p className="ans-cont-1-p-3">+25</p>
                    </div>
                    <div className="ans-cont-3">
                        <p className="ans-cont-1-p-1"> Rarely</p>
                        <p>24.03%</p>
                        <p className="ans-cont-1-p-3">+30</p>
                    </div>
                    <div className="col-lg-12 ans-cont-2">
                        <p className="ans-cont-1-p-1">Often</p>
                        <p>13.5%</p>
                        <p className="ans-cont-1-p-3">+65</p>
                    </div>
                    <div className="ans-cont-3">
                        <p className="ans-cont-1-p-1">Always</p>
                        <p>39.09%</p>
                        <p className="ans-cont-1-p-3">+45</p>
                    </div>
            </div>
            <div className="col-lg-4 col-md-10 col-sm-10 resultGraph-container mb-4 p-0">
               <h1 className="charts-heading">Correct Answer</h1>
               <hr className="m-0"/>
               <ChartComponent type="line" data={lineChartData} />
            </div>
            <div className="col-lg-4 col-md-10 col-sm-10 resultGraph-container mb-4 p-0">
               <h1 className="charts-heading">Time Duration Per Question</h1>
               <hr className="m-0"/>
               <ChartComponent type="bar" data={barChartData} options={barChartOptions} />
            </div>
            <div className="col-lg-4 col-md-10 col-sm-10 resultGraph-container mb-4 p-0">
               <h1 className="charts-heading">Time Question Attempted</h1>
               <hr className="m-0"/>
               <ChartComponent type="bar" data={barChartDataOne} options={barChartOptionsOne} />
            </div>
            <div className="col-lg-4 col-md-10 col-sm-10 resultGraph-container mb-4 p-0">
               <h1 className="charts-heading">Levels According to Time Taken Per Question</h1>
               <hr className="m-0"/>
               <ChartComponent type="bar" data={barChartDataTwo} options={barChartOptionsTwo} />
            </div>
          </div>
          <div className="result-information-bottom-container d-flex flex-column justify-content-end mt-5 mb-5">
            <div className="result-information-container bg-white col-4 mb-5">
                <table class="table table-bordered mb-0">
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black',textAlign: "right" }}>S No.</th>
                            <th style={{ border: '1px solid black' }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid black',textAlign: "right"}}>1</td>
                            <td style={{ border: '1px solid black'}}>Marks Obtained</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black',textAlign: "right" }}>2</td>
                            <td style={{ border: '1px solid black'}}>Answered Given</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black',textAlign: "right" }}>3</td>
                            <td style={{ border: '1px solid black'}}>Correct Answer</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black',textAlign: "right" }}>4</td>
                            <td style={{ border: '1px solid black'}}>Time Duration Per Question</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black',textAlign: "right" }}>5</td>
                            <td style={{ border: '1px solid black'}}>Total Questions Attempted</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black',textAlign: "right" }}>6</td>
                            <td style={{ border: '1px solid black' }}>Levels According To Time Taken Per Question</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        </div>
    </div>
   )
}

export default ResultGraph