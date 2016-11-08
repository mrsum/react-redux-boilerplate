import React from 'react';
import { shallow } from 'enzyme';
import Logo from './../index';
import { Link } from 'react-router';

describe('Logo React Test', () => {
  it('Logo have text', () => {
    const logo = shallow(
      <Logo/>
    )
    expect(logo.find('code').text()).toEqual(
      '................................ ' +
      '..####...##..##..######..#####.. ' +
      '.##......##..##....##....##..##. ' +
      '..####...######....##....#####.. ' +
      '.....##..##..##....##....##..... ' +
      '..####...##..##..######..##..... ' +
      '................................ '
    );
  });
});
