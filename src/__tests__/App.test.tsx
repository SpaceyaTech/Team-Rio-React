import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the hero section', () => {
  render(<App />);
  const featuredStory = screen.getByText(/Featured story/i);
  expect(featuredStory).toBeInTheDocument();
});
