import React from "react";

class ClientForm extends React.Component{

state = {
    nouveauClient: ''
}

handleChange = (event) => {
    const value = event.currentTarget.value
    this.setState({nouveauClient : value} )
}

handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.nouveauClient

    this.props.onClientAdd({id, nom})
    this.setState({nouveauClient: ""})
    }
render(){
 
   
    return ( 
    <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.nouveauClient} onChange={this.handleChange}placeholder="entrez votre texte"></input>

        <button type="submit" >Confirmer</button>

    </form>
    )
}

}

export default ClientForm;