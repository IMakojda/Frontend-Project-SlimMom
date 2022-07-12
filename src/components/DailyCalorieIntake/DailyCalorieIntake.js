import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import Title from './Title.styled';
import Box from './Box.styled';
import Span from './Span.styled';
import BoxFlex from './BoxFlex.styled';
import BoxWraper from './BoxWraper.styled';
import BoxSummary from './BoxSummary.styled';




const fixDate = number =>  String(number).length < 2 ? '0'+ number : number;

const DailyCalorieIntake = () => {
    // eslint-disable-next-line no-unused-vars
    const DailyList = ({})
    const today = new Date();

    
      const formateDate = `${fixDate(today.getDate())}/${fixDate(today.getMonth())}/${today.getFullYear()}`
        
      const left = '000'; 
      const consumed = '000';
      const dailyRate = '000'; 
      const result = '000'; 
      const food = 'All broths / decoctions, oily fish, caviar and meat, mushrooms, cereals (millet, barley, wheat)';
     

        
    
    


  return (
      <Box>
          <BoxSummary>
              <Title>Summary for {formateDate} </Title>
                 <BoxFlex>
                 <BoxWraper>
              <Span>Left</Span>
              <Span>Consumed</Span>
             <Span>Daily rate</Span>
             <Span>n% of normal</Span>
         </BoxWraper><BoxWraper>
          <Span>{left} kcal</Span>
          <Span>{consumed} kcal</Span>
        <Span>{dailyRate} kcal</Span>
        <Span>{result} %</Span>
      </BoxWraper></BoxFlex>
         </BoxSummary>

      
      
      <div><Title>Food not recommended</Title>
      <Span>{food ? food :"Your diet will be displayed here"}</Span></div>
      

      </Box>
      

  )  
};
export default DailyCalorieIntake;