import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './views/user/login'
import Demo01 from "./demo/demo01";
export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      token: localStorage.getItem('toKen')
    }
  }

  render() {
  	let navs = [
		  {
		  	name: '首页',
			  link: 'home'
		  },
		  {
		  	name: '关于我们',
			  link: 'about'
		  }
	  ]
    if(!this.state.token){
      return (
        <div>
	        <Demo01 navs={navs}/>
        </div>
      )
    }else{
      return(
        <Login />
      )
    }
    
    
  }
}

