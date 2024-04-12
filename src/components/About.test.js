import About from './About';
import { render,fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

// Mocking react-router-dom useNavigate
jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn()
}));

test('renders About component', () => {
    const {queryByLabelText, getByLabelText} = render(
        <About labelOn="On" labelOff="Off" />,
    );
    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));
  
    expect(queryByLabelText(/on/i)).toBeTruthy();
 
});

// test('redirects to /educations when "My Educations" button is clicked', () => {
//   const navigate = jest.fn();
//   const { getByText } = renderer.create(<About />);
//   const educationsButton = getByText(/myeducations/i);
//   fireEvent.click(educationsButton);
//   expect(navigate).toHaveBeenCalledWith('/educations', { replace: true });
// });