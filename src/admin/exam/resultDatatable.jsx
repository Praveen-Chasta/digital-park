import DataTable from "react-data-table-component";
import React, { useState, useCallback, useEffect } from "react";
import {Chart} from 'chart.js/auto'
import ChartComponent from '../chartComponent/ChartComponent';
import axios from "axios";
import { SERVER_URL } from "../../config";
import "./ExamPage.css";

const ResultDatatable=()=>{
  const[search,setSearch] = useState("");
  const[test ,setTest] = useState(false);
  const [questionPoint,setQuestionPoint] = useState([]); 
  const [filterOption,setfilterOption] = useState([]); 
  
  
const BASE_URL = SERVER_URL;

const CustomOptionCell = ({ row }) => (
   
  <div>
      
      <input type="radio" name={`option_${row.result_id}`} checked={row.correct_answer === row.answer}   readOnly/> {row.option1} 
      <input type="radio" name={`option_${row.result_id}`} value={row.option2}  checked={row.correct_answer === row.answer}  style={{ marginLeft: "25px"  }} readOnly/> {row.option2} 
      <input type="radio" name={`option_${row.result_id}`} value={row.option3}  checked={row.correct_answer === row.answer}  style={{  marginLeft:"25px"}}readOnly /> {row.option3} 
      <input type="radio" name={`option_${row.result_id}`} value={row.option4}  checked={row.correct_answer === row.answer} style={{ marginLeft: "25px" }} readOnly/> {row.option4}
  </div>
);

  const  getResult = async()=>{
    try
    {
      const token = await localStorage.getItem('token');
      const quiz_id = await localStorage.getItem('result_quiz_id');
      
      const response = await axios.post(`${BASE_URL}/all-question-result`,
      {
        quiz_id:quiz_id,
      },
      {
        headers:
         {
          'remember-token': token,
        }
      }
    )
     setQuestionPoint(response.data.data);
      setfilterOption(response.data.data);
    }
    catch(error)
    {
        console.log(error);
    }
 }

  const columns = [
    {
      name: 'Question',
      selector: row => row.question,
      sortable:true,
      style:  { minWidth: '300px'},
      
      wrap: true },
    {
      name: 'Your Choice Answer',
      style:  { minWidth: '500px' } ,
      cell: row => <CustomOptionCell row={row} />,
      wrap: true
    },
    
    {
      name: 'Marks',
      selector: row => row.mark,
     },
  ];
  
  useEffect(()=>{
    getResult();
  },[]);
  useEffect(()=>{
     const result=questionPoint.filter((item)=>
        {
             return item.question.toLowerCase().match(search.toLowerCase());
         }); 

      setfilterOption(result);  
      
  },[search]);
  
   return(
    <>
    <div className="datatable-container">
      <DataTable columns={columns}
                data={filterOption}
                title="Result"
                fixedHeader
                pagination
                paginationPerPage={5}
                highlightOnHover  
                subHeader    
                subHeaderComponent={
                  <input type="text"  placeholder="Search here" className="form-control w-25"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
                }    
               
                />
      </div>   
    </>);
}
export default ResultDatatable;