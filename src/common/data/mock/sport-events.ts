import SportEvent from "@entities/SportEvent";

const MOCK_SPORT_EVENTS: SportEvent[] = [
  {
    id: 1,
    title: "Регіональна ліга - Центр",
    country: "Австрія",
    countryCode: "au",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 2,
    title: "Регіональна ліга - Захід - Тіроль",
    country: "Австрія",
    countryCode: "au",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 3,
    title: "Перший дивізіон",
    country: "Азербайджан",
    countryCode: "az",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 4,
    title: "Чемпіоншип",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 5,
    title: "Перша ліга",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 6,
    title: "Друга ліга",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 7,
    title: "Національна Ліга",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 8,
    title: "ПчПЛ Прем'єр-дивізіон",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 9,
    title: "Південна ліга - Центральний дивізіон",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 10,
    title: "Південна ліга - Південний дивізіон",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 1,
    title: "Регіональна ліга - Центр",
    country: "Австрія",
    countryCode: "au",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 2,
    title: "Регіональна ліга - Захід - Тіроль",
    country: "Австрія",
    countryCode: "au",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 3,
    title: "Перший дивізіон",
    country: "Азербайджан",
    countryCode: "az",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 4,
    title: "Чемпіоншип",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 5,
    title: "Перша ліга",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 6,
    title: "Друга ліга",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 7,
    title: "Національна Ліга",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 8,
    title: "ПчПЛ Прем'єр-дивізіон",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 9,
    title: "Південна ліга - Центральний дивізіон",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
  {
    id: 10,
    title: "Південна ліга - Південний дивізіон",
    country: "Англія",
    countryCode: "gb-eng",
    isFavorite: false,
    matches: [
      {
        id: 11,
        isFavorite: false,
        teams: [
          {
            id: 21,
            name: "Китай U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/jRuxCPme-hdBmtH8p.png",
            isForeignStadium: false,
          },
          {
            id: 22,
            name: "Австралія U17",
            logoUrl:
              "https://www.flashscore.ua/res/image/data/p43T4rWH-AJnTrjri.png",
            isForeignStadium: false,
          },
        ],
        status: "PLANNED",
        isOngoing: false,
        plannedDate: +new Date(),
        isFinalResultOnly: false,
      },
    ],
  },
];

export default MOCK_SPORT_EVENTS;
