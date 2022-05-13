const images = [
  '01-dark-house.gif',// index 0
  '02-dawn-house.jpg', // Index 1 (2nd picture)
  '03-candle.jpg',    // Index 2
  '04-house-cutaway.jpg',
  '05-lucy-hearth.gif', // Index  4
  '06-cesar-hens2.gif',
  'black-screen.jpg',// Index 6
  '08-night-fallen-anim.gif', // Night has fallen, moon rises
  '10-door-open.jpg',// 8 friend in yard
  '11-package.jpg', // Index 
  '12-lucy-closeup.jpg', // 11
  '13-stepping-out.jpg', // 10 
  'black-screen.jpg', // 12
]; // index 12 (13th picture)
// '09-moon-risen.jpg', // Index 8

const audios = [
  'crickets',
  'dawn-birds',
];

const captions = [
  {
    label: '0 1st image - house exterior, sky dark stars visible, smoke animation',
    text: '<h1>Enslaved at the Wells&rsquo; house.</h1><p>Scroll down to begin</p>',
  },
  {
    label: '1 2nd image, house exterior, sky lightens',
    text: '<p>In colonial New England, work days for enslaved people begin long before daybreak—long before their enslavers get up to begin their own work days.</p>',
  },
  {
    label: '2 3rd image - house exterior, sky lighter and candle illuminates',
    text: '<p>While Ebenezer and Abigail Wells continue to sleep in their comfortable bed near the front of the house, Lucy arises from her tick-filled mattress in the garret and lights a candle so that she can see to dress for the day.</p>'
  },
  {
    label: '3 4th image - cutaway of house',
    text: '<p>Caesar, sleeping on another garret mattress, also awakens and dresses. Lucy and Caesar slip quietly down the stairs to the kitchen. </p>',
  },
  {
    label: '4 5th image - zoom in to cutaway',
    text: '<p>There Caesar builds a new fire on the embers remaining from the night before, while Lucy begins to prepare breakfast for the Wells. She and Caesar will eat later.</p>'
  },
  {
    label: '5 6th image - lucy at the hearth',
    text: '<p>Lucy cracks several eggs and places a pot of baked beans at the front of the fire to reheat. She also hangs a pot of water over the fire to boil for tea and puts a jug of apple cider on the table. Finally, she sets out plates, cups, and tableware for the Wells.</p>'
  },
  {
    label: '6 7th image - cesar feeds the chickens',
    text: '<p>Having renewed the fire, Caesar goes outside with a bucket of cracked corn to feed the chickens.</p>'
  },
  {
    label: '7 8th image - Interlude',
    text: '<p>Note: note to viewers of this mockup: the narrative continues to follow the activities of Lucy, Cesar and the Wells through their day. For this mockup, we&apos;ll jump ahead to the end of the day&hellip;</p>'
  },
  {
    label: '8 9th image - moon rise animation',
    text: '<p>Night has fallen, and Lucy continues to work, cleaning up the dinner dishes by candlelight. Caesar has returned from errands he was on for Ebenezer earlier in the day.</p>'
  },
  {
    label: '9 10th image - door opens, friend in yard',
    text: '<p>Caesar stokes and banks the fire for the night and then prepares to go out, this time on an errand of his own. He plans to meet one of his friends for a leisurely walk—she is waiting for him in the yard behind the Wells house.</p>'
  },
  {
    label: '10 11th image - lucy hands cesar package',
    text: '<p>She is a friend of Lucy&apos;s, too, and Lucy gives Caesar a package for her, asking him to relay a message proposing that the two young women meet sometime the following day.</p>'
  },
  {
    label: '12 13th caption - close up of lucys face',
    text: '<p>Lucy is anxious, apprehensive, and excited. She worries that Wells&apos; will discover that Caesar has been out.</p>'
  },
  {
    label: '11 12th image - cesar and friend leaving',
    text: '<p>Cesar and Lucy are eager to hear news from other households and share their own updates.</p>'
  },
];

const mores = [
  {
    label: '0 1st image - house exterior, stars visible',
    text: '<h2>More</h2><h4>Topics &amp; Ideas</h4><ul><li><a href="">Enslaved Person&apos;s Household Work</a></li></ul>',
  },
  {
    label: '1 2nd image, house exterior, sky lightens',
    text: '<h2>More</h2><h4>Topics &amp; Ideas</h4><ul><li><a href="">Enslaved Person&apos;s Household Work</a></li></ul>',
  },
  {
    label: '2 3rd image - house exterior, sky lighter and candle illuminates',
    text: '<h2>More</h2><h4>Topics &amp; Ideas</h4><ul><li><a href="">Enslaved Person&apos;s Household Work</a></li></ul>',
  },
  {
    label: '3 4th image - cutaway of house',
    text: '<h2>More</h2><h4>Topics &amp; Ideas</h4><ul><li><a href="">Sleeping Arrangements</a></li><li><a href="">Enslaved Person&apos;s Household Work</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="">Canopied Bed</a></li><li><a href="">Candlestick</a></li><li><a href="">Dress Up Activity</a></li></ul>',
  },
  {
    label: '4 5th image - zoom into cutaway of house',
    text: '<h2>More</h2><h4>Topics &amp; Ideas</h4><ul><li><a href="">Sleeping Arrangements</a></li><li><a href="">Enslaved Person&apos;s Household Work</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="">Canopied Bed</a></li><li><a href="">Candlestick</a></li><li><a href="">Dress Up Activity</a></li></ul>',
  },
  {
    label: '5 6th image - lucy at the hearth',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Jenny (Jin) Cole</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Coworkers</a></li><li><a href="">Foodways</a></li><li><a href="">Women&apos;s Work and Men&apos;s Work</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="">Lidded Hanging Pot</a></li><li><a href="">Iron Bake Kettle</a></li><li><a href="">Calico Pocket</a></li><li><a href="">Video: Churning Butter</a></li></ul>',
  },
  {
    label: '6 7th image - cesar feeds chickens',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Humphrey</a></li><li><a href="">Pompey</a></li><li><a href="">Hannibal</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Seasonal Chores</a></li><li><a href="">Enslaved Person&apos;s Household Work</a></li><li><a href="">Women&apos;s Work and Men&apos;s Work</a></li></ul>',
  },
  {
    label: '7 8th image - Interlude',
    text: '<h2>Nothing More Here</h2>'
  },
  {
    label: '8 9th image - moon rise animation',
    text: '<h2>Not Sure What to Show Here</h2>'
  },
  {
    label: '9 10th image - friend in yard',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Titus</a></li><li><a href="">Quash Gomer</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Everyday Resistance</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="/">Rhode Island law about black people out after curfew, 1703</a></li></ul><h4>Who Knew?</h4><ul><li><a href="">Enslaved People Had No Free Time</a></li></ul>',
  },
  {
    label: '10 11th image - lucy hands cesar package',
    text: '<h2>Not Sure What to Show Here</h2>'
  },
  {
    label: '12 13th image - close up of lucy ',
    text: '<h2>Not Sure What to Show Here</h2>'
  },
  {
    label: '11 12th image - cesar and friend leaving',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Titus</a></li><li><a href="">Quash Gomer</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Everyday Resistance</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="/">Rhode Island law about black people out after curfew, 1703</a></li></ul><h4>Who Knew?</h4><ul><li><a href="">Enslaved People Had No Free Time</a></li></ul>',
  },
];
export {images}
export {audios}
export {captions}
export {mores}
