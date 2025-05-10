import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, HomeLayout, Cocktail, Error, Landing, Newsletter ,SingleError } from "./pages";
import {loader as landingloader} from './pages/Landing.jsx';
import {loader as cocktailloader} from './pages/Cocktail.jsx'
import {action as newsletterAction} from './pages/Newsletter.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
defaultOption: {
  queries: {
    staleTime :1000 *60 * 5 ,
  },
},
});
const App = () => {
 const router = createBrowserRouter([
    {
path: '/',
element:<HomeLayout/>,
errorElement:<Error/>,
children: [
 {
   
      index:true,
      element: <Landing/>,
      errorElement:<SingleError/>,
      loader:landingloader(queryClient),
    },
 {
      path: 'cocktail/:id',
      errorElement:<SingleError/>,
      loader:cocktailloader(queryClient),
      element: <Cocktail/>
    },
     {
      path: '/newsletter',
      action:newsletterAction,
      element: <Newsletter/>,
      
    },
 {
      path: '/about',
      element: <About/>
  },
  
],
    },
   
  ]);
  return(
    <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}/>
  <ReactQueryDevtools  initialIsOpen={false}/>
  </QueryClientProvider>
)};
export default App;
