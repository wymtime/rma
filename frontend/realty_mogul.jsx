import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';

`{
    "headerData":["30%","$2000000","85%"],
    "contentA":"This should be displayed in Panel A. This is visible by default",
    "contentB":"This should be displayed in Panel B. This should be hidden by default"
 }`

document.addEventListener('DomContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
});