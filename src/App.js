import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Pages/Route/Routes/Routes';

function App() {
  return (
    <div className='bg'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
