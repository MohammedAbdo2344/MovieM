import React from 'react';
import logo from "../img/popCorn.png"
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
import { auth } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

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
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    console.log(user)
    return (
        <React.Fragment>
            {/* User  Logged */}
            {user &&
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <img className='Brand' src={logo} alt='Logo' /><h1> MovieM </h1>
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
                            <AccountCircleIcon onClick={()=>{navigate("/profile")}}></AccountCircleIcon>
                        </div>
                    </div>

                </nav>
            }
            {/* User not Logged */}
            {!user &&
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <img className='Brand' src={logo} alt='logo'/><h1> MovieM </h1>
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
