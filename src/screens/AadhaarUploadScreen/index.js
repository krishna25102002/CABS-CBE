import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { APP_ICONS } from '../../utils/icons'; // Import the APP_ICONS object

const AadhaarUploadScreen = ({ navigation }) => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const handleFileSelection = (side) => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };
        if (side === 'front') {
          setFrontImage(source.uri);
        } else {
          setBackImage(source.uri);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={APP_ICONS.BACK} style={styles.backIcon} /> {/* Use the back icon from APP_ICONS */}
      </TouchableOpacity>

      <Text style={styles.title}>Aadhaar Details</Text>

      <Text style={styles.instructionsHeader}>Instructions</Text>
      <Text style={styles.instructions}>
        • Make sure that all the data on your document is fully visible, glare-free, and not blurred. {"\n"}
        • Photocopies and printouts are not allowed. {"\n"}
        • Uploaded documents should be less than 10MB and belong to JPEG, PNG only.
      </Text>

      <Text style={styles.attachmentsHeader}>Attachments</Text>

      <TouchableOpacity onPress={() => handleFileSelection("front")} style={styles.uploadBox}>
        {frontImage ? (
          <Image source={{ uri: frontImage }} style={styles.uploadedImage} />
        ) : (
          <Text style={styles.uploadText}>📤 Upload(Front)</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleFileSelection("back")} style={styles.uploadBox}>
        {backImage ? (
          <Image source={{ uri: backImage }} style={styles.uploadedImage} />
        ) : (
          <Text style={styles.uploadText}>📤 Upload(Back)</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('DriverLicenseUploadScreen')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AadhaarUploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    top: 30, // Adjust the top position as needed
    left: 20, // Adjust the left position as needed
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10, // Add margin to avoid overlap with the back button
    textAlign: 'center',
  },
  instructionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  instructions: {
    fontSize: 14,
    marginBottom: 20,
  },
  attachmentsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uploadBox: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 16,
    color: '#000',
  },
  uploadedImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  nextButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});