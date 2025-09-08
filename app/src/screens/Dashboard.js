import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AgentCard from '../components/AgentCard';
import { loadAgents } from '../utils/storage';

export default function Dashboard({ navigation }) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      loadAgents().then(setAgents);
    });
    return unsub;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Strict Mom</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAgent')} style={styles.createBtn}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>+ New Agent</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={agents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AgentCard
            name={item.name}
            goalLabel={`${item.target} ${item.unit || ''} • ${item.goalType}`}
            onOpen={() => {}}
            onCheckIn={() => {}}
          />
        )}
        ListEmptyComponent={<Text style={{ padding: 20, color: '#999' }}>No agents yet. Create one.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f7fb' },
  header: { padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: '800' },
  createBtn: { backgroundColor: '#0B132B', padding: 10, borderRadius: 8 },
});
