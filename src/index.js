import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './components/App';
import store from "./redux/store";
import { Provider } from "react-redux";
const theme = createTheme(
  {
    palette:{
      mode:'light',
      primary:{
        main:"#04023C",
        light:'#04023C',
        dark:"#0E0B79",
          },
      secondaire:{
        main:"#A10046",
        light:'#A10046',
        dark:"#C10C5B",
          },
          text:{
            primary:"#FFF",
            secondary:"#A10046"
          }
    }
  }
)  

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Router>
  <React.StrictMode>
  <Provider store={store}>
    <App  />
    </Provider>
  </React.StrictMode>
  </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

