import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import GuestProfile from './components/GuestProfile';
import UserProfile from './components/UserProfile';

// redux
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { getProfileThunk, logoutThunk } from '../../store/thunks/AuthThunks';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();

  const { user, isLoading, accessToken } = useAppSelector(state => state.auth);

  // 🔹 ekran açıldığında profile çek
  useEffect(() => {
    if (accessToken && !user) {
      dispatch(getProfileThunk());
    }
  }, [accessToken, user, dispatch]);

  // 🔹 login butonu
  const handleLoginPress = () => {
    console.log('Login butonuna basıldı');
    // buraya sonra navigation gelecek
    // navigation.navigate('LoginScreen')
  };

  // 🔹 logout butonu
  const handleLogoutPress = () => {
    dispatch(logoutThunk());
  };

  // 🔹 loading durumu
  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 🔹 guest kullanıcı
  if (!user) {
    return <GuestProfile onLoginPress={handleLoginPress} />;
  }

  // 🔹 giriş yapmış kullanıcı
  return <UserProfile user={user} onLogoutPress={handleLogoutPress} />;
};

export default ProfileScreen;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
