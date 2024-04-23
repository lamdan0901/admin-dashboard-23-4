import { Typography, Box, useTheme } from '@mui/material'

export const Header = ({
  title,
  subtitle
}: {
  title: string
  subtitle: string
}) => {
  const theme = useTheme()
  return (
    <Box>
      <Typography
        variant="h2"
        // @ts-ignore
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      {/* @ts-ignore */}
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  )
}
