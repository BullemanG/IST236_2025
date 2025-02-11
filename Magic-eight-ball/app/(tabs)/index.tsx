import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Button, TextInput, Modal, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  const handleQuestionSubmit = () => {
    if (question.trim() === '') return;
    const randomIndex = Math.floor(Math.random() * responses.length);
    setResponse(responses[randomIndex]);
    setModalVisible(true);
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Magic 8 Ball</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ask your question..."
            value={question}
            onChangeText={setQuestion}
          />
          <TouchableOpacity style={styles.button} onPress={handleQuestionSubmit}>
            <Text style={styles.buttonText}>Ask the 8 Ball</Text>
          </TouchableOpacity>
        </View>

        {/* This styles the Magic 8 Ball Circle */}
        <View style={styles.eightBall}>
          <View style={styles.innerCircle}>
            <Text style={styles.eightBallText}>8</Text>
          </View>
        </View>

        {/* Modal for displaying the magic 8 ball responses */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Your Question:</Text>
              <Text style={styles.modalText}>{question}</Text>
              <Text style={styles.modalTitle}>Magic 8 Ball Says:</Text>
              <Text style={styles.responseText}>{response}</Text>

              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eightBall: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eightBallText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  responseText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

