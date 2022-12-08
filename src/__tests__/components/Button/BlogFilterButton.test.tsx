import { fireEvent, render, screen } from '@testing-library/react';
import BlogFilterButton from '../../../components/Button/BlogFilterButton';

test('renders correct color scheme when button is active', async () => {
  const category = 'Design';
  let isActive = true;
  const mockHandleClick = jest.fn();

  render(
    <BlogFilterButton
      category={category}
      isActive={isActive}
      handleClick={mockHandleClick}
    />
  );
  const button = screen.getByRole('button');

  expect(button).toHaveClass('bg-black');
  expect(button).toHaveTextContent(category);
});

test('renders correct color scheme when button is not active', () => {
  const category = 'Frontend';
  let isActive = false;
  const mockHandleClick = jest.fn();

  render(
    <BlogFilterButton
      category={category}
      isActive={isActive}
      handleClick={mockHandleClick}
    />
  );
  const button = screen.getByRole('button');

  expect(button).toHaveClass('bg-gray-200');
  expect(button).toHaveTextContent(category);
});

test('expect handleClick to be called', () => {
  const category = 'Frontend';
  let isActive = false;
  const mockHandleClick = jest.fn();

  render(
    <BlogFilterButton
      category={category}
      isActive={isActive}
      handleClick={mockHandleClick}
    />
  );
  const button = screen.getByRole('button');

  fireEvent.click(button);
  expect(mockHandleClick).toHaveBeenCalled();
});
