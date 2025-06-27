'use client'
import React, { useState, useEffect, useCallback } from 'react';

interface ChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  videoCount: string;
}

interface VideoSnippet {
  resourceId: {
    videoId: string;
  };
  title: string;
  description: string;
  thumbnails: {
    medium: { url: string };
  };
  publishedAt: string;
}

interface VideoItem {
  id: string;
  snippet: VideoSnippet;
}

const YoutubeWidget: React.FC = () => {
  // Get API key and channel ID from environment variables
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  const [channelStats, setChannelStats] = useState<ChannelStatistics | null>(null);
  const [channelTitle, setChannelTitle] = useState<string>('');
  const [channelThumbnail, setChannelThumbnail] = useState<string>('');
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [visibleVideos, setVisibleVideos] = useState<number>(4);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Check system preference for dark mode
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Listen for changes to color scheme preferences
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle theme toggle
  const toggleTheme = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, []);

  useEffect(() => {
    const fetchChannelData = async () => {
      if (!API_KEY || !CHANNEL_ID) {
        setError('API key or Channel ID is missing.');
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        // Fetch channel details: statistics and uploads playlist ID
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails,snippet&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();

        if (channelData.items && channelData.items.length > 0) {
          const stats = channelData.items[0].statistics;
          setChannelStats(stats);
          setChannelTitle(channelData.items[0].snippet.title);
          
          if (channelData.items[0].snippet.thumbnails && channelData.items[0].snippet.thumbnails.medium) {
            setChannelThumbnail(channelData.items[0].snippet.thumbnails.medium.url);
          }
          
          const uploadsPlaylistId =
            channelData.items[0].contentDetails.relatedPlaylists.uploads;
          
          // Fetch latest videos from the uploads playlist
          const playlistRes = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${uploadsPlaylistId}&key=${API_KEY}`
          );
          const playlistData = await playlistRes.json();
          const videoItems: VideoItem[] = playlistData.items.map((item: any) => ({
            id: item.snippet.resourceId.videoId,
            snippet: item.snippet,
          }));
          setVideos(videoItems);
          // Set the first video as the default selected video
          if (videoItems.length > 0) {
            setSelectedVideo(videoItems[0].id);
          }
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchChannelData();
  }, [API_KEY, CHANNEL_ID]);

  const formatNumber = (num: string): string => {
    const n = parseInt(num, 10);
    if (n >= 1000000) {
      return (n / 1000000).toFixed(1) + 'M';
    } else if (n >= 1000) {
      return (n / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleShowMore = () => {
    setVisibleVideos(prev => Math.min(prev + 4, videos.length));
  };

  // Dynamic styles based on dark/light mode
  const theme = darkMode ? darkTheme : lightTheme;

  if (loading) return (
    <div style={{...theme.loadingContainer} as React.CSSProperties}>
      <div style={{...theme.spinner}} ></div>
      <p style={{color: theme.textColor}}>Loading YouTube data...</p>
    </div>
  );
  
  if (error) return (
    <div style={{...theme.errorContainer} as React.CSSProperties}>
      <p style={{color: theme.errorColor}}>Error: {error}</p>
    </div>
  );

  return (
    <div style={{...theme.widgetContainer}}>
      <div style={{...theme.widgetHeader}}>
        <div style={{...theme.headerContent}}>
          {channelThumbnail && (
            <img 
              src={channelThumbnail} 
              alt={channelTitle} 
              style={{...theme.channelThumbnail} as React.CSSProperties} 
            />
          )}
          <div style={{...theme.channelInfo}}>
            <h2 style={{...theme.channelTitle}}>{channelTitle}</h2>
            {channelStats && (
              <div style={{...theme.statsContainer} as React.CSSProperties}>
                <span style={{...theme.statItem}}>
                  <span style={{...theme.statCount}}>{formatNumber(channelStats.subscriberCount)}</span> subscribers
                </span>
                <span style={{...theme.statDot}}>•</span>
                <span style={{...theme.statItem}}>
                  <span style={{...theme.statCount}}>{formatNumber(channelStats.videoCount)}</span> videos
                </span>
              </div>
            )}
          </div>
        </div>
        <button 
          onClick={toggleTheme} 
          style={{...theme.themeToggle}}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div style={{...theme.content} as React.CSSProperties}>
        <div style={{...theme.mainColumn}}>
          {selectedVideo && (
            <div style={{...theme.videoPlayerContainer}}>
              <div style={{...theme.responsiveVideoWrapper} as React.CSSProperties}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{...theme.videoPlayer} as React.CSSProperties}
                ></iframe>
              </div>
              
              {videos.length > 0 && (
                <div style={{...theme.selectedVideoInfo}}>
                  <h3 style={{...theme.selectedVideoTitle}}>
                    {videos.find(v => v.id === selectedVideo)?.snippet.title}
                  </h3>
                  <p style={{...theme.selectedVideoDate}}>
                    Published on {formatDate(videos.find(v => v.id === selectedVideo)?.snippet.publishedAt || '')}
                  </p>
                  <p style={{...theme.selectedVideoDescription}}>
                    {videos.find(v => v.id === selectedVideo)?.snippet.description}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{...theme.sideColumn}}>
          <h3 style={{...theme.upNextTitle}}>Up Next</h3>
          <div style={{...theme.videosList} as React.CSSProperties}>
            {videos.slice(0, visibleVideos).map((video) => (
              <div
                key={video.id}
                style={{
                  ...theme.videoItem,
                  ...(selectedVideo === video.id ? theme.selectedVideoItem : {})
                }}
                onClick={() => setSelectedVideo(video.id)}
                onMouseEnter={(e) => {
                  if (e.currentTarget) {
                    Object.assign(e.currentTarget.style, theme.videoItemHover);
                  }
                }}
                onMouseLeave={(e) => {
                  if (e.currentTarget) {
                    Object.assign(e.currentTarget.style, selectedVideo === video.id 
                      ? theme.selectedVideoItem 
                      : theme.videoItem);
                  }
                }}
              >
                <div style={{...theme.thumbnailContainer}}>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    style={{...theme.thumbnail} as React.CSSProperties}
                  />
                </div>
                <div style={{...theme.videoItemInfo}}>
                  <p style={{...theme.videoTitle} as React.CSSProperties}>{video.snippet.title}</p>
                  <p style={{...theme.videoDate}}>{formatDate(video.snippet.publishedAt)}</p>
                </div>
              </div>
            ))}
          </div>
          
          {visibleVideos < videos.length && (
            <button 
              style={{...theme.showMoreButton}}
              onClick={handleShowMore}
              onMouseEnter={(e) => {
                if (e.currentTarget) {
                  Object.assign(e.currentTarget.style, theme.showMoreButtonHover);
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget) {
                  Object.assign(e.currentTarget.style, theme.showMoreButton);
                }
              }}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Light theme styles
const lightTheme = {
  widgetContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Roboto, Arial, sans-serif',
    color: '#0f0f0f',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
  },
  widgetHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
    borderBottom: '1px solid #e0e0e0',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
    backgroundColor: '#f9f9f9',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid rgba(0,0,0,0.1)',
    borderRadius: '50%',
    borderTop: '4px solid #ff0000',
    animation: 'spin 1s linear infinite',
  },
  errorContainer: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  errorColor: '#ff0000',
  channelThumbnail: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '1rem',
  },
  channelInfo: {
    flex: '1',
    overflow: 'hidden',
  },
  channelTitle: {
    margin: '0 0 0.25rem 0',
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#0f0f0f',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  statsContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
    color: '#606060',
    flexWrap: 'wrap',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '0.5rem',
    marginBottom: '0.25rem',
  },
  statCount: {
    fontWeight: 'bold',
    marginRight: '0.25rem',
  },
  statDot: {
    margin: '0 0.5rem',
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'block',
    },
  },
  content: {
    display: 'flex',
    marginTop: '1rem',
    gap: '1.5rem',
    flexDirection: 'column',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
  mainColumn: {
    flex: '1 1 100%',
    '@media (min-width: 768px)': {
      flex: '2',
    },
  },
  sideColumn: {
    flex: '1 1 100%',
    '@media (min-width: 768px)': {
      flex: '1',
    },
  },
  videoPlayerContainer: {
    marginBottom: '1rem',
  },
  responsiveVideoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: '0',
    overflow: 'hidden',
  },
  videoPlayer: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
  },
  selectedVideoInfo: {
    padding: '1rem 0',
  },
  selectedVideoTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#0f0f0f',
  },
  selectedVideoDate: {
    margin: '0 0 0.5rem 0',
    fontSize: '0.9rem',
    color: '#606060',
  },
  selectedVideoDescription: {
    fontSize: '0.95rem',
    color: '#303030',
    lineHeight: '1.4',
    whiteSpace: 'pre-line',
    maxHeight: '120px',
    overflow: 'auto',
  },
  upNextTitle: {
    margin: '0 0 0.75rem 0',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#0f0f0f',
  },
  videosList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    maxHeight: '600px',
    overflowY: 'auto',
  },
  videoItem: {
    display: 'flex',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '8px',
    transition: 'background-color 0.2s ease',
    backgroundColor: 'transparent',
  },
  videoItemHover: {
    backgroundColor: '#e9e9e9',
  },
  selectedVideoItem: {
    backgroundColor: '#e9e9e9',
  },
  thumbnailContainer: {
    width: '120px',
    height: '68px',
    flexShrink: 0,
    marginRight: '0.75rem',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  videoItemInfo: {
    flex: '1',
    overflow: 'hidden',
  },
  videoTitle: {
    margin: '0 0 0.25rem 0',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#0f0f0f',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  videoDate: {
    margin: 0,
    fontSize: '0.8rem',
    color: '#606060',
  },
  showMoreButton: {
    display: 'block',
    width: '100%',
    margin: '1rem 0 0 0',
    padding: '0.5rem',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#0f0f0f',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  showMoreButtonHover: {
    backgroundColor: '#e0e0e0',
  },
  themeToggle: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.25rem',
    marginLeft: '1rem',
    padding: '0.5rem',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  textColor: '#0f0f0f',
};

// Dark theme styles
const darkTheme = {
  widgetContainer: {
    ...lightTheme.widgetContainer,
    backgroundColor: '#0f0f0f',
    color: '#f1f1f1',
    boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
  },
  widgetHeader: {
    ...lightTheme.widgetHeader,
    borderBottom: '1px solid #2c2c2c',
  },
  headerContent: {
    ...lightTheme.headerContent,
  },
  loadingContainer: {
    ...lightTheme.loadingContainer,
    backgroundColor: '#0f0f0f',
  },
  spinner: {
    ...lightTheme.spinner,
    border: '4px solid rgba(255,255,255,0.1)',
    borderTop: '4px solid #ff0000',
  },
  errorContainer: {
    ...lightTheme.errorContainer,
    backgroundColor: '#0f0f0f',
  },
  errorColor: '#ff6b6b',
  channelThumbnail: {
    ...lightTheme.channelThumbnail,
  },
  channelInfo: {
    ...lightTheme.channelInfo,
  },
  channelTitle: {
    ...lightTheme.channelTitle,
    color: '#f1f1f1',
  },
  statsContainer: {
    ...lightTheme.statsContainer,
    color: '#aaaaaa',
  },
  statItem: {
    ...lightTheme.statItem,
  },
  statCount: {
    ...lightTheme.statCount,
  },
  statDot: {
    ...lightTheme.statDot,
  },
  content: {
    ...lightTheme.content,
  },
  mainColumn: {
    ...lightTheme.mainColumn,
  },
  sideColumn: {
    ...lightTheme.sideColumn,
  },
  videoPlayerContainer: {
    ...lightTheme.videoPlayerContainer,
  },
  responsiveVideoWrapper: {
    ...lightTheme.responsiveVideoWrapper,
  },
  videoPlayer: {
    ...lightTheme.videoPlayer,
    boxShadow: '0 1px 4px rgba(0,0,0,0.5)',
  },
  selectedVideoInfo: {
    ...lightTheme.selectedVideoInfo,
  },
  selectedVideoTitle: {
    ...lightTheme.selectedVideoTitle,
    color: '#f1f1f1',
  },
  selectedVideoDate: {
    ...lightTheme.selectedVideoDate,
    color: '#aaaaaa',
  },
  selectedVideoDescription: {
    ...lightTheme.selectedVideoDescription,
    color: '#dddddd',
  },
  upNextTitle: {
    ...lightTheme.upNextTitle,
    color: '#f1f1f1',
  },
  videosList: {
    ...lightTheme.videosList,
  },
  videoItem: {
    ...lightTheme.videoItem,
  },
  videoItemHover: {
    backgroundColor: '#272727',
  },
  selectedVideoItem: {
    backgroundColor: '#272727',
  },
  thumbnailContainer: {
    ...lightTheme.thumbnailContainer,
  },
  thumbnail: {
    ...lightTheme.thumbnail,
  },
  videoItemInfo: {
    ...lightTheme.videoItemInfo,
  },
  videoTitle: {
    ...lightTheme.videoTitle,
    color: '#f1f1f1',
  },
  videoDate: {
    ...lightTheme.videoDate,
    color: '#aaaaaa',
  },
  showMoreButton: {
    ...lightTheme.showMoreButton,
    backgroundColor: '#272727',
    color: '#f1f1f1',
  },
  showMoreButtonHover: {
    backgroundColor: '#3d3d3d',
  },
  themeToggle: {
    ...lightTheme.themeToggle,
    backgroundColor: '#272727',
    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
  },
  textColor: '#f1f1f1',
};

// Add keyframes for spinner animation
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @media (min-width: 768px) {
      .statDot {
        display: block;
      }
    }
  `;
  document.head.appendChild(styleTag);
}

export default YoutubeWidget;