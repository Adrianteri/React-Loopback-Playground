import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class EditMeetup extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : '',
            name : '',
            city : '',
            address : ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    getMeetupDetails(){
        axios.get("http://localhost:3000/api/meetups")
        .then( response => {
            this.setState({
                id : response.data.id,
                name : response.data.name,
                city : response.data.city,
                address : response.data.address
            }, () => {
                //console.log(this.state);
            })
        })
        .catch(err => console.log(err))
    }

    onSubmit(e){
        const currentMeetup ={
            name : this.refs.name.value,
            city : this.refs.city.value,
            address : this.refs.address.value
        }

        this.editMeetup(currentMeetup);
        e.preventDefault();
    }
    
    handleInputChange(c){
        const target = c.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    editMeetup(currentMeetup){
        axios.request({
            method : 'put',
            url : `http://localhost:3000/api/meetups/${this.state.id}`,
            data : currentMeetup
        }).then(response => {
            this.props.history.push("/");
        }).catch(e => console.log(e));
    }

    componentWillMount(){
        this.getMeetupDetails();
    }

    render(){
        return(
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h1>
                    Edit Meetup
                </h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name"  value={this.state.name} onChange={this.handleInputChange} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" value={this.state.city}onChange={this.handleInputChange} />
                        <label htmlFor="name">City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange} />
                        <label htmlFor="name">Address</label>
                    </div>
                    <input type="submit" value="save" className="btn green" />
                </form>

            </div>    
        )

   }

}

export default EditMeetup;