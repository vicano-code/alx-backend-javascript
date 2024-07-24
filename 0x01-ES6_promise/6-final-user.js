// Handle multiple promises and return an array
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = {
    status: 'pending',
    value: '',
  };
  const photo = {
    status: 'pending',
    value: '',
  };
  try {
    const signUp = await signUpUser(firstName, lastName);
    user.status = 'fulfilled';
    user.value = signUp;
  } catch (error) {
    user.status = 'rejected';
    user.value = error.toString();
  }
  try {
    const loadPhoto = await uploadPhoto(fileName);
    photo.status = 'fulfilled';
    photo.value = loadPhoto;
  } catch (error) {
    photo.status = 'rejected';
    photo.value = error.toString();
  }
  return [user, photo];
}
