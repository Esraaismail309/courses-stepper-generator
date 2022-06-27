import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Typography } from '@mui/material';


export const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                // mx: 'auto',
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} />
                            Courses
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>

        </div>
    )
}
