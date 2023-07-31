import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import MeetupContext from './context/MeetupContext'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    username: '',
    topics: topicsList[0].id,
    displayErrorMsg: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({
      topics: event.target.value,
    })
  }

  getStatusOfErrMsg = () => {
    const {username} = this.state
    if (username === '') {
      return this.setState({displayErrorMsg: true})
    }
    return this.setState({displayErrorMsg: false})
  }

  render() {
    const {username, topics, displayErrorMsg} = this.state

    return (
      <MeetupContext.Provider
        value={{
          onChangeUserName: this.onChangeUserName,
          onChangeTopic: this.onChangeTopic,
          getStatusOfErrMsg: this.getStatusOfErrMsg,
          username,
          topics,
          displayErrorMsg,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
