// src/components/OptimizedImage.tsx
import React, { useState, useCallback } from 'react';
import { Avatar, Skeleton, Box } from '@mui/material';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sx?: object;
  fallback?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 150,
  height = 150,
  sx = {},
  fallback = '/assets/images/default-avatar.png'
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
    setLoading(false);
  }, []);

  // WebP 지원 확인 후 이미지 소스 결정
  const getOptimizedSrc = useCallback((originalSrc: string) => {
    const canvas = document.createElement('canvas');
    const supportsWebP = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    
    if (supportsWebP && originalSrc.includes('.png')) {
      return originalSrc.replace('.png', '.webp');
    }
    if (supportsWebP && originalSrc.includes('.jpg')) {
      return originalSrc.replace('.jpg', '.webp');
    }
    return originalSrc;
  }, []);

  if (loading) {
    return (
      <Skeleton
        variant="circular"
        width={width}
        height={height}
        animation="wave"
        sx={sx}
      />
    );
  }

  return (
    <Avatar
      src={error ? fallback : getOptimizedSrc(src)}
      alt={alt}
      onLoad={handleLoad}
      onError={handleError}
      sx={{
        width,
        height,
        ...sx,
      }}
    />
  );
};

export default OptimizedImage;