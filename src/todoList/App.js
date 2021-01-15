import {useState} from 'react';
import Header from './Header';
import AddToDo from './AddToDo';
import Todos from './Todos';
import Footer from './Footer'
import './App.css';

const App = () => (
    <div className = "app">
        <Header/>
        <AddToDo/>
        <Todos/>
        <Footer/>
    </div>
)

export default App;