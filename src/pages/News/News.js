import React from 'react';
import styles from './News.module.scss';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Images from "@assets/images";

const newsItems = [
  {
    image: Images.news_1,
    source: 'ARCHITECTIZER',
    title: 'Timber House by MESH Architectures',
    date: 'November 9, 2023',
  },
  {
    image: Images.news_2,
    source: 'WORLD-ARCHITECTS',
    title: 'Timber House - US Building of the Week',
    date: 'October 16, 2023',
  },
  {
    image: Images.news_3,
    source: 'LOCAL NEWS 8',
    title: 'CEI to hold Construction Combine events in Idaho Falls and Salmon',
    date: 'April 22, 2023',
  },
  {
    image: Images.news_4,
    source: 'CLEAN ENERGY FINANCE FORUM',
    title: 'Can Mass Timber Help Decarbonize Real Estate?',
    date: 'March 13, 2023',
  },
  {
    image: Images.news_5,
    source: 'MESH ARCHITECTURES',
    title: 'Watch a short video about Timber House',
    date: 'February 21, 2023',
  },
  {
    image: Images.news_6,
    source: 'ARCHDAILY',
    title: 'University of Idaho Central Credit Union Arena / Opsis Architecture',
    date: 'September 6, 2022',
  },
  {
    image: Images.news_7,
    source: 'INTERIOR',
    title: 'A tree passes grown in strength as story grows...',
    date: 'August 24, 2022',
  },
  {
    image: Images.news_8,
    source: 'FARM BUREAU COUNCIL',
    title: 'Summer comes resilient, continues to nourish',
    date: 'August 14, 2022',
  },
  {
    image: Images.news_9,
    source: 'INTERIOR DESIGN JOURNAL',
    title: 'Is timber the future of sustainable buildings?',
    date: 'August 1, 2022',
  },
  {
    image: Images.news_10,
    source: 'FORBES',
    title: 'Going against the grain: MESH timber creates...',
    date: 'July 25, 2022',
  },
  {
    image: Images.news_11,
    source: 'THE BROOKLYNER',
    title: 'Timber House is now NYC’s largest MESH...',
    date: 'July 12, 2022',
  },
  {
    image: Images.news_12,
    source: 'TIMBER & DESIGN WEEKLY',
    title: 'MESH Architectures are the strength behind...',
    date: 'July 5, 2022',
  },
  {
    image: Images.news_13,
    source: 'TIMBER DIGEST',
    title: 'The NYC Timber House is helping set trends...',
    date: 'June 30, 2022',
  },
  {
    image: Images.news_14,
    source: 'CURBED',
    title: 'The city’s first MESH timber corners and...',
    date: 'June 10, 2022',
  },
  {
    image: Images.news_15,
    source: 'DAILY POST NEWS',
    title: 'Park slope condo reaches new timber city...',
    date: 'May 23, 2022',
  },
  {
    image: Images.news_16,
    source: 'CITY JOURNAL',
    title: 'New youth gym center opens in Salmon',
    date: 'February 10, 2022',
  },
  {
    image: Images.news_1,
    source: 'WOOD DESIGN TODAY',
    title: 'Resin products supply MESH Timber Arena',
    date: 'November 9, 2022',
  },
  {
    image: Images.news_2,
    source: 'ARCHDAILY',
    title: 'New arena highlights MESH innovation',
    date: 'October 18, 2022',
  },
  {
    image: Images.news_3,
    source: 'UNIVERSITY OF IDAHO CORP',
    title: 'University arena reaches acclaim once more',
    date: 'October 8, 2022',
  },
  {
    image: Images.news_4,
    source: 'IDAHO LOCAL WEEKLY',
    title: 'Salmon opens new gym with open house',
    date: 'July 14, 2022',
  },
  {
    image: Images.news_5,
    source: 'NATURE TIMES JOURNAL',
    title: 'Soaking in nature',
    date: 'June 20, 2022',
  },
  {
    image: Images.news_6,
    source: 'INTERIOR',
    title: 'Step two',
    date: 'May 8, 2022',
  },
  {
    image: Images.news_7,
    source: 'GREEN CRAFTS MAG',
    title: 'US firms use more MESH timber in builds',
    date: 'April 26, 2022',
  },
  {
    image: Images.news_8,
    source: 'THE WIRE',
    title: 'AI/ML project crafts future for timber...',
    date: 'April 19, 2022',
  },
  {
    image: Images.news_9,
    source: 'THE ARCHITECT’S PRESS',
    title: 'The iconic credit union arena is ramping...',
    date: 'April 3, 2022',
  },
  {
    image: Images.news_10,
    source: 'CIVIC VOICE',
    title: 'Civic space grows stronger with quiet builds',
    date: 'March 19, 2022',
  },
  {
    image: Images.news_11,
    source: 'EVERY BUILD WEEKLY',
    title: 'Welcome to Salmonwood springs',
    date: 'March 5, 2022',
  },
  {
    image: Images.news_12,
    source: 'ARCHITECTURAL DIGEST',
    title: 'Metro park residence',
    date: 'February 10, 2022',
  },
  {
    image: Images.news_13,
    source: 'TIMBER TODAY WEEKLY',
    title: 'Welcome to the arena center credit union...',
    date: 'January 26, 2022',
  }
];


const News = () => {
  return (
  <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>QB Corp. In The News</h2>
        <p className={styles.subheading}>
          Below you can find links to different media types, including QB Corporation, our products, and interviews with our staff members.
        </p>
        <div className={styles.grid}>
          {newsItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.meta}>{item.source}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.date}>
                <FaRegCalendarAlt className={styles.icon} /> {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
