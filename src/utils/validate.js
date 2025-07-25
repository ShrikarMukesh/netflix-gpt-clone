export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  // Name validation: only if name is provided (sign up)
  if (name !== null && name !== undefined) {
    const trimmedName = name.trim();
    if (trimmedName.length < 4) return "Name is Invalid";
  }

  if (!isEmailValid) return "Invalid email format";

  if (!isPasswordValid) return "Invalid password format";

  return null;
};
