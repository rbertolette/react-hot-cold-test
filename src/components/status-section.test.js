import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () =>{
  const myCount = 1;
  const myGuesses = [];
  it('Renders without crashing', () => {
    shallow(<StatusSection guesses = {myCount} />);
  });
}); 