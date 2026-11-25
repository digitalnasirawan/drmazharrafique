import React, { useEffect, useRef } from 'react';
import { createApp, type Component, type App } from 'vue';

interface VueComponentWrapperProps {
  component: Component;
  props?: Record<string, any>;
  className?: string;
}

export const VueComponentWrapper: React.FC<VueComponentWrapperProps> = ({
  component,
  props = {},
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create Vue application instance
    const app = createApp(component, props);
    appRef.current = app;
    app.mount(containerRef.current);

    return () => {
      if (appRef.current) {
        appRef.current.unmount();
        appRef.current = null;
      }
    };
  }, [component]);

  return <div ref={containerRef} className={className} />;
};
