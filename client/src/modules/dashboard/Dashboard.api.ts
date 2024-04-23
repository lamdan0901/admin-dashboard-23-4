import axiosTenant from '../../config/axios'
import { User } from '@/constants'

export const getUserById = async (id: string) => {
  const res = await axiosTenant.get<User>(`/general/user/${id}`)
  return res.data
}
