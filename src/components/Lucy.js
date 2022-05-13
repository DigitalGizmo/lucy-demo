import React, { useState, useEffect } from 'react'; // , { useEffect }
import {motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'; // , useAnimation
import { InView } from "react-intersection-observer"; // useInView, 
import { images, captions, audio, mores } from './LucyContent';

const Lucy = () => {
  const NUM_CAPTIONS = 13;
  const [imageName, setImageName] = useState(images[0]);
  const [isPinned, setIsPinned] = useState(true);
  const { scrollYProgress } = useViewportScroll(); // scrollY, 
  const [isZoomable, setIsZoomable] = useState(true);
  const [moreIndex, setMoreIndex] = useState(0);
  // const [moreIndex, setMoreIndexTracker] = useState(0);
  // const scrollAction = useTransform(
  //   scrollY, [0, 100], [0, 100]
  // );
  const bgAudio = new Audio(`https://dev.digitalgizmo.com/lucy-assets/audio/${audio[0]}.mp3`);
  const playAudio = () => {
    // console.log('got to play audio');
    bgAudio.play();
  }
  // const pauseAudio = () => {
  //   // console.log('got to pause');
  //   bgAudio.pause();
  // }  

  const lengthFudge = -0.08;


  const getThresholds = () => {
    return (
      [
        0, // illus_0
        (1+lengthFudge)/NUM_CAPTIONS, // illus_02 candle lights
        ((1+lengthFudge)/NUM_CAPTIONS)*2, // illus_03 downstairs bright
        ((1+lengthFudge)/NUM_CAPTIONS)*3, // illus_04 working position 1
        ((1+lengthFudge)/NUM_CAPTIONS)*4, // illus_05 working position 2
        ((1+lengthFudge)/NUM_CAPTIONS)*5, // illus_06 black screen
        ((1+lengthFudge)/NUM_CAPTIONS)*6 , // illus_07 friend waits outside
        ((1+lengthFudge)/NUM_CAPTIONS)*7 , // illus_08 lucy hands pkg to cesar
        ((1+lengthFudge)/NUM_CAPTIONS)*8 , // illus_09 cesar close up
        ((1+lengthFudge)/NUM_CAPTIONS)*9 , // illus_10 lucy close up
        ((1+lengthFudge)/NUM_CAPTIONS)*10, // 
        ((1+lengthFudge)/NUM_CAPTIONS)*11, // 
        ((1+lengthFudge)/NUM_CAPTIONS)*12, // Start luch close-up
        ((1+lengthFudge)/NUM_CAPTIONS)*13 - 0.01, // start black screen
        ((1+lengthFudge)/NUM_CAPTIONS)*13 - 0.005, // index 14 unpin to show related sectio
        // ((1+lengthFudge)/NUM_CAPTIONS)*13 + 0.02, // index 15
      ]
    )
  }
  // On my way to memonizing thresholds, but this was enough
  const thresholds = getThresholds();

  const sScale = useTransform(
    scrollYProgress,
    [
        thresholds[3],
        thresholds[5],
        thresholds[6],
        thresholds[7],
    ],
    [1, 2, 2, 1]
  );
  const sX = useTransform(
    scrollYProgress,
    [
        thresholds[3],
        thresholds[5],
        thresholds[6],
        thresholds[7],
        thresholds[8],
    ],
    [0, 360, 360, 0, 0]
  )  

  // useEffect(() => {
  //   setMoreIndexTracker(imageIndex);
  // },[imageIndex])

  useEffect(() => {
    scrollYProgress.onChange((value) => {
        if (value < thresholds[1]) {
          // console.log('imageIndex before if: ' + imageIndex);
          if (moreIndex !== 0) {
            setMoreIndex(0);
            // console.log('imageIndex after set: ' + imageIndex);
            // pauseAudio()
            setImageName(images[0])
          }
        } else if (value >= thresholds[1] && value < thresholds[2]) {
          // console.log('imageIndex-1 before if: ' + imageIndex);
          if (moreIndex !== 1) {
            setMoreIndex(1);
            // console.log('imageIndex-1 after set: ' + imageIndex);
            // pauseAudio()
            playAudio()
            setImageName(images[1])
          }
        } else if (value >= thresholds[2] && value < thresholds[3]) { // hold
          setMoreIndex(2);
          setImageName(images[2])
        } else if (value >= thresholds[3] && value < thresholds[5]) {
          // pauseAudio()
          setIsZoomable(true)
          setMoreIndex(3);
          setImageName(images[3]) // zoom into downstairs
        } else if (value >= thresholds[5] && value < thresholds[6]) {
          setIsZoomable(false)
          setMoreIndex(5);
          setImageName(images[4]) // Lucy at hearth
        } else if (value >= thresholds[6] && value < thresholds[7]) {
          setMoreIndex(6);
          setImageName(images[5])
        } else if (value >= thresholds[7] && value < thresholds[8]) {
          setMoreIndex(7);
          setImageName(images[6])
        } else if (value >= thresholds[8] && value < thresholds[9]) {
          setMoreIndex(8);
          setImageName(images[7])
        } else if (value >= thresholds[9] && value < thresholds[10]) {
          setMoreIndex(9);
          setImageName(images[8])
        } else if (value >= thresholds[10] && value < thresholds[11]) {
          setMoreIndex(10);
          setImageName(images[9])
        } else if (value >= thresholds[11] && value < thresholds[12]) {
          setMoreIndex(11);
          setImageName(images[10])
        } else if (value >= thresholds[12] && value < thresholds[13]) {
          // setMoreIndex(11); /
          // console.log('value between 12 and 13: img 11 lucy' + value)
          setImageName(images[11]) // Lucy close up
        } else if (value >= thresholds[13] && value < thresholds[14]) {
          setIsPinned(true)
          // setMoreIndex(12);
          setImageName(images[12]) // black screen
          // console.log('value between 13 and 14: black screen ' + value)
        } else if (value >= thresholds[14] ) { // && value < thresholds[14]
          setIsPinned(false)
        }
    })
}, [scrollYProgress, thresholds, moreIndex])

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

  const captionDissolves = captions.map((caption, index) => {
    const presetHTML = `${caption.text}`;
    return (
      <InView 
        key={caption.label}
        as="div" 
        dangerouslySetInnerHTML={{ __html: presetHTML }}
      >
      </InView>          
    ) 
  })

  return (
    <section className='main-section'>    
      <div className="chapter-title">
        <h1>Lucy Terry Prince - Enslaved at the Wells&rsquo; House</h1>
      </div>
      <div className="image-panel"> 


      <div className="sidebar-parent">
        <span className="sidebar">
          <a href="../index.html?mocknum=21">MORE</a>
        </span>

        <article
          dangerouslySetInnerHTML={{ __html: mores[moreIndex].text }}
        >
        </article>
      </div>


      <div className={`dummy ${isPinned ? "image-panel-outer-div" : "hidden"} `}>

        <AnimatePresence initial={false}>
            <motion.div
              key={imageName}
              initial="initial"
              animate="animate"
              exit="exit"
              variants = { dissolve }
              style={{ 
                x: isZoomable ? sX : 0, 
                scale: isZoomable ? sScale : 1
              }}
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
      {/* custom first caption */}
      { captionDissolves }
    </div>
    <div className="related-material">
      <article>
        <h1>Enslaved at the Wells&apos; House</h1>
        <p>Enslaved people have odds and ends of free time nearly every day, although they must fit them into a fairly rigid schedule of tasks determined by the season. Because it is now autumn, the schedule is especially demanding: harvesting vegetables and grains, preserving fruits, butchering animals and preserving their meat, and gathering and chopping wood for the winter’s fires. Most of these tasks will employ enslaved people and their enslavers working together.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </article>

      <section className="related-lists">
        <h2>Who Else?</h2>
        <ul>
          <li><a href="/">Cesar (Caesar)</a></li>
          <li><a href="/">Quash Gomer</a></li>
          <li><a href="/">Elizabeth (Mumbet) Freeman</a></li>
          <li><a href="/">Hannibal</a></li>
          <li><a href="/">Jenny (Jin) Cole</a></li>
          <li><a href="/">Humphrey</a></li>
          <li><a href="/">Pompey</a></li>
          <li><a href="/">Titus</a></li>
        </ul>

        <h2>How Do We Know?</h2>
        <ul>
          <li><a href="/">Records of the First Church in Deerfield June 15, 1731-1810</a></li>
          <li><a href="/">Deerfield History, by Pliny Arms, 1840</a></li>
          <li><a href="/">Account book of Elijah Williams Store, 1745</a></li>
          <li><a href="/">Account books of Dr. Thomas Williams, 1749,1751, 1754, 1756</a></li>
          <li><a href="/">Wethersfield Justice of the Peace Files 174-1900</a></li>
          <li><a href="/">Catharine Maria Sedgewick, "Slavery in New England", 1853</a></li>
          <li><a href="/">James MacSparran, A letter book and Abstract of Out Services Wrtten during the Years 1743-1751</a></li>
          <li><a href="/">Family Bible Owned by David Hoyt, 1762</a></li>
          <li><a href="/">Lidded Hanging Pot, 1700-1799</a></li>
          <li><a href="/">Bake Kettle</a></li>
          <li><a href="/">Side Chair</a></li>
          <li><a href="/">&ldquo;SW&rdquo; Joined Chest</a></li>
          <li><a href="/">Calico Pocket</a></li>
          <li><a href="/">Gate-leg Table</a></li>
          <li><a href="/">Butter Churn</a></li>
          <li><a href="/">Tin-Glazed Earthenware Plate</a></li>
        </ul>

        <h2>Topics &amp; Ideas</h2>
        <ul>
          <li><a href="/">Coworkers: Slaveowners in New England generally worked alongside their enslaved workers</a></li>
          <li><a href="/">Working Conditions: enslavement in New England provided a wide range of social and psychological environments, from fairly supportive and even friendly to abusive.</a></li>
          <li><a href="/">Everyday Resistance: quiet, non-violent forms of resistance</a></li>
          <li><a href="/">Enslaved Person&apos;s Household Work</a></li>
          <li><a href="/">Women&apos;s Work and Men&apos;s Work</a></li>
          <li><a href="/">Sleeping Arrangements: in New England, enslaved people and their enslavers shared houses</a></li>
          <li><a href="/">The Bible and Religion in Domestic Life</a></li>
          <li><a href="/">Emotional relations between enslaver and enslaved sharing a house</a></li>
          <li><a href="/">Seasonal Chores: in New England the seasons played a large role in daily work</a></li>
          <li><a href="/">Foodways: enslaved people were often the household cooks, what did they prepare?</a></li>
          <li><a href="/">Free Time: personal time of enslaved people</a></li>
          <li><a href="/">Literacy and Enslavement: enslaved people in New England were often taught to read and less often to write. Why the difference?</a></li>
        </ul>

        <h2>Who Knew?</h2>
        <ul>
          <li>That enslavement everywhere in the colonies, including in New England, was like enslavement in the American South a generation later.</li>
        </ul>

        <h2>Where in the World?</h2>
        <ul>
          <li><a href="/">Deerfield houses that included enslaved people</a></li>
        </ul>
      </section>
    </div>

    </section>
  );
} // end Newburg function

export default Lucy;
