import React from "react";
import { connect } from 'react-redux';
import { selectSong } from "../actions";

class SongList extends React.Component {
    renderList(){
        return this.props.songs.map((song)=>{
            return (
                    <div>
                        <div className="ui middle aligned divided list">
                            <div className="item" key={song.title}>
                                <div className="right floated content">
                                    <button className="ui button"
                                            onClick={()=>this.props.selectSong(song)}
                                    >
                                        Add
                                    </button>
                                </div>

                                    <div className="content">
                                        {song.title}
                                    </div>
                            </div>
                        </div>
                    </div>
            );
        })
    }
        render() {

        return (
            <div>
               {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {songs: state.songs};
};

export default connect(mapStateToProps, {selectSong: selectSong})(SongList);