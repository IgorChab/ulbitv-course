import { type Currency, type Gender } from 'shared/constants/common';

export interface Profile {
  firstName: string
  lastName: string
  age: number
  gender: Gender
  currency: Currency
  country: string
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
