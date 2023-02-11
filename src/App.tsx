import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ROUTES} from './constants/routes';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
