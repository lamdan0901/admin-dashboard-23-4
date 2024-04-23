import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { Box, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getUserById } from './MainLayout.api'
import { QueryKey } from '@/constants'
import { Suspense } from 'react'
import { Loading } from '@/components'

const MainLayout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const { data: user } = useSuspenseQuery({
    queryKey: [QueryKey.USER],
    queryFn: () => getUserById('63701cc1f03239c72c00017f')
  })

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        user={user}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={user}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  )
}
export default MainLayout
