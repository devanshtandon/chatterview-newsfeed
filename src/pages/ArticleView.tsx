
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import Header from '../components/Header';
import ChatBar from '../components/ChatBar';
import { Bookmark, Share2, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState(articles.find(a => a.id === id));
  const [isLoading, setIsLoading] = useState(true);
  
  const [likes, setLikes] = useState(article?.likes || 0);
  const [dislikes, setDislikes] = useState(article?.dislikes || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (!article) {
      navigate('/');
      toast.error('Article not found');
      return;
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [article, navigate]);

  if (!article) return null;

  const handleLike = () => {
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
        description: 'We'll show more content like this',
        duration: 2000,
      });
    }
  };

  const handleDislike = () => {
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
        description: 'We'll show less content like this',
        duration: 2000,
      });
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    
    toast(bookmarked ? 'Removed from bookmarks' : 'Added to bookmarks', {
      duration: 2000,
    });
  };

  const handleShare = () => {
    toast('Share feature', {
      description: 'This feature would allow sharing the article',
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-28">
      <Header showBack={true} />
      
      {isLoading ? (
        <div className="p-4 space-y-4 animate-pulse">
          <div className="h-8 bg-muted rounded-md w-3/4"></div>
          <div className="h-4 bg-muted rounded-md w-1/3"></div>
          <div className="h-56 bg-muted rounded-md w-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded-md w-full"></div>
            <div className="h-4 bg-muted rounded-md w-full"></div>
            <div className="h-4 bg-muted rounded-md w-2/3"></div>
          </div>
        </div>
      ) : (
        <div className="article-view p-4">
          <div className="article-header">
            <div className="mb-2">
              <span className="category-badge">{article.category}</span>
              <span className="time-badge">{article.publishedAt}</span>
            </div>
            
            <h1 className="article-title">{article.title}</h1>
            
            <div className="article-meta">
              <div className="article-source">
                <div className="source-logo">
                  <img src={article.source.logo} alt={article.source.name} className="w-full h-full object-cover" />
                </div>
                <span className="source-name">{article.source.name}</span>
                <span className="article-time">{article.timeToRead}</span>
              </div>
            </div>
          </div>
          
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="article-image"
            loading="lazy"
          />
          
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button 
                onClick={handleLike}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  liked ? 'text-green-600 bg-green-50 dark:bg-green-900/30' : 'hover:bg-secondary'
                }`}
                aria-label="Like"
              >
                <ThumbsUp size={20} />
              </button>
              <button 
                onClick={handleDislike}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  disliked ? 'text-red-600 bg-red-50 dark:bg-red-900/30' : 'hover:bg-secondary'
                }`}
                aria-label="Dislike"
              >
                <ThumbsDown size={20} />
              </button>
              <button 
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="Comment"
              >
                <MessageCircle size={20} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleBookmark}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  bookmarked ? 'text-primary bg-primary/10' : 'hover:bg-secondary'
                }`}
                aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
              >
                <Bookmark size={20} className={bookmarked ? 'fill-primary' : ''} />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="Share"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <ChatBar articleId={id || ''} />
    </div>
  );
};

export default ArticleView;
