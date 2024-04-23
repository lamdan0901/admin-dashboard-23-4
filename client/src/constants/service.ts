export enum QueryKey {
  USER,
  PRODUCTS
}

export interface User {
  _id: string
  name: string
  email: string
  password: string
  city?: string
  state?: string
  country?: string
  occupation?: string
  phoneNumber?: string
  transactions?: any[]
  role: 'user' | 'admin' | 'superadmin'
}

export interface Product {
  _id: string
  name: string
  price: number
  description: string
  category: string
  rating: number
  supply: number
}

export interface ProductStat {
  _id: string
  productId: string
  yearlySalesTotal?: number
  yearlyTotalSoldUnits?: number
  year?: number
  monthlyData?: MonthlyData[]
  dailyData?: DailyData
}

export interface MonthlyData {
  month: string
  totalSales: number
  totalUnits: number
}

export interface DailyData {
  date: string
  totalSales: number
  totalUnits: number
}

export interface ProductStatItem extends Product {
  stat: ProductStat
}
