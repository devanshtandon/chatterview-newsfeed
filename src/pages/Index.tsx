
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import NewsCard from '../components/NewsCard';
import { articles } from '../data/articles';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'forYou' | 'trending' | 'latest'>('forYou');

  const displayedArticles = articles.filter((_, index) => {
    if (activeTab === 'forYou') return true;
    if (activeTab === 'trending') return index % 2 === 0;
    if (activeTab === 'latest') return index % 2 === 1;
    return true;
  });

  return (
    <div className="min-h-screen bg-background pb-16">
      <Header title="Newsfeed" />
      
      <div className="px-4 pt-4">
        <div className="flex border-b border-border mb-4">
          <button
            className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 relative ${
              activeTab === 'forYou' ? 'text-foreground' : 'text-muted-foreground'
            }`}
            onClick={() => setActiveTab('forYou')}
          >
            For You
            {activeTab === 'forYou' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
          <button
            className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 relative ${
              activeTab === 'trending' ? 'text-foreground' : 'text-muted-foreground'
            }`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
            {activeTab === 'trending' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
          <button
            className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 relative ${
              activeTab === 'latest' ? 'text-foreground' : 'text-muted-foreground'
            }`}
            onClick={() => setActiveTab('latest')}
          >
            Latest
            {activeTab === 'latest' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
        </div>
        
        <div className="animate-fade-in">
          {displayedArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Index;
