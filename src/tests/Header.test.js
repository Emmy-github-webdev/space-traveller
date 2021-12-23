import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/header/Header';

describe('Check page rendering', () => {
  it('Should render without error', () => {
    const Nav = renderer.create(<Router><Header /></Router>).toJSON();
    expect(Nav).toMatchSnapshot();
  });
});
