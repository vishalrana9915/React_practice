import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import css from '../css/Login.css';

export default class Login extends Component{
	constructor(props){
		super(props);
		this.state = {auth:false,data: {}};
    	this.login = this.login.bind(this);
	}

	login(ev){
		console.log(ev)
		axios.post('/login')
      .then(function(response) {
      	if(response.responseCode == 200){
      	ev.setState({data: response.data});
        ev.setState({auth: true});	
      	}
      });
	}

	render(){
		return(
				<div>
	      			<form onSubmit={this.login}>
					  
					 <div className ="container">
					  <fieldset>
					    <label><b>Username</b></label>
					    <input type="text" placeholder="Enter Username" name="uname" value={this.state.email} onChange={this.handleEmail}></input>

					    <label><b>Password</b></label>
					    <input type="password" placeholder="Enter Password" name="psw"></input>

					    <button onClick={this.closeModal}>Login</button>
					    <label>
					      <input type="checkbox" name="remember"></input> Remember me
					    </label>
					   </fieldset>
					  </div>

					  <div className="container">
					    <button type="button" className="cancelbtn">Cancel</button>
					    <span className="psw">Forgot <a href="#"><code>password?</code></a></span>
					  </div>
					</form>
      			</div>
			)

	}



}
