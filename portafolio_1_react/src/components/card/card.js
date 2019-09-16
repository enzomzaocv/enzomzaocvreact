import React from 'react';

const Card=({username,nombre, email})=>{
	return(
		<div className=" mw5 ma2 items-center ba br2 b--near-white shadow-3 grow pointer" >
			<img src="http://placekitten.com/g/300/150" className="w-100 ba br2 b--near-white " alt="kitten looking menacing."/>
			<div className='pa1'>
				<p className='tl f4'>{nombre} </p>
				<p className='tr f5'>{username}</p>
				<p className= 'tl truncate f6'>{email}</p>
			</div>
		</div>
		)
}

export default Card;