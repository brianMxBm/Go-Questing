import { TWILIO_BASE_URL } from '@env';

const catchError = (error: { response: any; message: any; data: any }) => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return { success: false, error: error.message };
};

export const sendVerification = async (values: any) => {
  //TODO: Change Type. I think It's a String?
  try {
    const phoneNumber = JSON.stringify({
      to: values,
      channel: 'sms'
    });

    const res = await fetch(`${TWILIO_BASE_URL}/start-verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: phoneNumber
    });
    return res;
  } catch (error: any) {
    console.log(error);
    return catchError(error);
  }
};

export const checkVerification = async (values: any, code: any) => {
  try {
    const pin = JSON.stringify({
      to: values,
      code
    });

    const res = await fetch(`${TWILIO_BASE_URL}/check-verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: pin
    });
    const { success } = await res.json();
    return success;
  } catch (error: any) {
    return catchError(error);
  }
};
