/* eslint-disable react/prop-types */



import '../chat.css'
const Contact = ({username,msg,profilePic,time}) => { 
    const handleClick = () => {
        console.log(username);
    }
    return (
        <div className="contact" onClick={handleClick}>
            <img src={profilePic} alt="profile pic"/>
            <div className="contact__details">
                <h3>{username}</h3>
                <p>{msg}  <span>{time}</span></p>
            </div>
        </div>
    )

}

export default Contact;