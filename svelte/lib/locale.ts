export const locale = {
	defaultLanguage: 'en',
	site: {
		author: 'yetanotherneuron'
	},
	languageSelector: {
		topLabel: 'Select your language',
		bottomLabel: '言語を選択'
	},
	languages: {
		en: {
			label: 'English',
			nativeLabel: 'English',
			chooseLabel: 'Choose English',
			loadingLabel: 'Loading...',
			changingLanguageLabel: 'Changing Language',
			lang: 'en',
			common: {
				home: 'HOME'
			},
			site: {
				title: 'Yet Another Neuron | Cyber Web'
			},
			home: {
				edgeLabels: {
					top: 'SKILLS',
					right: 'ABOUT',
					bottom: 'PROJECTS',
					left: 'CONTACT'
				},
				terminalLines: [
					'> initializing portfolio...',
					'> loading projects and experience',
					'> system ready for interaction',
					'> welcome to my digital space'
				]
			},
			about: {
				status: [
					{ label: 'Available for freelance', class: 'status-online' },
					{ label: 'Temporarily unavailable', class: 'status-away' },
					{ label: 'Currently working', class: 'status-busy' }
				],
				info: {
					pronouns: { label: 'Pronouns', value: 'Rather not say' },
					location: { label: 'Location', value: 'Persia/Bushehr' },
					localTime: { label: 'Local Time (Tehran)' }
				},
				paragraphs: [
					'I am a student and self-taught software & game developer. I started digging into code around ages 10–11 while playing online games like SA-MP — curiosity about how servers actually worked turned into building things of my own.',
					'I focus on game development and backend systems: tools, automation, mods, addons, and server-side resources. Most of what I ship is something I wanted to use myself — clean enough to maintain, practical enough to run.',
					'Outside of coding I draw a lot from Final Fantasy and Warcraft, and from years of playing piano. Even after a hand injury pushed piano aside, that mix of atmosphere and structure still shows up in how I design experiences.',
					'Open to freelance work and collaborations when schedules allow. I keep this page light on personal details on purpose — I do not like putting private info on the public web where anyone can copy and share it, which is why you will not find my real name or gender here.'
				],
				cycleStatusAria: 'Cycle status'
			},
			contact: {
				title: 'GET IN TOUCH',
				description:
					'Reach out for collaborations, project questions, or a hello. Always open to talking through new ideas.'
			},
			projects: {
				title: 'PROJECTS',
				viewProject: 'VIEW PROJECT',
				items: [
					{
						title: 'Snake Game',
						description:
							"It's just the classic Snake game that we all know and have played.",
						url: 'https://github.com/yetanotherneuron/snake-game'
					}
				],
				closeModalAria: 'Close project modal',
				closeAria: 'Close modal',
				prevPageAria: 'Previous page',
				nextPageAria: 'Next page'
			},
			skills: {
				title: 'SKILLS & EXPERTISE'
			}
		},
		jp: {
			label: 'Japanese',
			nativeLabel: '日本語',
			chooseLabel: '日本語を選択',
			loadingLabel: '読み込み中...',
			changingLanguageLabel: '言語を変更中...',
			lang: 'jp',
			common: {
				home: 'ホーム'
			},
			site: {
				title: 'Yet Another Neuron | サイバーウェブ'
			},
			home: {
				edgeLabels: {
					top: 'スキル',
					right: '概要',
					bottom: '作品',
					left: '連絡'
				},
				terminalLines: [
					'> ポートフォリオを初期化中...',
					'> プロジェクトと経歴を読み込み中',
					'> システム準備完了',
					'> デジタルスペースへようこそ'
				]
			},
			about: {
				status: [
					{ label: 'フリーランス受付中', class: 'status-online' },
					{ label: '一時的に休止中', class: 'status-away' },
					{ label: '現在作業中', class: 'status-busy' }
				],
				info: {
					pronouns: { label: '代名詞', value: '答えたくない' },
					location: { label: '所在地', value: 'ペルシャ/ブシェール' },
					localTime: { label: '現地時間 (テヘラン)' }
				},
				paragraphs: [
					'学生で、独学のソフトウェア・ゲーム開発者です。10〜11歳の頃、SA-MPなどのオンラインゲームをプレイしているうちに「サーバーは実際どう動いているのか」と気になり、そこから自分でもものを作り始めました。',
					'ゲーム開発とバックエンドを中心に、ツール、自動化、MOD、アドオン、サーバーサイドのリソースなどに取り組んでいます。出すものの多くは、自分が実際に使いたかったものです。',
					'コーディング以外では、『ファイナルファンタジー』や『Warcraft』、そしてピアノを弾いていた頃の経験から影響を受けています。手の怪我でピアノから離れたあとも、雰囲気や構成への関心は制作に残っています。',
					'スケジュールが合うときはフリーランスやコラボも歓迎します。このページの個人情報は意図的に控えめです。誰でも見られ共有されてしまう場所にプライベートな情報を載せたくないので、本名も性別も書いていません。'
				],
				cycleStatusAria: 'ステータスを切り替える'
			},
			contact: {
				title: 'お問い合わせ',
				description:
					'コラボレーション、プロジェクトの相談、ご挨拶など、お気軽にどうぞ。新しいアイデアの話し合いを歓迎します。'
			},
			projects: {
				title: 'プロジェクト',
				viewProject: 'プロジェクトを見る',
				items: [
					{
						title: 'スネークゲーム',
						description: '誰もが知っていて遊んだことのある、あのクラシックなスネークゲームです。',
						url: 'https://github.com/yetanotherneuron/snake-game'
					}
				],
				closeModalAria: 'プロジェクトのモーダルを閉じる',
				closeAria: 'モーダルを閉じる',
				prevPageAria: '前のページ',
				nextPageAria: '次のページ'
			},
			skills: {
				title: 'スキルと専門知識'
			}
		}
	}
} as const;
