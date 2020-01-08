import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({questions}) => (
  <ul>
      {questions.map(questions =>
          <li key={questions.id}>{questions.category} | Trailhead: {questions.question}</li>
      )}
  </ul>
);

export default App;
