import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import normalize from '../../utils/Normalize';

interface BadgeProps {
  label: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

const Badge: React.FC<BadgeProps> = ({ label, icon, bgColor, textColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Ionicons name={icon} size={normalize(12)} color={textColor} />
      <Text style={[styles.text, { color: textColor }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(6),
  },
  text: {
    fontSize: normalize(8),
    fontWeight: '600',
    marginTop: normalize(4),
  },
});
