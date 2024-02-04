import { useDispatch } from 'react-redux';
import { type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit';
import { type StateSchema, type ThunkExtra } from 'app/providers/StoreProvider';

export const useAppDispatch: () => ThunkDispatch<
  StateSchema,
  ThunkExtra,
  UnknownAction
> = useDispatch;
