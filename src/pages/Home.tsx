import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CategoryCards from '../components/CategoryCards';
import ArticleCard from '../components/ArticleCard';
import IntegratedChat from '../components/IntegratedChat';
import Newsletter from '../components/Newsletter';
import Avatar from '../components/profile/Avatar';

interface Article {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  imageSrc: string;
}

export default function Home() {
  const { t } = useTranslation();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const articles = (t('articles.featured', { returnObjects: true }) as Article[])
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Mobile Hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="lg:hidden flex flex-col items-center text-center mb-10"
      >
        <Avatar size="lg" className="mb-3" />
        <h1 className="text-xl font-medium text-gray-900 dark:text-white">
          {t('profile.greeting')}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xs">
          {t('profile.experience')}
        </p>
      </motion.div>

      {/* Chat Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <IntegratedChat />
      </motion.div>

      {/* Categories */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <CategoryCards />
      </motion.div>

      {/* Featured Articles */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <h2 className="text-2xl font-medium mb-6">{t('articles.title')}</h2>
        <div className="grid grid-cols-1 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              {...article}
            />
          ))}
        </div>
      </motion.div>
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}