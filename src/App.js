import React from "react";

import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = { clients: [
          {id:1, nom:"Hugo Ogez"},
          {id:2, nom:"Holly"},
          {id:3, nom:"Margot"}
      ],
      compteur: 0
      // nouveauClient : '' à présent dans clientForm
  };
      this.handleClick = this.handleClick.bind(this)
    }
  
      // handleClick(){
      //     console.log(this.state)
      // }
      // Pour ne pas perdre la référence à this, on peut aussi faire en fonction fléchée
      handleClick = () => {
          const clients = this.state.clients.slice()
          clients.push({id: 4, nom: "Philippe"})
          this.setState({clients : clients})
          }

      // handleSubmit = (event) => {
      //         event.preventDefault();
      //         const id = new Date().getTime();
      //         const name = this.state.nouveauClient

      //         const clients = [...this.state.clients]
      //         clients.push({id: id, nom: name})

      //         this.setState({clients, nouveauClient: ''});
      //         }
     
      // handleChange = (event) => {
      //     const value = event.currentTarget.value
      //     this.setState({nouveauClient : value} )
      // }

      handleDelete = (id) => {
          console.log(id)
          const clients = this.state.clients.slice()
          const index = clients.findIndex(client => client.id === id)
          clients.splice(index, 1)
          this.setState({clients : clients})
      }
          //slice fait une copie du tableau clients
          //splice pour supprimer un élément
          // setState: dans mon state, ce qui m'intéresse c'est de changer la propriété client


      handleAdd = client => {
        const clients = [...this.state.clients]
        clients.push(client)
        this.setState({clients})

          }
      render(){
         
           // On ne peut pas faire simplement this.HandleDelete(client.id) parce que si je mets la ref à handleDelete, ce qui va passer ce n'est pas l'id mais l'évènement (le click)
           // Plutot que de donner en ref une autre fonction, je fais ma fonction fléchée, et le corps de ma fonction fléchée est ma fonction handleDelete
           // Maintenant, si je clique

          

          return <div>
           
             <h1>Liste de clients</h1>
             <button onClick={this.handleClick}>Bonjour</button>

             <button onClick={this.handleClick}>{this.state.compteur} </button>

             <ul>
                 {this.state.clients.map((client) =>
                  <Client client={client} handleDelete={this.handleDelete}/>)}
             </ul>
             

              <ClientForm onClientAdd={this.handleAdd}/>
             
          </div>
      }// En JS, on aurait fait un ientifiant pour l'input du form et faire un querySelector. Avec React, on ne manipule pas le DOM, on laisse le 
      // DOM être manipulé par REACT.
  
}
export default App;