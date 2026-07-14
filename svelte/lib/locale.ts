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
						title: 'Pulse List',
						description:
							'Windows process snapshot toolkit in Rust — list, filter, sort, and export via Win32 APIs. TUI + CLI.',
						url: 'https://github.com/yetanotherneuron/pulse-list'
					},
					{
						title: 'Another Shell',
						description:
							'Educational Windows command shell (ash) in C — process spawn, pipes, redirection, and builtins.',
						url: 'https://github.com/yetanotherneuron/another-shell'
					},
					{
						title: 'Chocolate Wall',
						description:
							'User-mode Windows firewall CLI and service talking to WFP — allow/block by program, IP, or port. Learning project; unfinished.',
						url: 'https://github.com/yetanotherneuron/chocolate-wall'
					},
					{
						title: 'Japanese Gossip',
						description:
							'Wrath of the Lich King localization overlay for Japanese quest text, tooltips, buffs, and related UI. Work in progress.',
						url: 'https://github.com/yetanotherneuron/japanese-gossip'
					},
					{
						title: 'Countability',
						description:
							'Lightweight small-business ledger desktop app (C++ / Dear ImGui / SQLite) — income, expenses, reports, CSV export.',
						url: 'https://github.com/yetanotherneuron/countability'
					},
					{
						title: 'Tertube',
						description:
							'Terminal YouTube search and browse client (Python / Textual). Search videos and channels, open in browser.',
						url: 'https://github.com/yetanotherneuron/tertube'
					},
					{
						title: 'Find Files',
						description:
							'Anonymous short-lived file sharing: upload up to 2 GB, share a link, auto-delete after 7 days. ASP.NET Core.',
						url: 'https://github.com/yetanotherneuron/find-files'
					},
					{
						title: 'Machine Text',
						description:
							'Simple static webpage for encoding and decoding text into binary and related machine formats. Offline-friendly.',
						url: 'https://github.com/yetanotherneuron/machine-text'
					},
					{
						title: 'Friends Of Friends',
						description:
							'WotLK addon that syncs friends and ignore lists across alts on the same realm and faction, with Sync or Keep prompts.',
						url: 'https://github.com/yetanotherneuron/friends-of-friends'
					},
					{
						title: 'iNeedPeace',
						description:
							'WotLK whisper-filter addon with allow/deny/ignore lists and configurable auto-replies. Derived from Give Me Some Peace.',
						url: 'https://github.com/yetanotherneuron/i-need-peace'
					},
					{
						title: 'ASCII Text',
						description:
							'Static FIGlet-based ASCII art generator in the browser. Type text, choose a font, copy the result.',
						url: 'https://github.com/yetanotherneuron/ascii-text'
					},
					{
						title: 'Another Chatty',
						description:
							'Local Java Swing chat app over TCP — start a server, open clients, talk on localhost or LAN.',
						url: 'https://github.com/yetanotherneuron/another-chatty'
					},
					{
						title: 'Another Bot',
						description:
							'TypeScript Discord multi-bot framework: one codebase, many JSON configs, modular features, SQLite per bot.',
						url: 'https://github.com/yetanotherneuron/another-bot'
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
						title: 'Pulse List',
						description:
							'Rust製のWindowsプロセス一覧ツール。Win32 APIで一覧・フィルタ・ソート・エクスポート。TUIとCLI対応。',
						url: 'https://github.com/yetanotherneuron/pulse-list'
					},
					{
						title: 'Another Shell',
						description:
							'C言語で書いた教材向けWindowsシェル（ash）。プロセス起動、パイプ、リダイレクト、組み込みコマンド。',
						url: 'https://github.com/yetanotherneuron/another-shell'
					},
					{
						title: 'Chocolate Wall',
						description:
							'WFPを使うユーザーモードWindowsファイアウォールCLI／サービス。学習用で未完成のプロジェクト。',
						url: 'https://github.com/yetanotherneuron/chocolate-wall'
					},
					{
						title: 'Japanese Gossip',
						description:
							'リッチキングの怒りの日本語オーバーレイ。クエスト、ツールチップ、バフなどを表示。作業中。',
						url: 'https://github.com/yetanotherneuron/japanese-gossip'
					},
					{
						title: 'Countability',
						description:
							'C++ / Dear ImGui / SQLiteの軽量帳簿アプリ。収支、レポート、CSV出力。ポートフォリオ向けデモ。',
						url: 'https://github.com/yetanotherneuron/countability'
					},
					{
						title: 'Tertube',
						description:
							'Python / Textualのターミナル向けYouTube検索・閲覧クライアント。動画とチャンネルを検索してブラウザで開く。',
						url: 'https://github.com/yetanotherneuron/tertube'
					},
					{
						title: 'Find Files',
						description:
							'匿名の短命ファイル共有。最大2GB、リンク共有、7日後に自動削除。ASP.NET Core製。',
						url: 'https://github.com/yetanotherneuron/find-files'
					},
					{
						title: 'Machine Text',
						description:
							'テキストをバイナリなどの機械向け形式へ変換する静的Webページ。オフラインでも使える。',
						url: 'https://github.com/yetanotherneuron/machine-text'
					},
					{
						title: 'Friends Of Friends',
						description:
							'同一レルム／陣営のアルト間でフレンド・無視リストを同期するWotLKアドオン。SyncかKeepを選択。',
						url: 'https://github.com/yetanotherneuron/friends-of-friends'
					},
					{
						title: 'iNeedPeace',
						description:
							'ささやきフィルター用WotLKアドオン。許可／拒否／無視リストと自動返信。Give Me Some Peace派生。',
						url: 'https://github.com/yetanotherneuron/i-need-peace'
					},
					{
						title: 'ASCII Text',
						description:
							'ブラウザで動くFIGletベースのASCIIアート生成。テキスト入力、フォント選択、コピー対応。',
						url: 'https://github.com/yetanotherneuron/ascii-text'
					},
					{
						title: 'Another Chatty',
						description:
							'Java SwingのローカルTCPチャット。サーバーを立ててクライアントで会話（localhost / LAN）。',
						url: 'https://github.com/yetanotherneuron/another-chatty'
					},
					{
						title: 'Another Bot',
						description:
							'TypeScriptのDiscordマルチボット枠組み。1つのコードベース、複数JSON設定、ボットごとのSQLite。',
						url: 'https://github.com/yetanotherneuron/another-bot'
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
