import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './views/components/auth/login/Login.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CodeConfirmation from './views/components/auth/signUp/CodeConfirmation.jsx'
import LandingPage from './views/components/dashboard/LandingPage.jsx'
import FeedScreen from './views/components/feed/FeedScreen.jsx'
import SignUp from './views/components/auth/signUp/SignUp.jsx'
import CreatePost from './views/components/createPost/createPost.jsx'
import Posts from './views/components/feed/Posts.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<LandingPage/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/codeConfirmation' element= {<CodeConfirmation/>}></Route>
        <Route path='/login' element= {<Login/>}></Route>
        <Route path='/feedScreen' element= {<FeedScreen/>}></Route>
        <Route path='/createPost' element= {<CreatePost/>}></Route>
        <Route path='/posts' element= {<Posts/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
