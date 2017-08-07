/*

Download the starter code here. The goal is to create a React app that lets users listen to music while browsing through your application. In order for the assignment to be considered 
complete, your app must fulfill the following requirements:

Users can navigate between "songs list" page and "individual song details" page
There must be a media control UI that let users play and pause a song from any page
The media control UI must function well. That is,
Pressing the next or prev button while a song is being played will change the song and play it
Pressing the next or prev button while no song is being played will only change the song
Change in "current song" should be displayed to the user
The "songs list" page should show the list of song title with a link to the individual song page, and also a
 convenient play button next to it that will play that particular song
The "individual song details" page should show the song title and description, and also a convenient play 
button that will play that particular song
Hints

*/


import React, { Component } from 'react';
import Footer from './footer'
import Header from './header'
import {Link} from 'react-router'; 
import {songInfo} from './index.js'
class App extends Component {


constructor(props){
super();




this.state = {

  detail_id: 0



}


this.details = this.details.bind(this);
var ButtonOne = this.button;


}



details(){
console.log("button hit");


  return(

<div>  




</div>

  );

}




  render() {
   const songs = this.props.route.songs;
  const songInfo = this.props.songInfo;

    return (
      <div className="App">

      <div className="head"> 
        <Header/>




<div class="row">
 <div class="col-md-2 col-md-offset-1">
   <h1> JBalvin </h1>
  <Link to="/song"> Details </Link>  
   <img src={require('/Users/travishaycock/bs_projects/midterm/spotify-clone/public/photos/jBalvin.png')} />
 </div>


 <div class="col-md-2">
    <h1> NickyJam</h1>
         <Link to="/song"> Details </Link>  
       <img  src={require(	'/Users/travishaycock/bs_projects/midterm/spotify-clone/public/photos/nicky.png')} />
 </div>



 <div class="col-md-2">
    <h1> La Superable</h1>
  <Link to="/song/"> Details </Link>  
       <img  src={require('/Users/travishaycock/bs_projects/midterm/spotify-clone/public/photos/super.png')} />
 </div>
 


 </div>

</div>


    <div className="Footer"> </div>

   <Footer/>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
      </div>
    );
  }





}

export default App;
