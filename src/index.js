import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const questionsList = [
    {id: 1, category: "Geography", question: "What's the capital of China?"}
    , {id: 2, category: "Entertainment", question: "How many dwarves is Snow White friends with?"}
    , {id: 3, category: "History", question: "Who invented the vaccine?"}
    , {id: 4, category: "Arts & Literature", question: "How long was Jules Verne's trip around the world?"}
    , {id: 5, category: "Science & Nature", question: "What color are our corpuscles?"}
    , {id: 6, category: "Sports & Leisure", question: "How often does the Football World Cup take place?"}


];

ReactDOM.render(
    <App questions={questionsList}/>
    , document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
