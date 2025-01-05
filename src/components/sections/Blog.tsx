import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const posts = [
  {
    title: 'The Future of AI Device Integration',
    excerpt: 'Explore how AI is revolutionizing the way we interact with our devices.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Technology',
  },
  {
    title: 'Voice Control: The Next Frontier',
    excerpt: 'Discover the latest advancements in voice control technology.',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Innovation',
  },
  {
    title: 'Smart Home Integration Guide',
    excerpt: 'Learn how to integrate Common.ai with your smart home devices.',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Tutorial',
  },
];

export function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest developments in AI technology and device integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    {post.category}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="ghost" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}