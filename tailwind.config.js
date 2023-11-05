/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        josefin:"'Josefin Sans', sans-serif"
      },
      colors:{
        // Primary
        Desaturated_Red:'hsl(0, 36%, 70%)', 
        Soft_Red: 'hsl(0, 93%, 68%)',
        // Neutral
        Dark_Grayish_Red:'hsl(0, 6%, 24%)' ,
        Dark_Grayish_Red:'hsl(0, 6%, 24%)' ,
        _1_from:'hsl(0, 0%, 100%)',
        _1_to:'hsl(0, 100%, 98%)',

        _2_from :'hsl(0, 80%, 86%)', 
        _2_to:'hsl(0, 74%, 74%)',
      },
      
    },
  },
  plugins: [],
}

