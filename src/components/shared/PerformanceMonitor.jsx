import { useEffect, useState } from 'react';

export default function PerformanceMonitor() {
    const [metrics, setMetrics] = useState({});

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    setMetrics((prev) => ({
                        ...prev,
                        [entry.name]: Math.round(entry.value),
                    }));
                });
            });

            observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

            return () => observer.disconnect();
        }
    }, []);

    if (process.env.NODE_ENV !== 'development') return null;

    return (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm">
            <h3 className="font-bold mb-2">Performance Metrics</h3>
            {Object.entries(metrics).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4">
                    <span>{key}:</span>
                    <span>{value}ms</span>
                </div>
            ))}
        </div>
    );
}