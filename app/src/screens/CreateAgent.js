import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { saveAgents, loadAgents } from '../utils/storage';

export default function CreateAgent({ navigation }) {
  const [name, setName] = useState('');
  const [goalType, setGoalType] = useState('steps');
  const [target, setTarget] = useState('10000');
  const [unit, setUnit] = useState('steps');

  const onCreate = async () => {
    if (!name.trim()) return Alert.alert('Validation', 'Please add a name for this agent.');
    const existing = await loadAgents();
    const newAgent = {
      id: Date.now().toString(),
      name: name.trim(),
      goalType,
      target: Number(target) || 0,
      unit,
      createdAt: new Date().toISOString(),
    };
    const next = [newAgent, ...existing];
    await saveAgents(next);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16 }}>
        <Text style={styles.label}>Agent Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g. Strict Mom" />

        <Text style={styles.label}>Goal Type</Text>
        <TextInput style={styles.input} value={goalType} onChangeText={setGoalType} placeholder="steps / minutes / custom" />

        <Text style={styles.label}>Target</Text>
        <TextInput keyboardType="number-pad" style={styles.input} value={target} onChangeText={setTarget} />

        <Text style={styles.label}>Unit</Text>
        <TextInput style={styles.input} value={unit} onChangeText={setUnit} />

        <TouchableOpacity style={styles.createBtn} onPress={onCreate}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>Create Agent</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  label: { marginTop: 12, fontWeight: '700' },
  input: { marginTop: 6, padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#eee' },
  createBtn: { marginTop: 20, backgroundColor: '#0B132B', padding: 12, borderRadius: 10, alignItems: 'center' },
});
