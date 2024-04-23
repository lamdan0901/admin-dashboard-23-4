import axiosTenant from '../../config/axios'
import { User } from '@/constants'

export const getCustomers = async () => {
  const res = await axiosTenant.get<User[]>(`/client/customers`)
  return res.data
}
