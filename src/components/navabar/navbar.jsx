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
import { applyTheme, getInitialTheme } from "../../utils.js";

const pages = ['About', 'Projects', 'Achievements', 'Contact'];

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
                backgroundColor: 'var(--color-bg-navbar)', 
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                color: 'var(--color-text)',
                borderBottom: '1px solid var(--color-border)',
                transition: 'all 0.3s ease',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'var(--color-primary)' }} /> */}
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
                            letterSpacing: '.125rem',
                            color: 'var(--color-social-icons)',
                            textDecoration: 'none',
                        }}
                    >
                        Dinuka Malitha
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
                                <MenuItem 
                                    key={page} 
                                    onClick={() => handleMenuItemClick(page.toLowerCase())}
                                    sx={{
                                        mx: 1,
                                        mb: 0.5,
                                        borderRadius: '8px',
                                        transition: 'all 0.2s',
                                        '&:hover': {
                                            backgroundColor: 'var(--color-primary)',
                                            color: '#ffffff',
                                            '& .MuiTypography-root': {
                                                color: '#ffffff',
                                            }
                                        }
                                    }}
                                >
                                    <Typography textAlign="center" fontWeight="500" fontFamily="Poppins, sans-serif">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'var(--color-primary)' }} /> */}
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
                            letterSpacing: '.125rem',
                            color: 'var(--color-social-icons)',
                            textDecoration: 'none',
                        }}
                    >
                        Dinuka Malitha
                    </Typography>

                    <Box sx={{ flexGrow: 10, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleMenuItemClick(page.toLowerCase())}
                                sx={{
                                    my: 1.5,
                                    mx: 1,
                                    color: 'var(--color-text)',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    fontFamily: 'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                    borderRadius: '12px',
                                    px: 2.5,
                                    py: 1,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: 'var(--color-primary)',
                                        color: '#ffffff',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
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
                            <Brightness7Icon sx={{ color: 'var(--color-social-icons)' }} />
                        ) : (
                            <Brightness4Icon sx={{ color: 'var(--color-social-icons)' }} />
                        )}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
