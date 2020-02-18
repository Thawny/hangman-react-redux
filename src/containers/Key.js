import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from "react-redux";
import { clickLetter } from "../actions/index";
import store from "../store/index";

function mapDispatchToProps(dispatch) {
  return {
    clickLetter: letter => dispatch(clickLetter(letter))
  };
}

class Key extends Component {

    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        played: PropTypes.bool.isRequired,
        clickLetter: PropTypes.func.isRequired
    }

    handleClick(e) {
        if (this.props.played) {
            return;
        } else {
            this.props.clickLetter(this.props.placeholder);
        }
    }

    render() {
        const {placeholder, played} = this.props
        return (
            <span className={played ? "shaded" : ""} onClick={this.handleClick.bind(this)} >
                {placeholder}
            </span>
        )
    }

}

Key = connect(
  null,
  mapDispatchToProps
)(Key);

export default Key
