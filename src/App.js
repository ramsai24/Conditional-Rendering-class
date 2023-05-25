import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  //   state = {
  //     isLoggedIn: true,
  //   }
  state = {
    isLoggedIn: false,
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }

  render() {
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App
