import React from 'react';
import Card from './card';

const CardList = ({elemento})=>{
    console.log('cardlist',elemento);
    return (
        <div className='flex flex-wrap justify-center  mh2'>
            {elemento.map(item =>{
                return (<Card key={item.id} username={item.username} nombre={item.name} email={item.email}/>)
                })
            }
	   </div>
    )
}

export default CardList;