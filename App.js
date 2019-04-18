import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			value:'TodoList',
			inputValue:'',
			allValues:[{title:'write list',done:false},{title:'do work',done:false}]
		}
	}
currentValue=(event)=>{
	event.preventDefault();
	this.setState({
		inputValue:event.target.value
	});
}
	addForm=(event)=>{
	event.preventDefault();
	this.setState({
		allValues:[...this.state.allValues,{title:this.state.inputValue,done:false}],
		inputValue:''
	});
	
	}
	tickBox=(event,i)=>
	{
		const allValues=[...this.state.allValues];
		allValues[i]={...allValues[i]};
		allValues[i].done=event.target.checked;
		this.setState({
			allValues
			
			
		});
	}
	remove=(i)=>{
		const allValues=[...this.state.allValues];
	//	allValues[i]={...allValues[i]};
		allValues.splice(i,1);
		this.setState({
			allValues
			
			
		});
		
	}
	allDone=()=>{
		const allValues=this.state.allValues.map(val=>{
		return {
			title:val.title,
			done:true
			
		}
		})
		this.setState({
			allValues
		});
	}

render() {
	
    return (
      <div>
	 <label> {this.state.value}</label>
	 <Form addForm={this.addForm} 
	 currentValue={this.currentValue} 
	 inputValue={this.state.inputValue}/>
	 
	 <input type="button" onClick={(event)=>this.allDone(event)} value="AllDone"/>
	 <List
	 allValues={this.state.allValues} 
	 tickBox={this.tickBox.bind(this)}
	 remove={this.remove.bind(this)}
	 />
      </div>
    );
  }

}

export default App;

	