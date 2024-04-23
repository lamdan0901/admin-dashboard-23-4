import { useState } from 'react'
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined
} from '@mui/icons-material'
import { FlexBetween } from '../common/FlexBetween'
import logo from '@/assets/images/logo.png'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
  Menu,
  MenuItem
} from '@mui/material'
import { useThemeStore } from '@/store/useThemeStore'
import { User } from '@/constants'

interface NavbarProps {
  user?: User
  isSidebarOpen: boolean
  setIsSidebarOpen: (val: boolean) => void
}

export function Navbar({ user, isSidebarOpen, setIsSidebarOpen }: NavbarProps) {
  const theme = useTheme()
  const toggleDarkMode = useThemeStore.getState().toggleDarkMode

  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null)
  const isOpen = Boolean(anchorEl)
  const handleClose = () => setAnchorEl(null)

  return (
    <AppBar
      sx={{
        position: 'static',
        bg: 'none',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            bgcolor={theme.palette.background.paper}
            borderRadius={'9px'}
            gap={'3rem'}
            p={'0.1rem 1.5rem'}
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap={'1.5rem'}>
          <IconButton onClick={toggleDarkMode}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>
          <FlexBetween>
            <Button
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textTransform: 'none',
                gap: '1rem'
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={logo}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  // @ts-ignore
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  // @ts-ignore
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user?.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                // @ts-ignore
                sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}
