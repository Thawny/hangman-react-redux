import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from "react-redux";
import Key from './Key';

const mapStateToProps = state => {
  return { keyboard: state.keyboard };
};

class Keyboard extends Component {

    static propTypes = {
        keyboard: PropTypes.object.isRequired,
    }

    generateKeys() {
        return this.props.keyboard.map((key, index) => (
            <Key placeholder={key.placeholder}
            played={key.played} key={index} />
        ))
    }

    render() {
        return (
            <div>
            {this.generateKeys()}
            </div>
        )
    }

}

export default Keyboard = connect(mapStateToProps)(Keyboard);
