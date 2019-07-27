import {combineReducers} from "redux";

const songsReducer=()=>{
    return [
        {title:'havanna', duration:'3:50'},
        {title:'despacito', duration:'5:00'},
        {title:'love me like you do', duration:'4:05'},
        {title:'meant to be', duration:'3:20'},
    ];
};

const selectedSongReducer=(selectedSong=null, action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    else return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

