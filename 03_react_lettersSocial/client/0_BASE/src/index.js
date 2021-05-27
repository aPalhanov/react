import React from 'react';
import { render } from 'react-dom';

import App from './App';

//import './shared/crash';
//import './shared/service-worker';
//import './shared/vendor';

// NOTE: this isn't ES*-compliant/possible, but works because we use Webpack as a build tool
import './styles/styles.scss';

render(<App />, document.getElementById('app'));