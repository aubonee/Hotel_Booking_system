import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import AuthProvider from './providers/AuthProvider';
import {RouterProvider} from "react-router-dom";

import router from './route/Route';
//import axios from 'axios';

// axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>

</React.StrictMode>

);
