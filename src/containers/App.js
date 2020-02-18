import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from "react-redux";
import '../App.css';
import Keyboard from './Keyboard';
import Word from './Word';
import WonFooter from './WonFooter';


const mapStateToProps = state => {
  return { gameIsWon: state.gameIsWon };
};

class App extends Component {

    static propTypes = {
        gameIsWon: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);
        this.props = props
    }

    render() {
        const gameIsWon = this.props.gameIsWon;
        let footer;
        if (gameIsWon) {
            footer = <WonFooter/>;
        } else {
            footer = <div> <Word /> <Keyboard/> </div>
        }
        return (
            <div className="container">
                <h2 className="pendu">Jeu du pendu</h2>
                {footer}
            </div>
        )

    }

}

export default App = connect(mapStateToProps)(App);
