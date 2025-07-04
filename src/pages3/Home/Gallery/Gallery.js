
import React, { useEffect, useRef } from 'react';
import styles from './Gallery.module.scss';
import product1 from './product3.jpg';
import product2 from './product2.jpeg';
import product3 from './product1.webp';
import product4 from './product3.webp';

const Gallery = () => {
  const bannerRef = useRef(null);
  const scrollRef = useRef(null);
  const imagesRef = useRef([]);
  const namesRef = useRef([]);
  const numbersRef = useRef([]);
  let wheelIndex = 0;
  let reverse = false;

useEffect(() => {
  const banner = bannerRef.current;
  const magnetCursor = scrollRef.current;
  const images = imagesRef.current;
  const nameTexts = namesRef.current;
  const numberTexts = numbersRef.current;

  const handleClass = (node, className, type = 'add') => {
    if (node) node.classList[type](className);
  };

  const handleTextAnimation = (arr, index) => {
    arr.forEach((el) => handleClass(el, styles.fadeIn, 'remove'));
    if (arr[index]) handleClass(arr[index], styles.fadeIn, 'add');
  };

  const rotateImage = (img) => {
    const deg = Math.floor(Math.random() * 10 - 5);
    img.style.transform = `rotate(${deg}deg) scale(0.9)`;
  };

  const handleThrow = () => {
    reverse ? wheelIndex++ : wheelIndex--;
    if (wheelIndex < 0) wheelIndex = images.length - 1;
    if (wheelIndex >= images.length) wheelIndex = 0;

    const img = images[wheelIndex];
    img.style.transform = 'translateX(-400px) rotate(-16deg)';
    img.style.transition = '0.3s ease';

    setTimeout(() => {
      rotateImage(img);
      img.style.zIndex = `${images.length - wheelIndex}`;
    }, 300);

    handleTextAnimation(nameTexts, wheelIndex);
    handleTextAnimation(numberTexts, wheelIndex);
  };

  const throttle = (func, delay) => {
    let inThrottle;
    return () => {
      if (!inThrottle) {
        func();
        inThrottle = true;
        setTimeout(() => (inThrottle = false), delay);
      }
    };
  };

  const throttledThrow = throttle(handleThrow, 800);

  const handleMagnetCursor = (e) => {
    const { clientX, clientY } = e;
    if (magnetCursor) {
      magnetCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      const shouldHide = e.target.classList.contains(styles.hideMagnet);
      handleClass(magnetCursor, styles.fadeOut, shouldHide ? 'add' : 'remove');
    }
  };

  banner.addEventListener('wheel', (e) => {
    reverse = e.deltaY < 0;
    if (++wheelIndex % 10 === 0) throttledThrow();
  });

  window.addEventListener('mousemove', handleMagnetCursor);

  // Initial setup
  images.forEach((img, i) => {
    if (i !== images.length - 1) rotateImage(img);
  });

  handleTextAnimation(nameTexts, images.length - 1);
  handleTextAnimation(numberTexts, images.length - 1);

  // Auto image switch every 2 seconds
  const autoSlide = setInterval(() => {
    reverse = false;
    handleThrow();
  }, 2000);

  return () => {
    window.removeEventListener('mousemove', handleMagnetCursor);
    clearInterval(autoSlide);
  };
}, []);

  const imageData = [
    {
      src: product1,
      name: 'Custom Glulam Beams',
    },
    {
      src: product2,
      name: 'Stock Glulam Beams',
    },
    {
      src:product3,
      name: 'Wood Pellets',
    },
    {
      src: product4,
      name: 'Utility Structures',
    },
  ];

  return (
    <section className={styles.banner} ref={bannerRef}>
      <div className={styles.animatingCircle + ' ' + styles.one}></div>
      <div className={styles.animatingCircle + ' ' + styles.two}></div>
      <div className={styles.animatingCircle + ' ' + styles.three}></div>

 <div className={styles.bannerText}>
  <span className={styles.letterLeft}>V</span>
  <span className={styles.letterLeft}>A</span>
  <span className={styles.letterRight}>R</span>
  <span className={styles.letterRight}>N</span>
</div>


     
      <div className={styles.posCenter}>
        <div className={styles.bannerImgNumberWrap}>
          <div className={styles.bannerImgNumber}>
            {imageData.map((_, idx) => (
              <h3
                key={idx}
                className={styles.bannerImgNameTxt}
                ref={(el) => (numbersRef.current[idx] = el)}
              >
                {imageData.length - idx}
              </h3>
            ))}
          </div>
          <span>/ 04</span>
        </div>

        <div className={styles.bannerImgWrapper}>
          {imageData.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt="Gallery"
              className={`${styles.bannerImg} ${styles.imgSize}`}
              ref={(el) => (imagesRef.current[idx] = el)}
            />
          ))}
        </div>

        <div className={styles.bannerImgName}>
          {imageData.map((img, idx) => (
            <h3
              key={idx}
  className={`${styles.bannerImgNameTxt} ${styles.highlightedText}`}
              ref={(el) => (namesRef.current[idx] = el)}
            >
              {img.name}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
