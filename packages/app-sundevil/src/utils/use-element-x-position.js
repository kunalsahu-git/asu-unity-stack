import { useCallback, useEffect, useRef, useState } from "react";

export const useElementContentXPosition = elementRef => {
  const [contentXPosition, setContentXPosition] = useState({
    left: 0,
    right: 0,
  });

  const rafId = useRef(null);
  const lastContentXPosition = useRef(contentXPosition);
  const retries = useRef(0); // Track retry attempts

  const handleContentXPosition = useCallback(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const offsetParentRect = elementRef.current.offsetParent
        ? elementRef.current.offsetParent.getBoundingClientRect()
        : { left: 0 };
      const { scrollLeft } = elementRef.current;
      const computedStyle = window.getComputedStyle(elementRef.current);
      const paddingLeft = parseFloat(computedStyle.paddingLeft);
      const paddingRight = parseFloat(computedStyle.paddingRight);
      const contentWidth = rect.width - paddingLeft - paddingRight;

      const baseX = rect.left - offsetParentRect.left;
      const left = baseX + paddingLeft - scrollLeft;
      const right = left + contentWidth;

      if (
        left !== lastContentXPosition.current.left ||
        right !== lastContentXPosition.current.right
      ) {
        lastContentXPosition.current = { left, right };
        setContentXPosition({ left, right });
      }
    }
  }, [elementRef]);

  const debouncedHandleContentXPosition = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(handleContentXPosition);
  }, [handleContentXPosition]);

  const retryMeasurement = () => {
    // Retry the measurement if position is still 0 (and retry count is under the limit)
    if (retries.current < 10 && contentXPosition.left === 0) {
      retries.current += 1;
      console.log("Retrying layout measurement..."); // Debugging output
      setTimeout(() => {
        handleContentXPosition();
        if (contentXPosition.left === 0) {
          setTimeout(retryMeasurement, 100); // Retry after a short delay
        }
      }, 100); // Retry after a short delay
    } else if (retries.current >= 10) {
      console.log("Max retries reached, position may not have been updated.");
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(debouncedHandleContentXPosition);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    window.addEventListener("resize", debouncedHandleContentXPosition);

    // Initial position calculation
    handleContentXPosition();
    if (contentXPosition.left === 0) {
      setTimeout(retryMeasurement, 100); // Start retry logic if position is 0 after initial render
    }

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", debouncedHandleContentXPosition);
    };
  }, [elementRef, contentXPosition]);

  return contentXPosition;
};