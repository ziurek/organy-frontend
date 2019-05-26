
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.newRealisations', [])
  .constant('newRealisations', [
    {
      place: 'Wolin p.w. św. Mikołaja Bp',
      smallerTitle: 'Seifert 1960',
      year: 2016,
      tracker: 'elektryczna (Setzer)',
      size: '40 (Seifert 32/III+P)',
      manual: 'IV+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/wolin_2016/prospekt.jpg',
          img: '/images/realisations/wolin_2016/prospekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/wolin_2016/kontuar.jpg',
          img: '/images/realisations/wolin_2016/kontuar.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Gdańsk, Polska Filharmonia Bałtycka',
      year: 2015,
      tracker: 'mechaniczna',
      size: '3 (bas/disk.)',
      manual: 'pozytyw',
      images: [
        {
          thumb: '/images/realisations/thumbs/gdansk_2015/kontuar1.jpg',
          img: '/images/realisations/gdansk_2015/kontuar1.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/gdansk_2015/kontuar2.jpg',
          img: '/images/realisations/gdansk_2015/kontuar2.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Olsztyn, Filharmonia Warmińsko- Mazurska',
      year: 2015,
      tracker: 'mechaniczna',
      size: '3 (bas/disk.)',
      manual: 'pozytyw',
      images: [
        {
          thumb: '/images/realisations/thumbs/olsztyn_2015/prospekt.jpg',
          img: '/images/realisations/olsztyn_2015/prospekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/olsztyn_2015/kontuar.jpg',
          img: '/images/realisations/olsztyn_2015/kontuar.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Chojnice, kościół Zwiastowania NMP',
      description:  'Projekt dyspozycji: prof. Julian Gembalski\n' +
                    'Projekt techniczny, rysunki: Zdzisław Mollin\n' +
                    'Intonacja: Jerzy Kukla, Jan Mazurek\n' +
                    'Umowa z dnia 27 maj 2013 r.\n' +
                    'Poświęcenie: 7 czerwiec 2014 r. J.E.ks.bp dr hab. Wiesław Śmigiel\n' +
                    'Koncert inauguracyjny: 7 czerwiec 2014 r. prof. Julian Gembalski\n',
      year: 2013,
      tracker: 'mechaniczna',
      size: '18',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/chojnice_2013/chojnice_prospekt.jpg',
          img: '/images/realisations/chojnice_2013/chojnice_prospekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/chojnice_2013/chojnice_kontuar.jpg',
          img: '/images/realisations/chojnice_2013/chojnice_kontuar.jpg'
        }
      ],
      voices: [
        {
          title: 'Manuał I',
          subtitle: 'HAUPTWERK C-g’’’=56',
          voices: [
            {
              name: "Pryncypał",
              size: "8'"
            },
            {
              name: "Flet otwarty",
              size: "8'"
            },
            {
              name: "Oktawa",
              size: "4'"
            },
            {
              name: 'Rurflet',
              size: "4'"
            },
            {
              name: 'Sesquialtera',
              size: "2ch"
            },
            {
              name: 'Oktawa',
              size: "2'"
            },
            {
              name: 'Mixtura',
              size: "3-4ch"
            },
            {
              name: 'Trąbka',
              size: "8’"
            }
          ]
        },
        {
          title: 'Manuał II',
          subtitle: "OBERWERK C-g’’’=56",
          voices: [
            {
              name: "Flet kryty",
              size: "8'"
            },
            {
              name: "Salicionał",
              size: "8'"
            },
            {
              name: "Pryncypał",
              size: "4'"
            },
            {
              name: 'Flauto minor',
              size: "4'"
            },
            {
              name: 'Blokflet',
              size: "2'"
            },
            {
              name: 'Krumhorn',
              size: "8'"
            }
          ]
        },
        {
          title: "Pedał",
          subtitle: "C-f’=30",
          voices: [
            {
              name: "Subbas",
              size: "16'"
            },
            {
              name: "Pryncypałbas",
              size: "8'"
            },
            {
              name: "Fletbas",
              size: "8'"
            },
            {
              name: "Fagot",
              size: "16'"
            }
          ]
        }
      ],
      hasDetails: true
    },
    {
      place: 'Częstochowa - Jasna Góra, bazylika',
      smallerTitle: 'Organy Wielkie',
      year: 2012,
      tracker: 'elektryczna - modernizacja, przebudowa',
      size: '105',
      manual: 'IV+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/czestochowa_org_wielkie/prospekt.jpg',
          img: '/images/realisations/czestochowa_org_wielkie/prospekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/czestochowa_org_wielkie/kontuar.jpg',
          img: '/images/realisations/czestochowa_org_wielkie/kontuar.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Białystok, Opera i Filharmonia Podlaska',
      year: 2012,
      tracker: 'mechaniczna',
      size: '5',
      manual: 'pozytyw',
      hasDetails: false
    },
    {
      place: 'Częstochowa-Jasna Góra, bazylika',
      smallerTitle: 'Prezbiterium',
      year: 2011,
      tracker: 'mechaniczna / elektryczna',
      size: '15',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/czestochowa_prezbiterium_2011/prospekt.jpg',
          img: '/images/realisations/czestochowa_prezbiterium_2011/prospekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/czestochowa_prezbiterium_2011/kontuar.jpg',
          img: '/images/realisations/czestochowa_prezbiterium_2011/kontuar.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Kraków, Akademia Muzyczna',
      year: 2011,
      tracker: 'mechaniczna',
      size: '2',
      manual: 'pozytyw',
      images: [
        {
          thumb: '/images/realisations/thumbs/krakow_am_2011/kontuar1.jpg',
          img: '/images/realisations/krakow_am_2011/kontuar1.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/krakow_am_2011/kontuar2.jpg',
          img: '/images/realisations/krakow_am_2011/kontuar2.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Wadowice, Bazylika Papieska',
      description:  'Organy 27 / II+P,  traktura gry mechaniczna, traktura registratury elektryczna\n' +
      'Setzer MP98 (Heuss) – 4000 kombinacji, Crescendo, Tutti, Wył. gł. Języczkowych, Sequenzer\n\n' +
      'Projekt prospektu: Zdzisław Mollin\n' +
      'Projekt snycerki: Marian Dorawa\n' +
      'Snycerka i złocenia: Krzysztof Łangowski\n' +
      'Projekt dyspozycji: Zdzisław Mollin\n' +
      'Intonacja: Jerzy Kukla\n' +
      'Umowa z dnia 07 grudnia 2008 r.\n' +
      'Ks. proboszcz Infułat Jakub Gil\n' +
      'Poświęcenie: 13 październik 2010 r. ks. Bp Jan Szkodoń',
      year: 2010,
      tracker: 'mechaniczna / elektryczna',
      size: '27',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/wadowice_2010/prospekt.jpg',
          img: '/images/realisations/wadowice_2010/prospekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/wadowice_2010/kontuar.jpg',
          img: '/images/realisations/wadowice_2010/kontuar.jpg'
        }
      ],
      voices: [
        {
          title: 'Manuał I (GŁÓWNY)',
          subtitle: 'C-g’’’=56',
          voices: [
            {
              name: "Bourdon",
              size: "16'"
            },
            {
              name: "Pryncypał",
              size: "8'"
            },
            {
              name: "Flet kryty",
              size: "8'"
            },
            {
              name: 'Gamba',
              size: "8'"
            },
            {
              name: 'Oktawa',
              size: "4'"
            },
            {
              name: 'Flet rurkowy',
              size: "4'"
            },
            {
              name: 'Superoktawa',
              size: "2'"
            },
            {
              name: 'Mixtura',
              size: "4-5x 1 1/3'"
            },
            {
              name: 'Trąbka',
              size: "8'"
            }
          ]
        },
        {
          title: 'Manuał II (ŻALUZYJNY)',
          subtitle: "C-g’’’=56",
          voices: [
            {
              name: "Bourdon",
              size: "8'"
            },
            {
              name: "Salicjonał",
              size: "8'"
            },
            {
              name: "Vox coelestis",
              size: "8'"
            },
            {
              name: "Prestant",
              size: "4'"
            },
            {
              name: 'Traversflet',
              size: "4'"
            },
            {
              name: 'Nasard',
              size: "2 2/3'"
            },
            {
              name: 'Oktawin',
              size: "2'"
            },
            {
              name: 'Tercja',
              size: "1 3/5'"
            },
            {
              name: 'Kwinta',
              size: "1 1/3'"
            },
            {
              name: 'Trąbka harm.',
              size: "8'"
            },
            {
              name: 'Obój francuski',
              size: "8'"
            }
          ]
        },
        {
          title: "Pedał",
          subtitle: "C-f’=30",
          voices: [
            {
              name: "Pryncypałbas",
              size: "16'"
            },
            {
              name: "Subbas",
              size: "16'"
            },
            {
              name: "Oktawbas",
              size: "8'"
            },
            {
              name: "Fletbas",
              size: "8'"
            },
            {
              name: "Chorałbas",
              size: "4'"
            },
            {
              name: "Puzon",
              size: "16'"
            },
            {
              name: "Trąba",
              size: "8'"
            }
          ]
        }
      ],
      hasDetails: true
    },
    {
      place: 'Gdańsk, Akademia Muzyczna',
      year: 2008,
      tracker: 'mechaniczna',
      size: '17',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/gdansk_am_2008/kontuar.jpg',
          img: '/images/realisations/gdansk_am_2008/kontuar.jpg'
        }
      ]
    },
    {
      place: 'Zielona Góra, Uniwersytet',
      year: 2008,
      tracker: 'mechaniczna',
      size: '2',
      manual: 'pozytyw',
      images: [
        {
          thumb: '/images/realisations/thumbs/zielona_g_2008/zielona_g_2008.jpg',
          img: '/images/realisations/zielona_g_2008/zielona_g_2008.jpg'
        }
      ]
    },
    {
      place: 'Kraków - Kościelniki, kościół',
      year: 2008,
      tracker: 'mechaniczna',
      size: '19',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/krakow_2008/prospekt.jpg',
          img: '/images/realisations/krakow_2008/prospekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/krakow_2008/kontuar.jpg',
          img: '/images/realisations/krakow_2008/kontuar.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Święty Krzyż, p.w. Świętej Trójcy',
      year: 2007,
      tracker: 'mechaniczna / elektryczna',
      size: '34',
      manual: 'III+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/swiety_krzyz_2007/SwietyKrzyzProspekt.jpg',
          img: '/images/realisations/swiety_krzyz_2007/SwietyKrzyzProspekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/swiety_krzyz_2007/SwietyKrzyzkontuar.jpg',
          img: '/images/realisations/swiety_krzyz_2007/SwietyKrzyzkontuar.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Gdańsk, prywatny',
      year: 2007,
      tracker: 'mechaniczna',
      size: '5',
      manual: 'pozytyw',
      images: [
        {
          thumb: '/images/realisations/thumbs/gdansk_2007/1.jpg',
          img: '/images/realisations/gdansk_2007/1.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/gdansk_2007/2.jpg',
          img: '/images/realisations/gdansk_2007/2.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Bydgoszcz, Akademia Muzyczna',
      description: "Projekt prospektu: organmistrz Zdzisław Mollin\n" +
        "Projekt dyspozycji: prof. Piotr Grajter , prof. Radosław Marzec\n" +
        "Zakończenie prac: luty 2007 r.\n",
      year: 2007,
      tracker: 'mechaniczna',
      size: '5',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/chojnice_2013/chojnice_prospekt.jpg',
          img: '/images/realisations/chojnice_2013/chojnice_prospekt.jpg'
        }
      ],
      voices: [
        {
          title: 'Manuał I',
          subtitle: "C-a'''=58",
          voices: [
            {
              name: "Flet kryty",
              size: "8'"
            },
            {
              name: "Pryncypał",
              size: "4'"
            }
          ]
        },
        {
          title: 'Manuał II',
          subtitle: "C-a'''=58",
          voices: [
            {
              name: "Flet rurkowy",
              size: "8'"
            },
            {
              name: "Flet kryty",
              size: "4'"
            }
          ]
        },
        {
          title: "Pedał",
          subtitle: "C-f’=30",
          voices: [
            {
              name: "Subbas",
              size: "16'"
            }
          ]
        }
      ],
      hasDetails: true
    },
    {
      place: 'Konowały k. Białegostoku',
      year: 2006,
      tracker: 'mechaniczna',
      size: '15',
      manual: 'II+P',
      hasDetails: false
    },
    {
      place: 'Gościcino, kościół p.w. MBNP',
      smallerTitle: "Kościół p.w. Matki Bożej Nieustającej Pomocy",
      description: "Projekt prospektu: organmistrz Zdzisław Mollin\n" +
        "Projekt dyspozycji: prof. Roman Perucki\n" +
        "organmistrz Zdzisław Mollin\n" +
        "Poświęcenie: 2 lipiec 2006 r.\n\n" +
        "SETZER MP-95 firmy Heuss  4000 kombinacji",
      year: 2006,
      tracker: 'mechaniczna / elektryczna',
      size: '21',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/goscino_2006/1.jpg',
          img: '/images/realisations/goscino_2006/1.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/goscino_2006/2.jpg',
          img: '/images/realisations/goscino_2006/2.jpg'
        }
      ],
      voices: [
        {
          title: 'Manuał I (GŁÓWNY)',
          subtitle: "C-g'''=56",
          voices: [
            {
              name: "Pryncypał",
              size: "8'"
            },
            {
              name: "Flet rurkowy",
              size: "8'"
            },
            {
              name: "Oktawa",
              size: "4'"
            },
            {
              name: "Gemshorn",
              size: "4'"
            },
            {
              name: "Oktawa",
              size: "2'"
            },
            {
              name: "Mixtura",
              size: "4-5x   1 1/3'"
            },
            {
              name: "Trąbka",
              size: "8'"
            }
          ]
        },
        {
          title: 'Manuał II (ŻALUZYJNY)',
          subtitle: "C-a'''=56",
          voices: [
            {
              name: "Bourdon",
              size: "8'"
            },
            {
              name: "Salicjonał",
              size: "8'"
            },
            {
              name: "Pryncypał",
              size: "4'"
            },
            {
              name: "Sesquialtera",
              size: "2x"
            },
            {
              name: "Flet leśny",
              size: "2'"
            },
            {
              name: "Kwinta",
              size: "1 1/3'"
            },
            {
              name: "Obój",
              size: "8'"
            }
          ]
        },
        {
          title: "Pedał",
          subtitle: "C-f’=30",
          voices: [
            {
              name: "Subbas",
              size: "16'"
            },
            {
              name: "Oktawbas",
              size: "8'"
            },
            {
              name: "Fletbas",
              size: "8'"
            },
            {
              name: "Chorałbas",
              size: "4'"
            },
            {
              name: "Mixtura",
              size: "3-4x   2'"
            },
            {
              name: "Puzon",
              size: "16'"
            },
            {
              name: "Trąba basowa",
              size: "8'"
            }
          ]
        }
      ],
      hasDetails: true
    },
    {
      place: 'Kiełpino Górne, kościół',
      year: 2005,
      tracker: 'mechaniczna',
      size: '21',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/kiepino_2005/1.jpg',
          img: '/images/realisations/kiepino_2005/1.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/kiepino_2005/2.jpg',
          img: '/images/realisations/kiepino_2005/2.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Poznań, kościół Ewangielicki',
      year: 2004,
      tracker: 'mechaniczna',
      size: '27',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/poznan_2004/1.jpg',
          img: '/images/realisations/poznan_2004/1.jpg'
        }
      ]
    },
    {
      place: "Gdańsk, Filh. Bałtycka (montaż)",
      smallerTitle: "Montaż organów firmy Kuhn",
      year: 2004,
      tracker: 'mechaniczna',
      size: '95',
      manual: 'IV+P'
    },
    {
      place: "Pelplin, katedra",
      smallerTitle: "Organy chórowe",
      year: 2003,
      tracker: 'mechaniczna',
      size: '42',
      manual: 'III+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/pelplin_2003/1.jpg',
          img: '/images/realisations/pelplin_2003/1.jpg'
        }
      ]
    },
    {
      place: "Łódź, Zespół Szkół Muzycznych",
      year: 2002,
      tracker: 'mechaniczna',
      size: '12',
      manual: 'II+P'
    },
    {
      place: "Słupsk, p.w. św. Jacka",
      year: 2002,
      tracker: 'mechaniczna',
      size: '33',
      manual: 'III+P'
    },
    {
      place: "Gdańsk-Wrzeszcz, kościół",
      year: 2001,
      tracker: 'mechaniczna',
      size: '21',
      manual: 'II+P'
    },
    {
      place: "Białystok, Akademia Muzyczna",
      year: 2001,
      tracker: 'mechaniczna',
      size: '3 1/2',
      manual: 'pozytyw'
    },
    {
      place: "Toruń, Orkiestra Kameralna",
      year: 2000,
      tracker: 'mechaniczna',
      size: '3 1/2',
      manual: 'pozytyw'
    },
    {
      place: "Kraków, p. Szelst",
      year: 2000,
      tracker: 'mechaniczna',
      size: '2',
      manual: 'pozytyw'
    },
    {
      place: "Gdańsk-Przymorze, kościół",
      year: 2000,
      tracker: 'mechaniczna / elektryczna',
      size: '40',
      manual: 'III+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/gdansk_2000/1.jpg',
          img: '/images/realisations/gdansk_2000/1.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/gdansk_2000/2.jpg',
          img: '/images/realisations/gdansk_2000/2.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: "Warszawa, Zespół Szkół Muzycznych",
      year: 1998,
      tracker: "mechaniczna",
      size: "17",
      manual: "II+P"
    },
    {
      place: "Czarna Woda, kościół",
      year: 1998,
      tracker: "mechaniczna",
      size: "20",
      manual: "II+P"
    },
    {
      place: "Montabaur, Niemcy, Szkoła Muzyczna",
      year: 1997,
      tracker: "mechaniczna",
      size: "6",
      manual: "II+P"
    },
    {
      place: "Lublin, O.O. Kapucyni",
      year: 1997,
      tracker: "mechaniczna",
      size: "4",
      manual: "pozytyw"
    },
    {
      place: "Wasilków k. Białegostoku, kościół",
      year: 1996,
      tracker: "mechaniczna",
      size: "8",
      manual: "I+P"
    },
    {
      place: "Bagnarola, Włochy, kościół",
      year: 1996,
      tracker: "mechaniczna",
      size: "4",
      manual: "pozytyw"
    },
    {
      place: "Wisła, Chór Ewangielicki",
      year: 1995,
      tracker: "mechaniczna",
      size: "4",
      manual: "pozytyw"
    },
    {
      place: "Szczecin, zamek",
      year: 1995,
      tracker: "mechaniczna",
      size: "4",
      manual: "pozytyw"
    },
    {
      place: "Gdańsk, Akademia Muzyczna",
      year: 1995,
      tracker: "mechaniczna",
      size: "13",
      manual: "II+P"
    },
    {
      place: "Warszawa, p. Toporowski",
      year: 1994,
      tracker: "mechaniczna",
      size: "4",
      manual: "pozytyw"
    },
    {
      place: "Poznań, Zespół Szkół Muzycznych",
      year: 1994,
      tracker: "mechaniczna",
      size: "12",
      manual: "II+P"
    },
    {
      place: "Gdańsk-Oliwa, katedra (montaż)",
      year: 1994,
      tracker: "Heuss",
      size: "Setzer",
      manual: "8x8"
    },
    {
      place: "Gdańsk, Filharmonia Bałtycka",
      year: 1994,
      tracker: "mechaniczna",
      size: "4",
      manual: "pozytyw"
    },
    {
      place: "Grębocin k. Torunia, kościół",
      year: 1992,
      tracker: "mechaniczna",
      size: "11",
      manual: "II+P"
    },
    {
      place: "Bydgoszcz, Filharmonia Pomorska",
      year: 1992,
      tracker: "mechaniczna",
      size: "4",
      manual: "pozytyw"
    },
    {
      place: "Bydgoszcz, Akademia Muzyczna",
      year: 1992,
      tracker: "mechaniczna",
      size: "26",
      manual: "II+P"
    },
    {
      place: "Żuromin, p.w. św. Antoniego (rozbudowa)",
      year: 1990,
      tracker: "mechaniczna",
      size: "18",
      manual: "II+P"
    },
    {
      place: "Odry, w firmie",
      year: 1990,
      tracker: "mechaniczna",
      size: "4",
      manual: "pozytyw"
    },
    {
      place: "Koszalin, p.w. św. Krzyża",
      year: 1989,
      tracker: "mechaniczna",
      size: "32",
      manual: "II+P"
    },
    {
      place: "Tczew, p.w. Krzyża Św.",
      year: 1986,
      tracker: "mechaniczna",
      size: "30",
      manual: "II+P"
    },
    {
      place: "Wielki Mędromierz, kościół",
      year: 1984,
      tracker: "mechaniczna",
      size: "12",
      manual: "II+P"
    },
    {
      place: "Ksawerów, p.w M.B. Częstochowskiej",
      year: 1984,
      tracker: "mechaniczna",
      size: "16",
      manual: "II+P"
    },
    {
      place: "Kaliska, kościół",
      year: 1982,
      tracker: "mechaniczna",
      size: "7",
      manual: "I+P"
    },
    {
      place: "Police k. Szczecina, kościół",
      year: 1981,
      tracker: "mechaniczna",
      size: "25",
      manual: "II+P"
    },
    {
      place: "Pelplin, katedra",
      year: 1980,
      tracker: "pneumatyczna",
      size: "95",
      manual: "IV+P"
    },
    {
      place: "Jaktorów, p.w. św. Rodziny",
      year: 1979,
      tracker: "mechaniczna",
      size: "19",
      manual: "II+P"
    },
    {
      place: "Toruń, p.w. Matki Boskiej Zwycięskiej",
      year: 1978,
      tracker: "pneumatyczna",
      size: "30",
      manual: "III+P"
    },
    {
      place: "Starogard Gd., p.w św. Wojciecha",
      year: 1975,
      tracker: "pneumatyczna",
      size: "44",
      manual: "III+P"
    },
    {
      place: "Wyszyny Kość. k. Mławy",
      year: 1974,
      tracker: "pneumatyczna",
      size: "12",
      manual: "II+P"
    },
    {
      place: "Grzebsk k. Mławy",
      year: 1972,
      tracker: "pneumatyczna",
      size: "7",
      manual: "I+P"
    },
    {
      place: "Chełmża , p.w. św. Trójcy",
      year: 1969,
      tracker: "pneumatyczna",
      size: "51",
      manual: "III+P"
    },
    {
      place: "Zblewo p.w. św. Michała",
      year: 1964,
      tracker: "pneumatyczna",
      size: "29",
      manual: "II+P"
    },
    {
      place: "Cieszyn, O.O. Bonifatrzy",
      year: 1961,
      tracker: "pneumatyczna",
      size: "14",
      manual: "II+P"
    },
    {
      place: "Odry p.w. Wniebowzięcia NMP",
      year: 1958,
      tracker: "pneumatyczna",
      size: "11",
      manual: "II+P"
    }
  ])
  .constant('renovationsRealisations', [
    {
      place: 'Smardzko k. Świdwina, pw.Matki Boskiej Ostrobramskiej',
      year: 2018,
      tracker: 'mechaniczna',
      size: '5',
      manual: 'I+P (podwieszony)',
      creator: 'B. Grüneberg, Szczecin, 1860 r., Opus 33',
    },
    {
      place: 'Stara Łubianka, pw. Podwyższenia Krzyża Świętego',
      year: 2018,
      tracker: 'pneumatyczna',
      size: '10',
      manual: 'II+P',
      creator: 'C.F. Voelkner, Duninowo, Opus 166',
      images: [
        {
          thumb: '/images/realisations/thumbs/stara_lubianka_2016/prospekt.jpg',
          img: '/images/realisations/stara_lubianka_2016/prospekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/stara_lubianka_2016/kontuar.jpg',
          img: '/images/realisations/stara_lubianka_2016/kontuar.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Śliwice, pw.św.Katarzyny Aleksandryjskiej',
      year: 2016,
      creator: 'A. Polzin, Posen, 1904, Opus 18',
      tracker: 'pneumatyczna / elektryczna',
      size: '24',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/sliwice_2016/sliwiceProspekt.jpg',
          img: '/images/realisations/sliwice_2016/sliwiceProspekt.jpg'
        }
      ]
    },
    {
      place: 'PERLE / Luxemburg - kościół',
      year: 2016,
      creator: 'Oberlinger - 1978 r.',
      tracker: 'elektryczna / mechaniczna',
      size: '29',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/luxemburg_2016/1.jpg',
          img: '/images/realisations/luxemburg_2016/1.jpg'
        }
      ]
    },
    {
      place: 'Szczecinek, pw.Narodzenia NMP',
      year: 2014,
      creator: "P.B. Voelkner, Bromberg, 1908",
      tracker: 'pneumatyczna',
      size: '35',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/szczecinek_2014/prospekt.jpg',
          img: '/images/realisations/szczecinek_2014/prospekt.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/szczecinek_2014/kontuar.jpg',
          img: '/images/realisations/szczecinek_2014/kontuar.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: 'Toruń, pw. św. Szczepana',
      year: 2014,
      creator: 'Ed. Wittek, Elbing, 1904',
      tracker: 'pneumatyczna',
      size: '13',
      manual: 'II+P'
    },
    {
      place: "Częstochowa - Jasna Góra",
      smallerTitle: "bazylika - kaplica Matki Bożej",
      year: 2013,
      creator: 'Kamiński 1987',
      tracker: 'mechaniczna / elektryczna',
      size: '34',
      manual: 'III+P'
    },
    {
      place: "Częstochowa - Jasna Góra",
      smallerTitle: 'Bazylika - kaplica Najświętszego Serca Pana Jezusa',
      year: 2012,
      creator: 'J. Szymański 1875',
      tracker: 'mechaniczna',
      size: '6',
      manual: 'I'
    },
    {
      place: "Bobolice, pw. Wniebowzięcia NMP",
      year: 2011,
      creator: 'B. Grüneberg 1886',
      tracker: 'mechaniczna',
      size: '21',
      manual: 'II+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/babolice_2011/1.jpg',
          img: '/images/realisations/babolice_2011/1.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/babolice_2011/2.jpg',
          img: '/images/realisations/babolice_2011/2.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: "Gdańsk-Oliwa, katedra",
      year: 2010,
      creator: 'Wulff, Kaltschmidt, J.Goebel 1788-1935',
      tracker: 'elektryczna / pneumatyczna',
      size: '94',
      manual: 'V+P',
      images: [
        {
          thumb: '/images/realisations/thumbs/oliwa_2010/1.jpg',
          img: '/images/realisations/oliwa_2010/1.jpg'
        }
      ]
    },
    {
      place: "Dobrzyń nad Wisłą",
      smallerTitle: 'pw. Wniebowzięcia NMP',
      year: 2009,
      creator: 'Dominik Biernacki Płock, 1899 nr 32',
      tracker: 'mechaniczna',
      size: '13',
      manual: 'II+P'
    },
    {
      place: "Kielno, pw. św. Wojciecha",
      year: 2009,
      creator: 'B. Goebel, Opus 312',
      tracker: 'pneumatyczna',
      size: '20',
      manual: 'II+P'
    },
    {
      place: "Troszyn Polski, kościół",
      year: 2008,
      tracker: 'mechaniczna',
      size: '6',
      manual: 'pozytyw',
      images: [
        {
          thumb: '/images/realisations/thumbs/troszyn_2008/1.jpg',
          img: '/images/realisations/troszyn_2008/1.jpg'
        },
        {
          thumb: '/images/realisations/thumbs/troszyn_2008/2.jpg',
          img: '/images/realisations/troszyn_2008/2.jpg'
        }
      ],
      hasDetails: true
    },
    {
      place: "Słupia, kościół",
      year: 2008,
      tracker: 'mechaniczna',
      size: '9',
      manual: 'I'
    },
    {
      place: "Zagnańsk, kościół",
      year: 2007,
      tracker: 'mechaniczna',
      size: '9',
      manual: 'I+P'
    },
    {
      place: "Młyniec k. Lubicza, kościół",
      year: 2006,
      tracker: 'mechaniczna',
      size: '5',
      manual: 'pozytyw'
    },
    {
      place: "Radziejowice, kościół",
      year: 2006,
      tracker: 'mechaniczna',
      size: '13',
      manual: 'I+P'
    },
    {
      place: "Koszalin, p.w. św. Józefa",
      year: 2003,
      tracker: 'mechaniczna',
      size: '13',
      manual: 'II+P'
    },
    {
      place: "Jeziorany, p.w. św. Bartłomieja",
      year: 2002,
      tracker: 'mechaniczna',
      size: '30',
      manual: 'III+P'
    },
    {
      place: "Żarnowiec, p.w. Zwiastowania Pana",
      year: 2001,
      tracker: 'pneumatyczna',
      size: '14',
      manual: 'II+P'
    },
    {
      place: "Białogard, p.w. Narodzenia NMP",
      year: 2000,
      tracker: 'pneumatyczna',
      size: '43',
      manual: 'III+P'
    },
    {
      place: "Gdańsk-Oliwa, katedra",
      smallerTitle: "Prospekt, renowacja piszczałek",
      year: 2000,
      images: [
        {
          thumb: '/images/realisations/thumbs/oliwa_2010/1.jpg',
          img: '/images/realisations/oliwa_2010/1.jpg'
        }
      ]
    },
    {
      place: "Kack W., p.w. św. Wawrzyńca",
      year: 1999,
      tracker: 'mechaniczna',
      size: '10',
      manual: 'II+P'
    },
    {
      place: "Tykocin, kościół",
      year: 1999,
      tracker: 'mechaniczna',
      size: '19',
      manual: 'II+P'
    },
    {
      place: "Pruszcz Gd., p.w. Krzyża Św.",
      year: 1999,
      tracker: 'mechaniczna / pneumatyczna',
      size: '25',
      manual: 'II+P'
    },
    {
      place: "Tykocin, kościół",
      year: 1996,
      tracker: 'mechaniczna',
      size: '6',
      manual: 'pozytyw'
    },
    {
      place: "Lipno, p.w. Wniebowzięcia NMP",
      year: 1996,
      tracker: 'pneumatyczna',
      size: '30',
      manual: 'II+P'
    },
    {
      place: "Koszalin, katedra",
      year: 1995,
      tracker: 'pneumatyczna',
      size: '50',
      manual: 'III+P'
    },
    {
      place: "Wdzydze, skansen",
      year: 1995,
      tracker: 'mechaniczna',
      size: '5',
      manual: 'pozytyw'
    },
    {
      place: "Zamarte, p.w. Narodzenia NMP",
      smallerTitle: "Prospekt, piszczałki",
      year: 1995
    },
    {
      place: "Bydgoszcz, kościół Farny",
      year: 1994,
      tracker: 'pneumatyczna',
      size: '28',
      manual: 'II+P'
    },
    {
      place: "Śliwice, św. Katarzyny Aleksandr.",
      year: 1994,
      tracker: 'pneumatyczna',
      size: '24',
      manual: 'II+P'
    },
    {
      place: "Białystok, stara fara",
      year: 1993,
      tracker: 'mechaniczna',
      size: '14',
      manual: 'I+P'
    },
    {
      place: "Strzegocin, kościół",
      year: 1993,
      tracker: 'mechaniczna',
      size: '14',
      manual: 'I+P'
    },
    {
      place: "Darłowo, p.w. św. Gertrudy",
      year: 1993,
      tracker: 'mechaniczna',
      size: '8',
      manual: 'I+P'
    },
    {
      place: "Włocławek, katedra",
      year: 1989,
      creator: "Barker",
      tracker: 'mechaniczna',
      size: '32',
      manual: 'II+P'
    },
    {
      place: "Ratowo, kościół",
      year: 1986,
      tracker: 'mechaniczna',
      size: '10',
      manual: 'I+P'
    },
    {
      place: "Włóki k. Bydgoszczy",
      year: 1985,
      tracker: 'mechaniczna',
      size: '6',
      manual: 'pozytyw'
    },
    {
      place: "Toruń, katedra św. Janów",
      year: 1983,
      tracker: 'mechaniczna',
      size: '15',
      manual: 'I+P'
    },
    {
      place: "Pelplin, katedra",
      year: 1977,
      tracker: 'pneumatyczna',
      size: '70',
      manual: 'III+P'
    },
    {
      place: "Pruszcz Gdański, p.w. Krzyża Świętego",
      year: 1973,
      tracker: 'mechaniczna / pneumatyczna',
      size: '25',
      manual: 'II+P'
    },
    {
      place: "Przeczno, p.w. Krzyża Świętego",
      year: 1973,
      tracker: 'mechaniczna',
      size: '9',
      manual: 'pozytyw'
    },
    {
      place: "Lidzbark Warm., zamek",
      year: 1971,
      tracker: 'mechaniczna',
      size: '8',
      manual: 'pozytyw'
    },
    {
      place: "Radzyń Chełm., p.w. św. Anny",
      year: 1970,
      tracker: 'mechaniczna',
      size: '23',
      manual: 'II+P'
    },
    {
      place: "Zamarte, p.w. Narodzenia NMP",
      year: 1969,
      tracker: 'mechaniczna',
      size: '16',
      manual: 'I+P'
    }
  ])
  .constant('inProgressRealisations', [
    {
      place: 'Kraków Ruczaj, pw. Zesłania Ducha Świętego',
      smallerTitle: "Nowe organy",
      year: 2019,
      tracker: 'mechaniczna / elektryczna',
      size: '28',
      manual: 'II+P',
    },
    {
      place: 'Gdańsk Morena, pw. Bożego Ciała',
      smallerTitle: "Nowe organy",
      year: 2017,
      tracker: 'elektryczna / mechaniczna',
      size: '66',
      manual: 'IV+P',
    }
  ]);
});

