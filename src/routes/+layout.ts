import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectAnalytics({ mode: dev ? 'development' : 'production' });
injectSpeedInsights({ sampleRate: 0.8 });

export const prerender = true;
