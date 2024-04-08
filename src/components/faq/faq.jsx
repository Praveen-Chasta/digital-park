import * as React from 'react';
import "./faq.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function AccordionUsage() {
  return (
    <div className="faq-container">
      <div className="faq-heading">
        <h2>
          Frequently
          <br /> asked questions
        </h2>
      </div>
      <div className='accordions'>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Why EXAMIN is the best online examination platform?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            What are the top features of an online exam software?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            What is an Online Examination?
          </Typography>
        </AccordionDetails>
        
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            How does an Online Examination System work?
          </Typography>
        </AccordionDetails>
        
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            List of Top Online Exam Software/Platforms
          </Typography>
        </AccordionDetails>
        
      </Accordion>
      </div>
    </div>
  );
}
