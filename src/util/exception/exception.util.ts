export const createExceptionBody = (
  message: any,
  error: string,
  statusCode: number,
) => {
  return message ? { statusCode, error, message } : { statusCode, error };
};
