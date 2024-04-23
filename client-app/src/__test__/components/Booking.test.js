import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Booking from '../../app/components/Booking';
 
describe('Home', () => {
  it('renders a menus', () => {
    render(<Booking />);

    expect(screen.getByPlaceholderText("location"));
    expect(screen.getByPlaceholderText("Hotels"));
    expect(screen.getByPlaceholderText("No_of_beds"));
    });
})