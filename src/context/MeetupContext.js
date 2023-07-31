import React from 'react'

const MeetupContext = React.createContext({
  username: '',
  topics: '',
  onChangeUserName: () => {},
  onChangeTopic: () => {},
  getStatusOfErrMsg: () => {},
  displayErrorMsg: false,
})
export default MeetupContext
