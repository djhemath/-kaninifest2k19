import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom'

import "./index.css"

ReactDOM.render(<BrowserRouter>
                    <App />
                </BrowserRouter>,
                document.querySelector("#root")
);