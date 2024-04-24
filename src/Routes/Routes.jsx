import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layouts/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import UpdateCoffee from '../Pages/UpdateCoffee';
import AddCoffee from '../Pages/AddCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'update_coffee',
        element: <UpdateCoffee />
      },
      {
        path: 'add_coffee',
        element: <AddCoffee />
      }
    ]
  },
]);

export default router 