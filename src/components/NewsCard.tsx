
import React, { useState } from 'react';
import { Heart, Bookmark, Share2, MessageCircle } from 'lucide-react';
import { Article } from '../data/articles';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const [likes, setLikes] = useState(article.likes);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
      
      toast('Article liked', {
        description: "We'll show more content like this",
        duration: 2000,
      });
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setBookmarked(!bookmarked);
    
    toast(bookmarked ? 'Removed from bookmarks' : 'Added to bookmarks', {
      duration: 2000,
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast('Share feature', {
      description: 'This feature would allow sharing the article',
      duration: 2000,
    });
  };

  const handleTalkToAI = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast('Talk to Claude', {
      description: 'This would open the Claude chat interface',
      duration: 2000,
    });
  };

  return (
    <Link to={`/article/${article.id}`} className="block animate-fade-in">
      <div className="news-card mb-4 dark:bg-secondary/20 hover:dark:bg-secondary/30">
        <div className="relative">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="news-card-image w-full" 
            loading="lazy"
          />
          <div className="absolute top-2 left-2">
            <span className="category-badge">{article.category}</span>
          </div>
          <div className="absolute top-2 right-2">
            <span className="bg-black/60 text-white px-2 py-1 rounded-full text-xs">
              {article.publishedAt}
            </span>
          </div>
        </div>
        
        <div className="news-card-content">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
              <img src={article.source.logo} alt={article.source.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium">{article.source.name}</span>
            <span className="text-xs text-muted-foreground ml-2">• {article.timeToRead}</span>
          </div>
          
          <h2 className="news-card-title">{article.title}</h2>
          <p className="news-card-summary">{article.summary}</p>
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <button 
                  onClick={handleLike}
                  className={`p-1.5 rounded-full ${liked ? 'text-primary' : 'text-muted-foreground'}`}
                  aria-label="Like"
                >
                  <Heart size={16} className={liked ? 'fill-primary' : ''} />
                </button>
                <span className="text-xs text-muted-foreground ml-1">{likes}</span>
              </div>
              
              <div className="flex items-center">
                <button 
                  onClick={handleTalkToAI}
                  className="p-1.5 rounded-full text-muted-foreground"
                  aria-label="Talk to Claude"
                >
                  <MessageCircle size={16} />
                </button>
                <span className="text-xs text-muted-foreground ml-1">{article.comments}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleBookmark}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground"
                aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
              >
                <Bookmark size={16} className={bookmarked ? 'fill-primary text-primary' : ''} />
              </button>
              
              <button 
                onClick={handleShare}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground"
                aria-label="Share"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
