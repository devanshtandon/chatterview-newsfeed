
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import Header from '../components/Header';
import ChatBar from '../components/ChatBar';
import { Bookmark, Share2, ThumbsUp, ThumbsDown, MessageCircle, Headphones } from 'lucide-react';
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
        description: "We'll show more content like this",
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
        description: "We'll show less content like this",
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

  const handleListenClick = () => {
    toast('Listen feature', {
      description: 'This feature would read the article aloud',
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
        <div className="article-view p-4 md:p-6">
          <div className="max-w-3xl mx-auto">
            {/* Image container */}
            <div className="rounded-xl overflow-hidden mb-6">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>

            {/* Article header */}
            <div className="article-header mb-8">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="category-badge">{article.category}</span>
                  <span className="text-xs text-muted-foreground">{article.publishedAt} • {article.timeToRead}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleBookmark}
                    className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
                  >
                    <Bookmark size={18} className={bookmarked ? 'fill-primary text-primary' : ''} />
                  </button>
                  <button 
                    onClick={handleShare}
                    className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    aria-label="Share"
                  >
                    <Share2 size={18} />
                  </button>
                  <button 
                    onClick={handleListenClick}
                    className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    aria-label="Listen"
                  >
                    <Headphones size={18} />
                  </button>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{article.title}</h1>
              
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                    <img src={article.source.logo} alt={article.source.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium">{article.source.name}</div>
                    <div className="text-xs text-muted-foreground">{article.publishedAt}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Article content */}
            <div className="prose dark:prose-invert max-w-none">
              <div 
                className="article-content text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
            
            {/* Article actions */}
            <div className="mt-8 pt-4 border-t border-border flex justify-between items-center">
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
              
              <div className="text-sm text-muted-foreground">
                <span>{likes} likes</span>
                <span className="mx-2">•</span>
                <span>{article.comments} comments</span>
              </div>
            </div>

            {/* Related articles */}
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-4">Related Articles</h2>
              <div className="grid grid-cols-1 gap-4">
                {articles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 2).map(relatedArticle => (
                  <div key={relatedArticle.id} className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer" onClick={() => navigate(`/article/${relatedArticle.id}`)}>
                    <h3 className="font-medium mb-1">{relatedArticle.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedArticle.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ChatBar articleId={id || ''} />
    </div>
  );
};

export default ArticleView;
