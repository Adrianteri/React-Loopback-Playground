import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class MeetupItem extends Component{
    constructor(props){
        super();
        this.state = {
            item : props.item
        }
    }

    render(){
        return(
        <li>
             <Link to={`/meetups/${this.state.item.id}`} className="collection-item">{this.state.item.name}</Link>
        </li>
        )
    }
}

export default MeetupItem;