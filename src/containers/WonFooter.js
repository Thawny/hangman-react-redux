import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from "react-redux";
import { startNewGame } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    startNewGame: letter => dispatch(startNewGame())
  };
}

class WonFooter extends Component {

    static propTypes = {
        startNewGame: PropTypes.func.isRequired,
    }

    handleClick(e) {
        this.props.startNewGame();
    }

    render() {
        return (
            <div>
            <h3>Félicitations!</h3>
            <button onClick={this.handleClick.bind(this)}>recommencer</button>
            </div>
        )
    }

}

WonFooter = connect(
  null,
  mapDispatchToProps
)(WonFooter);

export default WonFooter
