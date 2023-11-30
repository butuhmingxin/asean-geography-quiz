const questions = [
    {
      question: "What is the capital of Indonesia?",
      answers: [
        { text: "Jakarta", correct: true },
        { text: "Vienna", correct: false },
        { text: "Brussels", correct: false },
        { text: "Indonesia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Singapore?",
      answers: [
        { text: "Singapore", correct: true },
        { text: "Kuala Lumpur", correct: false },
        { text: "Geylang", correct: false },
        { text: "Canberra", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Malaysia?",
      answers: [
        { text: "Kuala Lumpur, Labuan and Putrajaya", correct: true },
        { text: "Kuala Lumpur, Perlis and Sabah", correct: false },
        { text: "Labuan, Penang, and Selangor", correct: false },
        { text: "Labuan, Sabah, and Sarawak", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Thailand?",
      answers: [
        { text: "Bangkok", correct: true },
        { text: "Hanoi", correct: false },
        { text: "Vientiane", correct: false },
        { text: "Pattaya City", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Philippines?",
      answers: [
        { text: "Manila", correct: true },
        { text: "Davao", correct: false },
        { text: "Cebu", correct: false },
        { text: "Yangon", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Vietnam?",
      answers: [
        { text: "Hanoi", correct: true },
        { text: "Ho Chi Minh City", correct: false },
        { text: "Jakarta", correct: false },
        { text: "Bandar Seri Begawan", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Brunei?",
      answers: [
        { text: "Bandar Seri Begawan", correct: true },
        { text: "Sri Jayawardenepura Kotte", correct: false },
        { text: "Flying Fish Cove", correct: false },
        { text: "Port Moresby", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Myanmar?",
      answers: [
        { text: "Naypyidaw", correct: true },
        { text: "Yangon", correct: false },
        { text: "Naypiedaw", correct: false }, // Incorrect answer repeated intentionally
        { text: "Antananarivo", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Laos?",
      answers: [
        { text: "Vientiane", correct: true },
        { text: "Vienna", correct: false },
        { text: "Valentine", correct: false },
        { text: "Venice", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Cambodia?",
      answers: [
        { text: "Phnom Penh", correct: true },
        { text: "Mekong", correct: false },
        { text: "Zagreb", correct: false },
        { text: "Wellington", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Timor Leste?",
      answers: [
        { text: "Dili", correct: true },
        { text: "Bissau", correct: false },
        { text: "Timor", correct: false },
        { text: "Kupang", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the largest lake in ASEAN?",
      answers: [
        { text: "Tonlé Sap", correct: true },
        { text: "Lake Toba", correct: false },
        { text: "Lake Baikal", correct: false },
        { text: "Uvs Lake", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries that founded ASEAN?",
      answers: [
        { text: "Indonesia, Malaysia, Philippines, Singapore, Thailand", correct: true },
        { text: "Brunei, Malaysia, Myanmar, Thailand, Timor Leste", correct: false },
        { text: "Cambodia, Myanmar, Philippines, Thailand, Vietnam", correct: false },
        { text: "Indonesia, Malaysia, Singapore, Thailand, Vietnam", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the largest island in ASEAN territory?",
      answers: [
        { text: "Borneo", correct: true },
        { text: "Hōnshu", correct: false },
        { text: "New Guinea", correct: false },
        { text: "Sumatra", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the largest cities in ASEAN territory?",
      answers: [
        { text: "Jakarta", correct: true },
        { text: "Medan", correct: false },
        { text: "Singapore", correct: false },
        { text: "Ho Chi Minh City", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "There is a strait between Indonesia and Malaysia, what is it?",
      answers: [
        { text: "Strait of Malacca", correct: true },
        { text: "Strait of Aceh", correct: false },
        { text: "Singapore Strait", correct: false },
        { text: "Makassar Strait", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Which sea is surrounds around ASEAN countries?",
      answers: [
        { text: "South China Sea", correct: true },
        { text: "Southeast Asian Sea", correct: false },
        { text: "East Sea", correct: false },
        { text: "Sea of Asean", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "EXCEPT capital cities, which city on below is more populous?",
      answers: [
        { text: "Ho Chi Minh City", correct: true },
        { text: "Surabaya", correct: false },
        { text: "Pattaya City", correct: false },
        { text: "Jakarta", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the name of the main island in Singapore?",
      answers: [
        { text: "Ujong Island", correct: true },
        { text: "Ubin Island", correct: false },
        { text: "Jurong Island", correct: false },
        { text: "Sentosa Island", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Where is the Gulf of Thailand located?",
      answers: [
        { text: "9.7121° N, 101.3431° E", correct: true },
        { text: "19.7500° N, 107.7500° E", correct: false },
        { text: "25.3043° N, 90.0659° W", correct: false },
        { text: "57.3910° N, 23.7936° E", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Flags of Thailand contains 3 colors as the same as flag of ...",
      answers: [
        { text: "Slovakia", correct: true },
        { text: "Costa Rica", correct: false },
        { text: "Croatia", correct: false },
        { text: "Slovenia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "There's one country in ASEAN that don't have access to the sea, what country is that?",
      answers: [
        { text: "Laos", correct: true },
        { text: "Brunei", correct: false },
        { text: "Myanmar", correct: false },
        { text: "Czechia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "How big is southeast asia?",
      answers: [
        { text: "Around 4.5M KM²", correct: true },
        { text: "Around 4.5M MI²", correct: false },
        { text: "Around 5.4M KM²", correct: false },
        { text: "Around 4.8M KM²", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "ASEAN is land-borders so many countries, among others are...",
      answers: [
        { text: "India, Papua New Guinea, and China", correct: true },
        { text: "India, Timor Leste and China", correct: false },
        { text: "China, Papua New Guinea and Timor Leste", correct: false },
        { text: "China, Hong Kong and Macau", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of ASEAN?",
      answers: [
        { text: "Jakarta", correct: true },
        { text: "Ho Chi Minh City", correct: false },
        { text: "Bangkok", correct: false },
        { text: "Kuala Lumpur", correct: false },
      ],
      isAnswered: false,
    }, // 25
    {
      question: "What is the most popular island in ASEAN for tourist?",
      answers: [
        { text: "Bali", correct: true },
        { text: "Palawan", correct: false },
        { text: "Borneo", correct: false },
        { text: "Penang", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What country does the flag of Bandung look like?",
      answers: [
        { text: "Gabon", correct: true },
        { text: "Seychelles", correct: false },
        { text: "Marshall Islands", correct: false },
        { text: "Saint Vincent and the Grenadines", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "There is a sea in southern Vietnam, what is the name of that sea?",
      answers: [
        { text: "East Sea", correct: true },
        { text: "South China Sea", correct: false },
        { text: "Philippine Sea", correct: false },
        { text: "Sulu Sea", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "There's a \"silver\" state in ASEAN, what is it?",
      answers: [
        { text: "Perak", correct: true },
        { text: "Sarawak", correct: false },
        { text: "Negeri Sembilan", correct: false },
        { text: "Kelantan", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Which flags in ASEAN only use monochrome colours?",
      answers: [
        { text: "Pahang and Terengganu", correct: true },
        { text: "Kelantan and Malacca", correct: false },
        { text: "Malacca and Sarawak", correct: false },
        { text: "Sabah and Sarawak", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Penang have the same capital as Guyana. But, which one is correct?",
      answers: [
        { text: "George Town", correct: true },
        { text: "Georgetown", correct: false },
        { text: "Saint George's", correct: false },
        { text: "South Georgia and South Sandwich Islands", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the second largest island in ASEAN territory?",
      answers: [
        { text: "Sumatra", correct: true },
        { text: "Borneo", correct: false },
        { text: "Java", correct: false },
        { text: "New Guinea", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the name of the archipelago in Maluku?",
      answers: [
        { text: "Moluccas", correct: true },
        { text: "Molluccas", correct: false },
        { text: "Mollucas", correct: false },
        { text: "Molucas", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the name of the peninsula in Narathiwat?",
      answers: [
        { text: "Malay Peninsula", correct: true },
        { text: "Thai Peninsula", correct: false },
        { text: "Narathiwat Peninsula", correct: false },
        { text: "Elephant Peninsula", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Angkor Wat located on which city?",
      answers: [
        { text: "Krong Siem Reap", correct: true },
        { text: "Phnom Penh", correct: false },
        { text: "Krong Battambang", correct: false },
        { text: "Cambodia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "The largest buddhist temple in Southeast Asia located in which cities?",
      answers: [
        { text: "Magelang", correct: true },
        { text: "Central Java", correct: false },
        { text: "Krong Siem Reap", correct: false },
        { text: "Kuching", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the name of the river near Merlion statue",
      answers: [
        { text: "Singapore River", correct: true },
        { text: "Johor River", correct: false },
        { text: "Geylang River", correct: false },
        { text: "Chinatown River", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Strait that split Malaysia and Singapore",
      answers: [
        { text: "Straits of Johor", correct: true },
        { text: "Singapore Strait", correct: false },
        { text: "Makassar Strait", correct: false },
        { text: "Malacca Strait", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "How many provinces or districts in ASEAN?",
      answers: [
        { text: "344", correct: true },
        { text: "321", correct: false },
        { text: "360", correct: false },
        { text: "352", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "ASEAN district that border Southeast Asian country in the ASEAN member country of Oceania are...",
      answers: [
        { text: "Oecussi", correct: true },
        { text: "Papua", correct: false },
        { text: "Phuket", correct: false },
        { text: "North Kalimantan", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "ASEAN borders Chinese Provinces. But, which one is correct?",
      answers: [
        { text: "Guangxi, Xizang and Yunnan", correct: true },
        { text: "Guangxi and Yunnan", correct: false },
        { text: "Guangdong, Guangxi and Hainan", correct: false },
        { text: "Guizhou, Sichuan and Yunnan", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "How many major peninsula(s) in ASEAN territory?",
      answers: [
        { text: "2", correct: true },
        { text: "1", correct: false },
        { text: "4", correct: false },
        { text: "3", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "ASEAN has major peninsulas. Is it only Indochina?",
      answers: [
        { text: "Nope, Malay Peninsula also included.", correct: true },
        { text: "Yep.", correct: false },
        { text: "Nope, it's only Malay Peninsula.", correct: false },
        { text: "Nope, there's another three major peninsulas.", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "One of contested islands west of the Philippines and east of Vietnam is ...",
      answers: [
        { text: "Spratly Islands", correct: true },
        { text: "Loyalty Islands", correct: false },
        { text: "Caroline Islands", correct: false },
        { text: "Riau Islands", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Country that borders philippines in the east by the philippine sea is ...",
      answers: [
        { text: "Palau", correct: true },
        { text: "China", correct: false },
        { text: "Guam", correct: false },
        { text: "Indonesia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "The northest state in Malaysia is ...",
      answers: [
        { text: "Perlis", correct: true },
        { text: "Kedah", correct: false },
        { text: "Kelantan", correct: false },
        { text: "Satun", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the largest city in Sumatra Island?",
      answers: [
        { text: "Medan", correct: true },
        { text: "Malang", correct: false },
        { text: "Mindanao", correct: false },
        { text: "Mandalay", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Borneo Island?",
      answers: [
        { text: "Bandar Seri Begawan", correct: true },
        { text: "Samarinda", correct: false },
        { text: "Kuching", correct: false },
        { text: "Balikpapan", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "There is gulfs in Sulawesi Island, what is the name of 'em?",
      answers: [
        { text: "Gulf of Boni and Gulf of Tomini", correct: true },
        { text: "Gulf of Martaban and Gulf of Sulawesi", correct: false },
        { text: "Gulf of Sulawesi and Gulf of Tomini", correct: false },
        { text: "Gulf of Boni and Gulf of Sulawesi", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Indonesian Seas",
      answers: [
        { text: "Banda Sea, Flores Sea, Halmahera Sea, Java Sea and Savu Sea", correct: true },
        { text: "Arafura Sea, Flores Sea, Java Sea, Sea of Indonesia and Timor Sea", correct: false },
        { text: "Banda Sea, Bismarck Sea, Flores Sea, Java Sea and Savu Sea ", correct: false },
        { text: "Andaman Sea, Arafura Sea, Banda Sea, Java Sea, and Savu Sea", correct: false },
      ],
      isAnswered: false,
    }, // 50
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174622928147587092/Flag_of_Brunei.png?ex=656843d9&is=6555ced9&hm=e2b3cecbdccb7be1fa3c0d4f96e3165f0a719da8987ffc9c3fdccae029d08df6&=&width=1200&height=600",
      answers: [
        { text: "Brunei", correct: true },
        { text: "Vietnam", correct: false },
        { text: "Cambodia", correct: false },
        { text: "Indonesia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174622950742306816/Flag_of_Cambodia.png?ex=656843de&is=6555cede&hm=7f490330d8ce45c8b2bce99d1b5a1fc15c68b7194da634deaccfd3cd2431b3bd&=&width=937&height=600",
      answers: [
        { text: "Cambodia", correct: true },
        { text: "Belize", correct: false },
        { text: "Laos", correct: false },
        { text: "North Korea", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174622963610431548/Flag_of_East_Timor.png?ex=656843e1&is=6555cee1&hm=4aee28d80017727d2eb62df8fa912a2ace897d7c12ecb0d34f1df59a85a1e834&=&width=1200&height=600",
      answers: [
        { text: "Timor Leste", correct: true },
        { text: "Guyana", correct: false },
        { text: "Indonesia", correct: false },
        { text: "Vietnam", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174622980509278218/Flag_of_Indonesia.png?ex=656843e5&is=6555cee5&hm=d365c7ec209b010348d4d1d149f662086f88d3057acade846bbeb798e44aa69c&=&width=900&height=600",
      answers: [
        { text: "Indonesia", correct: true },
        { text: "Monaco", correct: false },
        { text: "Poland", correct: false },
        { text: "Singapore", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174622994765717555/Flag_of_Laos.png?ex=656843e9&is=6555cee9&hm=798496efa5fc2ecdba6712accbcf9482da7d2db278890d852025a7506b2090eb&=&width=900&height=600",
      answers: [
        { text: "Laos", correct: true },
        { text: "Cambodia", correct: false },
        { text: "Philippines", correct: false },
        { text: "Belize", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174623014684479590/Flag_of_Malaysia.png?ex=656843ee&is=6555ceee&hm=37834c57efdac41a8a38a0c4f6b8e08f8591d3d6f32f753dfff9d39c73081f50&=&width=1200&height=600",
      answers: [
        { text: "Malaysia", correct: true },
        { text: "Singapore", correct: false },
        { text: "Liberia", correct: false },
        { text: "United States of America", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174623030178234519/Flag_of_Myanmar.png?ex=656843f1&is=6555cef1&hm=a4d2896c4d321ac87456c3542eb201e3bd8a65d300257c8b5c8f6e4c021b1243&=&width=900&height=600",
      answers: [
        { text: "Myanmar", correct: true },
        { text: "Lithuania", correct: false },
        { text: "Ghana", correct: false },
        { text: "Ethiopia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174623043885219911/Flag_of_Singapore.png?ex=656843f5&is=6555cef5&hm=58bd590b3e9ad86e35e7de797089f38cb057c219b69d4820c617c766c815ce2e&=&width=900&height=600",
      answers: [
        { text: "Singapore", correct: true },
        { text: "Indonesia", correct: false },
        { text: "Greenland", correct: false }, // Incorrect answer repeated intentionally
        { text: "Brandenburg", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174623059588689930/Flag_of_Thailand.png?ex=656843f8&is=6555cef8&hm=8f66595f5a87fe47626e2448df90ee33916514d2cee98c1984a94da8e8002892&=&width=900&height=600",
      answers: [
        { text: "Thailand", correct: true },
        { text: "Costa Rica", correct: false },
        { text: "North Korea", correct: false },
        { text: "Netherlands", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174623072125468736/Flag_of_the_Philippines.png?ex=656843fb&is=6555cefb&hm=c4882bfc87cc91b597b414def229ce6dde611943f95bd1c7c60cd13a8234cf73&=&width=900&height=600",
      answers: [
        { text: "Philippines", correct: true },
        { text: "Czech Republic", correct: false },
        { text: "Sint Maarten", correct: false },
        { text: "Djibouti", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174623092098727976/Flag_of_Vietnam.png?ex=65684400&is=6555cf00&hm=e6a1309d27c177020a59a2d828cc92be9c8159e467b1755360f8e4ffa631bd04&=&width=900&height=600",
      answers: [
        { text: "Vietnam", correct: true },
        { text: "China", correct: false },
        { text: "Somalia", correct: false },
        { text: "Turkey", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174913226480291921/Flag_of_Sulawesi.png?ex=65695236&is=6556dd36&hm=99db0997930f20099060847832b9792070979cb998344f69f1e76fc2ed4cfd21&=&width=1200&height=600",
      answers: [
        { text: "Sulawesi", correct: true },
        { text: "Hōkkaido", correct: false },
        { text: "Majapahit Empire", correct: false },
        { text: "Bruneian Sultanate", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174913873057435678/Morning_Star_flag.png?ex=656952d0&is=6556ddd0&hm=021785b9d26bf92f859d8ccb2f41f624485d7e559c1404187d4338f1c817acff&=&width=900&height=600",
      answers: [
        { text: "West Papua", correct: true },
        { text: "West Java", correct: false },
        { text: "West Kalimantan", correct: false },
        { text: "West Nusa Tenggara", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1174915013341888583/Flag_of_Riau_Independists.png?ex=656953e0&is=6556dee0&hm=831368b2aa4081df1c1eee37f41808a0c7d5f7d99a8004251dbc17e0fe2c0932&=&width=1200&height=600",
      answers: [
        { text: "Riau", correct: true },
        { text: "West Papua", correct: false },
        { text: "Aceh", correct: false },
        { text: "Jakarta", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175412369036423198/Flag_of_Johor.png?ex=656b2312&is=6558ae12&hm=56165352ab358d694dee1513bfe6bbea740a8f7d22b15dfac0399dca3f33c858&=&width=1200&height=600",
      answers: [
        { text: "Johor", correct: true },
        { text: "Perlis", correct: false },
        { text: "Kelantan", correct: false },
        { text: "Malacca", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175412381803876372/Flag_of_Pahang.png?ex=656b2315&is=6558ae15&hm=3bc02829b99e1d4e4ecb6f6b73fa0dce898fd3146d1f19ce56682f450fb7295a&=&width=1200&height=600",
      answers: [
        { text: "Pahang", correct: true },
        { text: "Terengganu", correct: false },
        { text: "Perlis", correct: false },
        { text: "Penang", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175412397100515360/Flag_of_Sabah.png?ex=656b2319&is=6558ae19&hm=c9932f2369792077a0bd85d9fd6300e8b41049afdc6c84a077d58d57c226df2d&=&width=1200&height=600",
      answers: [
        { text: "Sabah", correct: true },
        { text: "Sarawak", correct: false },
        { text: "Kota Kinabalu", correct: false },
        { text: "Selangor", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175414349104435281/Flag_of_Kuala_Lumpur_Malaysia.png?ex=656b24ea&is=6558afea&hm=116be7ee2d29436a543273373b7c25b8bc580e818af928a923719271cf5655f6&=&width=1200&height=600",
      answers: [
        { text: "Kuala Lumpur", correct: true },
        { text: "Kuala Terengganu", correct: false },
        { text: "Labuan", correct: false },
        { text: "Putrajaya", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175414369090277427/Flag_of_Redang_Island.png?ex=656b24ef&is=6558afef&hm=54053d645461376a635f234701823e4eb2988cfa24a8baadff1014150e51ac28&=&width=1200&height=600",
      answers: [
        { text: "Redang Island", correct: true },
        { text: "Ubin Island", correct: false },
        { text: "Johor Island", correct: false },
        { text: "Penang Island", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175416614993277070/Flag_of_Kuala_Krai_Kelantan.png?ex=656b2707&is=6558b207&hm=9db4ebab4ffd6215dc13d8c78f31074d8493dad4571e1c4fd5ccf400f709f254&=&width=1200&height=600",
      answers: [
        { text: "Kuala Krai", correct: true },
        { text: "Machang", correct: false },
        { text: "Kota Bharu", correct: false },
        { text: "Pasir Puteh", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175416630071787540/Flag_of_Kuala_Nerus_Terengganu.png?ex=656b270a&is=6558b20a&hm=8564b1352dce16c7a38f6aaae154b71521d5d87a70dc42756a0d89ff511b3887&=&width=1146&height=600",
      answers: [
        { text: "Kuala Nerus", correct: true },
        { text: "Kuala Terengganu", correct: false },
        { text: "Hulu Terengganu", correct: false },
        { text: "Besut", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175416644407935007/Flag_of_Kuala_Terengganu_Terengganu.png?ex=656b270e&is=6558b20e&hm=7286a6ec0e23da369280599b3543cfe8033bc4c2d3deb8e485712c958d9a7dbc&=&width=1146&height=600",
      answers: [
        { text: "Kuala Terengganu", correct: true },
        { text: "Kuala Nerus", correct: false },
        { text: "Hulu Terengganu", correct: false },
        { text: "Besut", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175416661042532492/Flag_of_Pontian_Johor.png?ex=656b2712&is=6558b212&hm=34d69c775fc997b16cb52e604a56f9c6da6e52667104e7aeeebb4fa225cb1bc5&=&width=1200&height=600",
      answers: [
        { text: "Pontian", correct: true },
        { text: "Kota Tinggi", correct: false },
        { text: "Johor Bahru", correct: false },
        { text: "Kulai", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1175416678692159530/Flag_of_Tanah_Merah_Kelantan.png?ex=656b2716&is=6558b216&hm=207a1d9e6b26a6237e7d7639c311f57dadcdf6e4a81204c4e2dcefae9cbb6634&=&width=1200&height=600",
      answers: [
        { text: "Tanah Merah", correct: true },
        { text: "Jeli", correct: false },
        { text: "Kota Bharu", correct: false },
        { text: "Bachok", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1176336583499198556/Flag_of_Manila.png?ex=656e7fd0&is=655c0ad0&hm=b3b3cf5bc1daf69a956bdbf1df4b8a11c7c9a265d65aaff8d636bac281c67af5&=&width=1200&height=600",
      answers: [
        { text: "Manila", correct: true },
        { text: "Maynila", correct: false },
        { text: "Miami", correct: false },
        { text: "Portsmouth", correct: false },
      ],
      isAnswered: false,
    }, // 75
    {
      question: "Which region is this?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416001361985637/MapChart_Map_1.png?ex=656ec9c7&is=655c54c7&hm=8aff4eceeea106854566d0545a07e173d0f10d8a811abdd3e976b601ca4dff0d&=&width=755&height=600",
      answers: [
        { text: "Southeast Asia", correct: true },
        { text: "South Asia", correct: false },
        { text: "East Asia", correct: false },
        { text: "Southwest Asia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416002267947018/MapChart_Map_2.png?ex=656ec9c7&is=655c54c7&hm=52571d53dce3f5c9b1f01f3da709573f77ca1813231a9a01f2ff8aae1b3bb7a6&=&width=755&height=600",
      answers: [
        { text: "Myanmar", correct: true },
        { text: "Thailand", correct: false },
        { text: "Laos", correct: false },
        { text: "Vietnam", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416003291361340/MapChart_Map_3.png?ex=656ec9c7&is=655c54c7&hm=3ea0334be79a970e9e62bc98be72cc9a92c297a49f7f5cf2e18de088f9f53084&=&width=755&height=600",
      answers: [
        { text: "Vietnam", correct: true },
        { text: "Laos", correct: false },
        { text: "Myanmar", correct: false },
        { text: "Thailand", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416004637737010/MapChart_Map_4.png?ex=656ec9c8&is=655c54c8&hm=8be49244cbbdc8672ba47dc8a1f8e6bf2b772b2745e52d2eb114d34c9290805b&=&width=755&height=600",
      answers: [
        { text: "Laos", correct: true },
        { text: "Myanmar", correct: false },
        { text: "Thailand", correct: false },
        { text: "Vietnam", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416005560479815/MapChart_Map_5.png?ex=656ec9c8&is=655c54c8&hm=58d497b47a77a0e575685834fef077241c4c2c489479830daed29d4b97eff2de&=&width=755&height=600",
      answers: [
        { text: "Thailand", correct: true },
        { text: "Laos", correct: false },
        { text: "Vietnam", correct: false },
        { text: "Myanmar", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416006772629525/MapChart_Map_6.png?ex=656ec9c8&is=655c54c8&hm=8b4bd5a83bb01c5e1860cfceba4d0e84d4d7abaa4702bbe187dd792f6a154880&=&width=755&height=600",
      answers: [
        { text: "Cambodia", correct: true },
        { text: "Singapore", correct: false },
        { text: "Brunei", correct: false },
        { text: "Timor Leste", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416007519219762/MapChart_Map_7.png?ex=656ec9c8&is=655c54c8&hm=9abec702a6b998887986d8243fe16c6e0c5ff6c04e09a3ddb101494ae508b948&=&width=755&height=600",
      answers: [
        { text: "Malaysia", correct: true },
        { text: "Philippines", correct: false },
        { text: "Indonesia", correct: false },
        { text: "Maldives", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416008697823252/MapChart_Map_8.png?ex=656ec9c9&is=655c54c9&hm=2db887139b384f9c97618d1c1afd0d14d274d7dc30991c168531d98c97e256e1&=&width=755&height=600",
      answers: [
        { text: "Philippines", correct: true },
        { text: "Indonesia", correct: false },
        { text: "Maldives", correct: false },
        { text: "Malaysia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416009968689224/MapChart_Map_9.png?ex=656ec9c9&is=655c54c9&hm=fc99b0031955ac4bb4ef78bd0be9de09bbddb547af95ee417d34aeb70e5b350a&=&width=755&height=600",
      answers: [
        { text: "Brunei", correct: true },
        { text: "Singapore", correct: false },
        { text: "Timor Leste", correct: false },
        { text: "Cambodia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416011159875596/MapChart_Map_10.png?ex=656ec9c9&is=655c54c9&hm=731f46d9a75f4291bbe652dede385d288da7a990357cead83cd4ec1b92478eb9&=&width=755&height=600",
      answers: [
        { text: "Singapore", correct: true },
        { text: "Brunei", correct: false },
        { text: "Cambodia", correct: false },
        { text: "Thailand", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416015303856218/MapChart_Map_11.png?ex=656ec9ca&is=655c54ca&hm=a4976e910c2ee7437b161b8abbbba2d9e13aeaa2b62d74def0db9854351a8a47&=&width=755&height=600",
      answers: [
        { text: "Indonesia", correct: true },
        { text: "Malaysia", correct: false },
        { text: "Philippines", correct: false },
        { text: "Timor Leste", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What countries are colored red?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176416016402759761/MapChart_Map_12.png?ex=656ec9cb&is=655c54cb&hm=e5e2d785b5b2888e67621b5209706625c9966b8eca7132515c1960f398e41470&=&width=755&height=600",
      answers: [
        { text: "Timor Leste", correct: true },
        { text: "Indonesia", correct: false },
        { text: "Singapore", correct: false },
        { text: "Brunei", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Which map is this?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176760812313006140/20231122_102542.png?ex=65700ae8&is=655d95e8&hm=c35828ceeff45aa88ae1a541f0625d8a47928455ef215bc8d2d9441ee086d28a&=&format=webp&width=600&height=600",
      answers: [
        { text: "Singapore", correct: true },
        { text: "Ukraine", correct: false },
        { text: "Kazakhstan", correct: false },
        { text: "Hong Kong", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Which map is this?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176760811935510618/20231122_102447.png?ex=65700ae8&is=655d95e8&hm=d0642157c86429fc2542e3db9800a16b2ddd6d16b9d68ce1e53c9b1224b02255&=&format=webp&width=600&height=600",
      answers: [
        { text: "Brunei", correct: true },
        { text: "Malaysia", correct: false },
        { text: "Azerbaijan", correct: false },
        { text: "Timor Leste", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Which map is this?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176760811599970374/20231122_102349.png?ex=65700ae8&is=655d95e8&hm=1135f74398909bf3d9860f5eae38e0c439cc1ae5446ff95a117b71baca1594e6&=&format=webp&width=600&height=600",
      answers: [
        { text: "Bali", correct: true },
        { text: "Krakatoa", correct: false },
        { text: "Phuket", correct: false },
        { text: "Singapore", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the name of this strait?",
      image: "https://media.discordapp.net/attachments/1176369559930941532/1176711136222138408/Untitled423_20231122091959.png?ex=656fdca5&is=655d67a5&hm=d3784db1d551e8a1025b3895e6197bdead1c5a9076425431349bae4854cf059c&=&format=webp&width=600&height=600",
      answers: [
        { text: "Strait of Malacca", correct: true },
        { text: "Straits of Johor", correct: false },
        { text: "Strait of Makassar", correct: false },
        { text: "Guizhou, Sichuan and Yunnan", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "How many major peninsula(s) in ASEAN territory?",
      answers: [
        { text: "2", correct: true },
        { text: "1", correct: false },
        { text: "4", correct: false },
        { text: "3", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "ASEAN has major peninsulas. Is it only Indochina?",
      answers: [
        { text: "Nope, Malay Peninsula also included.", correct: true },
        { text: "Yep.", correct: false },
        { text: "Nope, it's only Malay Peninsula.", correct: false },
        { text: "Nope, there's another three major peninsulas.", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "One of contested islands west of the Philippines and east of Vietnam is ...",
      answers: [
        { text: "Spratly Islands", correct: true },
        { text: "Loyalty Islands", correct: false },
        { text: "Caroline Islands", correct: false },
        { text: "Riau Islands", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "Country that borders philippines in the east by the philippine sea is ...",
      answers: [
        { text: "Palau", correct: true },
        { text: "China", correct: false },
        { text: "Guam", correct: false },
        { text: "Indonesia", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "The northest state in Malaysia is ...",
      answers: [
        { text: "Perlis", correct: true },
        { text: "Kedah", correct: false },
        { text: "Kelantan", correct: false },
        { text: "Satun", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the largest city in Sumatra Island?",
      answers: [
        { text: "Medan", correct: true },
        { text: "Malang", correct: false },
        { text: "Mindanao", correct: false },
        { text: "Mandalay", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What is the capital of Borneo Island?",
      answers: [
        { text: "Bandar Seri Begawan", correct: true },
        { text: "Samarinda", correct: false },
        { text: "Kuching", correct: false },
        { text: "Balikpapan", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1176336608585338900/Flag_of_Bangsamoro.png?ex=656e7fd6&is=655c0ad6&hm=cdb5b68821d43d3777fefdc61009891acf3fd0911ad90b92a6be49d6bbd1e00f&=&format=webp&width=1098&height=600",
      answers: [
        { text: "Bangsamoro", correct: true },
        { text: "Iran", correct: false },
        { text: "Somaliland", correct: false },
        { text: "Equatorial Guinea", correct: false },
      ],
      isAnswered: false,
    },
    {
      question: "What flag is this?",
      image: "https://media.discordapp.net/attachments/1174621053251768330/1176719608120606720/Flag_of_ASEAN.png?ex=656fe488&is=655d6f88&hm=04c5cb2272f98ec9cea416169049d4e0203663c03297ebd7c6e32d186baafa81&=&format=webp&width=900&height=600",
      answers: [
        { text: "ASEAN", correct: true },
        { text: "United Nations", correct: false },
        { text: "European Union", correct: false },
        { text: "ASIAN", correct: false },
      ],
      isAnswered: false,
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let questionsAskedInSession = 0;
  
  const initializeGame = () => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
      randomizeAnswers(questions[i]);
    }
  };
  
  const randomizeAnswers = (question) => {
    for (let i = question.answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
    }
  };
  
  const displayMessage = (message, isCorrect) => {
    const messageElement = document.getElementById("message");
  
    if (messageElement) {
      messageElement.innerText = message;
      messageElement.className = isCorrect ? "correct" : "incorrect";
      messageElement.style.display = "block";
  
      setTimeout(() => {
        messageElement.style.display = "none";
      }, 2500);
    } else {
      console.error('Message element not found.');
    }
  };  
  
  const selectAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].answers.find(answer => answer.correct);
  
    if (correctAnswer) {
      const isCorrect = selectedAnswer === correctAnswer.text;
  
      if (isCorrect) {
        score++;
        displayMessage('Correct!', true);
      } else {
        displayMessage('Incorrect.', false);
      }
    } else {
      console.error('Correct answer not found for the current question.');
    }
  
    currentQuestionIndex++;
    questionsAskedInSession++;
  
    if (questionsAskedInSession === 25) {
      setTimeout(() => {
        displayMessage(`You have scored ${score} out of 25 questions.`, true);
        resetGame();
      }, 2500);
    } else {
      updateScore();
      displayQuestion();
    }
  };  
  
  const updateScore = () => {
    const scoreElement = document.getElementById('score-value');
    if (scoreElement) {
      scoreElement.innerText = score;
    } else {
      console.error('Score element not found.');
    }
  };  
  
  const displayQuestion = () => {
    const question = questions[currentQuestionIndex];
    const questionsContainer = document.getElementById("questions");
    const questionNumberElement = document.getElementById("question-number");
  
    if (questionNumberElement) {
      questionNumberElement.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length / 4}`;
    }
  
    questionsContainer.innerHTML = "";
  
    const questionText = document.createElement("p");
    questionText.textContent = question.question;
    questionsContainer.appendChild(questionText);
  
    if (question.image) {
      const imageElement = document.createElement("img");
      imageElement.src = question.image;
      imageElement.alt = "Rip Internet :(";
      imageElement.style.maxWidth = "75%";
      imageElement.style.height = "auto";
      imageElement.style.display = "block";
      imageElement.style.margin = "0 auto";
      questionsContainer.appendChild(imageElement);
    }
  
    const answerList = document.createElement("ul");
    questionsContainer.appendChild(answerList);
  
    for (const answer of question.answers) {
      const answerChoice = document.createElement("button");
      answerChoice.textContent = answer.text;
      answerChoice.className = "answer-choice";
      answerChoice.addEventListener("click", () => selectAnswer(answer.text));
  
      answerList.appendChild(answerChoice);
    }
  };
  
  const resetGame = () => {
    currentQuestionIndex = 0;
    score = 0;
    questionsAskedInSession = 0;
    initializeGame();
    updateScore();
    displayQuestion();
  };
  
  window.onload = () => {
    initializeGame();
    displayQuestion();
    updateScore();
  };  