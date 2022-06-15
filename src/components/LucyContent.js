const images = [
  '01-dark-house-color.gif',// index 0
  '02-dawn-house-color.jpg', // Index 1 (2nd picture)
  '03-candle-color.jpg',    // Index 2
  '04-house-cutaway-color.jpg',
  '05-lucy-hearth.gif', // Index  4
  '06-cesar-hens-color.gif',
  'black-screen.jpg',// Index 6
  '08-night-fallen-anim-color.gif', // Night has fallen, moon rises
  '09-moon-risen-color.jpg',// 8 friend in yard
  '11-package-color.jpg', // Index 
  '12-lucy-closeup-color.jpg', // 11
  '13-stepping-out-color.jpg', // 10 
  'black-screen.jpg', // 12
]; // index 12 (13th picture)
// '09-moon-risen.jpg', // Index 8

const audios = [
  'crickets',
  'dawn-birds',
];

// const openingCaption = '<h1>Enslaved at the Wells&rsquo; house.</h1><p>Scroll down to begin</p>';

const captions = [
  // {
  //   label: '0 1st image - house exterior, sky dark stars visible, smoke animation',
  //   text: '<h1>Enslaved at the Wells&rsquo; house.</h1><p>Scroll down to begin</p>',
  // },
  {
    label: '1 2nd image, house exterior, sky lightens',
    text: '<p>In colonial New England, work days for enslaved people began long before daybreak &mdash; long before their enslavers got up to begin their own work days.</p>',
  },
  {
    label: '2 3rd image - house exterior, sky lighter and candle illuminates',
    text: '<p>While Ebenezer and Abigail Wells continue to sleep in their comfortable bed downstairs, Lucy arises from her straw-filled mattress in the garret and lights a candle so that she can see to dress for the day.</p>'
  },
  {
    label: '3 4th image - cutaway of house',
    text: '<p>Cesar, sleeping on another garret mattress, also awakens and dresses. Lucy and Cesar slip quietly down the stairs to the kitchen.</p>',
  },
  {
    label: '4 5th image - zoom in to cutaway',
    text: '<p>There, Cesar builds a new fire on the embers remaining from the night before, while Lucy begins to prepare breakfast for the Wells. She and Cesar will eat later.</p>'
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
    text: '<p><strong>Note to viewers of this mockup:</strong><br>The narrative continues to follow the activities of Lucy, Cesar and the Wells through their day. For this partial mockup, we&apos;ll jump ahead to the end of the day&hellip;</p>'
  },
  {
    label: '8 9th image - moon rise animation',
    text: '<p>Night has fallen and Lucy continues to work, cleaning up the dinner dishes by candlelight. Cesar has returned from a day of work harvesting crops for a neighbor of the Wells &mdash; Ebenezer has rented out Cesar&rsquo;s labor for cash.</p>'
  },
  {
    label: '9 10th image - door opens, friend in yard',
    text: '<p>Cesar stokes and banks the fire for the night and then prepares to go out, this time on an errand of his own. He plans to meet one of his friends for a walk &mdash; she is waiting for him in the yard behind the Wells house.</p>'
  },
  {
    label: '10 11th image - lucy hands cesar package',
    text: '<p>She is a friend of Lucy&apos;s, too, and Lucy gives Cesar a package for her: a piece of cake and a dress Lucy mended for her. Lucy asks him to relay a message proposing that the two young women meet sometime the following day.</p>'
  },
  {
    label: '11 12th caption - close up of lucys face',
    text: '<p>Lucy is eager to hear news about her friend and is happy that Cesar will have a chance for a visit, but she&apos;s also apprehensive and hopes they aren&apos;t seen by anyone who objects to their being out on their own at night.</p>'
  },
  {
    label: '12 13th image - cesar and friend leaving',
    text: '<p>As Cesar and his friend leave the Wells house, Lucy awaits his return, eager to hear news from other enslaved people and servants in their community.</p>'
  },
];

const mores = [
  {
    label: '0 1st image - house exterior, stars visible',
    text: '<h2>More</h2><p>Links to resources related to each part of this Moment can be found here.</p>',
  },
  {
    label: '1 2nd image, house exterior, sky lightens',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Jenny (Jin) Cole</a></li><li><a href="">Cesar</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Everyday Work in Colonial Households</a></li><li><a href="">Who Did What? Work Roles of Enslavers and Their Enslaved Workers</a></li></ul>',
  },
  {
    label: '2 3rd image - house exterior, sky lighter and candle illuminates',
    text: '<h2>More</h2><h4>Topics &amp; Ideas</h4><ul><li><a href="">Sleeping Arrangements</a></li><li><a href="">Everyday Work in Colonial Households</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="">A Dress Up Activity: Women&apos;s Clothing from 1750</a></li><li><a href="">Straw Mattress and Bedding</a></li><li><a href="">Canopied Bed</a></li><li><a href="">Floor Plans of the Wells House</a></li><li><a href="">Candlestick</a></li></ul>',
  },
  {
    label: '3 4th image - cutaway of house',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Cesar</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Sleeping Arrangements</a></li><li><a href="">Everyday Work in Colonial Households</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="">Straw Mattress and Bedding</a></li><li><a href="">Canopied Bed</a></li><li><a href="">Candlestick</a></li><li><a href=""></a></li></ul>',
  },
  {
    label: '4 5th image - zoom into cutaway of house THIS TEXT DOESN"T SHOW UP',
    text: '<h2>More</h2><h4>Topics &amp; Ideas</h4><ul><li><a href="">18th Century Foodways in New England</a></li><li><a href="">Everyday Work in Colonial Households</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="">Straw Mattress and Bedding</a></li><li><a href="">Canopied Bed</a></li><li><a href="">Candlestick</a></li><li><a href="">A Dress Up Activity: Women&apos;s Clothing from 1750</a></li></ul>',
  },
  {
    label: '5 6th image - lucy at the hearth',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Jenny (Jin) Cole</a></li><li><a href="">Phillis Wheatley</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">18th Century Foodways in New England</a></li><li><a href="">Women&apos;s Work and Men&apos;s Work</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="">Lidded Hanging Pot</a></li><li><a href="">Iron Bake Kettle</a></li><li><a href="">Calico Pocket</a></li><li><a href="">How-to Video: Churning Butter</a></li></ul>',
  },
  {
    label: '6 7th image - cesar feeds chickens',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Humphrey</a></li><li><a href="">Pompey</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Seasonal Chores in New England</a></li><li><a href="">Women&apos;s Work and Men&apos;s Work</a></li><li><a href="">Who Did What? Work Roles of Enslavers and Their Enslaved Workers</a></li></ul>',
  },
  {
    label: '7 8th image - Interlude',
    text: '<h2>&nbsp;</h2><h2>&nbsp;</h2><h2>&nbsp;</h2>'
  },
  {
    label: '8 9th image - moon rise animation',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Humphrey</a></li><li><a href="">Pompey</a></li><li><a href="">Cato</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Seasonal Chores in New England</a></li><li><a href="">Selling the Labor of Enslaved People</a></li><li><a href="">Who Did What? Work Roles of Enslavers and Their Enslaved Workers</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="">Account Book of Joseph Barnard</a></li></ul>'
  },
  {
    label: '9 10th image - friend in yard',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Titus</a></li><li><a href="">Quash Gomer</a></li><li><a href="">Hannibal</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Everyday Resistance</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="/">1723 Boston Law forbidding enslaved people to be out at night or to be found <em>idling or lurking together</em></a></li></ul>',
  },
  {
    label: '10 11th image - lucy hands cesar package',
    text: '<h2>More</h2><h4>Topics &amp; Ideas</h4><ul><li><a href="">Social Lives of Enslaved People</a></li></ul><h4>Myths &amp; Assumptions</h4><ul><li><a href="">Enslaved People Had No Free Time</a></li></ul>'
  },
  {
    label: '11 12th image - close up of lucy ',
    text: '<h2>More</h2><h4>Topics &amp; Ideas</h4><ul><li><a href="">Everyday Resistance</a></li><li><a href="">Social Lives of Enslaved People</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="">1723 Boston Law forbidding enslaved people to be out at night or to be found <em>idling or lurking together</em></a></li></ul>'
  },
  {
    label: '12 13th image - cesar and friend leaving',
    text: '<h2>More</h2><h4>Who Else?</h4><ul><li><a href="">Titus</a></li><li><a href="">Quash Gomer</a></li></ul><h4>Topics &amp; Ideas</h4><ul><li><a href="">Everyday Resistance</a></li></ul><h4>How Do We Know?</h4><ul><li><a href="/">1723 Boston Law forbidding enslaved people to be out at night or to be found <em>idling or lurking together</em></a></li></ul><h4>Myths &amp; Assumptions</h4><ul><li><a href="">Enslaved People Had No Free Time</a></li></ul>',
  },
];
export {images}
export {audios}
// export {openingCaption}
export {captions}
export {mores}
