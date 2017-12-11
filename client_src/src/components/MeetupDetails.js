import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class MeetupDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            details : ''
        }
    }

    render(){
        return(
            <div>
                <Link to=""></Link>
                <h1>
                    Details
                </h1>
            </div>
        )
    }

}

export default MeetupDetails;