import React from 'react';

const Scroll = (props) =>{
	return (
		<div style={{overflow:'scroll', borfer: '2px solid black', height: '560px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;