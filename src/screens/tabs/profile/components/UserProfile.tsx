import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../../../theme/Colors';
import normalize from '../../../../utils/Normalize';
import type { User } from '../../../../models/data/User';

interface UserProfileProps {
  onLogoutProfile: () => void;
  user: User | null;
}

const logos: ImageSourcePropType[] = [
  require('../../../../assets/ecommlogo.png'),
  require('../../../../assets/ecommlogo.png'),
  require('../../../../assets/ecommlogo.png'),
  require('../../../../assets/ecommlogo.png'),
  require('../../../../assets/ecommlogo.png'),
];

const UserProfile: React.FC<UserProfileProps> = ({ onLogoutProfile, user }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.banner}
      >
        <Image source={{ uri: user?.avatar }} style={styles.avatar} />
      </LinearGradient>

      <View style={styles.profileInfo}>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <Text style={styles.email}>Rol: {user?.role}</Text>

        <View style={styles.logoContainer}>
          {logos.map((logo, index) => (
            <Image key={index} style={styles.logo} source={logo} />
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogoutProfile}>
          <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    overflow: 'visible',
  },

  banner: {
    width: '100%',
    height: normalize(180),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: normalize(40),
    overflow: 'visible',
  },

  avatar: {
    width: normalize(110),
    height: normalize(110),
    borderRadius: normalize(55),
    borderWidth: normalize(3),
    borderColor: COLORS.white,
    position: 'absolute',
    bottom: normalize(-55),
    zIndex: 10,
  },

  profileInfo: {
    marginTop: normalize(70),
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },

  name: {
    fontSize: normalize(20),
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: normalize(6),
  },

  email: {
    fontSize: normalize(14),
    color: COLORS.gray,
    marginBottom: normalize(12),
  },

  logoutButton: {
    width: '100%',
    height: normalize(50),
    borderRadius: normalize(12),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(40),
  },

  logoutButtonText: {
    color: COLORS.white,
    fontSize: normalize(15),
    fontWeight: '600',
  },

  logo: {
    width: normalize(40),
    height: normalize(40),
    marginTop: normalize(60),
  },

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
