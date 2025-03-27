import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import UserList from "./Pages/UserList";
import EditUser from "./Pages/EditUser";
import { UserDataProvider } from "./contextCreate/Userdata";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/editUser" element={<EditUser />} />
      </Route>
    )
  );
  return (
    <UserDataProvider>
      <RouterProvider router={router} />
    </UserDataProvider>
  );
}

export default App;
