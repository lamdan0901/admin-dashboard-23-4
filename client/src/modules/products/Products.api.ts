import axiosTenant from '../../config/axios'
import { ProductStatItem } from '@/constants'

export const getProductsWithStats = async () => {
  const res = await axiosTenant.get<ProductStatItem[]>(`/client/products`)
  return res.data
}
