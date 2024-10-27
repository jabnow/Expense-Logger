import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onSubmit = (): void => {
    console.log({ name, date, category, notes }); // Handle form submission logic here
    setName('');
    setDate(new Date());
    setCategory('');
    setNotes('');
    setModalVisible(false); // Close modal after submission
  };

  return (
    <ScrollView style={styles.container}>
      
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
                  const currentDate = selectedDate || date; // Use selected date or current date
                  setShowDatePicker(false); // Close the picker after selection
                  setDate(currentDate); // Update the date state
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
    </ScrollView>
  );
};

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonSpacer: {
    width: 16,
  },
});

export default MyForm;
