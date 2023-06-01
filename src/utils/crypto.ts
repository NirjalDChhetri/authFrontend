import { AES, enc } from "crypto-js";

function encrypt(message: string): string {
  return AES.encrypt(message, import.meta.env.VITE_SECRET_KEY).toString();
}
function decrypt(ciper: string): string {
  const orginal = AES.decrypt(ciper, import.meta.env.VITE_SECRET_KEY);
  return orginal.toString(enc.Utf8);
}

const cryptoServices = { encrypt, decrypt };

export default cryptoServices;
