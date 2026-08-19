import React from "react";
import { useContext } from "react";
import userContext from "../contexts/userContext";

const ProfileForm = () => {
  const { state, dispatch } = useContext(userContext);

  const [username, setUsername] = React.useState(
    state.login?.username || ""
  );

  const [photo_profile, setPhotoProfile] = React.useState(
    state.login?.photo_profile || ""
  );

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE",
      payload: {
        username,
        photo_profile,
      },
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="flex flex-col items-center"
        onSubmit={handleUpdateProfile}
      >
        <div className="border w-50 h-50 rounded-full overflow-hidden">
          {photo_profile && (
            <img
              src={photo_profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <label htmlFor="username">Username</label>
        <input
          className="border"
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="image">Update Image</label>
        <input
          className="border"
          type="text"
          name="image"
          id="image"
          value={photo_profile}
          onChange={(e) => setPhotoProfile(e.target.value)}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
