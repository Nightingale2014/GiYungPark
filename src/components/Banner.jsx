export default function Banner() {
  return (
    <div className="w-full px-4 flex justify-center mt-6">
      <div className="w-full max-w-screen-lg bg-purple-100 text-center py-6 px-4 rounded-xl">
        <p className="text-lg font-bold text-purple-700">
          공연·전시 관람비 최대 <span className="text-pink-500">15만원 지원</span>
        </p>
        <p className="text-sm text-gray-800 mt-1">
          06년생 누구나 <span className="font-semibold text-black">청년문화예술패스</span>를 신청하세요!
        </p>
        <p className="text-base font-semibold text-black mt-1">2025.3.6 ~ 5.31</p>
      </div>
    </div>
  );
}
