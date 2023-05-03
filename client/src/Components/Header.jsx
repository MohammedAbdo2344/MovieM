import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from "../img/popCorn.png"
import { Tab, Tabs, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Header = () => {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <img src={logo} /><h1> MovieM </h1>
                    <Tabs sx={{ marginLeft: "50px" }} textColor='inherit' >
                        <Tab sx={{ fontSize: "20px" }} icon={<HomeIcon />} iconPosition='start' label="Home" />
                        <Tab sx={{ fontSize: "20px" }} icon={<WhatshotIcon />} iconPosition='start' label="Trending" />
                        <Tab sx={{ fontSize: "20px" }} icon={<LocalMoviesIcon />} iconPosition='start' label="Movies" />
                        <Tab sx={{ fontSize: "20px" }} icon={<LiveTvIcon />} iconPosition='start' label="Series" />
                    </Tabs>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button startIcon={<LoginIcon />} sx={{ color: "white", marginLeft: "auto" }} variant="text">Login</Button>
                    <Button startIcon={<PersonAddIcon />} sx={{ color: "white", }} variant="text">Sign up</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;

