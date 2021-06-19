import React from 'react';
import Rating from "./Rating";
const Filter= (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
			<Rating/>
		</div>
	);
};

export default Filter;