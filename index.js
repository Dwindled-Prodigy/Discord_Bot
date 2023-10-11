import dotenv from 'dotenv'
dotenv.config()

const { Client, Intents } = require('discord.js');
const fetch = require('node-fetch');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let botPrefix = '!';

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignore messages from other bots
  if (message.content.startsWith(botPrefix)) {
  const args = message.content.trim().split(/ +/);
  const command = args[0].toLowerCase();

  switch (command) {
    case 'ping':
      message.reply('Pong!');
      break;

    case 'hello':
      message.reply('Hello, Discord World!');
      break;

    case 'random':
      try {
         const response = await fetch('https://api.jikan.moe/v3/anime/random');
         const data = await response.json();
         const randomAnime = data.title;
         message.reply(`Here's a random anime recommendation: ${randomAnime}`);
      } catch (error) {
         console.error(error);
         message.reply('An error occurred while fetching the random anime recommendation.');
      }
      break;

    case 'popular':
      try {
         const response = await fetch('https://api.jikan.moe/v3/top/anime/1/upcoming');
         const data = await response.json();
         const popularAnime = data.top[0].title;
         message.reply(`Here's a popular upcoming anime recommendation: ${popularAnime}`);
      } catch (error) {
         console.error(error);
         message.reply('An error occurred while fetching the popular anime recommendation.');
      }
      break;

    case 'search':
      const query = args.slice(1).join(' ');
      if (query) {
        try {
          const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=1`);
          const data = await response.json();
          if (data.results.length > 0) {
            const foundAnime = data.results[0].title;
            message.reply(`I found this anime: ${foundAnime}`);
          } else {
            message.reply('No anime found for your search query.');
          }
        } catch (error) {
          console.error(error);
          message.reply('An error occurred while searching for anime.');
        }
      } else {
        message.reply('Please provide a search query.');
      }
      break;

    case 'shonen':
      try {
         const response = await fetch('https://api.jikan.moe/v3/genre/anime/27/1');
         const data = await response.json();
         const shonenAnime = data.anime[0].title;
         message.reply(`Here's a shonen anime recommendation: ${shonenAnime}`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while fetching the shonen anime recommendation.');
      }
      break;

    case 'seinen':
      try {
         const response = await fetch('https://api.jikan.moe/v3/genre/anime/25/1');
         const data = await response.json();
         const seinenAnime = data.anime[0].title;
         message.reply(`Here's a seinen anime recommendation: ${seinenAnime}`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while fetching the seinen anime recommendation.');
      }
      break;

    case 'sliceoflife':
      try {
         const response = await fetch('https://api.jikan.moe/v3/genre/anime/36/1');
         const data = await response.json();
         const sliceOfLifeAnime = data.anime[0].title;
         message.reply(`Here's a slice of life anime recommendation: ${sliceOfLifeAnime}`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while fetching the slice of life anime recommendation.');
      }
      break;
    case 'action':
      try {
         const response = await fetch('https://api.jikan.moe/v3/genre/anime/1/1');
         const data = await response.json();
         const actionAnime = data.anime[0].title;
         message.reply(`Here's an action anime recommendation: ${actionAnime}`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while fetching the action anime recommendation.');
      }
      break;

    case 'adventure':
      try {
         const response = await fetch('https://api.jikan.moe/v3/genre/anime/2/1');
         const data = await response.json();
         const adventureAnime = data.anime[0].title;
         message.reply(`Here's an adventure anime recommendation: ${adventureAnime}`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while fetching the adventure anime recommendation.');
      }
      break;

    case 'fantasy':
      try {
         const response = await fetch('https://api.jikan.moe/v3/genre/anime/10/1');
         const data = await response.json();
         const fantasyAnime = data.anime[0].title;
         message.reply(`Here's a fantasy anime recommendation: ${fantasyAnime}`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while fetching the fantasy anime recommendation.');
      }
      break;
    case 'sci-fi':
        try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/24/1');
          const data = await response.json();
          const sciFiAnime = data.anime[0].title;
          message.reply(`Here's a sci-fi anime recommendation: ${sciFiAnime}`);
        } catch (error) {
          console.error(error);
          message.reply('An error occurred while fetching the sci-fi anime recommendation.');
        }
        break;
      
    case 'romance':
        try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/22/1');
          const data = await response.json();
          const romanceAnime = data.anime[0].title;
          message.reply(`Here's a romance anime recommendation: ${romanceAnime}`);
        } catch (error) {
          console.error(error);
          message.reply('An error occurred while fetching the romance anime recommendation.');
        }
        break;
      
    case 'comedy':
        try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/4/1');
          const data = await response.json();
          const comedyAnime = data.anime[0].title;
          message.reply(`Here's a comedy anime recommendation: ${comedyAnime}`);
        } catch (error) {
          console.error(error);
          message.reply('An error occurred while fetching the comedy anime recommendation.');
        }
        break;

    case 'horror':
        try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/14/1');
          const data = await response.json();
          const horrorAnime = data.anime[0].title;
          message.reply(`Here's a horror anime recommendation: ${horrorAnime}`);
        } catch (error) {
          console.error(error);
          message.reply('An error occurred while fetching the horror anime recommendation.');
        }
        break;
          
    case 'mystery':
        try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/7/1');
          const data = await response.json();
          const mysteryAnime = data.anime[0].title;
          message.reply(`Here's a mystery anime recommendation: ${mysteryAnime}`);
        } catch (error) {
        console.error(error);
        message.reply('An error occurred while fetching the mystery anime recommendation.');
        }
        break;
          
    case 'sports':
        try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/30/1');
          const data = await response.json();
          const sportsAnime = data.anime[0].title;
          message.reply(`Here's a sports anime recommendation: ${sportsAnime}`);
        } catch (error) {
          console.error(error);
          message.reply('An error occurred while fetching the sports anime recommendation.');
        }
        break;

    case 'music':
        try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/20/1');
          const data = await response.json();
          const musicAnime = data.anime[0].title;
          message.reply(`Here's a music-themed anime recommendation: ${musicAnime}`);
        } catch (error) {
          console.error(error);
          message.reply('An error occurred while fetching the music-themed anime recommendation.');
        }
        break;
  
    case 'historical':
      try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/13/1');
          const data = await response.json();
          const historicalAnime = data.anime[0].title;
          message.reply(`Here's a historical anime recommendation: ${historicalAnime}`);
      } catch (error) {
         console.error(error);
         message.reply('An error occurred while fetching the historical anime recommendation.');
      }
      break;
  
    case 'harem':
      try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/35/1');
          const data = await response.json();
          const haremAnime = data.anime[0].title;
          message.reply(`Here's a harem anime recommendation: ${haremAnime}`);
      } catch (error) {
         console.error(error);
         message.reply('An error occurred while fetching the harem anime recommendation.');
      }
      break;

    case 'isekai':
      try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/33/1');
          const data = await response.json();
          const isekaiAnime = data.anime[0].title;
          message.reply(`Here's an isekai anime recommendation: ${isekaiAnime}`);
      } catch (error) {
         console.error(error);
         message.reply('An error occurred while fetching the isekai anime recommendation.');
      }
      break;

    case 'ecchi':
      try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/9/1');
          const data = await response.json();
          const ecchiAnime = data.anime[0].title;
          message.reply(`Here's an ecchi anime recommendation: ${ecchiAnime}`);
      } catch (error) {
         console.error(error);
         message.reply('An error occurred while fetching the ecchi anime recommendation.');
      }
      break;

    case 'shoujo':
      try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/25/1');
          const data = await response.json();
          const shoujoAnime = data.anime[0].title;
          message.reply(`Here's a shoujo anime recommendation: ${shoujoAnime}`);
      } catch (error) {
         console.error(error);
         message.reply('An error occurred while fetching the shoujo anime recommendation.');
      }
      break;

    case 'shounenai':
      try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/26/1');
          const data = await response.json();
          const shounenAiAnime = data.anime[0].title;
          message.reply(`Here's a shounen-ai anime recommendation: ${shounenAiAnime}`);
      } catch (error) {
         console.error(error);
         message.reply('An error occurred while fetching the shounen-ai anime recommendation.');
      }
      break;
  
    case 'josei':
        try {
          const response = await fetch('https://api.jikan.moe/v3/genre/anime/42/1');
          const data = await response.json();
          const joseiAnime = data.anime[0].title;
          message.reply(`Here's a josei anime recommendation: ${joseiAnime}`);
        } catch (error) {
          console.error(error);
          message.reply('An error occurred while fetching the josei anime recommendation.');
        }
        break;
        
    case 'animeinfo':
        const queryAnimeInfo = args.slice(1).join(' '); // Change the variable name to avoid conflicts
        if (queryAnimeInfo) {
          try {
            const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${queryAnimeInfo}&limit=1`);
            const data = await response.json();
            if (data.results.length > 0) {
              const anime = data.results[0];
              message.reply(`Title: ${anime.title}\nSynopsis: ${anime.synopsis}\nEpisodes: ${anime.episodes}\nRating: ${anime.score}`);
            } else {
              message.reply('No anime found for your query.');
            }
          } catch (error) {
            console.error(error);
            message.reply('An error occurred while fetching anime information.');
          }
        } else {
          message.reply('Please provide the name of the anime you want to search for.');
        }
        break;  
        
    case 'animequote':
        const quotes = [
          '“The world isn_t perfect. But it_s there for us, doing the best it can… that_s what makes it so damn beautiful.” — Roy Mustang (Full Metal Alchemist)',
          '“To know sorrow is not terrifying. What is terrifying is to know you can_t go back to happiness you could have.” — Matsumoto Rangiku (Bleach)',
          '“We are all like fireworks: We climb, we shine and always go our separate ways and become further apart. But even when that time comes, let_s not disappear like a firework and continue to shine… forever.” — Hitsugaya Toshiro (Bleach)',
          '“Those who stand at the top determine what_s wrong and what_s right! This very place is neutral ground! Justice will prevail, you say? But, of course, it will! Whoever wins this war becomes justice!” — Don Quixote Doflamingo (One Piece)',
          '“Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.” — Gildarts Clive (Fairy Tail)',
          '“Whatever you lose, you_ll find it again. But what you throw away you_ll never get back.” — Kenshin Himura (Rurouni Kenshin: Meiji Kenkaku Romantan)',
          '“Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!” — Satsuki Kiryuuin (Kill la Kill)',
          '“I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you!” — Son Goku (Dragon Ball Z)',
          '“Religion, ideology, resources, land, spite, love or just because no matter how pathetic the reason, it_s enough to start war. War will never cease to exist… reasons can be thought up after the fact. Human nature pursues strife.” — Paine (Naruto Shippuden)',
          '“People, who can_t throw something important away, can never hope to change anything.” — Armin Arlert (Shingeki no Kyojin / Attack on Titan)',
          '“A person can change, at the moment when the person wishes to change.” — Haruhi Fujioka (Ouran Highschool Host Club)',
          '“What good are dreams, if all you do is work? There_s more to life than hitting the books, I hope you know.” — Tamaki Suou (Ouran Highschool Host Club)',
          '“If you don_t take risks, you can_t create a future!” — Monkey D. Luffy (One Piece)',
          '“When you give up, that_s when the game ends.” — Mitsuyoshi Anzai (Slam Dunk)',
          '“What good are dreams, if all you do is work? There_s more to life than hitting the books, I hope you know.” — Tamaki Suou (Ouran Highschool Host Club)',
          '“You will never be able to love anybody else until you love yourself.” — Lelouch Lamperouge (Code Geass)',
          '“No matter which love line, what time, or where I am, I will always love you. I_ll say it one more time. I love you.” — Okabe (Steins; Gate)',
          '“Even if I lose this feeling, I_m sure I_ll just fall in love with you all over again.” — Syaoran Li (Cardcaptor Sakura)',
          '“Destiny. Fate. Dreams. These unstoppable ideas are held deep in the heart of man. As long as there are people who seek freedom in this life, these things shall not vanish from the Earth.” — Gold D. Rodger (One Piece)',
          '“It was like you brought color to my life. You changed my life, all by yourself.” — Sawaka Kuronuma (Reaching You)',
          '“Forgetting is like a wound. The wound may heal but it has already left a scar.” — Monkey D Luffy (One Piece)',
          '“If it_s possible for one person to be hurt by another, then it_s possible for that person to be healed by another.” — Sohma Hatori (Fruits Basket)',
          '“If I can meet you again, against the 6 billion to 1 odds, even If you can_t move, I_ll marry you.” — Hideki Hinata (Angel Beats)',
          '“The scars that you can_t see are the hardest to heal.” — Nao Tamori (Charlotte)',
          '“Either in belief or doubt, if I lean to one of these sides, my reaction time will be dulled if my heart thinks the opposite of what I choose.” — Roronoa Zoro (One Piece)',
          '“I_ll make you so in love with me, that every time our lips touch, you_ll die a little death.” — Ai Yazawa (Nana)',
          '“If you love someone, he could make you sad. He could even make you feel lonely sometimes. But that someone can also make you happier than you_ll ever be.” — Saki Hanajima (Fruits Basket)',
          '“Even if I searched the world over, no one could compare to you.” — Hikaru Hitachiin (Ouran Highschool Host Club)',
          '“The thing I wished for destroyed my whole family. I brought all this suffering down on my family because I made a wish for my dad without knowing what he really wanted.” — Kyoko Sakura',
          '“The loneliest people are the kindest. The saddest people smile the brightest. The most damaged people are the wisest. All because they don_t wish to see anyone else suffer the way they did.” — Jellal Fernandes',
          '“Is it all right to not hold it in anymore? Sanae-san told me, places that I can cry are in a bathroom, or in daddy_s arms.” — Ushio',
          '“Death isn_t kind. Its dark and black and as far as you… As far as you can see you re all alone. There_s no one else.” — Mei Misaki',
          '“They call certain methods of fighting good and others evil, acting as if there were some nobility to the battlefield. Such illusions, perpetrated by heroes throughout history, have led countless young men to their bloody deaths, all for the sake of this valor and glory.” — Kiritsugu Emiya',
          '“The two of us aren_t so different. My whole life I_ve desired from others. I felt bitter to the people around me and I closed off my heart. And a heart that lets nothing in will become empty before you realize it.” — Mei Aihara',
          '“Was I able to live inside someone_s heart? Was I able to live inside your heart? Do you think you_ll remember me at least a little? You_d better not hit ‘reset!_ Don_t forget me, OK? That_s a promise, OK? I_m glad it_s you, after all. Will I reach you? I hope I can reach you.” — Kaori',
          '“I_m fine, except… it_s a terrible day for rain.” — Roy Mustang',
          '“Humans die. Animals die. Plants die. Even soul reapers die. It_s the arch of the universe. Everything that comes to life eventually ceases to exist.” — Baraggan Louisenbairn',
          '“I really want to be with all of you! I want to play! That_s why I_m going to reincarnate! Then I_ll be with everyone again.” — Menma',
          '“Aren_t I supposed to have taught you something important in life by now? What have I taught you?” — Hana',
          '“Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?” — Juuzou Suzuya',
          '“War is not heroic. War is not exhilarating. And, war is full of despair. It_s dark. It_s dreadful. It is a thing of sorrow and gloom.” — Izura Kira',
          '“No one in this world can truly hold himself separate from violence. Guns are literally within reach of anyone. Sadly, that_s where we put our faith, in bullets rather than human kindness.” — Koko Hekmatyar',
          '“Did I make the Japanese people happy? Did I make it work?” — Euphemia Li Britannia',
          '“You were always there for me, and that_s all I needed. Just you. For some reason, I didn_t feel sad or broken up, it just didn_t seem real. But slowly I realized it was real — that you were gone. And little by little, I slowly felt something inside me go numb.” — Jet Black'
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        message.reply(`Here's an anime quote: ${randomQuote}`);
        break;

    case 'mangarecommend':
      const genres = ['shonen', 'seinen', 'romance', 'fantasy', 'sliceoflife']; // Add more genres as needed
      const randomGenre = genres[Math.floor(Math.random() * genres.length)];
      try {
        const response = await fetch(`https://api.jikan.moe/v3/genre/manga/${randomGenre}/1`);
        const data = await response.json();
        const recommendedManga = data.manga[0].title;
        message.reply(`Here's a manga recommendation in the ${randomGenre} genre: ${recommendedManga}`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while fetching the manga recommendation.');
      }
      break;
        
    case 'animesearch':
      const queryAnimeSearch = args.slice(1).join(' ');
      if (queryAnimeSearch) {
        try {
          const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=5`);
          const data = await response.json();
          if (data.results.length > 0) {
            const results = data.results.map((result, index) => `${index + 1}. ${result.title}`);
            message.reply(`Here are the top 5 results for your anime search:\n${results.join('\n')}`);
          } else {
            message.reply('No anime found for your query.');
          }
        } catch (error) {
          console.error(error);
          message.reply('An error occurred while searching for anime.');
        }
      } else {
        message.reply('Please provide a search query.');
      }
      break;
     
    case 'help':
      message.reply('Available commands:\n' +
      '!ping - Responds with "Pong!"',
      '!hello - Greets with "Hello, Discord World!"',
      '!random - Provides a random anime recommendation.',
      '!popular - Offers a popular upcoming anime recommendation.',
      '!search <query> - Searches for an anime based on the query.',
      '!shonen - Recommends a shonen anime.',
      '!seinen - Recommends a seinen anime.',
      '!sliceoflife - Recommends a slice of life anime.',
      '!action - Recommends an action anime.',
      '!adventure - Recommends an adventure anime.',
      '!fantasy - Recommends a fantasy anime.',
      '!sci-fi - Recommends a sci-fi anime.',
      '!romance - Recommends a romance anime.',
      '!comedy - Recommends a comedy anime.',
      '!horror - Recommends a horror anime.',
      '!mystery - Recommends a mystery anime.',
      '!sports - Recommends a sports anime.',
      '!music - Recommends a music-themed anime.',
      '!historical - Recommends a historical anime.',
      '!harem - Recommends a harem anime.',
      '!isekai - Recommends an isekai anime.',
      '!ecchi - Recommends an ecchi anime.',
      '!shoujo - Recommends a shoujo anime.',
      '!shounenai - Recommends a shounen-ai anime.',
      '!josei - Recommends a josei anime.',
      '!animeinfo <query> - Provides information about a specific anime.',
      '!animequote - Shares a random anime quote.',
      '!mangarecommend - Recommends a random manga in a specified genre.',
      '!animesearch <query> - Searches for anime based on a query.',
      '!poll - Create a poll.',
      '!remindme - a simple reminder for specific taskes or events',
      '!translate - Translates the given text into a specific language.');
      break;

    case 'poll':
      const pollEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Poll')
        .setDescription('Create a poll with multiple choices!')
        .addFields(
          { name: 'Question', value: args[1] },
          { name: 'Choices', value: args.slice(2).join('\n') },
        )
        .setTimestamp();  
      message.channel.send(pollEmbed)
        .then((sentMessage) => {
          for (let i = 1; i < args.length - 1; i++) {
            sentMessage.react(`${i}\u20e3`);
          }
        });
      break;  

    case 'remindme':
      const time = args[1];
      const reminderMessage = args.slice(2).join(' ');  
      setTimeout(() => {
        message.author.send(`Reminder: ${reminderMessage}`);
      }, ms(time));
      break; 

    case 'translate':
      const targetLanguage = args[1];
      const textToTranslate = args.slice(2).join(' ');  
      translate(textToTranslate, { to: targetLanguage })
        .then((translatedText) => {
          const translationEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Translation Result')
            .addFields(
              { name: 'Source Text', value: textToTranslate },
              { name: 'Translated Text', value: translatedText },
            )
            .setTimestamp();  
          message.channel.send(translationEmbed);
        })
        .catch((error) => {
          console.error(error);
          message.reply('An error occurred while translating the text.');
        });
      break;  

    default:
      message.reply('Invalid command. Type !help for a list of available commands.');// Handle unknown or invalid commands
      break;
    }
  }
});

const TOKEN = '***********************************************************';
client.login(TOKEN);
