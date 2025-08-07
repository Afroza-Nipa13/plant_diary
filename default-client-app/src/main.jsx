import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AuthProvider from './Contexts/AuthProvider.jsx';
import MainLayOut from './MainLayOuts/MainLayOut.jsx';

import DetailsProduct from './Components/DetailsProduct.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';

import Error from './Pages/Error.jsx';
import Home from './Components/Home.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import AddPlants from './Components/AddPlants.jsx';
import AllPlants from './Components/AllPlants.jsx';
import MyPlants from './Pages/MyPlants.jsx';
import PrivetRouts from './PrivetRoute/PrivetRouts.jsx';
import Loading from './Pages/Loading.jsx';
import UpdatePlants from './Components/UpdatePlants.jsx';
import { HelmetProvider } from 'react-helmet-async';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,

        Component: Home,

      },

      {
        path: '/addplant', element: <PrivetRouts>
          <AddPlants></AddPlants>
        </PrivetRouts>
      },

      {
        path: '/updateplants/:id',
        loader: ({ params }) => fetch(`https://backend-server-three-lyart.vercel.app/plants/${params.id}`),
        Component: UpdatePlants
      },

      {
        path: '/details/:id',
        HydrateFallback: <Loading></Loading>,
        loader: ({ params }) => fetch(`https://backend-server-three-lyart.vercel.app/plants/${params.id}`),
        element: <PrivetRouts>
          <DetailsProduct></DetailsProduct>
        </PrivetRouts>
      },

      { path: '/signup', Component: SignUp },
      { path: '/signin', Component: SignIn },

      { path: '/contactus', Component: ContactUs },
      { path: '/AboutUs', Component: AboutUs },
      {
        path: '/plants',
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch('https://backend-server-three-lyart.vercel.app/plants'),
        Component: AllPlants
      },
      {
        path: '/myplants/:email',
        element: <PrivetRouts><MyPlants></MyPlants></PrivetRouts>

      }

    ]
  },
  { path: '/*', element: <Error></Error> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>

  </StrictMode>,
)
