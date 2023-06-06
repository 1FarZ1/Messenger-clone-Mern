/* eslint-disable react/prop-types */



import '../chat.css'
const Contact = ({username,msg,profilePic}) => { 
    return (
        <div className="contact">
            <img src={profilePic} alt="profile pic"/>
            <div className="contact__details">
                <h2>{username}</h2>
                <p>{msg}</p>
            </div>
        </div>
    )

}

export default Contact;