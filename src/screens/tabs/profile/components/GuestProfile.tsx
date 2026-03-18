import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import { LoginSchema } from '../../../../utils/ValidationSchemas';
import { COLORS } from '../../../../theme/Colors';
import normalize from '../../../../utils/Normalize';

import type {
  GuestProfileProps,
  LoginFormValues,
} from '../../../../models/ui/Auth';

const GuestProfile: React.FC<GuestProfileProps> = ({
  onSubmitLogin,
  isLoading,
}) => {
  const initialValues: LoginFormValues = {
    email: 'john@mail.com',
    password: 'changeme',
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerArea}>
        <Text style={styles.title}>Giriş Yap</Text>
        <Text style={styles.description}>
          Alışverişe devam etmek için giriş yapmanız gerekir, lütfen giriş
          yapınız 🎉
        </Text>
      </View>

      {/* FORM */}
      <View style={styles.formCard}>
        <Formik<LoginFormValues>
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={values => onSubmitLogin(values)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <>
              {/* EMAIL */}
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  placeholder="Email adresinizi girin"
                  placeholderTextColor="#999999"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  style={styles.input}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              {/* PASSWORD */}
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Şifre</Text>
                <TextInput
                  placeholder="Şifrenizi girin"
                  placeholderTextColor="#999999"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  style={styles.input}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              {/* BUTTON */}
              <TouchableOpacity
                style={[styles.loginButton, isLoading && styles.disabledButton]}
                onPress={() => handleSubmit()}
                disabled={isLoading}
              >
                <Text style={styles.loginButtonText}>
                  {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                </Text>
              </TouchableOpacity>

              {/* INFO */}
              <Text style={styles.infoText}>
                Demo kullanıcı ile giriş yapabilirsiniz.
              </Text>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default GuestProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: normalize(16),
    paddingTop: normalize(40),
  },

  headerArea: {
    marginBottom: normalize(24),
  },

  title: {
    fontSize: normalize(28),
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: normalize(8),
  },

  description: {
    fontSize: normalize(15),
    lineHeight: normalize(22),
    color: COLORS.gray,
  },

  formCard: {
    backgroundColor: COLORS.white,
    borderRadius: normalize(18),
    padding: normalize(20),
  },

  inputWrapper: {
    marginBottom: normalize(16),
  },

  label: {
    fontSize: normalize(14),
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: normalize(8),
  },

  input: {
    height: normalize(52),
    borderWidth: normalize(1),
    borderColor: COLORS.lightGray,
    borderRadius: normalize(12),
    paddingHorizontal: normalize(14),
    fontSize: normalize(15),
    color: COLORS.black,
    backgroundColor: COLORS.lightGray,
  },

  errorText: {
    marginTop: normalize(6),
    fontSize: normalize(12),
    color: '#D9534F',
  },

  loginButton: {
    height: normalize(52),
    borderRadius: normalize(12),
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(8),
  },

  disabledButton: {
    opacity: 0.7,
  },

  loginButtonText: {
    color: COLORS.white,
    fontSize: normalize(16),
    fontWeight: '600',
  },

  infoText: {
    marginTop: normalize(14),
    fontSize: normalize(13),
    color: COLORS.gray,
    textAlign: 'center',
  },
});
