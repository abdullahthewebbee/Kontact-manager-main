import React from 'react';
import Image from '../images/lena.png';
import { Link } from 'react-router-dom';

export default function ContactDetails(props) {
    const {name,email} = props.location.state.contact;
    return (
        <div className="main">
            <div className="row"></div>
            <div className="ui card centered">
                <div className="image">
                    <img src={Image} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
        </div>
    )
}
