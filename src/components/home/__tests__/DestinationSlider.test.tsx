import React from 'react';
import { render, screen } from '@testing-library/react';
import DestinationSlider from '../DestinationSlider';

import { describe, test, expect } from 'vitest';

describe('DestinationSlider Component', () => {
  test('renders without crashing and displays expected content', () => {
    render(<DestinationSlider searchTerm="" />);
    // Example: Check if a heading or element with specific text is present
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toBeInTheDocument();
  });
});
