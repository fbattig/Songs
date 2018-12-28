import { combineReducers } from "redux";

const songLists = () => {
  return [
    {
      id: 1,
      title: "song 1",
      duration: "20:12"
    },
    {
      id: 2,
      title: "song 2",
      duration: "20:22"
    },
    {
      id: 3,
      title: "song 3",
      duration: "20:32"
    },
    {
      id: 4,
      title: "song 4",
      duration: "20:42"
    }
  ];
};

const selectSong = (state = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
     
      return action.payload;

    default:
      return state;
  }
};


export default combineReducers( {
    songLists,
    selectSong
});