import { useDispatch } from 'react-redux';
import { type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';

export const useAppDispatch: () => ThunkDispatch<StateSchema, unknown, UnknownAction> = useDispatch;
