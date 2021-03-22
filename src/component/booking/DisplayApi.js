import React, { Component} from 'react';
import axios from 'axios';
import ViewBooking from './displayBooking'

const url ="http://edurekaapidata.herokuapp.com/orders"

class DisplayApi extends Component{
    constructor(){
        super()
        this.state={
            booking:''
        }
    }
    render(){
        return(
            <>
                <ViewBooking bookdata={this.state.booking}/>
            </>
        )
    }
    componentDidMount(){
        axios.get(url).
        then((response)=>{this.setState({booking:response.data})})
    }
}

export default DisplayApi;