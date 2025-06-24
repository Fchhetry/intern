// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient(); //central manager that stores all query data, handles caching, background fetching, and more

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <App />
//    </QueryClientProvider> {/*Wraps entire app in QueryClientProvider so any component can now use React Query  */}
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
