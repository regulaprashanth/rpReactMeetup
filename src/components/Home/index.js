import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'
import './index.css'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {username, topics} = value

      return (
        <>
          <Header />
          {username === '' && topics === 'ARTS_AND_CULTURE' ? (
            <div className="homeContainer">
              <h1 className="meetupHeading">Welcome to Meetup</h1>
              <p className="meetupParagraph">Please register for the topic</p>
              <Link to="/register">
                <button className="registerButton" type="button">
                  Register
                </button>
              </Link>
              <img
                className="meetupImage"
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                alt="meetup"
              />
            </div>
          ) : (
            <div className="homeContainer">
              <h1 className="registeredUsername">Hello {username}</h1>
              <p className="registeredTopic">Welcome to {topics}</p>
              <img
                className="meetupImage"
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                alt="meetup"
              />
            </div>
          )}
        </>
      )
    }}
  </MeetupContext.Consumer>
)
export default Home
