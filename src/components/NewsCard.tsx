
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle, Share2 } from 'lucide-react';
import { Article } from '../data/articles';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const [likes, setLikes] = useState(article.likes);
  const [dislikes, setDislikes] = useState(article.dislikes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
      
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
      
      toast('Article liked', {
        description: "We'll show more content like this",
        duration: 2000,
      });
    }
  };

  const handleDislike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setDisliked(true);
      
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
      
      toast('Article disliked', {
        description: "We'll show less content like this",
        duration: 2000,
      });
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast('Share feature', {
      description: 'This feature would allow sharing the article',
      duration: 2000,
    });
  };

  return (
    <Link to={`/article/${article.id}`} className="block animate-fade-in">
      <div className="news-card mb-4">
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
            <span className="time-badge bg-black/60 text-white px-2 py-1 rounded-full text-xs">
              {article.publishedAt}
            </span>
          </div>
        </div>
        
        <div className="news-card-content">
          <div className="article-source">
            <div className="source-logo">
              <img src={article.source.logo} alt={article.source.name} className="w-full h-full object-cover" />
            </div>
            <span className="source-name">{article.source.name}</span>
            <span className="article-time">{article.timeToRead}</span>
          </div>
          
          <h2 className="news-card-title">{article.title}</h2>
          <p className="news-card-summary">{article.summary}</p>
          
          <div className="news-card-actions">
            <div className="flex items-center gap-1">
              <button 
                onClick={handleLike}
                className={`like-button ${liked ? 'text-green-600 bg-green-50 dark:bg-green-900/30' : ''}`}
                aria-label="Like"
              >
                <ThumbsUp size={18} />
              </button>
              <span className="text-xs text-muted-foreground">{likes}</span>
              
              <button 
                onClick={handleDislike}
                className={`dislike-button ml-2 ${disliked ? 'text-red-600 bg-red-50 dark:bg-red-900/30' : ''}`}
                aria-label="Dislike"
              >
                <ThumbsDown size={18} />
              </button>
              <span className="text-xs text-muted-foreground">{dislikes}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <button 
                  className="comment-button"
                  aria-label="Comments"
                >
                  <MessageCircle size={18} />
                </button>
                <span className="text-xs text-muted-foreground">{article.comments}</span>
              </div>
              
              <button 
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="Share"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
