import React from 'react';
import './App.css';
import Layout from './container/Layout/Layout'
import Home from './container/pages/Home/Home';
import Routing from './Routing/Routing';


function App() {
  return (
    <>
    <Layout>
        <Routing/>
    </Layout>
    </>
  );
}

export default App;
