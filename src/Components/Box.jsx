import React from 'react'
import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';
const Box = () => {


  const theme = {
    background: '#1C1C1C',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#1C1C1C',
    headerFontColor: '#A4C840',
    headerFontSize: '15px',
    botBubbleColor: '##333333',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  
  return (
    <>
     <ThemeProvider theme={theme}>

     <ChatBot
  steps={[
    {
      id: '1',
      message: 'Hello there! Welcome to ₱hala Network 👋 ',
      message: 'How Can i help you? ',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ]}
 floating={true}
/>
     </ThemeProvider>
     


    </>
  )
}

export default Box
