import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export const Tabs: Data[] = [
  {
    id: 1,
    name: 'Home',
    icon: <HomeOutlinedIcon />,
    component: 'Home'
  },
  {
    id: 2,
    name: 'Movies',
    icon: <VideocamOutlinedIcon />,
    component: 'Movies'
  },
  {
    id: 3,
    name: 'TV Series',
    icon: <OndemandVideoIcon />,
    component: 'TV Series'
  },
  {
    id: 4,
    name: 'Upcoming',
    icon: <CalendarMonthIcon />,
    component: 'Upcoming'
  },
]
