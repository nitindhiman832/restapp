import React,{Component} from 'react';
import axios from 'axios';
const url ="https://edurekaapidata.herokuapp.com/rest?mealtype="

class SortFilter extends Component {
    Sortfilter = (event) =>{
        let mealId = sessionStorage.getItem('mealId');
        let sort = event.target.value;
        const costUrl=`${url}${mealId}&sort=${sort}`
        axios.get(costUrl)
        .then((response)=>{this.props.restPerSort(response.data)})
    }
    render() {
        return(
            <>
                <center>Sost</center>
                <div onChange={this.Sortfilter} >
                    <label className="radio">
                    <input type="radio" value="1" name="cuisine"/>Low - High
                    </label>
                    <label className="radio">
                    <input type="radio" value="-1" name="cuisine"/>High - Low
                    </label>
                </div>
            </>
        )
    }

}
export default SortFilter;