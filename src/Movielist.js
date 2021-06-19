import React from 'react';
import {Card} from 'react-bootstrap';
import StarRatingComponent from 'react-Star-Rating-Component';


export const Movielist = () => {
    return (
        <div className="Movielist">
         {props.movies.map((el) =>(
         <div className="movies">
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
     {el.descripton}
    </Card.Text>
   
  </Card.Body>
</Card>

</div>

))};

        </div>

    );
};
export default Movielist;
