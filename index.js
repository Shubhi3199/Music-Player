// Action creator
export const selectSong=(song)=>{
    return {     //Action
        type:'SONG_SELECTED',
        payload:song
    };
};