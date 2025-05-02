import { createHighlighterCore } from 'shiki';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const jsEngine = createJavaScriptRegexEngine();

const highlighter = await createHighlighterCore({
	themes: [import('shiki/themes/dark-plus.mjs'), import('shiki/themes/light-plus.mjs')],
	langs: [import('shiki/langs/luau.mjs')],
	engine: jsEngine
});

export function highlight(code: string) {
	return highlighter.codeToHtml(code, {
		lang: 'luau',
		themes: {
			light: 'light-plus',
			dark: 'dark-plus'
		}
	});
}
