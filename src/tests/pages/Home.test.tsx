import {render} from '@testing-library/react';
import axios from 'axios';
import {dataMock} from '../../mocks/entities/data.mock';
import Home from '../../pages/Home/Home';
// import 'jest-dom/extend-expect';

const mockedData = {data: dataMock};

const mockedAxios = axios as jest.Mocked<typeof axios>;

// Tests
describe('Tests for <Home />', () => {
  it('Renders with defaults', async () => {
    await mockedAxios.get.mockResolvedValueOnce(mockedData);

    const {container} = render(<Home />);

    // Create the snapshot test
    expect(container).toMatchSnapshot();
  });
});
