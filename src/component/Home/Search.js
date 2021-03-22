import React, {Component} from 'react';
import './Search.css';

const url = "https://edurekaapidata.herokuapp.com/city";
const rurl = "https://edurekaapidata.herokuapp.com/rest?city=";

class Search extends Component{
    constructor(){
        super()

        this.state = {
            city :'',
            rest :'',
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
    render() {
        return(
            <React.Fragment>
                 <div className="imageContainer">
                    <div style={{textAlign:'right'}}>
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
                        <select className="dropdown" >
                           {this.renderRest(this.state.rest)}
                        </select>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>this.setState({city:data}))
    }
}
export default Search;