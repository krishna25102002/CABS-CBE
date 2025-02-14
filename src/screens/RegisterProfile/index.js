import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [localAddress, setLocalAddress] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [drivingLicenseNumber, setDrivingLicenseNumber] = useState('');
  const navigation = useNavigation();

  const handleNext = () => {
    // Validate inputs and handle the next action
    if (!name || !email || !mobile || !gender || !dob || !permanentAddress || !localAddress || !aadhaarNumber || !drivingLicenseNumber) {
      alert('Please fill all fields');
      return;
    }
    console.log('Profile Details:', {
      name,
      email,
      mobile,
      gender,
      dob,
      permanentAddress,
      localAddress,
      aadhaarNumber,
      drivingLicenseNumber,
    });
    // Navigate to the next screen
    navigation.navigate('ProfilePhotoScreen'); // Replace 'NextScreen' with your actual screen name
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />

      <View style={styles.genderContainer}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderOptions}>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'Male' && styles.selectedGenderButton]}
            onPress={() => setGender('Male')}
          >
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'Female' && styles.selectedGenderButton]}
            onPress={() => setGender('Female')}
          >
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        placeholder="Permanent Address"
        value={permanentAddress}
        onChangeText={setPermanentAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Local Address"
        value={localAddress}
        onChangeText={setLocalAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Aadhaar Number"
        keyboardType="number-pad"
        value={aadhaarNumber}
        onChangeText={setAadhaarNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Driving Licence Number"
        value={drivingLicenseNumber}
        onChangeText={setDrivingLicenseNumber}
      />

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  genderContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  genderOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedGenderButton: {
    borderColor: '#007BFF',
    backgroundColor: '#e6f2ff',
  },
  genderText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterProfile;