import { useState } from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { ProductStatItem } from '@/constants'
import { useSuspenseQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants'
import { Header } from '@/components/Header'
import { getProductsWithStats } from '@/modules/products/Products.api'

interface ProductProps {
  product: ProductStatItem
}

const ProductItem = ({ product }: ProductProps) => {
  const theme = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)
  const { _id, name, description, price, rating, category, supply, stat } =
    product

  return (
    <Card
      sx={{
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '0.55rem'
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          // @ts-ignore
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        {/* @ts-ignore */}
        <Typography sx={{ mb: '1.5rem' }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setIsExpanded(!isExpanded)}>
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          // @ts-ignore
          color: theme.palette.neutral[300]
        }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
          <Typography>
            Yearly Sales This Year: {stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

const Products = () => {
  const { data: products } = useSuspenseQuery({
    queryKey: [QueryKey.PRODUCTS],
    queryFn: getProductsWithStats
  })

  const isNonMobile = useMediaQuery('(min-width: 1000px)')

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
        }}
      >
        {products?.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </Box>
    </Box>
  )
}

export default Products
