import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
function Header() {

  let navigate = useNavigate(); 

  const routeChangesignin = () =>{  
    navigate('./signin');
  }
  const routeChangesignup = () =>{  
    navigate('./signup');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PeopleIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Register System
          </Typography>
          <Button color="inherit" onClick={routeChangesignin} endIcon={<LoginIcon />}>Signin</Button>  <Button color="inherit" onClick={routeChangesignup} endIcon={<AppRegistrationIcon />}>Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header