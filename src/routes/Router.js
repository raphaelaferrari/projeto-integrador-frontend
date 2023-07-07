import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import CreateAccount from "../pages/CreateAccount/CreateAccount"
import FeedPosts from "../pages/FeedPosts/FeedPosts"
import FeedComments from "../pages/FeedComments/FeedComments"

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                {/* Login */}
                <Route index element={<Login/>}/>
                {/* CreateAccount */}
                <Route path={"/createaccount"} element={<CreateAccount/>}/>
                {/* FeedPosts */}
                <Route path={"/feedposts"} element={<FeedPosts/>}/>
                {/* FeedComments */}
                <Route path={"/feedcomments"} element={<FeedComments/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router