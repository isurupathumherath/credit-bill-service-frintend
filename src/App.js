import React from 'react';
import './App.css';
import Layout from './Layout/Layout'
import LoginForm from './components/login/login'
import CustomerAdd from './components/CustomerAdd';

const App = () => {
  return (
    <div>
     <Layout />
     <CustomerAdd/>
   

    </div>
  );
}

export default App;
