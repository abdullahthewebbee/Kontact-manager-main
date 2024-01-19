import React, { Component } from 'react';

export default class AddContact extends Component {
    state = {
        name:"",
        email:"",
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert('All the fields are mandatory');
            return;
        }
        this.props.addContactHandler(this.state)
        this.setState({name:"",email:""});
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="ui grid container">
          <div className="row"></div>
            <div className="ten wide column">
                <form className="ui form" onSubmit={this.add}>
                <h1 className="ui dividing header">Add Contact</h1>
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
                    <div className="field">
                        <div className="ui checkbox">
                        <input type="checkbox" tabIndex="0" required />
                        <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <button className="ui button black" type="submit">Add</button>
                    </form>
                </div>
                <div className="two wide column"></div>
              </div>
        )
        
    }
}
