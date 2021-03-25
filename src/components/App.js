import React from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

const pageOne = () => {
    return (
        <div className="content">
            <CharacterList group="Demon slayer"/>
            <CharacterDetail />
        </div>
    )
};


const pageTwo = () => {
    return (
        <div className="content">
            <CharacterList group="Hashira"/>
            <CharacterDetail />
        </div>
    )
};

const pageThree = () => {
    return (
        <div className="content">
            <CharacterList group="Demon"/>
            <CharacterDetail />
        </div>
    )
};

const App = () => {
       return  (
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/demon-slayer" component={pageOne}></Route>
                <Route path="/hashira" component={pageTwo}></Route>
                <Route path="/demon" component={pageThree}></Route>
            </BrowserRouter>
        </div>
       )
};

export default App;