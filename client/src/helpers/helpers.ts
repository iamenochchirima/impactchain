import axios from "axios";
import { API_BASE_URL } from "../hooks/exporter";


export const authenticate = async (email: string) => {
  try {
    let {status} = await axios.post("${API_BASE_URL}/api/auth${API_BASE_URL}/api/authenticate", { email });
    return status;
  } catch (error) {
    return { error: "Error authenticating user. User not found." };
  }
};

export const getUser = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`);
    return data;
  } catch (error) {
    console.log("Error in getUser: ", error)
    return { error: "Error fetching user.  Password or email is incorrect." };
  }
};

export const registerUser = async (credentials: any) => {
  try {
    const { data, status } = await axios.post("${API_BASE_URL}/api/auth/register", {
      ...credentials,
    });

    console.log("Signup successfull, sending mail", data, status)
    const { fistname, email } = data;

    const text =
      "Welcome to Impact Chain! We are very excited to have you on board.";

    if (status === 201) {
      await axios.post("${API_BASE_URL}/api/auth/register-mail", {
        username: fistname,
        userEmail: email,
        text,
      });
    }

    return Promise.resolve(data);
  } catch (error) {
    return { error: "Error registering user. User already exists." };
  }
};

export const login = async (email: string, password: string) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password });
    return Promise.resolve(data);
  } catch (error) {
   return Promise.reject({error})
  }
}

export const verifyPassword = async (email: string, password: string) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password });
    return Promise.resolve(data);
  } catch (error) {
    return {
      error: "Error verifying password. Password or email is incorrect.",
    };
  }
};

export const updateUser = async (credentials: any) => {
  try {
    const { data } = await axios.put("/users/update", { ...credentials });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject({ error: "Couldn't update user" });
  }
};

export const generateOTP = async (email: string) => {
  try {
    const {
      data: { code },
      status,
    } = await axios.post(`${API_BASE_URL}/api/auth/generate-otp`, {
      email: email
    });
    console.log("OTP generated: ", code, status)
    if (status === 200) {
      const text = `Your password reset code is ${code}.`;
      await axios.post(`${API_BASE_URL}/api/auth/register-mail`, {
        userEmail: email,
        text,
        subject: "Password Reset Code",
      });
    }
    return Promise.resolve(code);
  } catch (error) {
    console.log("Error in generateOTP: ", error)
    return Promise.reject({ error: "Couldn't generate OTP" });
  }
};

export const verifyOPT = async (email: string, code: string) => {
  try {
    const { data, status } = await axios.post(`${API_BASE_URL}/api/auth/verify-otp`, {
      email,
      code,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const resetPassword = async (email: string, password: string) => {
  try {
    const { data, status } = await axios.put(`${API_BASE_URL}/api/auth/reset-password`, {
      email,
      password,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAiOverview = async (prompt: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/completions`, {
      message: prompt
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get AI overview:", error);
    return Promise.reject(error);
  }
}

