import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export function Loading() {
  return (
    <>
      <Stack spacing={1} mt={2} p={1}>
        <Skeleton variant="rectangular" width={400} height={60} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Stack>
      <Stack mt={3} p={1} spacing={1}>
        <Skeleton variant="rectangular" width={400} height={60} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Stack>
    </>
  )
}
