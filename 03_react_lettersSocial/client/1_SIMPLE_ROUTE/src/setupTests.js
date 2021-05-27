// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

global.Raven = {
    setUserContext: jest.fn(),
    captureException: jest.fn()
};

// Mapbox gets written to the window, so we need to stub stuff out
global.L = {
    latLng: jest.fn(),
    mapbox: {
        map: jest.fn(() => {
            return {
                setView: jest.fn(),
                invalidateSize: jest.fn()
            };
        }),
        marker: {
            icon: jest.fn()
        }
    },
    marker: jest.fn(() => {
        return {
            addTo: jest.fn(),
            setLatLng: jest.fn(),
            icon: jest.fn()
        };
    })
};
