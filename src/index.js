import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// a variable declared with const cannot be changed
// a variable declared with let can be changed
//but if a variable is an array or object
//it's value can get altered

// const para = {
//     text: 'Columbae sont timidae'
// };

// class Hello extends React.Component{
//     render(){

//         para.iAmNewPara = 'In vino veritas';

//         return(
//             <div>
//                 <h2>{para.text}</h2>
//                 <p>{para.iAmNewPara}</p>
//             </div>
//         );
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
