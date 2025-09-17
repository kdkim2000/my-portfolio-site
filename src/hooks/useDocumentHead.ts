// src/hooks/useDocumentHead.ts
import { useEffect } from 'react';

interface HeadOptions {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const useDocumentHead = ({ 
  title, 
  description, 
  keywords, 
  author,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image'
}: HeadOptions) => {
  useEffect(() => {
    // 제목 설정
    if (title) {
      document.title = title;
    }
    
    // 메타 태그 설정 함수
    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Open Graph 메타 태그 설정 함수
    const setOGMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // 기본 메타 태그 설정
    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    if (author) setMeta('author', author);
    
    // Open Graph 태그 설정
    if (ogTitle || title) setOGMeta('og:title', ogTitle || title || '');
    if (ogDescription || description) setOGMeta('og:description', ogDescription || description || '');
    if (ogImage) setOGMeta('og:image', ogImage);
    if (ogUrl) setOGMeta('og:url', ogUrl);
    setOGMeta('og:type', 'website');
    
    // Twitter Card 태그 설정
    setMeta('twitter:card', twitterCard);
    if (ogTitle || title) setMeta('twitter:title', ogTitle || title || '');
    if (ogDescription || description) setMeta('twitter:description', ogDescription || description || '');
    if (ogImage) setMeta('twitter:image', ogImage);
    
  }, [title, description, keywords, author, ogTitle, ogDescription, ogImage, ogUrl, twitterCard]);
};