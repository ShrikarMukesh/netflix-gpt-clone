export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(password);

  if (!isEmailValid) return "Invalid email format";

  if (!isPasswordValid) return "Invalid password format";

  return null;
};
