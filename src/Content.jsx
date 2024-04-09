import React, { useState } from 'react'
import { Circle, Centereddiv, StyledDiv, Button,Container } from './Bulbcontent';


function Content() { 
let [bulbColor,setbulbColor]=useState('gray')
let [buttonText,setButtontext]=useState('bulb off')
let [bulbColor2,setbulbColor2]=useState('gray')
let [buttonText2,setButtontext2]=useState('2nd bulb off')



const handleClick=()=> {
   
    if (bulbColor==='gray'){
      setbulbColor('orange')
      setButtontext('bulb on')
    }else { 
      setbulbColor('gray')
      setButtontext('bulb off')
    }
  }
  

const handleClicktwo=()=>{
  
    if (bulbColor2==='gray'){
      setbulbColor2('orange')
      setButtontext2('2nd bulb on')
      console.log('trigger')
    }else {
      setbulbColor2('gray')
      setButtontext2('2nd bulb off')
    }
  
  }

  return (
    <Container>
    
    <StyledDiv>

      <Centereddiv>
        <Circle  backgroundColor={bulbColor}/>
        <Button onClick={handleClick}>{buttonText}</Button>
        </Centereddiv>



      <Centereddiv>
        <Circle  backgroundColor={bulbColor2}/>
        <Button onClick={handleClicktwo}>{buttonText2}</Button>
        </Centereddiv>



    </StyledDiv>
    </Container>
    
  )
}

export default Content