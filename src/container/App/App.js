import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Planning from '../Planning/Planning';
import {Provider} from 'react-redux';
import store from '../../store'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider >
                <Provider store={store} >
                    <Planning />
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;

