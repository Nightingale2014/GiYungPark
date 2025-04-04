export default function EventCard() {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src="https://i.imgur.com/fHyEMsl.jpeg"
        alt="2025 TXT 콘서트"
        className="w-full object-cover h-60"
      />
      <div className="p-4">
        <h2 className="font-bold text-base">2025 TXT 콘서트</h2>
        <p className="text-sm text-gray-500 mt-1">4.21(일) 20:00 티켓오픈</p>
      </div>
    </div>
  );
}
