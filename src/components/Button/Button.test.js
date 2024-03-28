import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils';
import Button from './Button';
import { ReactComponent as IconSearch } from 'theme/icons/search.svg';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Hello</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('type')).toBe('button');
    expect(button).toHaveTextContent('Hello');
  });

  it('spreads custom attributes', () => {
    const clickFn = jest.fn();
    render(
      <Button data-foo="12" onClick={clickFn}>
        Hello
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button.getAttribute('data-foo')).toBe('12');
    userEvent.click(button);
    expect(clickFn).toHaveBeenCalledTimes(1);
  });

  it('renders a link when asked', () => {
    render(
      <Button as="a" href="https://remote.com">
        Hello
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://remote.com');
  });

  it('renders icon when provided', () => {
    render(<Button icon={<IconSearch title="Search Icon" />}>Search</Button>);
    const icon = screen.getByTitle('Search Icon');
    expect(icon).toBeInTheDocument();
  });
});
