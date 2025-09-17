// src/components/SEOHead.tsx - useDocumentHead 훅 사용 버전
import React from 'react';
import { useDocumentHead } from '../hooks/useDocumentHead';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "좋은길벗 - 포트폴리오",
  description = "SSAFY 멘토이자 소프트웨어 개발자 좋은길벗의 포트폴리오 사이트입니다. React, TypeScript, 교육 경험을 소개합니다.",
  keywords = "포트폴리오, 개발자, React, TypeScript, SSAFY, 멘토, 소프트웨어, 프론트엔드",
  author = "좋은길벗",
  ogImage = "/og-image.jpg",
  ogUrl = "https://yourportfolio.com"
}) => {
  useDocumentHead({
    title,
    description,
    keywords,
    author,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl,
    twitterCard: 'summary_large_image'
  });

  // 이 컴포넌트는 실제로 아무것도 렌더링하지 않음
  return null;
};

export default SEOHead;