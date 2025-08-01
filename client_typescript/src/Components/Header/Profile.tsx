import { useState } from 'react';
import React from 'react';

import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

interface ProfileProps {
  account: string;
  setAccount: (account: string) => void;
}

const Profile = ({ account, setAccount }: ProfileProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLDivElement>(null);
    
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        setAccount('');
    }
    
    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 2 }}>{account}</Typography></Box>
            <Component
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); logout();}}>
                    <PowerSettingsNew fontSize='small' color='primary'/> 
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )    
}

export default Profile;