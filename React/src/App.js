import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/users/shrutikapoor08/repos";
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setRepos(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>My GitHub Repos </h1>
      {repos?.map((repo) => (
        <div key={repo.id}>
          <h1>
            <a href={repo.html_url}>
              {repo.name}, Stars: {repo.stargazers_count}
            </a>
          </h1>
          <p> {repo.description}</p>
        </div>
      ))}
    </div>
  );
}
