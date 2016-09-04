import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return(
            <h1>It works!</h1>
        );
    }
}

const app = document.getElementById('react-container');

ReactDOM.render(<HelloWorld/>, app);
