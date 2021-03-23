import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import {Link} from 'react-router-dom';
import Header from '../../Header'
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
import SortFilter from '../filters/sortFilter'

const url="https://edurekaapidata.herokuapp.com/rest?mealtype="

//const url="https://edurekaApiData/rest?mealtype="


class ListingApi extends Component {
    constructor(props){
        super(props)
        this.state={
            restlist:''
        }
    }
    setDataPerFilter=(sortedData)=>{
        this.setState({restlist:sortedData})
    }
    render() {
        console.log(">>>>>>>>",this.state.restlist)
        return(
               
                <div className="row">
                    <Header/>
                    <div style={{marginLeft:'5%'}}>
                        <div className="col-md-2" style={{height:2000}}>
                            <CuisineFilter restPerCuisine={(data)=>{this.setDataPerFilter(data)}} />
                            <CostFilter restPerCost={(data)=>{this.setDataPerFilter(data)}}/>
                            <SortFilter restPerSort={(data)=>{this.setDataPerFilter(data)}}/>
                        </div>
                        <div className="cod-md-10">
                            <ListingDisplay restaurantList={this.state.restlist}/>
                        </div>
                    </div>
                </div>
            
        )
    }
componentDidMount(){
    var mealid = this.props.match.params.id;
    sessionStorage.setItem('mealId',mealid)
    axios.get(`${url}${mealid}`)
    .then((response)=>{this.setState({restlist:response.data})})
}
}
export default ListingApi;