import { profileMock } from 'shared/constants/__mocks__/profile';
import { updateProfileDetails } from 'entities/Profile';

import { fetchProfileDetails } from '../services/fetchProfileDetails/fetchProfileDetails';
import { type ProfileSchema } from '../types/ProfileSchema';
import { profileReducer } from './profileSlice';

describe('profileSlice tests', () => {
  test('fetchProfileDetails.pending', () => {
    const state: ProfileSchema = {
      data: undefined,
      error: undefined,
      isLoading: false
    };

    const actual = profileReducer(state, { type: fetchProfileDetails.pending.type });

    expect(actual).toEqual({
      data: undefined,
      error: undefined,
      isLoading: true
    });
  });

  test('fetchProfileDetails.fulfilled', () => {
    const state: ProfileSchema = {
      data: undefined,
      error: undefined,
      isLoading: false
    };

    const actual = profileReducer(state, {
      type: fetchProfileDetails.fulfilled.type,
      payload: profileMock
    });

    expect(actual).toEqual({
      data: profileMock,
      error: undefined,
      isLoading: false
    });
  });

  test('fetchProfileDetails.rejected', () => {
    const state: ProfileSchema = {
      data: undefined,
      error: undefined,
      isLoading: false
    };

    const actual = profileReducer(state, {
      type: fetchProfileDetails.rejected.type,
      payload: 'error'
    });

    expect(actual).toEqual({
      data: undefined,
      error: 'error',
      isLoading: false
    });
  });

  test('updateProfileDetails.pending', () => {
    const state: ProfileSchema = {
      data: undefined,
      error: undefined,
      isLoading: false
    };

    const actual = profileReducer(state, {
      type: updateProfileDetails.pending.type
    });

    expect(actual).toEqual({
      data: undefined,
      error: undefined,
      isLoading: true
    });
  });

  test('updateProfileDetails.fulfilled', () => {
    const state: ProfileSchema = {
      data: profileMock,
      error: undefined,
      isLoading: false
    };

    const updatedProfile = { ...profileMock, id: '2' };

    const actual = profileReducer(state, {
      type: updateProfileDetails.fulfilled.type,
      payload: updatedProfile
    });

    expect(actual).toEqual({
      data: updatedProfile,
      error: undefined,
      isLoading: false
    });
  });

  test('updateProfileDetails.rejected', () => {
    const state: ProfileSchema = {
      data: undefined,
      error: undefined,
      isLoading: false
    };

    const actual = profileReducer(state, {
      type: updateProfileDetails.rejected.type,
      payload: 'error'
    });

    expect(actual).toEqual({
      data: undefined,
      error: 'error',
      isLoading: false
    });
  });
});
