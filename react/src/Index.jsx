import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './app/Store';//importing store
import { Provider } from 'react-redux'; // providing provider to app

const root = createRoot(document.getElementById('root'));
if (container) {
  const root = createRoot(container)
root.render(
  <Provider store={store}> {/*wraps the entire App making the redux store accessible to all components in the component tree */}
    <App />
  </Provider>
)
} else {
  throw new Error( //includes a check to ensure the DOM element with ID 'root' exists before rendering
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}