import React from 'react'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyIcon from '@mui/icons-material/Key';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import Top_Header from './components/Top_Header';
import MenuList from './components/MenuList';
import LastList from './components/LastList';


const Dashboard = () => {
  return (
    <div className='w-[480px] mx-auto'>
        <Top_Header title="Home Page"/>
        <section className='w-[314px] h-[396px] mt-[28px] mx-auto rounded-[10px]'>
        <MenuList title='Address' isTopBorder={true}  Icon={LocationOnIcon}/>
        <MenuList title='Account' isTopBorder={false} Icon={PersonIcon}/>
        <MenuList title='Notification' isTopBorder={false} Icon={NotificationsIcon}/>
        <MenuList title='Passwords' isTopBorder={false} Icon={KeyIcon}/>
        <MenuList title='Language' isTopBorder={false} Icon={ChatRoundedIcon}/>
        <MenuList title='Citizen Scientist kit' isTopBorder={false} Icon={HomeRepairServiceRoundedIcon}/>
        <LastList title='Logout'  Icon={PowerSettingsNewRoundedIcon} />
        </section>
        
       
        
    </div>
  )
}

export default Dashboard