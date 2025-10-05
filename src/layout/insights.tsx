import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

// Sample blog post data (in a real implementation, this would come from a CMS or API)
const blogPosts = [
  {
    id: 1,
    title: "Managing Lean Teams Across Time Zones",
    excerpt:
      "Best practices for coordinating distributed teams and maintaining productivity across different regions.",
    category: "Team Management",
    readTime: "5 min read",
    date: "Sep 20, 2025",
  },
  {
    id: 2,
    title: "The ROI of Asian Talent in Global Tech",
    excerpt:
      "How companies are accelerating growth by leveraging the technical expertise and adaptability of Asian professionals.",
    category: "Talent",
    readTime: "7 min read",
    date: "Sep 15, 2025",
  },
  {
    id: 3,
    title: "Fractional Leadership: When and How to Implement",
    excerpt:
      "A comprehensive guide to identifying when your organization needs fractional leadership and how to integrate these roles effectively.",
    category: "Leadership",
    readTime: "8 min read",
    date: "Sep 8, 2025",
  },
  {
    id: 4,
    title: "Case Study: Gymlete's 60% Growth with Lean Teams",
    excerpt:
      "How a fitness tech startup accelerated product development and marketing initiatives through strategic talent augmentation.",
    category: "Success Story",
    readTime: "6 min read",
    date: "Aug 28, 2025",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="relative scroll-mt-32 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Insights
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Thought leadership and practical advice on outsourcing, Lean Teams,
            and building high-performance work practices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-300">
                  {post.category}
                </span>
                <div className="flex items-center text-xs text-white/50">
                  <Clock className="mr-1 h-3 w-3" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-red-300">
                {post.title}
              </h3>

              <p className="mb-4 text-sm text-white/70">{post.excerpt}</p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs text-white/50">{post.date}</span>
                <Link
                  href="#"
                  className="flex items-center text-sm font-medium text-red-400 transition-colors hover:text-red-300"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
          >
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
