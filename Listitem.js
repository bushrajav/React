import React from 'react';
const Listitem=(props)=>{
	const {allValues}=props;
return (
<li>
		<input type="checkbox" checked={allValues.done} onChange={(event)=>props.tickBox(event,props.i)}/>
		<span className={allValues.done ? 'ApplyClass':''}>
		{allValues.title}
		</span>
		<input type="submit" value="remove" onClick={()=>props.remove(props.i)}/>
		</li>
		)


}



export default Listitem;