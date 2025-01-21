export const pageView = (url) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.VITE_ANALYTICS_ID, {
            page_path: url,
        });
    }
};

export const event = ({ action, category, label, value }) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Performance monitoring
export const trackPerformance = () => {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            // Get performance metrics
            const paintMetrics = performance.getEntriesByType('paint');
            const navigationTiming = performance.getEntriesByType('navigation')[0];

            // Track First Contentful Paint
            const fcp = paintMetrics.find(
                ({ name }) => name === 'first-contentful-paint'
            );
            if (fcp) {
                event({
                    action: 'timing',
                    category: 'Performance',
                    label: 'First Contentful Paint',
                    value: Math.round(fcp.startTime),
                });
            }

            // Track Time to Interactive
            if (navigationTiming) {
                const tti = navigationTiming.domInteractive;
                event({
                    action: 'timing',
                    category: 'Performance',
                    label: 'Time to Interactive',
                    value: Math.round(tti),
                });
            }
        });
    }
};