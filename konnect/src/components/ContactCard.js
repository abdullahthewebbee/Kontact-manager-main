import React from 'react';
import Image from '../images/lena.png';
import { Link } from 'react-router-dom';

export default function ContactCard(props) {
    const {id, name, email} = props.contact;
    return (
        <div className="item">
                <div className="right floated content">
                    <h2>
                    <Link to={{pathname: "edit/"+id, state:{contact:props.contact}}}>
                    <i className="edit alternate outline icon"
                        style={{color:"blue",}}>
                    </i>
                    </Link>
                            
                        <i className="trash alternate outline icon"
                        style={{color:"red",}}
                        onClick={() => { props.clickHandler(id) }}>
                            </i>
                            
                    </h2>
                </div>
                <img className="ui avatar image " src={Image} alt={name}></img>
                <div className="content">
                    <Link to={{pathname: "contact/"+id, state:{contact:props.contact}}}>
                    <div className="header"><h3>{name}</h3></div>
                    <div>{email}</div>
                    </Link>
                </div>
                <br />
            </div>
    )
}
