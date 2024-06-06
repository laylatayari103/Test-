/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    leading: {
      '22.5': '22.5px',
      '30': '30px',
    },
    fontSize:{
      '20':'20px',
      '15':'15px',
      '14':'14px',
      '13':'13px',
    },
    fontWeight:{
      '700':'700px',
      '400':'400px',
      '600':'600px'
    },
    fontFamily:{
      'sans':["Open Sans"],
    },
    colors:{
      'white':'rgba(255,255,255,1)',
      'blue':'#1F81B9',
      'black':'#333333',
      'gray':'#DDDDDD',
      'InstructionGray':' #AAAAAA',
      'red':' #D44848',
      'textarea':'#BBBBBB',
    },
    boxShadow:{
      'box':'0px 2px 12px 0px rgba(0,0,0,0.1)',
    },
    borderRadius:{
      '20':'20px',
      '1':'1px',
      '8':'8px',


    },
    extend: {
      backgroundImage:{
      'background':'linear-gradient(to bottom right, #33A4E3, #B0EFB3 )',
    },
    },
  },
  plugins: [],
} 
