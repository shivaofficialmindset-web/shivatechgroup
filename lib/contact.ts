const defaultPhone = "+91 89576 31598";

function phoneNumber(value: string | undefined, name: string) {
  const display = value?.trim() || defaultPhone;
  if (!/^[+\d\s().-]+$/.test(display)) {
    throw new Error(`${name} must contain a phone number with a country code.`);
  }
  const digits = display.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15 || digits.startsWith("0")) {
    throw new Error(`${name} must include a valid international country code and 7–15 digits.`);
  }
  return { display, digits, international: `+${digits}` };
}

const phone = phoneNumber(process.env.NEXT_PUBLIC_PHONE_NUMBER, "NEXT_PUBLIC_PHONE_NUMBER");
const whatsappPhone = phoneNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER, "NEXT_PUBLIC_WHATSAPP_NUMBER");
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined;

if (email && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
  throw new Error("NEXT_PUBLIC_CONTACT_EMAIL must be a valid email address.");
}

export const contact = {
  phone,
  whatsappPhone,
  email,
  whatsappLink: (message: string) => `https://wa.me/${whatsappPhone.digits}?text=${encodeURIComponent(message)}`,
};
