import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [category, setCategory] = useState<string>('all');
  
  // Set page title
  useEffect(() => {
    document.title = 'Skills | samar khaled';
  }, []);

  // Dummy blog data (replace with your actual data or import)
  const blogData = [
    {
      id: 1,
      title: 'Getting Started with React',
      slug: 'getting-started-with-react',
      category: 'react',
      date: '2024-06-01',
      image: '/images/blog/react.png',
      excerpt: 'Learn the basics of React and how to build your first application.',
    },
    {
      id: 2,
      title: 'Advanced TypeScript Tips',
      slug: 'advanced-typescript-tips',
      category: 'typescript',
      date: '2024-05-20',
      image: '/images/blog/typescript.png',
      excerpt: 'Take your TypeScript skills to the next level with these advanced tips.',
    },
    {
      id: 3,
      title: 'Styling in Tailwind CSS',
      slug: 'styling-in-tailwind-css',
      category: 'css',
      date: '2024-05-10',
      image: '/images/blog/tailwind.png',
      excerpt: 'A guide to efficient styling using Tailwind CSS.',
    },
  ];

  // Filter blogs based on category
  const filteredBlogs = category === 'all' 
    ? blogData 
    : blogData.filter(blog => blog.category === category);

  const categories = ['all', ...new Set(blogData.map(blog => blog.category))];

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Blog</h1>
            <p className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development and design.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container-custom">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article key={blog.id} className="card group hover:scale-[1.02] transition-all duration-300">
                {/* Featured Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full aspect-[16/9] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 px-3 py-1 text-xs font-medium text-white rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-dark-500 dark:text-gray-400 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>samar khaled</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-dark-600 dark:text-gray-400 mb-4">
                    {blog.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${blog.slug}`} 
                    className="flex items-center font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-3">No articles found</h3>
              <p className="text-dark-600 dark:text-gray-400 mb-6">
                There are no articles in this category yet. Please check back later or browse other categories.
              </p>
              <button
                onClick={() => setCategory('all')}
                className="btn-primary"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 dark:bg-dark-900">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Subscribe to My Newsletter</h2>
          <p className="text-dark-600 dark:text-gray-300 mb-8">
            Get notified about new articles and web development tips directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-dark-500 dark:text-gray-400 mt-4">
            I respect your privacy. No spam, ever.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;