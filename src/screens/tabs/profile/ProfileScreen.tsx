import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppDispatch, useAppSelector } from '../../../store/Hooks';
import {
  getProfileThunk,
  loginThunk,
  logoutThunk,
} from '../../../store/thunks/AuthThunks';

import UserProfile from './components/UserProfile';
import GuestProfile from './components/GuestProfile';

const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const { user, isLoading, accessToken } = useAppSelector(state => state.auth);

  useEffect(() => {
    if (accessToken && !user) {
      dispatch(getProfileThunk());
    }
  }, [dispatch, accessToken, user]);

  const handleLoginSubmit = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      await dispatch(loginThunk(values)).unwrap();
      await dispatch(getProfileThunk()).unwrap();
    } catch (error) {
      console.log('LOGIN ERROR:', error);
    }
  };

  const handleLogoutPress = () => {
    dispatch(logoutThunk());
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {user ? (
        <UserProfile user={user} onLogoutPress={handleLogoutPress} />
      ) : (
        <GuestProfile onSubmitLogin={handleLoginSubmit} isLoading={isLoading} />
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
