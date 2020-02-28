import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {users:[]};
  }

  componentDidMount(){
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(json => this.setState({users: json.data}));
  }

  render(){
    return (
      <div className='wrapper'>
        <h1 className='title'>users</h1>
        <ul className='list'>
          {
            this.state.users.length == 0 ? '' : this.state.users.map(user => (
                <li className='item' key={user.id}>
                  <img className='image' src={user.avatar}/>
                  <p className='email'>{user.email}</p>
                  <p className='name'>{user.first_name} {user.last_name}</p>
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default App;