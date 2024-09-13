
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import MainPage from "./pages/mainPage/MainPage";
import UserRegisterPage from "./pages/userRegisterPage/UserRegisterPage";
import UsersListPage from "./pages/usersListPage/UsersListPage";


function App() {
  return (
     <BrowserRouter>
         <Menu/>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path='/user-register' element={<UserRegisterPage/>}/>
            <Route path='/users' element={<UsersListPage/>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
