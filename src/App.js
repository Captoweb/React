import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
    
  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div class='app-wrapper-content'>
                {/*<Route path='/dialogs' component={Dialogs} />*/}
                {/*<Route path='/profile' component={Profile} />*/}
                {/*<Route path='/news' component={News} />*/}
                {/*<Route path='/music' component={Music} />*/}


                <Route path='/dialogs' render={ () => <Dialogs />} />
                <Route path='/profile' render={ () => <Profile posts={props.posts}/>} />
                <Route path='/news' render={ () => <News />} />
                <Route path='/music' render={ () => <Music />} />

            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
