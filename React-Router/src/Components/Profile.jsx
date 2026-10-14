
import React from "react";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const user = useLoaderData();

  return (
    <div className="profile-container">
      <h1>GitHub Profile</h1>

      <img
        src={user.avatar_url}
        alt={user.login}
        width="150"
        style={{ borderRadius: "50%" }}
      />

      <h2>{user.name || user.login}</h2>

      <p>Username: {user.login}</p>

      <p>Bio: {user.bio || "No bio available"}</p>

      <p>Followers: {user.followers}</p>

      <p>Following: {user.following}</p>

      <p>Public Repositories: {user.public_repos}</p>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Visit GitHub Profile
      </a>
    </div>
  );
};

export default Profile;
