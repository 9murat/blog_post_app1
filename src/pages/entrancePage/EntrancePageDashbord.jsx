import React from 'react'
import EntrancePageNavbar from './EntrancePageNavbar'
import LoginPage from './LoginPage'
import EntrancePageFooter from './EntrancePageFooter'
import { useLocation } from 'react-router-dom'


export default function EntrancePageDashboard() {
   
    const {pathname} = useLocation();

    return (
        <div className='entrance_page_dashboard_container'>
            <EntrancePageNavbar />
            {pathname === "/" && <LoginPage/>}
            <EntrancePageFooter />
        </div>

    )
}




