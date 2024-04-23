import React from 'react'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material'
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined
} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FlexBetween } from '@/components/common/FlexBetween'
import logo from '@/assets/images/logo.png'
import { PATH, User } from '@/constants'

const navItems = [
  {
    text: 'Dashboard',
    path: PATH.DASHBOARD,
    icon: <HomeOutlined />
  },
  {
    text: 'Client Facing',
    path: PATH.CLIENT_FACING,
    icon: null
  },
  {
    text: 'Products',
    path: PATH.PRODUCTS,
    icon: <ShoppingCartOutlined />
  },
  {
    text: 'Customers',
    path: PATH.CUSTOMERS,
    icon: <Groups2Outlined />
  },
  {
    text: 'Transactions',
    path: PATH.TRANSACTIONS,
    icon: <ReceiptLongOutlined />
  },
  {
    text: 'Geography',
    path: PATH.GEOGRAPHY,
    icon: <PublicOutlined />
  },
  {
    text: 'Sales',
    path: PATH.SALES,
    icon: null
  },
  {
    text: 'Overview',
    path: PATH.OVERVIEW,
    icon: <PointOfSaleOutlined />
  },
  {
    text: 'Daily',
    path: PATH.DAILY,
    icon: <TodayOutlined />
  },
  {
    text: 'Monthly',
    path: PATH.MONTHLY,
    icon: <CalendarMonthOutlined />
  },
  {
    text: 'Breakdown',
    path: PATH.BREAKDOWN,
    icon: <PieChartOutlined />
  },
  {
    text: 'Management',
    path: PATH.MANAGEMENT,
    icon: null
  },
  {
    text: 'Admin',
    path: PATH.ADMIN,
    icon: <AdminPanelSettingsOutlined />
  },
  {
    text: 'Performance',
    path: PATH.PERFORMANCE,
    icon: <TrendingUpOutlined />
  }
]

interface SidebarProps {
  user?: User
  drawerWidth: string
  isSidebarOpen: boolean
  setIsSidebarOpen: (val: boolean) => void
  isNonMobile: boolean
}

export const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile
}: SidebarProps) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()
  const [active, setActive] = useState(pathname)

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              // @ts-ignore
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.paper,
              boxSixing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth
            }
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              {/* @ts-ignore */}
              <FlexBetween color={theme.palette.secondary}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    ECommerce
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon, path }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                      {text}
                    </Typography>
                  )
                }

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(path)
                        setActive(path)
                      }}
                      sx={{
                        backgroundColor:
                          active === path
                            ? // @ts-ignore
                              theme.palette.secondary[300]
                            : 'transparent',
                        color:
                          active === path
                            ? // @ts-ignore
                              theme.palette.primary[600]
                            : // @ts-ignore
                              theme.palette.secondary[100]
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: '2rem',
                          color:
                            active === path
                              ? // @ts-ignore
                                theme.palette.primary[600]
                              : // @ts-ignore
                                theme.palette.secondary[200]
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === path && (
                        <ChevronRightOutlined sx={{ ml: 'auto' }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween
              textTransform="none"
              gap="1rem"
              m="1.5rem 0.5rem 0 3rem"
            >
              <Box
                component="img"
                alt="profile"
                src={logo}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  // @ts-ignore
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  // @ts-ignore
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user?.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  // @ts-ignore
                  color: theme.palette.secondary[300],
                  fontSize: '25px '
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}
