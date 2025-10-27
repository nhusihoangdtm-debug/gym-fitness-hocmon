import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="GYM FITNESS HÓC MÔN logo" className="h-10 w-10" />
          <div className="font-bold text-lg">GYM FITNESS HÓC MÔN</div>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-gray-400 transition-colors">Trang chủ</Link>
          <Link href="/#products" className="hover:text-gray-400 transition-colors">Sản phẩm</Link>
          <Link href="/blog" className="hover:text-gray-400 transition-colors">Blog</Link>
          <Link href="/#contact" className="hover:text-gray-400 transition-colors">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}
