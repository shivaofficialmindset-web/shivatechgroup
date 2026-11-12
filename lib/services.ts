import {
  BadgeHelp,
  CalendarDays,
  FileCheck2,
  FileText,
  Fingerprint,
  HeartHandshake,
  IdCard,
  Users,
  type LucideIcon,
} from "lucide-react";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  label: string;
  description: string;
  message: string;
  tone: "red" | "blue" | "green" | "yellow";
};

export const services: Service[] = [
  {
    id: "dob-limit",
    icon: CalendarDays,
    title: "जन्म तारीख बदलने की लिमिट पूरी",
    label: "Aadhaar DOB Limit Cross",
    description: "आधार में जन्म तारीख दोबारा बदलनी है? जानें कि अब क्या कर सकते हैं।",
    message: "नमस्ते, आधार में जन्म तारीख बदलने की लिमिट पूरी हो गई है। कृपया आगे की प्रक्रिया बताएं।",
    tone: "red",
  },
  {
    id: "name-limit",
    icon: IdCard,
    title: "नाम बदलने की लिमिट पूरी",
    label: "Aadhaar Name Limit Cross",
    description: "आधार में नाम ठीक कराने के लिए अगले कदम समझें।",
    message: "नमस्ते, आधार में नाम बदलने की लिमिट पूरी हो गई है। कृपया आगे की प्रक्रिया बताएं।",
    tone: "blue",
  },
  {
    id: "matching-brn",
    icon: FileCheck2,
    title: "BRN मैच होने की समस्या",
    label: "Same BRN / Matching Document",
    description: "जन्म प्रमाण पत्र के रजिस्ट्रेशन नंबर से जुड़ी दिक्कत पर बात करें।",
    message: "नमस्ते, जन्म प्रमाण पत्र का BRN मैच होने से जुड़ी समस्या है। कृपया मार्गदर्शन करें।",
    tone: "green",
  },
  {
    id: "invalid-document",
    icon: FileText,
    title: "दस्तावेज़ स्वीकार नहीं हुआ",
    label: "Invalid Document",
    description: "दस्तावेज़ रिजेक्ट हुआ है? जानें कि आगे क्या जाँचना है।",
    message: "नमस्ते, मेरा दस्तावेज़ स्वीकार नहीं हुआ। कृपया बताएं कि आगे क्या जाँचना चाहिए।",
    tone: "yellow",
  },
  {
    id: "aadhaar-inactive",
    icon: Fingerprint,
    title: "आधार बंद या निष्क्रिय है",
    label: "Aadhaar Suspended / Deactivated",
    description: "अगर आधार चालू नहीं है, तो आगे की प्रक्रिया समझें।",
    message: "नमस्ते, मेरा आधार बंद या निष्क्रिय दिख रहा है। कृपया आगे की प्रक्रिया बताएं।",
    tone: "blue",
  },
  {
    id: "birth-certificate",
    icon: BadgeHelp,
    title: "जन्म प्रमाण पत्र और BRN",
    label: "Birth Certificate / BRN",
    description: "जन्म प्रमाण पत्र या उसके रजिस्ट्रेशन नंबर के बारे में पूछें।",
    message: "नमस्ते, मुझे जन्म प्रमाण पत्र या उसके BRN के बारे में जानकारी चाहिए।",
    tone: "green",
  },
  {
    id: "government-schemes",
    icon: Users,
    title: "सरकारी योजना का आवेदन",
    label: "Scheme Registration & Apply",
    description: "योजना में रजिस्ट्रेशन और ऑनलाइन फॉर्म भरने के कदम जानें।",
    message: "नमस्ते, मुझे सरकारी योजना में रजिस्ट्रेशन या आवेदन करने की जानकारी चाहिए।",
    tone: "yellow",
  },
  {
    id: "online-services",
    icon: HeartHandshake,
    title: "अन्य ऑनलाइन सेवाएँ",
    label: "CSC & Digital Services",
    description: "ऑनलाइन फॉर्म या किसी दूसरी डिजिटल सेवा में मदद चाहिए? हमें बताएं।",
    message: "नमस्ते, मुझे एक ऑनलाइन सेवा या CSC से जुड़े काम के लिए मदद चाहिए।",
    tone: "red",
  },
];
