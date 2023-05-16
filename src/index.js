import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './js/App';
import Home from './js/home';
import reportWebVitals from './js/reportWebVitals';

class SubApp extends React.Component {
  render() {
    return (
      <div className="subApp">
        {/* <MantineProvider withGlobalStyles withNormalizeCSS> */}
          <div>
            <div><App/></div>
            <div><Home/></div>
          </div>
        {/* </MantineProvider> */}
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SubApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
