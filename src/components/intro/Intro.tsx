import "./intro.css";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { info } from "../../models/info";
import Image from "next/image";
import { log } from "console";

const Intro = () => {
  const src = info.avatar;
  log(src, "src");
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Image src={src} alt={info.firstName} width={200} height={200} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>{info.yeasOfExperience}+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>{info.completedProjects}+ Completed Projects</small>
            </article>
          </div>
          <p
            style={{
              fontSize: "1.2rem",
              marginRight: "0.5rem",
              lineHeight: "2.5",
              padding: "1rem",
              borderRadius: "0.5rem",
              color: "var(--text-color)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {info.miniBio.map((bio, index) => (
              <span key={index}>
                <span role="img" aria-label="emoji">
                  {bio.emoji}
                </span>
                &nbsp;{bio.text}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
