import React, { Component } from 'react';
import './App.css';


class App extends Component {

      constructor(props) {
    super(props);
    this.state = {userInput: '',
					list:[]		
				 };
  }

  inputChangeHandler=(event)=>{
	  this.setState({
		  userInput:event.target.value
		});
	}
	listHandler=(userInput)=>{
		let listArray=this.state.list;
		listArray.push(userInput);
		this.setState({
			list:listArray,
			userInput:''
			
		});
		
	}


 render() {
    return (
      <div>
	  <input type="text" value={this.state.userInput} onChange={this.inputChangeHandler}/>
	  <input type="button" onClick={this.listHandler} value="press"/>
	  <ul>
	  {this.state.list.map((val,i)=> <li>{val}</li>)}
	  </ul>
        
</div>
      
    );
  }

}

export default App;

	