import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from "../img/popCorn.png"
import { Tab, Tabs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth"
import {  signOut } from "firebase/auth";


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
    const [user, loading, error] = useAuthState(auth);
    return (
        <React.Fragment>
            {/* <AppBar>
                <Toolbar>
                    <img src={logo} /><h1> MovieM </h1>
                    <Tabs className='Tabs' sx={{ marginLeft: "50px" }} textColor='inherit' >
                        <NavLink className="navLink" to="/"><Tab sx={{ fontSize: "20px" }} icon={<HomeIcon />} iconPosition='start' label="Home" /></NavLink>
                        <NavLink className="navLink" to="/trending"><Tab sx={{ fontSize: "20px" }} icon={<WhatshotIcon />} iconPosition='start' label="Trending" /></NavLink>
                        <NavLink className="navLink" to="/movies"><Tab sx={{ fontSize: "20px" }} icon={<LocalMoviesIcon />} iconPosition='start' label="Movies" /></NavLink>
                        <NavLink className="navLink" to="/series"><Tab sx={{ fontSize: "20px" }} icon={<LiveTvIcon />} iconPosition='start' label="Series" /></NavLink>
                    </Tabs>
                    <Search className='Search'>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <input type="checkbox" name="" id="toggle" />
                    <label for="toggle">menu</label>
                    <Button href='/login' startIcon={<LoginIcon />} sx={{ color: "white", marginLeft: "auto", fontSize: "20px" }} variant="text">Login</Button>
                    <Button href='/register' startIcon={<PersonAddIcon />} sx={{ color: "white", fontSize: "20px" }} variant="text">Register</Button>
                </Toolbar>
            </AppBar> */}
            {/* User  Logged */}
            {user &&
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <img src={logo} /><h1> MovieM </h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="/"><HomeIcon /> Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/trending"><WhatshotIcon /> Trending</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/movies"><LocalMoviesIcon /> Movies</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href='/series'><LiveTvIcon /> Series</a>
                                </li>
                            </ul>
                            <Search className='Search'>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <Button onClick={() => {
                                signOut(auth).then(() => {
                                    // Sign-out successful.
                                    console.log("Sign-out successful")
                                }).catch((error) => {
                                    // An error happened.
                                    console.log(error)

                                });
                            }} startIcon={<LogoutIcon />} sx={{ color: "Black", marginLeft: "auto", fontSize: "20px" }} variant="text">LogOut</Button>
                        </div>
                    </div>

                </nav>
            }
            {/* User not Logged */}
            {!user &&
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <img src={logo} /><h1> MovieM </h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">

                            <Button href='/login' startIcon={<LoginIcon />} sx={{ color: "Black", marginLeft: "auto", fontSize: "20px" }} variant="text">Login</Button>
                            <Button href='/register' startIcon={<PersonAddIcon />} sx={{ color: "Black", fontSize: "20px" }} variant="text">Register</Button>
                        </div>
                    </div>

                </nav>
            }

        </React.Fragment>
    );
}

export default Header;
