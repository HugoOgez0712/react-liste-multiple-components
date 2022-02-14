import React from "react";

class Client extends React.Component{


render(){


    console.log(this.props.client.nom)
    return (<li>{this.props.client.nom} <button onClick={() => this.props.handleDelete(this.props.client.id)}>Supprimer</button></li>)
}

}

export default Client;