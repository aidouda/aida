import React, { Component } from 'react';
import StarRatingComponent from 'react-Star-Rating-Component';

this.state = {
    rating: 1
  };
  onStarClick=(nextValue, prevValue, name) =>{
    this.setState({rating: nextValue});


    
  }

export default class Rating extends Component {
    render() {
        return (
            <div>
                <StarRatingComponent starCount={5} 
                value={this.state.rating} 
                onStarClick={this.onStarClick}/>
            </div>
        )
    }
}
