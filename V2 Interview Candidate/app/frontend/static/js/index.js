// index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'

// Create a React functional component
const IndexPage = () => {
    return (
        <div>
            <h1>Index Page</h1>
            <p>This is dynamically rendered content using React!</p>
        </div>
    );
};

// Find the root DOM node where the component will be rendered
const rootElement = document.getElementById('react-component');

// Create a root using createRoot and render the component
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<IndexPage />);
}
