import { defineClientAppEnhance } from '@vuepress/client';
import {
	DiscordButton,
	DiscordButtons,
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
	install as DiscordMessageComponents,
} from '@discord-message-components/vue';
import yunaAvatar from './assets/discord-avatar-yuna.png';
import hellcatAvatar from './assets/discord-avatar-hellcat.png';
import '@discord-message-components/vue/dist/style.css';

export default defineClientAppEnhance(({ app }) => {
	app.use(DiscordMessageComponents, {
		avatars: {
			yuna: yunaAvatar,
			hellcat: hellcatAvatar,
		},
		profiles: {
			user: {
				author: 'HellCatVN',
				avatar: 'hellcat',
			},
			bot: {
				author: 'Yuna',
				avatar: 'yuna',
				bot: true,
			},
		},
	});

	app.component('DiscordButton', DiscordButton);
	app.component('DiscordButtons', DiscordButtons);
	app.component('DiscordEmbed', DiscordEmbed);
	app.component('DiscordEmbedField', DiscordEmbedField);
	app.component('DiscordEmbedFields', DiscordEmbedFields);
	app.component('DiscordInteraction', DiscordInteraction);
	app.component('DiscordMarkdown', DiscordMarkdown);
	app.component('DiscordMention', DiscordMention);
	app.component('DiscordMessage', DiscordMessage);
	app.component('DiscordMessages', DiscordMessages);
	app.component('DiscordReaction', DiscordReaction);
	app.component('DiscordReactions', DiscordReactions);
});
