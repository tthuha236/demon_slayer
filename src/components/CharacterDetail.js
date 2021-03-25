import React from 'react';
import {connect} from 'react-redux';
import './CharacterDetail.css';

class CharacterDetail extends React.Component {
    render() {
        if (!this.props.character) {
            return <div>Select a character</div>
        }
        return (
            <div className="character__detail">
                <div className="character__image">
                    <h3 className="character__title">{this.props.character.name}</h3>
                    <figure className="character__photo">
                        <img src={this.props.character.img_src} alt={this.props.character.name}/>
                    </figure>
                </div>
                <div className="character__description">
                    <p><span>Name (romanji):</span>{this.props.character.name_romanji}</p>
                    <p><span>Occupation:</span>{this.props.character.occupation}</p>
                    <p><span>Gender:</span>{this.props.character.gender}</p>
                    <p><span>Height:</span>{this.props.character.height}</p>
                    <p><span>Weight:</span>{this.props.character.weight}</p>
                    <p><span>Birthday:</span>{this.props.character.birthday}</p>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {character: state.selectedCharacter};
};

export default connect(mapStateToProps)(CharacterDetail);