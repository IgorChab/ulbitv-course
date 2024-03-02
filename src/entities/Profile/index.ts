import { profileSelectors } from './model/selectors/profileSelectors';
import { fetchProfileDetails } from './model/services/fetchProfileDetails/fetchProfileDetails';
import { updateProfileDetails } from './model/services/updateProfileDetails/updateProfileDetails';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import { type Profile, type ProfileSchema } from './model/types/ProfileSchema';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
  type ProfileSchema,
  type Profile,
  profileReducer,
  profileActions,
  ProfileCard,
  profileSelectors,
  fetchProfileDetails,
  updateProfileDetails
};
