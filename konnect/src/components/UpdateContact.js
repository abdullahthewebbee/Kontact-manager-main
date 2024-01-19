import React, { Component } from 'react';

export default class UpdateContact extends Component {

    constructor(props){
        super(props);
        const {id, name, email} = props.location.state.contact;
        this.state ={
            id,
            name,
            email
        }
    }
    update = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert('All the fields are mandatory');
            return;
        }
        this.props.updateContactHandler(this.state)
        this.setState({name:"",email:""});
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="ui grid container">
          <div className="row"></div>
            <div className="ten wide column">
                <form className="ui form" onSubmit={this.update}>
                <h1 className="ui dividing header">Update Contact</h1>
                <br />
                    <div className="field">
                        <label><h3>Name</h3></label>
                        <input type="text" name="name" placeholder="Full Name"
                        value={this.state.name}
                        onChange={(e)=> {
                            this.setState({name: e.target.value })
                        }}
                        />
                    </div>
                    <div className="field">
                        <label><h3>Email</h3></label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email}
                        onChange={(e)=> {
                            this.setState({email: e.target.value })
                        }} />
                    </div>
                    <button className="ui button black" type="submit">Update</button>
                    </form>
                </div>
                <div className="two wide column"></div>
              </div>
        )
        
    }
}
