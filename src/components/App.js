import React from "react";
import SongList from '../songList/songList';
import SongDetails from '../songDetail/songDetails';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row" >
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide" >
       
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
