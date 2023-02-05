import PropTypes from "prop-types";

const Profile = ({ fullName = 'USER', bio, profession = 'tape your profession', children }) => {
    const handleName = e => {
        e.preventDefault();
        alert(`Your Name is ${fullName}`)
    }
    return (
        <div style={{
            display: 'flex', width: 900, justifyContent: 'center', margin: 'auto', border: 'blue',
            borderStyle: 'double', padding: 20, borderRadius: 30 , marginTop: 100 , backgroundColor: 'lightskyblue pink'
        }}>

            <img style={{ width: 500, height: 400 }} src={children} />


            <div style={{ margin: 50 }}>
                <h2 style={{
                    fontFamily: "Times New Roman", fontSize: 33, color: "darkblue"
                }} onClick={handleName}>
                    {fullName}
                </h2>
                <h3 style={{
                    fontFamily: "Arial", fontSize: 20, color: 'gray'
                }}>
                    {bio || 'Welcome to my profile'}
                </h3>
                <h4 style={{
                    fontStyle: "italic", fontSize: 30, color: "red", 
                }}>
                    {profession}
                </h4>
            </div>


        </div>
    );
}

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
};

export default Profile;