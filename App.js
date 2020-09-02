/*
  Root Component in which I have imported all animations files.
  You can check animation just by replacing the name of the animation
  in JSX. Thank you
*/
import React from 'react';

import { FadeInOut, PopUp, Spring, MovingObject, Rotation }  from './animations';

function App () {

  return (
    // replace animation name here which you want to see
    <FadeInOut />
  );
}
export default App;
