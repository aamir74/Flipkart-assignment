import ProfileItem from "./ProfileItem"

const ProfileList = ({ data }) => {
    console.log(data)

    return (
            <ul>
            {
                data.map((a)=>{
                    return <ProfileItem
                    name={a.name}
                    image={a.image}
                    designation={a.designation}
                    description={a.shortDescription}
                />
                })
           
        }
            </ul>
    )

}
export default ProfileList