exports.generateVerificationCall = () => {
  //Module generates a random four digit number
  // TODO: Temporary, for prod. utilze an API to generate randm tokens.
  let verificationCall = '';
  for (let i = 0; i <= 3; i += 1) {
    const randVal = Math.round(Math.random() * 9);
    verificationCall += randVal;
  }
  return verificationCall;
};
