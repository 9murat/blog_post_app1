import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from '../entrancePage/RegisterPage'
import LoginPage from '../entrancePage/LoginPage'
import { useSelector } from 'react-redux'
import EntrancePageDashboard from '../entrancePage/EntrancePageDashbord'
import Dashboard from '../homePage/dashboard/Dashboard'
import ForgotPassword from '../entrancePage/ForgotPassword'
import Profile from '../profile/Profile'
import UpdateProfile from '../profile/UpdateProfile'
import UserDetail from '../../components/user/list/UserDetail'
import BlogList from '../../components/blog/list/BlogList'
import BlogListDetail from '../../components/blog/list/BlogListDetail'
import BlogPostUpdate from '../../components/blog/list/BlogPostUpdate'

export default function NavigatorPage() {
    const { isLogged } = useSelector(state => state.userSlice);
    return (
        <div className='navigator_page_container'>
            <Router >
                <Routes>
                    {isLogged ? (
                        <Route path='/*' element={<Dashboard />} />
                    ) : (
                        <Route path='/*' element={<EntrancePageDashboard />} />
                    )}
                    <Route exact path='/loginPage' element={<LoginPage />} />
                    <Route exact path='/registerPage' element={<RegisterPage />} />
                    <Route exact path='/forgotPassword' element={<ForgotPassword />} />
                    <Route exact path='/profile' element={<Profile />} />
                    <Route exact path='/update' element={<UpdateProfile />} />
                    <Route exact path='/blogList' element={<BlogList />} />
                    <Route exact path='/blogList/:id' element={<BlogListDetail />} />
                    <Route exact path='/userDetail/:id' element={<UserDetail />} />
                    <Route exact path='/blogEdit/:id' element={<BlogPostUpdate />} />
                </Routes>

            </Router>
        </div>

    )
}



