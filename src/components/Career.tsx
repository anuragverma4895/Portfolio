import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (AI)</h4>
                <h5>NIET Greater Noida</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science & Engineering with
              specialization in Artificial Intelligence. CGPA: 8.12/10.
              Actively building full-stack projects and honing DSA skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LeetCode — 500+ Problems</h4>
                <h5>Competitive Programming</h5>
              </div>
              <h3>1600+</h3>
            </div>
            <p>
              Solved 500+ problems on LeetCode with a rating of 1600+.
              Strong foundation in Data Structures, Algorithms, and problem-solving
              across a wide range of topics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CodeChef — 1500+ Rating</h4>
                <h5>Competitive Programming</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Achieved 1500+ rating on CodeChef. Actively participating in
              contests and consistently improving skills in competitive
              programming and algorithmic thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
