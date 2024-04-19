import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component", () => {
    it("renders without crashing", () => {
      render(<App />);
    });
  
    it("displays the header with correct text", () => {
      const { getByText } = render(<App />);
      const headerElement = getByText("Bing Search App");
      expect(headerElement).toBeInTheDocument();
    });
  });
