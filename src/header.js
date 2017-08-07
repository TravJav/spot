import React, { Component } from 'react';
import './header.css';
class Header extends Component {







  render() {

    return (
      <div className="header">





      </div>
    );
  }
}


export default Header;


/*

const imageArray = [
	'http://imgur.com/9itd49u.png',
	'http://imgur.com/n19BXfZ.png',
	'http://imgur.com/VBwQmzA.png',
	'http://imgur.com/nawDxVv.png',
];

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			images: props.images,
			index: 0
		}

		this.changeImage = this.changeImage.bind(this)
	}

	changeImage(direction) {
		this.setState({
			index: this.state.index + direction
		})
	}

	render() {
		let imagesJSX = this.state.images.map((imageSource, i)=> {
			return <Image source={imageSource} 
			              visible={i===this.state.index }/>
		}) 

		return (
			<div>
				<h1>Calvin Carousel</h1>
			    <div>
			    	<button onClick={()=>{this.changeImage(-1)}}
						    disabled={this.state.index === 0}>Previous</button>
			      	<span>{this.state.index+1} of {this.state.images.length}</span>
			      	<button onClick={()=>{this.changeImage(1)}}
						    disabled={this.state.index === this.state.images.length-1}>Next</button>
			    </div>
				{imagesJSX}
			</div>			
		)
	}
}

const Image = (props) => {
	return (
		<div>
			<img src={props.source} 
				 style={
						 {
							 display : props.visible ? 'block' : 'none'
						 }
				}/>
		</div>
		)
}

ReactDOM.render(<App images={imageArray} />, document.getElementById('app'));
*/