import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class AddMeetup extends Component{

    addNewMeetup(newMeetup){
        axios.request({
            method : 'post',
            url : 'http://localhost:3000/api/meetups',
            data : newMeetup
        }).then(response => {
            this.props.history.push('/');
        }).catch(e => console.log(e));
    }

    onSubmit(e){
        const newMeetup ={
            name : this.refs.name.value,
            city : this.refs.city.value,
            address : this.refs.address.value
        }

        this.addNewMeetup(newMeetup);
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h1>
                    Add Meetup
                </h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" />
                        <label htmlFor="name">City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" />
                        <label htmlFor="name">Address</label>
                    </div>
                    <input type="submit" value="save" className="btn green" />
                </form>

            </div>    
        )

   }

}

export default AddMeetup;