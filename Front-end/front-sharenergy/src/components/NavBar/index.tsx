import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useNavigate } from 'react-router-dom';
import { goToCat, goToClient, goToDog, goToHome, goToLogin } from '../../router/coordinator';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const actions = [
  { icon: <HomeIcon />, name: 'Home' },
  { icon: <LocalFireDepartmentIcon />, name: 'Cat' },
  { icon: <PetsIcon />, name: 'Dog' },
  { icon: <AccountCircleIcon />, name: 'Client' },
  { icon: <LogoutIcon />, name: 'Logout' },
];

export const NavBar = () => {
  const navigate = useNavigate();

  const currentPage = (name: string) => {
    switch (name) {
      case 'Home':
        goToHome(navigate);
        break;
      case 'Cat':
        goToCat(navigate);
        break;
      case 'Dog':
        goToDog(navigate);
        break;
      case 'Client':
        goToClient(navigate);
        break;
      case 'Logout':
        localStorage.removeItem('token')
        goToLogin(navigate);
        break;
      default:
        goToHome(navigate);
    }
  }

  return (
    <Box sx={{ height: 20, transform: '-moz-initial', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => currentPage(action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}