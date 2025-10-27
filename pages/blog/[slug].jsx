import { useRouter } from "next/router";
import { posts } from "../../data/posts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;

  const url = `https://gymfitness-hocmon.vercel.app/blog/${post.slug}`;

  return (
    <div>
      <SEO
        title={`${post.title} | GYM FITNESS HÓC MÔN`}
        description={post.excerpt}
        image="/logo.svg"
        url={url}
      />
      <Header />
      <main className="container mx-auto py-10 text-white">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-8">
          <a href="#contact" className="bg-white text-black px-5 py-3 rounded font-semibold">Đặt tư vấn miễn phí</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
