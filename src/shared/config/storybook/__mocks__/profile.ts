import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import { type Profile } from 'entities/Profile';

export const profileMock: Profile = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  age: 35,
  gender: 'male',
  currency: Currency.USD,
  country: Country.USA,
  city: 'New York',
  username: 'admin',
  avatar: 'https://kartinki.pics/uploads/posts/2022-12/1670303214_18-kartinkin-net-p-adidas-kartinki-vkontakte-18.jpg'
};
