import React,{Component} from 'react';
import './App.css';
import CardList from '../components/card/cardList';
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/NavBar'

class App extends Component{

  constructor(){
    super();
    this.state={
      arrayApi:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => { this.setState({arrayApi:data})})
  }

  render(){
    const {arrayApi} = this.state
    return (arrayApi.length !== 0)?
      <div>
        <NavBar/>
        <CardList elemento={arrayApi}/>
        <Footer/>
      </div>

    :
      <h1>loading</h1>
    
  }
}


export default App;
