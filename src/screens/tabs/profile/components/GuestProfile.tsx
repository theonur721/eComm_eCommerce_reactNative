import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import { LoginSchema } from '../../../../utils/  ValidationSchemas';

const GuestProfile = ({ onSubmitLogin, isLoading }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.title}>Giriş Yap</Text>
        <Text style={styles.description}>
          Alışverişe devam etmek, profil bilgilerini görmek ve hesabını yönetmek
          için giriş yapman gerekir.
        </Text>
      </View>

      <View style={styles.formCard}>
        <Formik
          initialValues={{
            email: 'john@mail.com',
            password: 'changeme',
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            onSubmitLogin(values);
          }}
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
                {touched.email && errors.email ? (
                  <Text style={styles.errorText}>{errors.email}</Text>
                ) : null}
              </View>

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
                {touched.password && errors.password ? (
                  <Text style={styles.errorText}>{errors.password}</Text>
                ) : null}
              </View>

              <TouchableOpacity
                style={[styles.loginButton, isLoading && styles.disabledButton]}
                onPress={handleSubmit}
                disabled={isLoading}
              >
                <Text style={styles.loginButtonText}>
                  {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                </Text>
              </TouchableOpacity>

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
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerArea: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#666666',
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#111111',
    backgroundColor: '#FAFAFA',
  },
  errorText: {
    marginTop: 6,
    fontSize: 12,
    color: '#D9534F',
  },
  loginButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  disabledButton: {
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  infoText: {
    marginTop: 14,
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
  },
});
