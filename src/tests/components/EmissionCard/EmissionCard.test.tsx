// React
import {render, screen} from '@testing-library/react';

// Component
import EmissionCard from '../../../components/EmissionCard/EmissionCard';

//Defaults
const defaultProps = {
  emission_offset: '810 Kg CO2e',
};
// Tests
describe('Tests for <EmissionCard />', () => {
  it('Renders with defaults', () => {
    const {container} = render(<EmissionCard {...defaultProps} />);
    // Create the snapshot test
    expect(container).toMatchSnapshot();
  });

  it('should be render with emission offset value', () => {
    render(<EmissionCard {...defaultProps} />);
    const emissionValue = screen.getByTestId('emission-value');

    expect(emissionValue).toBeInTheDocument();
    expect(emissionValue).toHaveTextContent(defaultProps.emission_offset);
  });
});
