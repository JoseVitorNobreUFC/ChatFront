function Chat ({...props}) {

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./AVATAR-FACEBOOK.png"></img>
          <div className="name">
            <span>ZéMentira</span>
            <p>O ZéMentira vai te ajudar a encontrar a verdade!</p>
          </div>
        </div>
      </div>
      <div className="body">
        {props.children}
      </div>
    </div>
  )
}

export default Chat