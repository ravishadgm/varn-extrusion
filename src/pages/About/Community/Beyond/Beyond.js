import React from 'react';
import styles from './Beyond.module.scss';

const localList = [
  '17 Mile Fire Station',
  'Salmon High School',
  'Kids Creek Pond',
  'Salmon High School Cheerleaders',
  'Pioneer Elementary School',
  'Steele Memorial Hospital',
  'Salmon Animal Shelter',
  'Tendoy School',
  'Salmon EMTs',
  'Leadore Athletics',
  'Salmon Hockey Rink',
  'Lemhi Baseball',
  'Salmon Local Library',
  'Mark Sever Memorial Baseball Field',
  'Salmon Search and Rescue',
  'Salmon Fire Department',
];

const nonLocalList = [
  'Boise State University Theater',
  'Idaho State University Baseball',
  'Shriners Hospital for Children',
  'St. Jude Children’s Research',
  'Travis Mills Foundation',
];

const Beyond = () => {
  return (
    <section className={styles.beyond}>
      <div className={styles.container}>
            <h2>
            Contributions to the QB Corp. <br />
            community and beyond
        </h2>
        <div className={styles.grid}>
          <div className={styles.local}>
            <h3>Local</h3>
            <ul>
              {localList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.divider} />
          <div className={styles.nonLocal}>
            <h3>Non-Local</h3>
            <ul>
              {nonLocalList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beyond;
