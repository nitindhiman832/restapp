import React,{Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../../Header';
import {Link} from 'react-router-dom'

const url = "https://edurekaapidata.herokuapp.com/rest"

class Details extends Component {
    constructor(){
        super()
        this.state={
            details:''
        }
    }
    render(){
        let {details} = this.state
        return(    
            <>
            <Header/>
            <br/>
            <div className="container">
                
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" 
                                style={{height:350,width:1100}}src={details.thumb}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                        </div>
                        <hr/>
                        <Tabs>
                                    <TabList>
                                    <Tab>Over View</Tab>
                                    <Tab>Content</Tab>
                                    </TabList>
                                    <TabPanel>
                                    <h2>About this place</h2>
                                    <p>{details.name} is simply dummy text of 
                                    the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in 
                                    the 1960s with the release of Letraset sheets containing 
                                    Lorem Ipsum passages, and more recently with desktop publishing                                        software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </TabPanel>
                                    <TabPanel>
                                    <h2>Contact Us</h2>
                                    <h3>{details.address}</h3>
                                    <h3>Phone no:122324478</h3>
                                    </TabPanel>
                        </Tabs>
                        <Link to="/" className="btn btn-danger">Back</Link>&nbsp;
                        <Link to={`/booking/${details.name}`} className="btn btn-success">Proceed Order</Link>
                    </div>
                </div>
            </div>
        </>
        )
    }
    componentDidMount(){
        const hotelId=this.props.match.params.id;
        axios.get(`${url}/${hotelId}`)
        .then((res)=>{this.setState({details:res.data[0]})})
    }
}
export default Details;