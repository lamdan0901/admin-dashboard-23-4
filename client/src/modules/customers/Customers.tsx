import { Header } from '@/components/Header'
import { Box, useTheme } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useSuspenseQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants'
import { getCustomers } from '@/modules/customers/Customers.api'

export default function Customers() {
  const theme = useTheme()
  const { data: customers, isFetching } = useSuspenseQuery({
    queryKey: [QueryKey.PRODUCTS],
    queryFn: getCustomers
  })

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none'
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.paper,
            // @ts-ignore
            color: theme.palette.secondary[100],
            borderBottom: 'none'
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.primary.light
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.paper,
            // @ts-ignore
            color: theme.palette.secondary[100],
            borderTop: 'none'
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            // @ts-ignore
            color: `${theme.palette.secondary[200]} !important`
          }
        }}
      >
        <DataGrid
          loading={isFetching}
          getRowId={(row) => row._id}
          rows={customers ?? []}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

const columns: GridColDef[] = [
  {
    field: '_id',
    headerName: 'ID',
    flex: 1
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 0.5
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    flex: 0.5,
    renderCell: (params) => {
      return params.value?.replace(/^(\d{3})(\d{3})(\d{4})/, '($1)$2-$3') ?? ''
    }
  },
  {
    field: 'country',
    headerName: 'Country',
    flex: 0.4
  },
  {
    field: 'occupation',
    headerName: 'Occupation',
    flex: 1
  }
]
