import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

// Import images directly
import googleLogo from "../../assets/history/google.png";
import microsoftLogo from "../../assets/history/microsoft.png";
import netflixLogo from "../../assets/history/netflix.png";

import htmlLogo from "../../assets/skills/html.png";
import cssLogo from "../../assets/skills/css.png";
import reactLogo from "../../assets/skills/react.png";
import nodeLogo from "../../assets/skills/node.png";
import graphqlLogo from "../../assets/skills/graphql.png";
import mongodbLogo from "../../assets/skills/mongodb.png";
import figma from "../../assets/skills/figma.png";
import javaLogo from "../../assets/skills/javascript.png"

export const Experience = () => {
  // Map skill titles to their respective images
  const skillImages = {
    HTML: htmlLogo,
    CSS: cssLogo,
    React: reactLogo,
    Node: nodeLogo,
    GraphQL: graphqlLogo,
    MongoDB: mongodbLogo,
    Javascript: javaLogo,
    Figma: figma,
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={skillImages[skill.title] || getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        {/* History Section */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            let logo;
            if (historyItem.organisation === "Google") logo = googleLogo;
            else if (historyItem.organisation === "Microsoft") logo = microsoftLogo;
            else if (historyItem.organisation === "Netflix") logo = netflixLogo;

            return (
              <li key={id} className={styles.historyItem}>
               
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};