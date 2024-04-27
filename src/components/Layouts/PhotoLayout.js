import { Outlet } from "react-router"
import Photoalbum from "../Pages/photograpy/photoalbum"
import Navigation from "../navigation/navigation"
// import { ToDo } from "../Projects/toDo/ToDo"
import { ToDoWrapper } from "../Projects/toDo/ToDoWrapper"

function PhotoLayout() {
  return (
    <>
        <div className='photo-gallery'>
            <Navigation/>
            <ToDoWrapper/>
            <Photoalbum/>
            <Outlet/>
        </div>
    </>
  )
}

export default PhotoLayout