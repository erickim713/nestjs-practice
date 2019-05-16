import * as crypto from 'crypto';

export const generateRandomBytes = (length: number) => {
  return crypto.randomBytes(length);
};

export const encryptPassword = async (password: string) => {
  const salt = generateRandomBytes(32);
  const key = crypto.pbkdf2Sync(
    password,
    salt.toString('hex'),
    10000,
    256,
    'sha512',
  );
  return [key, salt];
};

export const verifyPassword = async (
  givenSalt: Buffer,
  encryptedPassword: Buffer,
  enteredPassword: string,
) => {
  const key = crypto.pbkdf2Sync(
    enteredPassword,
    givenSalt.toString('hex'),
    10000,
    256,
    'sha512',
  );

  return key.toString('hex') === encryptedPassword.toString('hex');
};
