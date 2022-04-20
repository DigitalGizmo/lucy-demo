import React, { useState } from 'react'; // , { useEffect }
import {motion, AnimatePresence } from 'framer-motion'; // , useAnimation
import { InView } from "react-intersection-observer"; // useInView, 
import { images, captions } from './LucyContent';
// import CaptionDissolve from './CaptionDissolve';

const Lucy = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageName, setImageName] = useState(images[imageIndex]);

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
        onChange={(inView, entry) => { 
          // console.log('in CaptionDissolve onChange: ' + inView + ', i: ' + index);
          onCaptionChange(inView, index); 
        }}>
      </InView>          
    ) 
  })

  return (
    <div>
      <section id="chapter1" className='main-section'> 
          
        <div id="image-sequence1" className="image-panel"> 
            <div className='image-panel-outer-div'>
              <div id="chapter1-title" className="chapter-title">
                <h1>Newburgh from the Planner's Perspective</h1>
              </div>
              <AnimatePresence initial={false}>
                <motion.div
                  key={imageName}
                  initial={{ 
                    opacity: 0,
                    position: 'absolute',
                    top: 77, // works w main nav scrolling away
                  }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 2 },
                    transitionEnd: { position: 'static'}
                  }}
                  exit={{ 
                    opacity: 0,
                    position: 'static',
                    transition: { duration: 2 }
                  }}                
                >
                  <img 
                    alt={imageName}
                    src={`https://dev.digitalgizmo.com/lucy-assets/images/${imageName}.jpg`}
                  />
                </motion.div>
              </AnimatePresence>

            </div>
        </div>{/*  /image-panel */}

        <div id="caption-sequence1" className="caption-panel">

          { captionDissolves }

        </div>{/*  /caption-panel */}

      </section> {/*  /chapter1 */}
    </div>
  );
} // end Newburg function

export default Lucy;
