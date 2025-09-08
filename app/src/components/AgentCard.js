import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AgentCard({ name, goalLabel, onCheckIn, onOpen }) {
  return (
    <TouchableOpacity onPress={onOpen} style={styles.card}>
      <View style={styles.left}>
        <View style={styles.avatar}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>{name?.[0] ?? '?'}</Text>
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.goal}>{goalLabel}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onCheckIn} style={styles.button}>
        <Text style={styles.btnText}>Check-in</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  avatar: {
    backgroundColor: '#0B132B',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: { fontSize: 16, fontWeight: '700' },
  goal: { color: '#666', marginTop: 4 },
  button: {
    backgroundColor: '#FF7260',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnText: { color: '#fff', fontWeight: '700' },
});
