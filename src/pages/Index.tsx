
import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import NewsCard from '../components/NewsCard';
import { articles } from '../data/articles';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'forYou' | 'trending' | 'finance' | 'ai' | 'tennis' | 'latest'>('forYou');

  const displayedArticles = articles.filter((article) => {
    if (activeTab === 'forYou') return true;
    if (activeTab === 'trending') return article.trending;
    if (activeTab === 'finance') return article.category === 'Finance';
    if (activeTab === 'ai') return article.category === 'AI';
    if (activeTab === 'tennis') return article.category === 'Tennis';
    if (activeTab === 'latest') return true;
    return true;
  });

  return (
    <div className="min-h-screen bg-background pb-16">
      <Header title="Newsfeed" />
      
      <div className="px-4 pt-4">
        <div className="flex border-b border-border mb-4 overflow-x-auto hide-scrollbar">
          <button
            className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 relative whitespace-nowrap ${
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
            className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 relative whitespace-nowrap ${
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
            className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 relative whitespace-nowrap ${
              activeTab === 'finance' ? 'text-foreground' : 'text-muted-foreground'
            }`}
            onClick={() => setActiveTab('finance')}
          >
            Finance
            {activeTab === 'finance' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
          <button
            className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 relative whitespace-nowrap ${
              activeTab === 'ai' ? 'text-foreground' : 'text-muted-foreground'
            }`}
            onClick={() => setActiveTab('ai')}
          >
            AI
            {activeTab === 'ai' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
          <button
            className={`pb-2 px-4 text-sm font-medium transition-colors duration-200 relative whitespace-nowrap ${
              activeTab === 'tennis' ? 'text-foreground' : 'text-muted-foreground'
            }`}
            onClick={() => setActiveTab('tennis')}
          >
            Tennis
            {activeTab === 'tennis' && (
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
