import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { posts } from "../../data/posts";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">
          Bài viết & Kiến thức thể hình
        </h1>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg transition block"
            >
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-400 line-clamp-3">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
