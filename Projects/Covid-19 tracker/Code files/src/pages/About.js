import React from "react";
import "../css/App.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function About() {
  return (
    <div className="container">
      <h2
        style={{
          textAlign: "center",
          padding: 20,
        }}
      >
        About
      </h2>

      <div
        style={{
          padding: 20,
          textAlign: "center",
        }}
      >
        <p>
          Hi! Welcome to our COVID-19 Tracker, made for the 2021 CUNY Hackathon.
        </p>
        <p>We are:</p>

        {/* Team Cards */}
        <div>
          <div class="card-deck">
            {/* Card 1 */}
            <div class="card bg-light mb-3">
              <h5 class="card-header">Wengsing Wong</h5>
              <div class="card-body">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    columnGap: "10px",
                  }}
                >
                  <a
                    href="https://github.com/WengsingVWong"
                    class="btn btn-primary"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#2b3137",
                    }}
                  >
                    <IconContext.Provider
                      value={{ style: { margin: "0 5px 0 0" } }}
                    >
                      <FaGithub />
                    </IconContext.Provider>
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/wengsing-wong"
                    class="btn btn-primary"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#0077b5",
                    }}
                  >
                    <IconContext.Provider
                      value={{ style: { margin: "0 5px 0 0" } }}
                    >
                      <FaLinkedin />
                    </IconContext.Provider>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div class="card bg-light mb-3">
              <h5 class="card-header">Emmanuel Mireku</h5>
              <div class="card-body">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    columnGap: "10px",
                  }}
                >
                  <a
                    href="https://github.com/emmanuel-mireku"
                    class="btn btn-primary"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#2b3137",
                    }}
                  >
                    <IconContext.Provider
                      value={{ style: { margin: "0 5px 0 0" } }}
                    >
                      <FaGithub />
                    </IconContext.Provider>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emire1"
                    class="btn btn-primary"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#0077b5",
                    }}
                  >
                    <IconContext.Provider
                      value={{ style: { margin: "0 5px 0 0" } }}
                    >
                      <FaLinkedin />
                    </IconContext.Provider>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div class="card bg-light mb-3">
              <h5 class="card-header">Aqib Javed</h5>
              <div class="card-body">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    columnGap: "10px",
                  }}
                >
                  <a
                    href="https://github.com/aqib-javed1119"
                    class="btn btn-primary"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#2b3137",
                    }}
                  >
                    <IconContext.Provider
                      value={{ style: { margin: "0 5px 0 0" } }}
                    >
                      <FaGithub />
                    </IconContext.Provider>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aqib-javed1119/"
                    class="btn btn-primary"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#0077b5",
                    }}
                  >
                    <IconContext.Provider
                      value={{ style: { margin: "0 5px 0 0" } }}
                    >
                      <FaLinkedin />
                    </IconContext.Provider>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
