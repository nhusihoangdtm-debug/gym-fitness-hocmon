export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} GYM FITNESS HÓC MÔN — All rights reserved.</p>
        <p className="text-sm mt-1">Tập luyện – Sức khỏe – Đam mê</p>
      </div>
    </footer>
  );
}
