import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import movie from './movie.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App movie={movie} />, document.getElementById('root'));
registerServiceWorker();
