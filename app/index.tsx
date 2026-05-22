import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';

const vendors = [
  {
    id: '1',
    name: "Homy's Kitchen",
    tagline: 'Ghar jaisa khana 🏠',
    orderBefore: '11:30 AM',
    isOpen: true,
  },
  {
    id: '2',
    name: 'Chai Lelo',
    tagline: 'Chai & more ☕',
    orderBefore: '12:00 PM',
    isOpen: true,
  },
  {
    id: '3',
    name: 'Biryani Bros',
    tagline: 'Every grain tells a story 🍚',
    orderBefore: '11:00 AM',
    isOpen: false,
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6A1B9A" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.appName}>NoshIIT 🍱</Text>
        <Text style={styles.subtitle}>What's for lunch today?</Text>
      </View>

      <Text style={styles.sectionTitle}>Serving Today</Text>

      <FlatList
        data={vendors}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, !item.isOpen && styles.cardClosed]}
          >
            <View style={styles.cardTop}>
              <Text style={[styles.vendorName, !item.isOpen && styles.textClosed]}>
                {item.name}
              </Text>
              <View style={[styles.badge, !item.isOpen && styles.badgeClosed]}>
                <Text style={styles.badgeText}>
                  {item.isOpen ? '🟢 Open' : '⚫ Closed'}
                </Text>
              </View>
            </View>
            <Text style={[styles.tagline, !item.isOpen && styles.textClosed]}>
              {item.tagline}
            </Text>
            <Text style={[styles.orderBefore, !item.isOpen && styles.textClosed]}>
              {item.isOpen ? `Order before ${item.orderBefore}` : 'Not serving today'}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6A1B9A',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFEB3B',
  },
  subtitle: {
    fontSize: 14,
    color: '#e0c4f4',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6A1B9A',
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#6A1B9A',
  },
  cardClosed: {
    borderColor: '#ddd',
    backgroundColor: '#fafafa',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  vendorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
  },
  textClosed: {
    color: '#aaa',
  },
  tagline: {
    fontSize: 13,
    color: '#888',
    marginBottom: 8,
  },
  orderBefore: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFEB3B',
    backgroundColor: '#6A1B9A',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
  },
  badge: {
    backgroundColor: '#f0e6fa',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
  },
  badgeClosed: {
    backgroundColor: '#f0f0f0',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
});