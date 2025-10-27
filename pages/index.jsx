import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/products";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-black text-white">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-b from-black to-gray-900">
          <h1 className="text-5xl font-extrabold mb-4 uppercase tracking-wide">
            GYM FITNESS HÓC MÔN
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Thể hình – Sức khỏe – Đam mê
          </p>
          <Link
            href="#products"
            className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
          >
            Khám phá ngay
          </Link>
        </section>

        {/* Products Section */}
        <section id="products" className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Sản phẩm nổi bật
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="bg-gray-800 hover:bg-gray-700 p-5 rounded-lg transition block"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="rounded mb-4 h-48 w-full object-cover"
                />
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-gray-400">{p.price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center py-16 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Liên hệ GYM FITNESS Hóc Môn</h2>
         <p className="text-gray-400 mb-6">
         Địa chỉ: Nhà Máy Bình Hưng <br />
         Email: nhusihoangdtm@gmail.com <br />
         Giờ mở cửa: 5h00 – 22h00 mỗi ngày
         </p>
         <a
          href="tel:0977392398"
         className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
         📞 Gọi ngay 0977392398
        </a>
        </section>

      </main>
      <Footer />
    </div>
  );
}
