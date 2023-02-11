// React Testing library
import {render, screen} from '@testing-library/react';

// Component
import TripCard from '../../../components/TripCard/TripCard';

//Defaults
const defaultProps = {
  title: 'European Quest',
  countries_count: 8,
  days_count: 21,
  emission_offset: '810 Kg CO2e',
  rating: 4.5,
  background: process.env.PUBLIC_URL + 'img/dessert.jpg',
};
// Tests
describe('Tests for <TripCard />', () => {
  it('Should be Render with Image and Emission Value', () => {
    render(<TripCard {...defaultProps} />);
    const emissionCard = screen.getByTestId('emission-card');
    const cardImage = screen.getByTestId('card-image');

    expect(emissionCard).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
  });

  it('Check the title of Card', () => {
    render(<TripCard {...defaultProps} />);
    const cardTitle = screen.getByTestId('card-title');

    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle).toHaveTextContent(defaultProps.title);
  });
});
