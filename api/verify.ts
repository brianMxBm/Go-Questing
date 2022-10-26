import { TWILIO_BASE_URL } from '@env';

const catchError = (error: { response: any; message: any; data: any }) => {
  //TODO: Error can't stay as any. Refactor.
  if (error?.response?.data) {
    return error.response.data;
  }
  return { success: false, error: error.message };
};

export const sendVerification = async (request: string) => {
  try {
    const phoneNumber = JSON.stringify({
      to: request,
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
  //TODO: Change To Actual Req Type.
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
