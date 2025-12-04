import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {applyTheme, getInitialTheme} from "../../utils.js";

const pages = ['Home', 'About', 'Tech Stack', 'Projects', 'Contacts'];

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [theme, setTheme] = React.useState(getInitialTheme);

    React.useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenuItemClick = (id) => {
        // Navigate to the section and close the menu
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        handleCloseNavMenu();
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                color: 'var(--color-text)',
                borderBottom: '1px solid rgba(229,231,235,0.7)',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'var(--color-primary)' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#home"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Poppins, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'var(--color-primary)',
                            textDecoration: 'none',
                        }}
                    >
                        Dinuka
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleMenuItemClick(page.toLowerCase())}>
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'var(--color-primary)' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#home"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Poppins, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'var(--color-primary)',
                            textDecoration: 'none',
                        }}
                    >
                        Dinuka
                    </Typography>

                    <Box sx={{ flexGrow: 10, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleMenuItemClick(page.toLowerCase())}
                                sx={{
                                    my: 1.5,
                                    mx: 1.5,
                                    color: 'var(--color-text-muted)',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    fontSize: '0.95rem',
                                    borderRadius: '9999px',
                                    px: 2,
                                    '&:hover': {
                                        backgroundColor: 'rgba(124, 58, 237, 0.08)',
                                        color: 'var(--color-primary)',
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={toggleTheme}
                        color="inherit"
                        aria-label="Toggle light/dark theme"
                    >
                        {theme === 'dark' ? (
                            <Brightness7Icon sx={{ color: 'var(--color-accent)' }} />
                        ) : (
                            <Brightness4Icon sx={{ color: 'var(--color-primary)' }} />
                        )}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
