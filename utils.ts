import { useState, useEffect } from 'react';

export function useHTMLFontSize() {
  const [htmlFontSize, setHtmlFontSize] = useState(0);
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      try {
        setHtmlFontSize(
          Number(document.documentElement.style.fontSize.replace('px', ''))
        );
      } catch (error) {
        setHtmlFontSize(0);
      }
    });
    observer.observe(document.documentElement);
    return () => {
      observer.unobserve(document.documentElement);
    };
  }, []);
  return {
    htmlFontSize,
  };
}

// https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript
export function useTranslateToRemSize<T>(sizes: T): T {
  const { htmlFontSize } = useHTMLFontSize();
  const [computedSizes, setComputedSizes] = useState(sizes);
  useEffect(() => {
    if (htmlFontSize > 0) {
      console.log(computedSizes);
      // setComputedSizes
    }
  }, [htmlFontSize]);
  return {
    ...computedSizes,
  };
}
