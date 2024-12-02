import axios from "axios";

const GEMINI_API_KEY = "AIzaSyCe6BLKmeeRz5C-r12Z0y6siu35Mx0OVdw"; // Thay bằng API Key chính xác

export const fetchGeminiResponse = async (message) => {
  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

    const response = await axios.post(
      endpoint,
      {
        contents: [
          {
            parts: [
              {
                text: message, // Nội dung tin nhắn từ người dùng
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Đảm bảo lấy dữ liệu từ response đúng cách
    if (
      response.data &&
      response.data.candidates &&
      response.data.candidates.length > 0 &&
      response.data.candidates[0].content &&
      response.data.candidates[0].content.parts &&
      response.data.candidates[0].content.parts.length > 0
    ) {
      return response.data.candidates[0].content.parts[0].text.trim();
    }

    return "Không tìm thấy phản hồi.";
  } catch (error) {
    console.error(
      "Error fetching Gemini response:",
      error?.response?.data || error
    );
    return "Có lỗi xảy ra, vui lòng thử lại.";
  }
};
