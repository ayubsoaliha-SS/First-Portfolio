import React from 'react';
import './GitHubStats.css';

const GitHubStats = () => {
  const githubUsername = 'ayubsoaliha-SS';

  return (
    <section className="github-stats-section">
      <div className="container">
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-subtitle">My coding journey and contributions</p>

        <div className="github-stats-wrapper">
          <div className="stats-cards">

            {/* GitHub Stats Card */}
            <img 
              src="https://github-readme-stats.vercel.app/api?username=ayubsoaliha-SS&show_icons=true&theme=tokyonight&cache_seconds=60" 
              alt="GitHub Stats"
            />

            {/* GitHub Streak Card */}
            <img 
              src="https://streak-stats.demolab.com?user=ayubsoaliha-SS&theme=tokyonight&cache_seconds=60" 
              alt="GitHub Streak"
            />

          </div>

          {/* Contribution Graph */}
          <div className="calendar-wrapper">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=ayubsoaliha-SS&theme=tokyo-night&area=true"
              alt="GitHub Contribution Graph"
              className="github-calendar"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
