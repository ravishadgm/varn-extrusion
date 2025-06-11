import React from "react";
import styles from "./CorpProjectImages.module.scss";
import Images from "@assets/images";
const projectImages = [
  {
    title: "Sun Valley Lodge",
    location: "Sun Valley, Idaho, USA",
    image: Images.project_sunvalley,
  },
  {
    title: "Timber House",
    location: "Brooklyn, New York, USA",
    image: Images.project_timberhouse,
  },
  {
    title: "Idaho Central Credit Union Arena",
    location: "Moscow, Idaho, USA",
    image: Images.project_arena,
  },
  {
    title: "The Nep & Mary Ellen Lynch Center",
    location: "Salmon, Idaho, USA",
    image: Images.project_center,
  },
  {
    title: "USFS Kamiah Supervisor Office",
    location: "Kamiah, Idaho, USA",
    image: Images.project_office,
  },
  {
    title: "Konzen House",
    location: "Blaine County, Idaho, USA",
    image: Images.project_house,
  },
  {
    title: "The Fries House",
    location: "McCall, Idaho, USA",
    image: Images.project_timberhouse,
  },
  {
    title: "Jackson Hole Airport",
    location: "Jackson Hole, Wyoming, USA",
    image: Images.project_frieshouse,
  },
  {
    title: "House III",
    location: "Boise County, Idaho, USA",
    image: Images.project_holeairport,
  },
  {
    title: "Bozeman Yellowstone International Airport",
    location: "Belgrade, Montana, USA",
    image: Images.project_house3,
  },
];

const CorpProjectImages = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {projectImages.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorpProjectImages;
