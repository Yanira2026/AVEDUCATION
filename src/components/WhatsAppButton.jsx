import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918667060497"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition">
        <FaWhatsapp size={30} />
      </div>
    </a>
  );
}