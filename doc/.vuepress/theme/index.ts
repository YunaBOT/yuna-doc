import { path } from '@vuepress/utils';

export default {
	name: 'vuepress-theme-yuna-document',
	'extends': '@vuepress/theme-default',
	layouts: {
		Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
	},
};
