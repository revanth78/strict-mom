import AsyncStorage from '@react-native-async-storage/async-storage';

const AGENTS_KEY = '@strictmom_agents_v1';

export async function saveAgents(agents) {
  try {
    await AsyncStorage.setItem(AGENTS_KEY, JSON.stringify(agents));
  } catch (e) {
    console.warn('saveAgents error', e);
  }
}

export async function loadAgents() {
  try {
    const raw = await AsyncStorage.getItem(AGENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('loadAgents error', e);
    return [];
  }
}
