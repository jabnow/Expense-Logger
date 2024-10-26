import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyForm: React.FC = () => {
  // Define state with type annotations
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Type the onSubmit function
  const onSubmit = (): void => {
    // Handle form submission logic here
    console.log({ name, date, category, notes });
  };

  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Enter a new expense</Text>
      </View>
      
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Date:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateInput}>{date.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event: any, selectedDate?: Date) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <Text style={styles.label}>Category:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Notes:</Text>
      <TextInput
        style={[styles.input, styles.notesInput]}
        placeholder="Enter notes"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};

// Define styles with a StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  banner: {
    backgroundColor: '#E6E6FA', // pale purple
    padding: 15,
    alignItems: 'center',
    width: '100%', // Make the banner span the whole width
    top: 0,
  },
  bannerText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  dateInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    textAlign: 'center',
  },
  notesInput: {
    height: 80,
    textAlignVertical: 'top',
  },
});

export default MyForm;
