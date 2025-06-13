import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import styles from './Catalog.module.scss';
import Images from "@assets/images";
import { FiDownload } from 'react-icons/fi';
const catalogData = [
  {
    title: 'QB Rim Board Brochure',
    description: 'Comprehensive overview of our high-performance Rim Board.',
    file: 'https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf',
    image: Images.project_sunvalley,
  },
  {
    title: 'APA QB Rim Report',
    description: 'Technical specifications and structural performance report.',
    file: 'https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf',
    image: Images.project_office,
  },
  {
    title: 'Glue Laminated Timber Specs',
    description: 'Standards and engineering properties of glulam products.',
    file: 'https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf',
    image: Images.project_house,
  },
  {
    title: 'Timber Frame Installation Guide',
    description: 'Step-by-step instructions for safe and efficient timber frame installation.',
    file: 'https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf',
    image: Images.project_timberhouse,
  },
  {
    title: 'Sustainable Wood Sourcing Report',
    description: 'Our approach to responsible forestry and sustainable timber sourcing.',
    file: 'https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf',
    image: Images.project_frieshouse,
  },
  {
    title: 'Custom Beam Design Catalog',
    description: 'Explore options for custom beam shapes, sizes, and finishes.',
    file: 'https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf',
    image: Images.project_house3,
  },
  {
    title: 'Commercial Projects Portfolio',
    description: 'See our featured commercial timber construction projects.',
    file: 'https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf',
    image: Images.project_office,
  },
  {
    title: 'Architectural Wood Finishes',
    description: 'A showcase of premium finishes and wood treatments available.',
    file: 'https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf',
    image: Images.project_sunvalley,
  },
  {
    title: 'Fire-Rated Timber Solutions',
    description: 'Documentation for our tested and approved fire-rated wood assemblies.',
    file: 'https://cdn.prod.website-files.com/655bc5fdd4556632911f083a/65fdff9ea73e00babc1e3347_QB-RIM-BOARD.pdf',
    image: Images.project_frieshouse,
  },
];


const Catalog = () => {
  return (
    <section className={styles.catalogContainer}>
      <h2 className={styles.catalogTitle}> Our Catalog</h2>
      <div className={styles.grid}>
        {catalogData.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.cardContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadLink}
              >
                View PDF <FiDownload />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
