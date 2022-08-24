import React from 'react';
import { render, screen } from '@testing-library/react';
import {PortalDemanda} from './App';

test('renders learn react link', 
  () => {
    render(<PortalDemanda />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  }
);
