import {withRouter} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'
import './index.css'

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

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        onChangeUserName,
        onChangeTopic,
        getStatusOfErrMsg,
        displayErrorMsg,
        username,
        topics,
      } = value
      console.log(topics)

      const onSubmitRegisterDetails = event => {
        event.preventDefault()
        getStatusOfErrMsg()
        const {history} = props
        console.log(displayErrorMsg)
        return displayErrorMsg !== true && username !== ''
          ? history.replace('/')
          : ''
      }

      return (
        <>
          <Header />
          <div className="registerContainer">
            <div className="responsiveContainer">
              <img
                className="registerImage"
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                alt="website register"
              />
              <form
                className="formContainer"
                onSubmit={onSubmitRegisterDetails}
              >
                <h1 className="registerHeading">Let Us Join</h1>
                <label className="label" htmlFor="username">
                  USERNAME
                </label>
                <input
                  id="username"
                  onChange={onChangeUserName}
                  value={username}
                  className="userName"
                  placeholder="Your name"
                />
                <label className="label" htmlFor="topic">
                  TOPICS
                </label>
                <select
                  className="selectContainer"
                  value={topics}
                  id="topic"
                  onChange={onChangeTopic}
                >
                  {topicsList.map(eachTopic => (
                    <option key={eachTopic.id} value={eachTopic.id}>
                      {eachTopic.displayText}
                    </option>
                  ))}
                </select>
                <button className="registerNowButton" type="submit">
                  Register Now
                </button>
                {displayErrorMsg ? (
                  <p className="errorMsg">Please Enter Your Name</p>
                ) : null}
              </form>
            </div>
          </div>
        </>
      )
    }}
  </MeetupContext.Consumer>
)
export default withRouter(Register)
