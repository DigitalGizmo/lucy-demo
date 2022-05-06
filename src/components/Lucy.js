import React, { useState, useEffect } from 'react'; // , { useEffect }
import {motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'; // , useAnimation
import { InView } from "react-intersection-observer"; // useInView, 
import { images, captions } from './LucyContent';
// import CaptionDissolve from './CaptionDissolve';

const Lucy = () => {
  const NUM_CAPTIONS = 11;
  const [imageIndex, setImageIndex] = useState(0);
  const [imageName, setImageName] = useState(images[imageIndex]);
  const [isPinned, setIsPinned] = useState(true);
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scrollAction = useTransform(
    scrollY, [0, 100], [0, 100]
  );
  const thresholds = [
    0, // illus_01
    1/NUM_CAPTIONS, // illus_02 candle lights
    (1/NUM_CAPTIONS)*2, // illus_03 downstairs bright
    (1/NUM_CAPTIONS)*3, // illus_04 working position 1
    (1/NUM_CAPTIONS)*4, // illus_05 working position 2
    (1/NUM_CAPTIONS)*5, // illus_06 black screen
    (1/NUM_CAPTIONS)*6, // illus_07 friend waits outside
    (1/NUM_CAPTIONS)*7, // illus_08 lucy hands pkg to cesar
    (1/NUM_CAPTIONS)*8, // illus_09 cesar close up
    (1/NUM_CAPTIONS)*9, // illus_10 lucy close up
    (1/NUM_CAPTIONS)*10, // illus_10 lucy close up
    (1/NUM_CAPTIONS)*11, // illus_10 lucy close up
    (1/NUM_CAPTIONS)*12, // illus_10 lucy close up
  ];
  const sScale = useTransform(
    scrollYProgress,
    [
        thresholds[3],
        thresholds[4],
        thresholds[5],
        thresholds[6],
    ],
    [1, 1.5, 1.5, 1]
  );
  const sX = useTransform(
    scrollYProgress,
    [
        thresholds[3],
        thresholds[4],
        thresholds[5],
        thresholds[6],
        thresholds[7],
    ],
    [0, 40, 40, 20, -25]
  )  
  useEffect(() => {
    scrollYProgress.onChange((value) => {
        if (value < thresholds[1]) {
            setImageName(images[0])
        } else if (value >= thresholds[1] && value < thresholds[2]) {
            setImageName(images[1])
        } else if (value >= thresholds[2] && value < thresholds[4]) { // hold
            setImageName(images[2])
        } else if (value >= thresholds[4] && value < thresholds[5]) {
            setImageName(images[3])
        } else if (value >= thresholds[5] && value < thresholds[6]) {
            setImageName(images[4])
        } else if (value >= thresholds[6] && value < thresholds[7]) {
            setImageName(images[5])
        } else if (value >= thresholds[7] && value < thresholds[8]) {
            setImageName(images[6])
        } else if (value >= thresholds[8] && value < thresholds[9]) {
            setImageName(images[7])
        } else if (value >= thresholds[9] && value < thresholds[10]) {
            setImageName(images[8])
        } else if (value >= thresholds[10] && value < thresholds[11]) {
            setImageName(images[9])
        } else if (value >= thresholds[11] && value < thresholds[12]) {
            setImageName(images[10])
        } else if (value >= thresholds[12] ) {
            setImageName(images[11])

        // setIsPinned(true)
        }
    })
}, [scrollYProgress])

  const dissolve = {
    initial: { 
      opacity: 0,
      position: 'absolute',
      top: 0, // works w main nav scrolling away
    },
    animate: {
      opacity: 1,
      transition: { duration: 1.5 },
      transitionEnd: { position: 'static'}
    },
    exit: { 
      opacity: 0,
      position: 'static',
      transition: { duration: 1.5 }
    }
  }

  const onCaptionChange = (isInView, imgIndex) => {
    // console.log('-- onCaptionChange: ' + isInView + ', i: ' + parseInt(imgIndex));
    if (isInView) {
      setImageIndex(imgIndex);
      setImageName(images[imgIndex]);
    }
  };

  const captionDissolves = captions.map((caption, index) => {
    const presetHTML = `${caption.text}`;
    return (
      <InView 
        key={caption.label}
        as="div" 
        dangerouslySetInnerHTML={{ __html: presetHTML }}
        // onChange={(inView, entry) => { 
        //   // console.log('in CaptionDissolve onChange: ' + inView + ', i: ' + index);
        //   onCaptionChange(inView, index); 
        // }}
        >
      </InView>          
    ) 
  })

  return (
    <section className='main-section'>    
      <div className="chapter-title">
        <h1>Lucy Terry Prince - Enslaved at the Wells' House</h1>
      </div>
      <div className="image-panel"> 
      {/*<div className={`dummy ${isPinned ? "image-panel-outer-div" : ""} `}>*/}
       <div className='image-panel-outer-div'>

        <AnimatePresence initial={false}>
          <motion.div
            key={imageName}
            initial="initial"
            animate="animate"
            exit="exit"
            variants = { dissolve }
            style={{ x: sX , scale: sScale}}
            //  x: scrollAction    , scale: vScale         
          >
            <img 
              alt={imageName}
              src={`https://dev.digitalgizmo.com/lucy-assets/images/${imageName}`}
            />
          </motion.div>
        </AnimatePresence>

        </div>
      </div>{/*  /image-panel */}

      <div className="caption-panel">
        { captionDissolves }
      </div>
      <div className="don-last-page">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p><p> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p><p> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p><p> ut labore et dolore magna aliqua. Ut enim </p><p>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p><p>irure dolor in reprehenderit in voluptate velit esse</p><p> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p><p> deserunt mollit anim id est laborum.
        </p>
      </div>

    </section>
  );
} // end Newburg function

export default Lucy;
