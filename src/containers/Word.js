import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { word: state.word,
           usedLetters: state.usedLetters};
};

class Word extends Component {

    static propTypes = {
        word: PropTypes.string.isRequired,
        usedLetters: PropTypes.object.isRequired
    }

    // Produit une représentation textuelle de l’état de la partie,
    // chaque lettre non découverte étant représentée par un _underscore_.
    // (CSS assurera de l’espacement entre les lettres pour mieux
    // visualiser le tout).
    displayWord(word, usedLetters) {

        return word.replace(/\w/g,
            (letter) => (usedLetters.has(letter) ? letter : '_')
        )
    }

    render() {
        const word = this.props.word;
        const usedLetters = this.props.usedLetters;
        return (
            <div id="word">{this.displayWord(word, usedLetters)}</div>
        )
    }

}

export default Word = connect(mapStateToProps)(Word);
