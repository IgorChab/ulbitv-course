import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('render Button', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('Button have clear class', () => {
    render(<Button variant='clear'>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
  });
});
