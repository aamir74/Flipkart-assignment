import './Profile.css'
const ProfileItem = (props) => {
    console.log(props.name)
    return (
        <>
        <div className="profile">
            <img src={props.image}/>
            <div className="description">
            <h2>{props.name}</h2>
            <h3>{props.designation}</h3>
            <p>{props.description}</p>
            </div>
        </div>
        </>
    )
}
export default ProfileItem