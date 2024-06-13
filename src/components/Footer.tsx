export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          {/* <img src={Logo} alt="" /> */}
          <p>DEBUG TALKS</p>
          <p>
            <a href="" target="blank"><span>Our Github</span></a>
          </p>
        </div>
        <div className="footer-content">
          <div>
            <p>
              <span>Front</span>
            </p>
            <ul>
              <li>ReactJS</li>
              <li>Typescript</li>
              <li>SCSS</li>
              <li>Zustand</li>
            </ul>
          </div>
          <div>
            <p>
              <span>Back</span>
            </p>
            <ul>
              <li>Spring Boot</li>
              <li>Swagger</li>
              <li>MySQL</li>
              <li>.ENV</li>
              <li>Multer</li>
              <li>JWT</li>
            </ul>
          </div>
          <div>
            <p>
              <span>Our Teams</span>
            </p>
            <ul>
              <li>김성민</li>
              <li>임학민</li>
              <li>김예지</li>
              <li>강혜인</li>
              <li>이기혁</li>
            </ul>
          </div>
          {/* <div className="mobile-git-btn">
            <a
              href="https://github.com/purple11-11/HandChatter"
              target="_blank"
            >
              <img src={Github} alt="" /> 
              Debug Talks
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
