import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.banner} onPress={() => setModalVisible(true)}>
        <Text style={styles.bannerText}>Enter a new expense</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Handle hardware back button
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
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

            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
              <View style={styles.buttonSpacer} />
              <Button title="Submit" onPress={onSubmit} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
  banner: {
    backgroundColor: '#E6E6FA',
    padding: 15,
    alignItems: 'center',
    width: '100%',
    top: 0,
  },
  bannerText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
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
