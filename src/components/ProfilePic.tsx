interface ProfilePicProps {
  profilePic: string,
  setProfilePic: (str:string) => void
}

const ProfilePic = ({profilePic, setProfilePic}:ProfilePicProps):JSX.Element => {
  return (
    <div className="absolute top-4 right-4">
        <img src={profilePic} alt="" className={`w-10 h-10 rounded-full`} />
    </div>
  )
}

export default ProfilePic