import React from 'react';
import './App.css';
import Listitem from './Listitem';


const List=(props)=>{
return (
<ul>
	 {props.allValues.map((val,i)=>{
		return (
		<Listitem
		key={i}
		i={i}
		allValues={val}
		tickBox={props.tickBox}
		remove={props.remove}

		/> )
	 })}
	 </ul>
	 );
	 }
	 export default List;