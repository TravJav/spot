import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import './index.css';





function Song(photo,source, title, description, id) {
  this.photo =  photo;
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;

}


const songInfo = [

{
imageSource:"/super.png",
Artist: "La Superable"
},
{
imageSource:"/jBalvin.png",
Artist: " J Balvin"
},
{
imageSource:"/nicky.png",
Artist: "NickyJam"
}
]




const songs = [
  new Song('/songOne.mp3', 'Un cancion de latino americano mas mejor, el es famoso de hits como travasura, hasta la amanacer ', 0),
  new Song('/songTwo.mp3', 'Cancion de Republica Dominicana mas popular, ', 1),
  new Song('/songThree.mp3', 'Un artiste de Colombia mas popular, el fui de stado Ohio cuando el es niño y comenzar su adventura en musica ', 2)
]





ReactDOM.render((
  <Router history={browserHistory}>
    <Route songs={songs} path="/" component={App}> 
      <IndexRoute component={SongsList} />
      <Route path="songs" component={SongsList} />
      <Route path="songs/:id" component={SongDetails} />
    </Route>
  </Router>
),document.getElementById('root'));


