import React,{Component} from 'react';
import axios from 'axios';

const url ="https://edurekaapidata.herokuapp.com/rest?mealtype="
class CuisineFilter extends Component {
    Cuisinefilter = (event) =>{
        let mealId = sessionStorage.getItem('mealId');
        let cuisineId = event.target.value;
        let cuisineUrl;
        if(cuisineId==''){
            cuisineUrl=`${url}${mealId}`
        }else{
            cuisineUrl=`${url}${mealId}&cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
        .then((response)=>{this.props.restPerCuisine(response.data)})
    }
    render() {
        return(
            <>
                <center>Cuisine</center>
                <div onChange={this.Cuisinefilter}>
                    <label className="radio">
                    <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                    <input type="radio" value="" name="cuisine"/>North India
                    </label>
                    <label className="radio">
                    <input type="radio" value="" name="cuisine"/>South India
                    </label>
                    <label className="radio">
                    <input type="radio" value="" name="cuisine"/>Chinese
                    </label>
                    <label className="radio">
                    <input type="radio" value="" name="cuisine"/>Fast Food
                    </label>
                    <label className="radio">
                    <input type="radio" value="" name="cuisine"/>Street Food
                    </label>
                </div>
            </>
        )
    }

}
export default CuisineFilter;