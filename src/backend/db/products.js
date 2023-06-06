import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "e0f4e938-cd1a-47c8-968b-6cb809fb6fcf",
    title: "Lock Every Door",
    author: "Riley Sager",
    price: 500,
    description: {
      para1:
        "No visitors. No nights spent away from the apartment. No disturbing the other residents, all of whom are rich or famous or both. These are the only rules for Jules Larsen's new job as an apartment sitter at the Bartholomew, one of Manhattan's most high-profile and mysterious buildings. Recently heartbroken and just plain broke, Jules is taken in by the splendor of her surroundings and accepts the terms, ready to leave her past life behind.",
      para2:
        "As she gets to know the residents and staff of the Bartholomew, Jules finds herself drawn to fellow apartment sitter Ingrid, who comfortingly, disturbingly reminds her of the sister she lost eight years ago. When Ingrid confides that the Bartholomew is not what it seems and the dark history hidden beneath its gleaming facade is starting to frighten her, Jules brushes it off as a harmless ghost story—until the next day, when Ingrid disappears.",
      para3:
        "Searching for the truth about Ingrid's disappearance, Jules digs deeper into the Bartholomew's dark past and into the secrets kept within its walls. Her discovery that Ingrid is not the first apartment sitter to go missing at the Bartholomew pits Jules against the clock as she races to unmask a killer, expose the building's hidden past, and escape the Bartholomew before her temporary status becomes permanent.",
    },
    genres: [
      "thriller",
      "mystery",
      "mystery thriller",
      "fiction",
      "horror",
      "adult",
      "suspense",
    ],
    noOfPages: 381,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1540938359i/41837243.jpg",
    categoryName: "thriller",
    rating: 3.9,
    isWishlisted: false,
    discountPercent: 45,
  },
  {
    _id: "bbe012a6-398a-4b49-b13f-a0a6cbb70809",
    title: "The Perks of being a wallflower",
    author: "Stephen Chbosky",
    price: 300,
    description: {
      para1: "This haunting novel about the dilemma of passivity vs. passion marks the stunning debut of a provocative new voice in contemporary fiction: The Perks of Being A WALLFLOWER",
      para2: "This is the story of what it's like to grow up in high school. More intimate than a diary, Charlie's letters are singular and unique, hilarious and devastating. We may not know where he lives. We may not know to whom he is writing. All we know is the world he shares. Caught between trying to live his life and trying to run from it puts him on a strange course through uncharted territory. The world of first dates and mixed tapes, family dramas and new friends. The world of sex, drugs, and The Rocky Horror Picture Show, when all one requires is that the perfect song on that perfect drive to feel infinite.",
      para3: "Through Charlie, Stephen Chbosky has created a deeply affecting coming-of-age story, a powerful novel that will spirit you back to those wild and poignant roller coaster days known as growing up."
    },
    genres: ["Young Adult", "Fiction", "Contemporary", "Classics", "Mental Health", "Realistic Fiction"],
    noOfPages: 213,
    img: "https://m.media-amazon.com/images/I/41CiEb1Qx2L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    categoryName: "young-adult",
    rating: 4,
    isWishlisted: false,
    discountPercent: 0,
  },
  {
    _id: "1759d5cc-9d43-46ce-8e9c-23f2974e8407",
    title: "Harry Potter and the Philosopher's Stone",
    author: "JK Rowling",
    price: 280,
    description: {
      para1: "Harry Potter thinks he is an ordinary boy - until he is rescued by an owl, taken to Hogwarts School of Witchcraft and Wizardry, learns to play Quidditch and does battle in a deadly duel. The Reason ... HARRY POTTER IS A WIZARD!"
    },
    genres: ["Fantasy", "Fiction", "Young Adult", "Magic", "Childrens", "Middle Grade"],
    noOfPages: 223,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1170803558l/72193.jpg",
    categoryName: "fantasy",
    rating: 5,
    isWishlisted: false,
    discountPercent: 25,
  },
  {
    _id: "72c5c892-b6a8-443b-8c87-89a53dbdf7e7",
    title: "A Man called Ove",
    author: "Fredrick Backman",
    price: 300,
    description: {
      para1: "A grumpy yet loveable man finds his solitary world turned on its head when a boisterous young family moves in next door.",
      para2: "Meet Ove. He's a curmudgeon, the kind of man who points at people he dislikes as if they were burglars caught outside his bedroom window. He has staunch principles, strict routines, and a short fuse. People call him the bitter neighbor from hell, but must Ove be bitter just because he doesn't walk around with a smile plastered to his face all the time?",
      para3: "Behind the cranky exterior there is a story and a sadness. So when one November morning a chatty young couple with two chatty young daughters move in next door and accidentally flatten Ove's mailbox, it is the lead-in to a comical and heartwarming tale of unkempt cats, unexpected friendship, and the ancient art of backing up a U-Haul. All of which will change one cranky old man and a local residents' association to their very foundations."
    },
    genres: ["Fiction", "Contemporary", "Humor", "Adult", "Adult Fiction"],
    noOfPages: 337,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405259930i/18774964.jpg",
    categoryName: "contemporary",
    rating: 4.3,
    isWishlisted: false,
    discountPercent: 0,
  },
  {
    _id: "fe9114dc-afd7-42d6-9cdc-0129603ec7ff",
    title: "The Kite Runner",
    author: "Khaled Hossaini",
    price: 290,
    description: {
      para1: "1970s Afghanistan: Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what would happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to an Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption."
    },
    genres: ["Fiction", "Historical Fiction", "Classics", "Contemporary", "Historical"],
    noOfPages: 371,
    img: "https://m.media-amazon.com/images/I/51bt7LtryoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    categoryName: "bildungsroman",
    rating: 5,
    isWishlisted: false,
    discountPercent: 25,
  },
  {
    _id: "dd8e2e6e-1c6d-40d4-95d5-3efafbbbe2e8",
    title: "The Nightingale",
    author: "Kristin Hannah",
    price: 300,
    description: {
      para1: "In the quiet village of Carriveau, Vianne Mauriac says good-bye to her husband, Antoine, as he heads for the Front. She doesn’t believe that the Nazis will invade France…but invade they do, in droves of marching soldiers, in caravans of trucks and tanks, in planes that fill the skies and drop bombs upon the innocent. When a German captain requisitions Vianne’s home, she and her daughter must live with the enemy or lose everything. Without food or money or hope, as danger escalates all around them, she is forced to make one impossible choice after another to keep her family alive.",
      para2: "Vianne’s sister, Isabelle, is a rebellious eighteen-year-old, searching for purpose with all the reckless passion of youth. While thousands of Parisians march into the unknown terrors of war, she meets Gaëtan, a partisan who believes the French can fight the Nazis from within France, and she falls in love as only the young can…completely. But when he betrays her, Isabelle joins the Resistance and never looks back, risking her life time and again to save others."
    },
    genres: ["Historical Fiction", "Fiction", "Historical", "War", "Adult"],
    noOfPages: 440,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681839850i/21853621.jpg",
    categoryName: "historical-fiction",
    rating: 4.5,
    isWishlisted: false,
    discountPercent: 0,
  },

  {
    _id: "cbf4181c-01e6-4b8f-b7df-f0c06a6007be",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    price: 300,
    description: {
      para1: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.",
      para2: "Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love."
    },
    genres: ["Young Adult", "Fiction", "Dystopia", "Fantasy", "Science Fiction"],
    noOfPages: 374,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg",
    categoryName: "dystopian",
    rating: 4.5,
    isWishlisted: false,
    discountPercent: 45,
  },
  {
    _id: "945114c3-4b03-4e02-b2be-f1a37eecdc2a",
    title: "Educated",
    author: "Tara Westover",
    price: 1000,
    description: {
      para1: "Tara Westover was 17 the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her head-for-the-hills bag. In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father's junkyard.",
      para2: "Her father forbade hospitals, so Tara never saw a doctor or nurse. Gashes and concussions, even burns from explosions, were all treated at home with herbalism. The family was so isolated from mainstream society that there was no one to ensure the children received an education and no one to intervene when one of Tara's older brothers became violent.",
      para3: "Then, lacking any formal education, Tara began to educate herself. She taught herself enough mathematics and grammar to be admitted to Brigham Young University, where she studied history, learning for the first time about important world events like the Holocaust and the civil rights movement. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge. Only then would she wonder if she'd traveled too far, if there was still a way home."
    },
    genres: ["Nonfiction", "Memoir", "Biography", "Audiobook", "Education"],
    noOfPages: 352,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
    categoryName: "non-fiction",
    rating: 1.5,
    isWishlisted: false,
    discountPercent: 45,
    isOutOfStock: true,
  },
  {
    _id: "21a48f0a-187a-4a8c-ad6c-8842896fc0c5",
    title: "The Whisper Man",
    author: "Alex North",
    price: 500,
    description: {
      para1: "After the sudden death of his wife, Tom Kennedy believes a fresh start will help him and his young son Jake heal. A new beginning, a new house, a new town. Featherbank.",
      para2: "But the town has a dark past. Twenty years ago, a serial killer abducted and murdered five residents. Until Frank Carter was finally caught, he was nicknamed The Whisper Man, for he would lure his victims out by whispering at their windows at night.",
      para3: "Just as Tom and Jake settle into their new home, a young boy vanishes. His disappearance bears an unnerving resemblance to Frank Carter's crimes, reigniting old rumors that he preyed with an accomplice. Now, detectives Amanda Beck and Pete Willis must find the boy before it is too late, even if that means Pete has to revisit his great foe in prison: The Whisper Man."
    },
    genres: ["Thriller", "Mystery", "Horror", "Fiction", "Mystery Thriller"],
    noOfPages: 384,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579073397l/51540935.jpg",
    categoryName: "thriller",
    rating: 4.5,
    isWishlisted: false,
    discountPercent: 25,
  },
  {
    _id: "5344eed7-956e-48f5-8fdd-001409c9c2f3",
    title: "Heartstopper",
    author: "Alice Oseman",
    price: 500,
    description: {
      para1: "Charlie, a highly-strung, openly gay over-thinker, and Nick, a cheerful, soft-hearted rugby player, meet at a British all-boys grammar school. Friendship blooms quickly, but could there be something more...?",
      para2: "Charlie Spring is in Year 10 at Truham Grammar School for Boys. The past year hasn't been too great, but at least he's not being bullied anymore. Nick Nelson is in Year 11 and on the school rugby team. He's heard a little about Charlie - the kid who was outed last year and bullied for a few months - but he's never had the opportunity to talk to him.",
      para3: "They quickly become friends, and soon Charlie is falling hard for Nick, even though he doesn't think he has a chance. But love works in surprising ways, and sometimes good things are waiting just around the corner..."
    },
    genres: ["Graphic Novels", "Romance", "LGBT", "Young Adult", "Contemporary"],
    noOfPages: 288,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1541887843i/40495957.jpg",
    categoryName: "young-adult",
    rating: 5,
    isWishlisted: false,
    discountPercent: 45,
  },
  {
    _id: "4f0f00c8-e33d-43d7-a378-ea1380906617",
    title: "The Night Circus",
    author: "Erin Morgenstern",
    price: 300,
    description: {
      para1: "The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements. It is called Le Cirque des Rêves, and it is only open at night.",
      para2: "But behind the scenes, a fierce competition is underway—a duel between two young magicians, Celia and Marco, who have been trained since childhood expressly for this purpose by their mercurial instructors. Unbeknownst to them, this is a game in which only one can be left standing, and the circus is but the stage for a remarkable battle of imagination and will. Despite themselves, however, Celia and Marco tumble headfirst into love—a deep, magical love that makes the lights flicker and the room grow warm whenever they so much as brush hands.",
      para3: "True love or not, the game must play out, and the fates of everyone involved, from the cast of extraordinary circus performers to the patrons, hang in the balance, suspended as precariously as the daring acrobats overhead."
    },
    genres: ["Fantasy", "Fiction", "Romance", "Historical Fiction", "Magical Realism"],
    noOfPages: 400,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387124618i/9361589.jpg",
    categoryName: "fantasy",
    rating: 4.5,
    isWishlisted: false,
    discountPercent: 25,
    isOutOfStock: true,
  },
  {
    _id: "ac1c11ce-f19c-4bad-9c2e-6541c11d59c2",
    title: "The Secret History",
    author: "Donna Tartt",
    price: 700,
    description: {
      para1: "Under the influence of their charismatic classics professor, a group of clever, eccentric misfits at an elite New England college discover a way of thinking and living that is a world away from the humdrum existence of their contemporaries. But when they go beyond the boundaries of normal morality they slip gradually from obsession to corruption and betrayal, and at last—inexorably—into evil."
    },
    genres: ["Fiction", "Mystery", "Classics", "Contemporary", "Thriller"],
    noOfPages: 559,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451554846i/29044.jpg",
    categoryName: "contemporary",
    rating: 3.8,
    isWishlisted: false,
    discountPercent: 25,
  },
  {
    _id: "602c7717-3731-4747-b5ab-fd3097d44bdb",
    title: "Little Women",
    author: "Louisa May Alcott",
    price: 150,
    description: {
      para1: "Generations of readers young and old, male and female, have fallen in love with the March sisters of Louisa May Alcott’s most popular and enduring novel, Little Women. Here are talented tomboy and author-to-be Jo, tragically frail Beth, beautiful Meg, and romantic, spoiled Amy, united in their devotion to each other and their struggles to survive in New England during the Civil War.",
      para2: "It is no secret that Alcott based Little Women on her own early life. While her father, the freethinking reformer and abolitionist Bronson Alcott, hobnobbed with such eminent male authors as Emerson, Thoreau, and Hawthorne, Louisa supported herself and her sisters with woman’s work, including sewing, doing laundry, and acting as a domestic servant. But she soon discovered she could make more money writing. Little Women brought her lasting fame and fortune, and far from being the girl's book her publisher requested, it explores such timeless themes as love and death, war and peace, the conflict between personal ambition and family responsibilities, and the clash of cultures between Europe and America."
    },
    genres: ["Classics", "Fiction", "Historical Fiction", "Young Adult", "Romance"],
    noOfPages: 449,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562690475i/1934.jpg",
    categoryName: "bildungsroman",
    rating: 3.9,
    isWishlisted: false,
    discountPercent: 45,
  },
  {
    _id: "bb7218fa-0c58-4edc-b151-7c2273553914",
    title: "The Boy in Striped Pajamas",
    author: "John Boyne",
    price: 280,
    description: {
      para1: "If you start to read this book, you will go on a journey with a nine-year-old boy named Bruno. (Though this isn't a book for nine-year-olds.) And sooner or later you will arrive with Bruno at a fence.",
      para2: "Fences like this exist all over the world. We hope you never have to encounter one."
    },
    genres: ["Historical Fiction", "Fiction", "Young Adult", "Historical", "Classics"],
    noOfPages: 240,
    img: "https://m.media-amazon.com/images/I/51VCWuza-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    categoryName: "historical-fiction",
    rating: 4.5,
    isWishlisted: false,
    discountPercent: 0,
  },

  {
    _id: "40dcebeb-a8b5-40ef-b110-d70ec8b5c82d",
    title: "Station Eleven",
    author: "Emily St. John Mandel",
    price: 500,
    description: {
      para1: "Set in the days of civilization's collapse, Station Eleven tells the story of a Hollywood star, his would-be savior, and a nomadic group of actors roaming the scattered outposts of the Great Lakes region, risking everything for art and humanity.",
      para2: "One snowy night a famous Hollywood actor slumps over and dies onstage during a production of King Lear. Hours later, the world as we know it begins to dissolve. Moving back and forth in time—from the actor's early days as a film star to fifteen years in the future, when a theater troupe known as the Traveling Symphony roams the wasteland of what remains—this suspenseful, elegiac, spellbinding novel charts the strange twists of fate that connect five people: the actor, the man who tried to save him, the actor's first wife, his oldest friend, and a young actress with the Traveling Symphony, caught in the crosshairs of a dangerous self-proclaimed prophet."
    },
    genres: ["Fiction", "Science Fiction", "Dystopia", "Post Apocalyptic", "Adult"],
    noOfPages: 333,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680459872i/20170404.jpg",
    categoryName: "dystopian",
    rating: 4.4,
    isWishlisted: false,
    discountPercent: 25,
  },

  {
    _id: "0802a828-366f-4b8e-bcd9-cbb4e085d9ec",
    title: "Persepolis",
    author: "Marjane Satrapi",
    price: 850,
    description: {
      para1: "Persepolis is the story of Satrapi's unforgettable childhood and coming of age within a large and loving family in Tehran during the Islamic Revolution; of the contradictions between private and public life in a country plagued by political upheaval; of her high school years in Vienna facing the trials of adolescence far from her family; of her homecoming—both sweet and terrible; and, finally, of her self-imposed exile from her beloved homeland. It is the chronicle of a girlhood and adolescence at once outrageous and familiar, a young life entwined with the history of her country yet filled with the universal trials and joys of growing up.",
      para2: "Edgy, searingly observant, and candid, often heartbreaking but threaded throughout with raw humor and hard-earned wisdom—Persepolis is a stunning work from one of the most highly regarded, singularly talented graphic artists at work today."
    },
    genres: ["Graphic Novels", "Nonfiction", "Comics", "Memoir", "Biography"],
    noOfPages: 341,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327876995i/991197.jpg",
    categoryName: "non-fiction",
    rating: 5,
    isWishlisted: false,
    discountPercent: 25,
    isOutOfStock: true,
  },

  {
    _id: "0a507977-6c52-4f81-b768-6a7ee05cedd5",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 300,
    description: {
      para1: "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
      para2: "Alicia’s refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. The price of her art skyrockets, and she, the silent patient, is hidden away from the tabloids and spotlight at the Grove, a secure forensic unit in North London.",
      para3: "Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with Alicia. His determination to get her to talk and unravel the mystery of why she shot her husband takes him down a twisting path into his own motivations—a search for the truth that threatens to consume him..."
    },
    genres: ["Thriller", "Mystery", "Fiction", "Mystery Thriller", "Suspense"],
    noOfPages: 336,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
    categoryName: "thriller",
    rating: 2.5,
    isWishlisted: false,
    discountPercent: 0,
  },
  {
    _id: "8f4fd0c7-f170-4b17-a47e-580be745999a",
    title: "Truly Devious",
    author: "Maureen Johnson",
    price: 500,
    description: {
      para1: "Ellingham Academy is a famous private school in Vermont for the brightest thinkers, inventors, and artists. It was founded by Albert Ellingham, an early twentieth century tycoon, who wanted to make a wonderful place full of riddles, twisting pathways, and gardens. “A place,” he said, “where learning is a game.”",
      para2: "Shortly after the school opened, his wife and daughter were kidnapped. The only real clue was a mocking riddle listing methods of murder, signed with the frightening pseudonym “Truly, Devious.” It became one of the great unsolved crimes of American history.",
      para3: "True-crime aficionado Stevie Bell is set to begin her first year at Ellingham Academy, and she has an ambitious plan: She will solve this cold case. That is, she will solve the case when she gets a grip on her demanding new school life and her housemates: the inventor, the novelist, the actor, the artist, and the jokester. But something strange is happening. Truly Devious makes a surprise return, and death revisits Ellingham Academy. The past has crawled out of its grave. Someone has gotten away with murder."
    },
    genres: ["Mystery", "Young Adult", "Mystery Thriller", "Contemporary", "Fiction"],
    noOfPages: 416,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1498501619i/29589074.jpg",
    categoryName: "young-adult",
    rating: 3,
    isWishlisted: false,
    discountPercent: 45,
  },
  {
    _id: "a2fdedba-8454-4da9-8fce-ab0205c48b32",
    title: "Game of Thrones",
    author: "George R.R. Martin",
    price: 800,
    description: {
      para1: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the king’s new Hand, an appointment that threatens to sunder not only his family but the kingdom itself.",
      para2: "Sweeping from a harsh land of cold to a summertime kingdom of epicurean plenty, A Game of Thrones tells a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; a child is lost in the twilight between life and death; and a determined woman undertakes a treacherous journey to protect all she holds dear. Amid plots and counter-plots, tragedy and betrayal, victory and terror, allies and enemies, the fate of the Starks hangs perilously in the balance, as each side endeavors to win that deadliest of conflicts: the game of thrones."
    },
    genres: ["Fantasy", "Fiction", "Epic Fantasy", "Adult", "High Fabtasy"],
    noOfPages: 835,
    img: "https://m.media-amazon.com/images/I/51uSCR1ur+L._SY344_BO1,204,203,200_.jpg",
    categoryName: "fantasy",
    rating: 1.5,
    isWishlisted: false,
    discountPercent: 45,
  },
  {
    _id: "a457b941-13cf-4803-b97f-f943e8cd8d02",
    title: "Normal People",
    author: "Sally Rooney",
    price: 600,
    description: {
      para1: "At school Connell and Marianne pretend not to know each other. He’s popular and well-adjusted, star of the school soccer team while she is lonely, proud, and intensely private. But when Connell comes to pick his mother up from her housekeeping job at Marianne’s house, a strange and indelible connection grows between the two teenagers - one they are determined to conceal.",
      para2: "A year later, they’re both studying at Trinity College in Dublin. Marianne has found her feet in a new social world while Connell hangs at the sidelines, shy and uncertain. Throughout their years in college, Marianne and Connell circle one another, straying toward other people and possibilities but always magnetically, irresistibly drawn back together. Then, as she veers into self-destruction and he begins to search for meaning elsewhere, each must confront how far they are willing to go to save the other.",
      para3: "Sally Rooney brings her brilliant psychological acuity and perfectly spare prose to a story that explores the subtleties of class, the electricity of first love, and the complex entanglements of family and friendship."
    },
    genres: ["Fiction", "Romance", "Contemporary", "Literary Fiction", "Adult"],
    noOfPages: 273,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1571423190i/41057294.jpg",
    categoryName: "contemporary",
    rating: 3.8,
    isWishlisted: false,
    discountPercent: 0,
  },
  {
    _id: "c0c0d895-c653-48f5-ad5f-e818453c7720",
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    price: 250,
    description: {
      para1: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
      para2: "Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature."
    },
    genres: ["Classic", "Fiction", "Historical Fiction", "Literature", "Young Adult"],
    noOfPages: 323,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
    categoryName: "bildungsroman",
    rating: 4.1,
    isWishlisted: false,
    discountPercent: 45,
  },
  {
    _id: "113f27ac-7302-4e12-b459-c2e89feb3ecc",
    title: "All the light we cannot see",
    author: "Anthony Doerr",
    price: 480,
    description: {
      para1: "Marie-Laure lives in Paris near the Museum of Natural History, where her father works. When she is twelve, the Nazis occupy Paris and father and daughter flee to the walled citadel of Saint-Malo, where Marie-Laure’s reclusive great uncle lives in a tall house by the sea. With them they carry what might be the museum’s most valuable and dangerous jewel.",
      para2: "In a mining town in Germany, Werner Pfennig, an orphan, grows up with his younger sister, enchanted by a crude radio they find that brings them news and stories from places they have never seen or imagined. Werner becomes an expert at building and fixing these crucial new instruments and is enlisted to use his talent to track down the resistance. Deftly interweaving the lives of Marie-Laure and Werner, Doerr illuminates the ways, against all odds, people try to be good to one another.",
      para3: "From the highly acclaimed, multiple award-winning Anthony Doerr, the stunningly beautiful instant New York Times bestseller about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II."
    },
    genres: ["Historical Fiction", "Fiction", "Historical", "War", "World War II"],
    noOfPages: 531,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451445646i/18143977.jpg",
    categoryName: "historical-fiction",
    rating: 3.5,
    isWishlisted: false,
    discountPercent: 25,
  },

  {
    _id: "fd50212a-f813-4273-a4f0-d61a1be7c8d5",
    title: "Thunderhead",
    author: "Neal Shusterman",
    price: 500,
    description: {
      para1: "Rowan has gone rogue, and has taken it upon himself to put the Scythedom through a trial by fire. Literally. In the year since Winter Conclave, he has gone off-grid, and has been striking out against corrupt scythes—not only in MidMerica, but across the entire continent. He is a dark folk hero now—“Scythe Lucifer”—a vigilante taking down corrupt scythes in flames.",
      para2: "Citra, now a junior scythe under Scythe Curie, sees the corruption and wants to help change it from the inside out, but is thwarted at every turn, and threatened by the “new order” scythes. Realizing she cannot do this alone—or even with the help of Scythe Curie and Faraday, she does the unthinkable, and risks being “deadish” so she can communicate with the Thunderhead—the only being on earth wise enough to solve the dire problems of a perfect world. But will it help solve those problems, or simply watch as perfection goes into decline?"
    },
    genres: ["Young Adult", "Fantasy", "Dystopia", "Science Fiction", "Fiction"],
    noOfPages: 504,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1505658534i/33555224.jpg",
    categoryName: "dystopian",
    rating: 4.8,
    isWishlisted: false,
    discountPercent: 45,
    isOutOfStock: true,
  },

  {
    _id: "35eff8ab-2ccc-4f63-bc6a-e78379eb7b5e",
    title: "Crying in H mart",
    author: "Michelle Zauner",
    price: 450,
    description: {
      para1: "Michelle Zauner tells of growing up one of the few Asian American kids at her school in Eugene, Oregon; of struggling with her mother’s particular, high expectations of her; of a painful adolescence; of treasured months spent in her grandmother’s tiny apartment in Seoul, where she and her mother would bond, late at night, over heaping plates of food.",
      para2: "As she grew up, moving to the East Coast for college, finding work in the restaurant industry, and performing gigs with her fledgling band—and meeting the man who would become her husband—her Koreanness began to feel ever more distant, even as she found the life she wanted to live. It was her mother’s diagnosis of terminal cancer, when Michelle was twenty-five, that forced a reckoning with her identity and brought her to reclaim the gifts of taste, language, and history her mother had given her."
    },
    genres: ["Nonfiction", "Memoir", "Audiobook", "Biography", "Food"],
    noOfPages: 256,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1601937850i/54814676.jpg",
    categoryName: "non-fiction",
    rating: 3.7,
    isWishlisted: false,
    discountPercent: 25,
  },

  {
    _id: "1c37edca-78d3-44ca-9f14-3a8584b3f4d5",
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 200,
    description: {
      para1: "Who are you? What have we done to each other?",
      para2: "These are the questions Nick Dunne finds himself asking on the morning of his fifth wedding anniversary when his wife Amy suddenly disappears. The police suspect Nick. Amy's friends reveal that she was afraid of him, that she kept secrets from him. He swears it isn't true. A police examination of his computer shows strange searches. He says they weren't made by him. And then there are the persistent calls on his mobile phone.",
      para3: "So what did happen to Nick's beautiful wife?"
    },
    genres: ["Fiction", "Mystery", "Thriller", "Mystery Thriller", "Crime"],
    noOfPages: 415,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg",
    categoryName: "thriller",
    rating: 3.8,
    isWishlisted: false,
    discountPercent: 45,
  },
  {
    _id: "0c7a5392-c729-4d90-bc48-d7f8b2088fae",
    title: "The Inheritance Games",
    author: "Jenniffer Lynn ",
    price: 400,
    description: {
      para1: "Avery Grambs has a plan for a better future: survive high school, win a scholarship, and get out. But her fortunes change in an instant when billionaire Tobias Hawthorne dies and leaves Avery virtually his entire fortune. The catch? Avery has no idea why -- or even who Tobias Hawthorne is.",
      para2: "To receive her inheritance, Avery must move into sprawling, secret passage-filled Hawthorne House, where every room bears the old man's touch -- and his love of puzzles, riddles, and codes. Unfortunately for Avery, Hawthorne House is also occupied by the family that Tobias Hawthorne just dispossessed. This includes the four Hawthorne grandsons: dangerous, magnetic, brilliant boys who grew up with every expectation that one day, they would inherit billions. Heir apparent Grayson Hawthorne is convinced that Avery must be a conwoman, and he's determined to take her down. His brother, Jameson, views her as their grandfather's last hurrah: a twisted riddle, a puzzle to be solved. Caught in a world of wealth and privilege, with danger around every turn, Avery will have to play the game herself just to survive."
    },
    genres: ["Mystery", "Young Adult", "Romance", "Fiction", "Contemporary"],
    noOfPages: 384,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1587396413i/52439531.jpg",
    categoryName: "young-adult",
    rating: 4.1,
    isWishlisted: false,
    discountPercent: 0,
  },
  {
    _id: "d4fcc719-d11b-413a-abe4-871e0d7d35c8",
    title: "Chronicles of Narnia",
    author: "C.S. Lewis",
    price: 900,
    description: {
      para1: "Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Staples Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia.",
      para2: "For the past fifty years, The Chronicles of Narnia have transcended the fantasy genre to become part of the canon of classic literature. Each of the seven books is a masterpiece, drawing the reader into a land where magic meets reality, and the result is a fictional world whose scope has fascinated generations.",
      para3: "This edition presents all seven books—unabridged—in one impressive volume. The books are presented here in chronlogical order, each chapter graced with an illustration by the original artist, Pauline Baynes. Deceptively simple and direct, The Chronicles of Narnia continue to captivate fans with adventures, characters, and truths that speak to readers of all ages, even fifty years after they were first published."
    },
    genres: ["Fantasy", "Classics", "Young Adult", "Childrens", "Christian"],
    noOfPages: 767,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg",
    categoryName: "fantasy",
    rating: 3.5,
    isWishlisted: false,
    discountPercent: 45,
  },
  {
    _id: "bbab2936-5dae-430f-b0f3-8f73191bf588",
    title: "A Little Life",
    author: "Hanya Yanagihara",
    price: 650,
    description: {
      para1: "When four classmates from a small Massachusetts college move to New York to make their way, they're broke, adrift, and buoyed only by their friendship and ambition. There is kind, handsome Willem, an aspiring actor; JB, a quick-witted, sometimes cruel Brooklyn-born painter seeking entry to the art world; Malcolm, a frustrated architect at a prominent firm; and withdrawn, brilliant, enigmatic Jude, who serves as their center of gravity.",
      para2: "Over the decades, their relationships deepen and darken, tinged by addiction, success, and pride. Yet their greatest challenge, each comes to realize, is Jude himself, by midlife a terrifyingly talented litigator yet an increasingly broken man, his mind and body scarred by an unspeakable childhood, and haunted by what he fears is a degree of trauma that he’ll not only be unable to overcome—but that will define his life forever."
    },
    genres: ["Fiction", "Contemporary", "LGBT", "Literary Fiction", "Queer"],
    noOfPages: 720,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg",
    categoryName: "contemporary",
    rating: 3.1,
    isWishlisted: false,
    discountPercent: 25,
  },
  {
    _id: "e7e7f22d-438d-444c-8b19-72bbc7e559ee",
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    price: 350,
    description: {
      para1: "Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. Hard.",
      para2: "But there is a terrifying secret inside the gloomy, forbidding Thornfield Hall. Is Rochester hiding from Jane? Will Jane be left heartbroken and exiled once again?"
    },
    genres: ["Classics", "Fiction", "Romance", "Historical Fiction", "Gothic"],
    noOfPages: 532,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg",
    categoryName: "bildungsroman",
    rating: 4.6,
    isWishlisted: false,
    discountPercent: 0,
  },
  {
    _id: "1274a921-08be-4644-8072-88a225e2ccea",
    title: "The Paris Library",
    author: "Janet Skeslien Charles",
    price: 520,
    description: {
      para1: "Paris, 1939: Young and ambitious Odile Souchet has it all: her handsome police officer beau and a dream job at the American Library in Paris. When the Nazis march into Paris, Odile stands to lose everything she holds dear, including her beloved library. Together with her fellow librarians, Odile joins the Resistance with the best weapons she has: books. But when the war finally ends, instead of freedom, Odile tastes the bitter sting of unspeakable betrayal.",
      para2: "Montana, 1983: Lily is a lonely teenager looking for adventure in small-town Montana. Her interest is piqued by her solitary, elderly neighbor. As Lily uncovers more about her neighbor’s mysterious past, she finds that they share a love of language, the same longings, and the same intense jealousy, never suspecting that a dark secret from the past connects them.",
      para3: "A powerful novel that explores the consequences of our choices and the relationships that make us who we are—family, friends, and favorite authors—The Paris Library shows that extraordinary heroism can sometimes be found in the quietest of places."
    },
    genres: ["Historical Fiction", "Fiction", "Historical", "World War II", "France"],
    noOfPages: 368,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1583066862i/52761909.jpg",
    categoryName: "historical-fiction",
    rating: 4.5,
    isWishlisted: false,
    discountPercent: 0,
  },

  {
    _id: "cacbc41f-33ba-4552-aea2-1343ed512f2d",
    title: "Maze Runner",
    author: "James Dashner",
    price: 600,
    description: {
      para1: "When Thomas wakes up in the lift, the only thing he can remember is his name. He’s surrounded by strangers—boys whose memories are also gone.",
      para2: "Outside the towering stone walls that surround the Glade is a limitless, ever-changing maze. It’s the only way out—and no one’s ever made it through alive.",
      para3: "Then a girl arrives. The first girl ever. And the message she delivers is terrifying."
    },
    genres: ["Young Adult", "Dystopia", "Science Fiction", "Fiction", "Fantasy"],
    noOfPages: 384,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1375596592i/6186357.jpg",
    categoryName: "dystopian",
    rating: 5,
    isWishlisted: false,
    discountPercent: 45,
  },

  {
    _id: "00dc1f41-e352-4c62-9244-34b829045b0a",
    title: "Becoming",
    author: "Michelle Obama",
    price: 450,
    description: {
      para1: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare.",
      para2: "In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same."
    },
    genres: ["Nonfiction", "Memoir", "Biography", "Politics", "Autobiography"],
    noOfPages: 426,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
    categoryName: "non-fiction",
    rating: 3.9,
    isWishlisted: false,
    discountPercent: 25,
  },
];
