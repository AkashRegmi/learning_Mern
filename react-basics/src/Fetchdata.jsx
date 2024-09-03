import { useState } from "react";

export function GithubUserFetcher() {
  const [githubUserName, setGithubUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchGithubUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${githubUserName}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
      setError(""); // Clear any previous error
    } catch (err) {
      setUserData(null);
      setError(err.message);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={githubUserName}
        onChange={(e) => setGithubUserName(e.target.value)}
      />
      <button onClick={fetchGithubUser}>Fetch</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={userData.name} width={100} />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </>
  );
}
