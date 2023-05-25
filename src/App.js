import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  //   state = {
  //     isLoggedIn: false,
  //   }

  // if - else condition rendering

  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state

  //     if (isLoggedIn === true) {
  //       return <button>Logout</button>
  //     }
  //     return <button>Login</button>
  //   }

  render() {
    const {isLoggedIn} = this.state
    // let authButton

    // if - else using Element Variables

    // if (isLoggedIn === true) {
    //   authButton = <button>Logout</button>
    // } else {
    //   authButton = <button>Login</button>
    // }
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />

        {/* // if - else condition rendering */}
        {/* {this.renderAuthButton()} */}

        {/* if - else using Element Variables  */}
        {/* {authButton} */}

        {/* using Ternary operator */}
        {/* {isLoggedIn ? <button>Logout</button> : <button>Login</button>} */}

        {/* using Ternary operator null values */}
        {isLoggedIn ? <button>Logout</button> : null}
      </div>
    )
  }
}

export default App
