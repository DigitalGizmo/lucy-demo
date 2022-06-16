import React, { useState, useEffect } from 'react'; // , { useEffect }
import {motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'; // , useAnimation
// import { InView } from "react-intersection-observer"; // useInView, 
import { images, captions, audios, mores } from './LucyContent';

const Lucy = () => {
  const NUM_CAPTIONS = 13;
  const [imageName, setImageName] = useState(images[0]);
  const [isPinned, setIsPinned] = useState(true);
  const { scrollYProgress } = useViewportScroll(); // scrollY, 
  const [isZoomable, setIsZoomable] = useState(true);
  const [moreIndex, setMoreIndex] = useState(0);
  const [audioName, setAudioName] = useState('crickets');


  // From: https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
  // More on that page re: playing multiple tracks.
  const useAudio = () => {
    const [audio, setAudio] = useState(new Audio(`https://dev.digitalgizmo.com/lucy-assets/audio/${audioName}.mp3`));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);
    const playAudio = () => setPlaying(true);
    const pauseAudio = () => setPlaying(false);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing, audio]
    );

    useEffect(() => {
        // setPlaying(false);
        setAudio(new Audio(`https://dev.digitalgizmo.com/lucy-assets/audio/${audioName}.mp3`));

      },
      [audioName]
    );

    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, [audio]);

    return [playing, playAudio, pauseAudio, toggle];
  }; // end useAudio
  
  const lengthFudge = -0.1;
  const lucysConstant = (1+lengthFudge)/NUM_CAPTIONS;
  const julietsConstant = 0.015; // makes picture appear sooner relative to caption
  const getThresholds = () => {
    return (
      [
        0, // illus_0
        lucysConstant   - julietsConstant, // illus_02 candle lights
        lucysConstant*2 - julietsConstant, // illus_03 downstairs bright
        lucysConstant*3 - julietsConstant, // illus_04 working position 1
        lucysConstant*4 - julietsConstant, // illus_05 working position 2
        lucysConstant*5 - julietsConstant, // illus_06 black screen
        lucysConstant*6 - julietsConstant, // illus_07 friend waits outside
        lucysConstant*7 - julietsConstant, // illus_08 lucy hands pkg to cesar
        lucysConstant*8 - julietsConstant, // illus_09 cesar close up
        lucysConstant*9 - julietsConstant, // illus_10 lucy close up
        lucysConstant*10- julietsConstant, // 
        lucysConstant*11- julietsConstant, // 
        lucysConstant*12- julietsConstant, // Start luch close-up
        lucysConstant*13- julietsConstant - 0.01, // start black screen
        lucysConstant*13- julietsConstant - 0.005, // index 14 unpin to show related sectio        // lucysConstant*13 + 0.02, // index 15
      ]
    )
  };
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

  const [playing, playAudio, pauseAudio, toggle] = useAudio();
  
  useEffect(() => {
    scrollYProgress.onChange((value) => {
        if (value < thresholds[1]) {
          // console.log('imageIndex before if: ' + imageIndex);
          if (moreIndex !== 0) {
            // console.log('imageIndex after set: ' + imageIndex);
            setMoreIndex(0);
            // pauseAudio()
            setAudioName(audios[0]);
            playAudio();
            setImageName(images[0])
          }
        } else if (value >= thresholds[1] && value < thresholds[2]) {
          // console.log('imageIndex-1 before if: ' + imageIndex);
          if (moreIndex !== 1) {
            // console.log('imageIndex-1 after set: ' + imageIndex);
            setMoreIndex(1);
            // pauseAudio()
            setAudioName(audios[1]);
            playAudio();
            setImageName(images[1])
          }
        } else if (value >= thresholds[2] && value < thresholds[3]) { // hold
          setMoreIndex(2);
          // pauseAudio();
          setImageName(images[2])
        } else if (value >= thresholds[3] && value < thresholds[5]) {
          // pauseAudio()
          setIsZoomable(true)
          setMoreIndex(3); // More id 3 holds for thresh 3 & 4
          setImageName(images[3]) // zoom into downstairs
        } else if (value >= thresholds[5] && value < thresholds[6]) {
          setIsZoomable(false)
          setMoreIndex(5);
          setImageName(images[4]) // Image index is one behind now bcz zoom
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
          setMoreIndex(12); 
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
       <div 
        key={caption.label}
        as="div" 
        dangerouslySetInnerHTML={{ __html: presetHTML }}
      >
      </div>         
    ) 
  })

  return (
    <section className='main-section'>    
      <div className="chapter-title">
        <h1>Lucy Terry Prince - Enslaved at the Wells House</h1>
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

      <div className="title-panel">{/*  Opening caption */}
        <h1>Enslaved at the Wells house.</h1>
        <p>Scroll down to begin...</p>
        <button 
          className="audio-don-button" 
          onClick={toggle}>{playing ? "pause audio" : "play audio"}
        </button>
      </div>    

      { captionDissolves }

    </div>
    <div className="related-material">
      <article>
        <h1>Enslaved at the Wells House</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
          <li><a href="/">Cato</a></li>
          <li><a href="/">Pompey</a></li>
          <li><a href="/">Titus</a></li>
          <li><a href="/">Phillis Wheatley</a></li>
        </ul>

        <h2>How Do We Know?</h2>
        <ul>
          <li><a href="/">1723 Boston Law forbidding enslaved people to be out at night or to be found <em>idling or lurking together</em></a></li>
          <li><a href="/">Records of the First Church in Deerfield June 15, 1731-1810</a></li>
          <li><a href="/">Deerfield History, by Pliny Arms, 1840</a></li>
          <li><a href="/">Account Book of Joseph Barnard</a></li>
          <li><a href="/">Account books of Dr. Thomas Williams, 1749,1751, 1754, 1756</a></li>
          <li><a href="/">Wethersfield Justice of the Peace Files 174-1900</a></li>
          <li><a href="/">Catharine Maria Sedgewick, &ldquo;Slavery in New England&rdquo;, 1853</a></li>
          <li><a href="/">A Dress Up Activity: Women&apos;s Clothing from 1750</a></li>
          <li><a href="/">Floor Plans of the Wells House</a></li>
          <li><a href="/">Family Bible Owned by David Hoyt, 1762</a></li>
          <li><a href="/">Lidded Hanging Pot</a></li>
          <li><a href="/">Iron Bake Kettle</a></li>
          <li><a href="/">Straw Mattress and Bedding</a></li>
          <li><a href="/">Canopied Bed</a></li>
          <li><a href="/">Side Chair</a></li>
          <li><a href="/">&ldquo;SW&rdquo; Joined Chest</a></li>
          <li><a href="/">Calico Pocket</a></li>
          <li><a href="/">Candlestick</a></li>
          <li><a href="/">Gate-leg Table</a></li>
          <li><a href="/">Butter Churn</a></li>
          <li><a href="/">How-to Video: Churning Butter</a></li>
          <li><a href="/">Tin-Glazed Earthenware Plate</a></li>
        </ul>

        <h2>Topics &amp; Ideas</h2>
        <ul>
          <li><a href="/">Everyday Work in Colonial Households</a></li>
          <li><a href="/">Who Did What? Work Roles of Enslavers and Their Enslaved Workers</a></li>
          <li><a href="/">Sleeping Arrangements: in New England, enslaved people and their enslavers shared houses</a></li>
          <li><a href="/">18th Century Foodways in New England: enslaved people were often the household cooks, what did they prepare?</a></li>
          <li><a href="/">Women&apos;s Work and Men&apos;s Work</a></li>
          <li><a href="/">Seasonal Chores: in New England the seasons played a large role in daily work</a></li>
          <li><a href="/">Selling the Labor of Enslaved People</a></li>
          <li><a href="/">Everyday Resistance: quiet, non-violent forms of resistance</a></li>
          <li><a href="/">Social Lives of Enslaved People</a></li>
          <li><a href="/">Working Conditions: enslavement in New England provided a wide range of social and psychological environments, from fairly supportive and even friendly to abusive.</a></li>
          <li><a href="/">The Bible and Religion in Domestic Life</a></li>
          <li><a href="/">Emotional relations between enslaver and enslaved sharing a house</a></li>
          <li><a href="/">Literacy and Enslavement: enslaved people in New England were often taught to read and less often to write. Why the difference?</a></li>
        </ul>

        <h2>Myths &amp; Assumptions</h2>
        <ul>
          <li><a href="/">Myth: Enslavement everywhere in the colonies, including in New England, was like enslavement in the American South a generation later.</a></li>
          <li><a href="/">Myth: Enslaved People Had No Free Time</a></li>
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
