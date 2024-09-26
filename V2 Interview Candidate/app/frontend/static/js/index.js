import React from 'react';
import ReactDOM from 'react-dom';
//import VmList from '../react/components/VmList';  // Adjust the path if necessary
// index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import VmList from '../react/components/VmList'; // Adjust the path if necessary

// Find the root element where you want to render your React app
const rootElement = document.getElementById('react-component');

if (rootElement) {
    // Create a root and render the VmList component
    const root = createRoot(rootElement);
    root.render(<VmList />);
} else {
    console.error("Root element not found");
}
