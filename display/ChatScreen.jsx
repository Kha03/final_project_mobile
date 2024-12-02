import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { fetchGeminiResponse } from '../api'; // Import API từ tệp của bạn

const ChatScreen = () => {
  const [messages, setMessages] = useState([]); // Lưu lịch sử tin nhắn
  const [userMessage, setUserMessage] = useState(''); // Lưu tin nhắn người dùng hiện tại
  const [loading, setLoading] = useState(false); // Trạng thái tải

  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      // Lưu tin nhắn người dùng vào lịch sử
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: userMessage },
      ]);
      setUserMessage(''); // Xóa input

      // Hiển thị trạng thái tải
      setLoading(true);

      try {
        // Gửi tin nhắn tới Gemini API
        const aiResponse = await fetchGeminiResponse(userMessage);

        // Lưu phản hồi vào lịch sử
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'ai', text: aiResponse || 'Không có phản hồi.' },
        ]);
      } catch (error) {
        // Xử lý lỗi
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'ai', text: 'Có lỗi xảy ra, vui lòng thử lại.' },
        ]);
      } finally {
        setLoading(false); // Tắt trạng thái tải
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.message,
              {
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.sender === 'user' ? '#d1e7ff' : '#e6e6e6',
              },
            ]}
          >
            <Text style={styles.messageText}>
              {msg.sender === 'user' ? 'Bạn: ' : 'Tini : '} {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {loading && (
        <ActivityIndicator size="large" color="#007bff" style={styles.loading} />
      )}

      <TextInput
        style={styles.input}
        placeholder="Nhập tin nhắn..."
        value={userMessage}
        onChangeText={setUserMessage}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
        <Text style={styles.sendButtonText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 16,
  },
  message: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loading: {
    marginBottom: 10,
  },
});

export default ChatScreen;
