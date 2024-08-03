import { type Gender } from 'shared/constants/common';
import { type Currency } from 'entities/CurrencyListBox';
import { type Country } from 'entities/CountryListBox';

export interface Profile {
  id: string
  firstName: string
  lastName: string
  age: number
  gender: Gender
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
}
