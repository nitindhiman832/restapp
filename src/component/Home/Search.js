import React, {Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const url = "https://edurekaapidata.herokuapp.com/city";
const rurl = "https://edurekaapidata.herokuapp.com/rest?city=";

class Search extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            city :'',
            rest :'',
            imgurl:'',
            username:'',
        }
    }
    renderCity = (data) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.city}>{item.name} | {item.city_name}</option>
                )
            })
        }
    }
    renderRest = (data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>{item.name} | {item.locality} </option>
                )
            })
        }
    }
    handleCity=(event)=>{
        console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${rurl}${cityId}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({rest:data})
        })
    }
    handleRest = (event)=>{
        this.props.history.push(`/details/${event.target.value}`)
    }
    conditionalButton = () =>{
        console.log(sessionStorage.getItem('username'))
        console.log(">>>>>>>this.state",this.state)
        if(sessionStorage.getItem('username')==null||sessionStorage.getItem('username')==undefined){
            return(
                <a href='https://github.com/login/oauth/authorize?client_id=089406082637802259c4'>
                            Login with Git
                        </a>
            )
        }
        else{
            return(
                <>
                <img src={this.state.imgurl} style={{height:100,width:100}}/>
                 Hi {this.state.username}
            </>

            )
        }
    }
    render() {
        console.log(">>>>>>",this.props);
        return(
            <React.Fragment>
                 <div className="imageContainer">
                    <div style={{textAlign:'right'}}>
                        {this.conditionalButton()}
                        <a className="fb myfont" href="https://www.facebook.com/" target="_blank">
                            <img src="/images/facebook.png" className="social_logo"/>
                        </a>
                        <a className="yt myfont" href="https://www.youtube.com/developerfunnel" target="_blank">
                            <img src="/images/youtube.png" className="social_logo"/>
                        </a>
                    </div>
                    <div id="logo">
                        <b>e!</b>
                    </div>
                    <div id="heading">
                        Find Bést Restaurants, Cafés, bars
                    </div>
                    <div className="locationSelector">
                        <select className="dropdown" onChange={this.handleCity}>
                            <option value="1" >SELECT CITY</option>
                          {this.renderCity(this.state.city)}
                        </select> 
                        <select className="dropdown" onChange={this.handleRest}>
                        <option value="1" >SELECT RESTAURANT</option>
                           {this.renderRest(this.state.rest)}
                        </select>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            let requestData = {
                code:code
            }
            console.log(">>>>requested data",requestData)
            fetch('http://localhost:6700/users',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(requestData)
            })
            .then((res)=>res.json())
            .then((data)=>{
                var user = data.login;
                var img = data.avatar_url
                sessionStorage.setItem('username',user)
                fetch(url,{method:'GET'})
                .then((res)=>res.json())
                .then((data)=>this.setState({city:data,username:user,imgurl:img}))
            })
        }
        
    }
}
export default withRouter(Search);