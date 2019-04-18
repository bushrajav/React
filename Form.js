import React from 'react';
const Form=(props)=>{
return (
<form onSubmit={(event)=>props.addForm(event)} >
	 <input type="text" onChange={(event)=>props.currentValue(event)} value={props.inputValue}/>
	 <button type="submit">Add Todo item</button>
	 
	 </form>



);


}
export default Form;