import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import '../Styles/Test.css';
import { Button } from 'react-bootstrap';
import { MDBContainer } from "mdbreact";
import { Row, Col } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

function Test() {
    const [country, setCountry] = useState({}); // select the country from dropdown
    const [sliderValue, setSliderValue ] = useState(1); // slider value for happiness rate
    const [worldbank, setWorldBank] = useState({}); // countries of the 33% that will be passed as props to the graph component
    const [incomeValue, setIncomeValue] = useState(""); //  set the income value of the client
  

    useEffect(() => {


   axios.get('/worldbank', 
      ).then((res) => {
         setWorldBank(res);
    
      });
      axios.get('/bank', 
      ).then((res) => {
         setCountry(res);
    });
    
    let incomeValue = document.getElementById('income');
    setIncomeValue(incomeValue.value);
    },[]);

  
//select country handler
const selectHandler = (e) => {
console.log(e.target.value);

}

//income per capita handler
const incomeHandler = (e)=> {
 setIncomeValue(e.target.value);
 console.log(incomeValue);
}

//word handler
const wordHandler = (e)=> {
  var funnyWord = document.getElementById("funnyWord");
  console.log(funnyWord.value);

 }

//happiness rate / defined with the state
const submitHandler = (e) =>  {

  console.log("form")
  e.preventDefault();
  selectHandler(e);
  incomeHandler(e);
  wordHandler(e);


//World Bank Data fixed data state   - last 33 % averages


//average income of the last 33%
//average happines rate of the last 33%
//average happiness Score
//some happy word or quoting you can put in
}

return (
    <MDBContainer fluid>
        <div className="test-flex-container">
             <h3>Test</h3> 
        <div>
           
        <div className="dropdown">
       

<select className = "train-description-centering select-by-station" onChange={(e) => selectHandler(e)}>
    <option>Select country</option>
      {country.data ? country.data.map((item, index) => {
         return <option id="country-option" value={item.country}  className="hidden" key={index}> {item.country} </option>}):null}
    </select>  
</div>
        </div>
        <input onChange={(e)=> incomeHandler(e)} id="income" className="form-control col-md-2" type="number" placeholder=" Yearly Income"/>
        <input id="funnyWord" className="form-control col-md-2" type="text" placeholder="How do you feel?" onChange={wordHandler}/>
        <Form >
            
            <Form.Group as={Row}>
                <p>H rate</p>
            <Col xs="3">
          <RangeSlider
            id="sliderValue"
            value={sliderValue}
            onChange={e => setSliderValue(e.target.value)}
            variant='danger'
          />    
        </Col>
        </Form.Group>
        </Form>
        <Button onClick={(e)=>submitHandler(e)}>Submit</Button>
        

 


 

        </div>

{/* {worldbank.data ? worldbank.data.map((elem, index)=> {
return(
<h1 key={index}>{elem["Happiness.Rank"]}</h1>
)

}):null} */}
</MDBContainer>


      
    );
  }

  export default Test;
  