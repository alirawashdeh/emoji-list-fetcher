## Introduction 👋
`emoji-list-fetcher` is a lightweight node application that scrapes the official [unicode.org emoji list](https://unicode.org/emoji/charts/emoji-list.html) and outputs the data in JSON format. 

### But why❓
Most emoji datasets - such as [iamcal/emoji-data](https://github.com/iamcal/emoji-data) and [milesj/emojibase](https://github.com/milesj/emojibase) - are very comprehensive. However, they don't include _keywords_ against each emoji, which are very useful when designing emoji pickers. For example, the keywords `criminal | evil | superpower | villain | woman | woman supervillain` might return `🦹‍♀️` in an emoji picker.

This repository was created so that emoji data sets can be easily enriched with up-to-date keyword data.


## Example output 🗃

As found in the `emoji-list.json` file:

```
[	
	...
	{
		"unicode": "U+1F9B9 U+200D U+2640 U+FE0F",
		"unified": "1F9B9-200D-2640-FE0F",
		"emoji": "🦹‍♀️",
		"shortname": "woman supervillain",
		"keywords": "criminal | evil | superpower | villain | woman | woman supervillain"
	},
	...
]
```


## Installation 📦

```
git clone https://github.com/alirawashdeh/emoji-list-fetcher.git
cd emoji-list-fetcher
npm install
```


## Usage 🏃‍♀️

Run the project using:

```
npm start
```

The `emoji-list.json` file will be updated with the latest data