import styled from 'styled-components';

 export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor }; 
  margin: 10px;
`;


export const Centereddiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   
`;


 export const StyledDiv = styled.div`
   display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;
  border: 10px solid black; 
  
`;

export const Button=styled.button`
  background-color: #86ad87; 
  font-size: 16px;
  cursor:pointer;
`;


export const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`