import { useRouter } from 'next/router';
import { products } from '../../data/products';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find(p => p.slug === slug);
  if (!product) return null;

  const url = `https://gymfitness-hocmon.vercel.app/products/${product.slug}`;

  return (
    <div>
      <SEO
        title={`${product.name} | GYM FITNESS HÓC MÔN`}
        description={product.description}
        image={product.image}
        url={url}
        keywords="GYM FITNESS Hóc Môn, gym, thể hình, luyện tập"
      />
      <Header />
      <main className="container mx-auto py-10 text-gray-100">
        <div className="grid md:grid-cols-2 gap-10">
          <img src={product.image} alt={product.name} className="rounded-lg shadow-lg" />
          <div>
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
            <p className="text-gray-300 mb-2">{product.description}</p>
            <p className="text-xl text-white font-semibold mb-3">{product.price}</p>
            <ul className="list-disc pl-6 text-gray-400 mb-6">
              {product.benefits.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
            <a href="#contact" className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">Đặt hàng ngay</a>
            <div className="mt-4 flex gap-3">
              <FacebookShareButton url={url} quote={product.name}>
                <FacebookIcon size={36} round />
              </FacebookShareButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
