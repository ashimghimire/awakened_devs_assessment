import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navigation from '../../app/components/Navigation';
 
describe('Home', () => {
  it('renders a menus', () => {
    render(<Navigation />)
   screen.findByText("Home").then(value=>console.log(value));
  });
})