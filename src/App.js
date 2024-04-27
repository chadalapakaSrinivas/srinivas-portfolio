import './App.css';
import { Route, createRoutesFromElements } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Experience from './components/Pages/Experience/Experience.js';
import Hobbies from './components/Pages/Hobbies';
import About from './components/Pages/About';
import Skills from './components/Pages/Skills';
import '../src/index.scss';
import HomeLayout from './components/Layouts/HomeLayout';
import PhotoLayout from './components/Layouts/PhotoLayout.js';

 
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
     <Route path='/' element={<HomeLayout/>}>
       <Route index path='Home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='experience' element={<Experience/>} />
        <Route path='hobbies' element={<Hobbies/>}/>
        <Route path='skills' element={<Skills/>}/>
      </Route>
      <Route element={<PhotoLayout/>}>
          <Route path='photogallery'/>
        </Route>
   </Route>
  )
)
function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
