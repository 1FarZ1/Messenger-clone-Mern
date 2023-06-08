/* eslint-disable react/prop-types */



import '../chat.css'
const Contact = ({username,msg,profilePic,time,isSelected}) => { 
   
    const classChosed = isSelected ?  "contact contact_selected": "contact"; 
    return (
        <div className={classChosed}>
            <img src={profilePic} alt="profile pic"/>
            <div className="contact__details">
                <h3>{username}</h3>
                <p>{msg}  <span>{time}</span></p>
            </div>
        </div>
    )

}

export default Contact;