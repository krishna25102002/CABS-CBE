import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ProfilePhotoScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoSelection = () => {
    Alert.alert(
      "Upload Photo",
      "Choose an option",
      [
        {
          text: "Camera",
          onPress: () => openCamera(),
        },
        {
          text: "Gallery",
          onPress: () => openGallery(),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  const openCamera = () => {
    launchCamera({ mediaType: 'photo', quality: 1 }, (response) => {
      if (!response.didCancel && !response.error) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (!response.didCancel && !response.error) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Photo</Text>
      
      <Text style={styles.instructionsHeader}>Instructions</Text>
      <Text style={styles.instructions}>
        • The photo must be colored, clear, and focused with no marks or red eye. {"\n"}
        • No shadows or reflections with appropriate brightness and contrast. {"\n"}
        • You shouldn’t wear caps, masks, and goggles.
      </Text>

      <View style={styles.noticeBox}>
        <Text style={styles.noticeText}>
          Your profile photo will be visible to customers when you are assigned to their ride. Make sure it’s a good one.
        </Text>
      </View>

      <TouchableOpacity onPress={handlePhotoSelection} style={styles.photoContainer}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.photo} />
        ) : (
          <Text style={styles.takePhotoText}>Take Photo</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('AadhaarUploadScreen')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  instructionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  instructions: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  noticeBox: {
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  noticeText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  photoContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  takePhotoText: {
    color: 'purple',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});