import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Start from './Start';
import Comp from './Comp';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory,Link } from 'react-router'

class RR extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={App}></Route>
                <Route path={'/getstart'} component={Start}></Route>
                <Route path={'/Comp'} component ={Comp}></Route>
            </Router>

            // <BrowserRouter>
            //     <div>
            //         <Route path='/' component={App} />
            //         <Route path='/getstart' component={Start} />
            //     </div>
            // </BrowserRouter>
        )
    }
}

ReactDOM.render(<RR />, document.getElementById('root'));
registerServiceWorker();
