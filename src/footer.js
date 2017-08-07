/*
In this assignment, you will build a minimal version of a web audio player app, 
allowing users to play songs on the web app while browsing music information.
Instructions

Download the starter code here. The goal is to create a React app that lets users listen to music while 
browsing through your application. In order for the assignment to be considered complete, your app must 
fulfill the following requirements:

Users can navigate between "songs list" page and "individual song details" page
There must be a media control UI that let users play and pause a song from any page


The media control UI must function well. That is,
Pressing the next or prev button while a song is being played will change the song and play it
Pressing the next or prev button while no song is being played will only change the song
Change in "current song" should be displayed to the user



The "songs list" page should show the list of song title with a link to the individual song page,
 and also a convenient play button next to it that will play that particular song
The "individual song details" page should show the song title and description, and also a convenient 
play button that will play that particular song
Hints

HTML audio tag and its corresponding JavaScript methods
How to pass props to this.props.children
Some Component Lifecycle methods come with parameters (e.g., prevProps, prevState)
mp3 files from purple-planet.com
*/
/*
import React, { Component } from 'react';

class Footer extends React.Component {

constructor(props){
super(props)



this.state = { // set current song

  song: props.song,
  index: 0,
  playing: false
  

}



this.changeSong = this.changeSong.bind(this);



}


changeSong(direction){

    this.setState ({id: this.state.index + direction})

}

  render() {

    const songs = this.props.route.songs
    const chosenSong = songs.find((song) => {return song.id === this.state.id})  


const musicArray = [
'songOne.mp3',
'songTwo.mp3',
'songThree.mp3',
'songFour.mp3'
];

                             return (
							
								

							<div className="footer">
							<div id="content">
						<h2> Funciona De La Musica </h2>
						</div>


			    	<button onClick={()=>{this.changeSong(-1)}}
						    disabled={this.state.index === 0}>Previous</button>


						<audio id="myPlayer" src={chosenSong.source}>
						You Don't have HTML5
						</audio>
           

			    	<button onClick={()=>{this.changeSong(1)}}
						    disabled={this.state.index === 0}> Forward</button>
    
   <p>&copy; 2017 cosa eso dame dolor de cebeza.</p>



<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>

</div>


    );
  }
}


export default Footer;
*/


import React, { Component } from 'react';

class Footer extends React.Component {
  constructor(){
    super()
    this.state = {
      id: 0,
      playState: false, // true means playing
    }
    this.playPause = this.playPause.bind(this);
    this.playNew = this.playNew.bind(this);
    this.changeSong = this.changeSong.bind(this);
  }


  playPause() {
    if (this.state.playState) {
      document.getElementById("myPlayer").pause();
      this.setState ({playState: false});
    } else {
      document.getElementById("myPlayer").play();
      this.setState ({playState: true});
    }
  }

  playNew(newId) {
    if ( newId != this.state.id ) {
      this.setState ({id: newId, playState: true});
      document.getElementById("myPlayer").play()
    } else if (this.state.playState) {
      document.getElementById("myPlayer").pause();
      this.setState ({playState: false});
    } else {
      document.getElementById("myPlayer").play();
      this.setState ({playState: true});
    }
  }

	changeSong (counter) {
    this.setState ({id: this.state.id + counter})
  }

  componentDidUpdate() {
    if (this.state.playState) {
      document.getElementById("myPlayer").play()
    }
  }

  render() {
    const songs = this.props.route.songs
    const chosenSong = songs.find((song) => {return song.id === this.state.id})    

    return (
      <div className="App">
        {React.cloneElement(this.props.children, 
          {songs: songs, 
          playingSongId: this.state.id, 
          playState: this.state.playState, 
          playNew: this.playNew}
        )}
        <audio id="myPlayer" src={chosenSong.source}>
          Your browser does not support HTML5 video.
        </audio>
        
        <p>Now Playing:</p>
        <h3>{chosenSong.title}</h3><br />
        <p>{this.state.id +1} / {songs.length}</p>
        <button onClick={() => {this.changeSong(-1)}} disabled={this.state.id<=0}>
          <i className="backward" aria-hidden="true"></i>
        </button>
        <button onClick={() => {this.playPause()}}>
          {this.state.playState ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="forward" aria-hidden="true"></i> }
        </button>
        <button onClick={() => {this.changeSong(1)}} disabled={this.state.id>=(songs.length-1)}>
          <i className="forward" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default Footer;


