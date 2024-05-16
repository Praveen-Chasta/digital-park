import { useParams  } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { SERVER_URL } from "../../config";

const BASE_URL = SERVER_URL;
const  ClassHeader=()=>{
  const { id } = useParams();

  const [className, setClassName] = useState('');
	
  useEffect(() => {
    
    const postData = {
        class: id
    };
  
    
    axios.post(`${BASE_URL}/class-details`, postData)
      .then(response => {
        // Handle the response if needed
        // console.log('POST request successful: ', response.data.data.name);
        setClassName(response.data.data.name);
      })
      .catch(error => {
        // Handle errors
        console.error('Error making POST request: ', error);
      });
  
    // Ensure to add any dependencies to the dependency array if needed
  });
    return (
            <>
            <section className="inner-banner clearfix">
              <div className="container position-relative z-3">
                <h1 className="display-3 fw-bold text-white text-left">
                    <span className="fs-3 fw-normal d-block">Simply Powerful online</span>
                    {className}
                  </h1>
              </div>
            </section>

            </>
            )
}
export default ClassHeader