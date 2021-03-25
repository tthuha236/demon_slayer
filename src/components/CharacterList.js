import React from 'react';
import {connect} from 'react-redux';

import { selectCharacter } from '../actions';

import './CharacterList.css';

class CharacterList extends React.Component {
    renderList(){
        if (!this.props.characters) return null;

        return this.props.characters.map(character => {
            return (
                <div key={character.id} className="character__item"
                onClick={() => this.props.selectCharacter(character)}>
                    <figure 
                    className={`character__img ${this.props.selectedCharacter && character.id===this.props.selectedCharacter.id? "red-border": ""}`}>
                         <img src={character.ava_src} alt={character.name}/>
                    </figure>
                    <div className="character__name">{character.name}</div>
                </div>
            )
        })
    }

    render(){
        return <div className="character__list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        characters: state.characters.filter(character => character.occupation===ownProps.group),
        selectedCharacter: state.selectedCharacter
    }
};

export default connect(mapStateToProps, {selectCharacter})(CharacterList);