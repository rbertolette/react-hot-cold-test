import React from 'react';
import { shallow, mount } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
});

/**
 * Array of objects with props:
 *  dif: the number to add to the correct answer
 *  fb: the expected feedback
 */
const difFbs = [
  { dif: 50, fb: 'You\'re Ice Cold...' },
  { dif: 30, fb: 'You\'re Cold...' },
  { dif: 10, fb: 'You\'re Warm.' },
  { dif: 1, fb: 'You\'re Hot!' },
  { dif: 0, fb: 'You got it!' },
];

it('Should set feedback appropriately', () => {
  const wrapper = mount(<Game />);
  const myAnswer = wrapper.state().correctAnswer;

  expect(wrapper.state().feedback).toEqual('Make your guess!');

  // Negate what we add to the correct answer so  0 < sum <= 100
  if (myAnswer > 50) {
    difFbs.map((difFb) => difFb.dif = -difFb.dif);
  }

  // call makeGuess with varying answers to make sure they match
  difFbs.forEach(difFb => {
    wrapper.instance().makeGuess(myAnswer + difFb.dif);
    expect(wrapper.state().feedback).toEqual(difFb.fb);
  });
});

it('Should set guesses appropriately', () => {
  const myGuesses = [];
  const wrapper = mount(<Game />);
  const myAnswer = wrapper.state().correctAnswer;

  expect(wrapper.state().guesses).toEqual(myGuesses);

  // Negate what we add to the correct answer so  0 < sum <= 100
  if (myAnswer > 50) {
    difFbs.map((difFb) => difFb.dif = -difFb.dif);
  }

  // call makeGuess with varying answers to make sure they match
  difFbs.forEach(difFb => {
    wrapper.instance().makeGuess(myAnswer + difFb.dif);
    myGuesses.push(myAnswer + difFb.dif);
    expect(wrapper.state().guesses).toEqual(myGuesses);
  });

  // Try to set a string.
  wrapper.instance().makeGuess('this is a string');
  expect(wrapper.state().guesses).toEqual(myGuesses);
});

it('Should set feedback appropriately', () => {
  const wrapper = mount(<Game />);
  const myAnswer = wrapper.state().correctAnswer;

  expect(wrapper.state().feedback).toEqual('Make your guess!');

  // Negate what we add to the correct answer so  0 < sum <= 100
  if (myAnswer > 50) {
    difFbs.map((difFb) => difFb.dif = -difFb.dif);
  }

  // call makeGuess with varying answers to make sure they match
  difFbs.forEach(difFb => {
    wrapper.instance().makeGuess(myAnswer + difFb.dif);
    expect(wrapper.state().feedback).toEqual(difFb.fb);
  });
});

it('Should set auralStatus appropriately', () => {
  const myGuesses = [];
  const myAuralStatus = '';
  const wrapper = mount(<Game />);
  const myAnswer = wrapper.state().correctAnswer;

  expect(wrapper.state().auralStatus).toEqual(myAuralStatus);

  // Negate what we add to the correct answer so  0 < sum <= 100
  if (myAnswer > 50) {
    difFbs.map((difFb) => difFb.dif = -difFb.dif);
  }

  // Call makeGuess twice. 1st answer should be singular, 2nd plural
  
  let myExpectedAns;
  let myGuess;
  difFbs.forEach((difFb, idx) => {
    myGuess = (myAnswer + difFb.dif);
    wrapper.instance().makeGuess(myGuess);
    wrapper.instance().generateAuralUpdate();
    myGuesses.push(myGuess);
    myExpectedAns = "Here's the status of the game right now: ";
    console.log(idx);
    switch (idx) {
      case (0):
        // myExpectedAns = `Here's the status of the game right now: `;
        myExpectedAns += `${difFb.fb} You've made 1 guess. It was: ${myGuess}`;
        expect(wrapper.state().auralStatus).toEqual(myExpectedAns);
        break;

      case (1):
        myExpectedAns += `${difFb.fb} You've made 2 guesses. In order of most- to least-recent, they are: `;
        myExpectedAns += myGuesses.reverse().join(', ');
        expect(wrapper.state().auralStatus).toEqual(myExpectedAns);
        break;
    }
    // Only need to test twice.
    if (idx === 1) {
      return;
    }
  });

});
