import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
    return ( <
        BrowserRouter >
        <
        div className = "container" >
        <
        h1 > rental playstation 2345 < /h1> <
        Routes >
        <
        Route path = "/"
        element = { < UserList / > }
        /> <
        Route path = "add"
        element = { < AddUser / > }
        /> <
        Route path = "edit/:id"
        element = { < EditUser / > }
        /> <
        /Routes> <
        /div> <
        /BrowserRouter>
    );
}

export default App;