import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';
import home from "./views/home/home.jsx"

function App() {
  return (
    <div>    
    <Route exact path="/" component={home} />
    </div>
  );
}

export default App;
