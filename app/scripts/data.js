
define(['angular'], function(angular) {
  'use strict';

  return angular.module('myApp.newRealisations', [])
  .constant('newRealisations', [
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
      place: 'Bagnarola, Włochy, kościół',
      year: 1966,
      tracker: 'mechaniczna',
      size: '4 / pozytyw',
      hasDetails: false
    }
  ])
  .constant('renovationsRealisations', [
    {
      place: 'Szczecinek, pw.Narodzenia NMP',
      smallerTitle: 'P.B. Voelkner, Bromberg, 1908',
      year: 2014,
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
    }
  ])
  .constant('inProgressRealisations', [
    {
      place: 'Śliwice, pw.św.Katarzyny Aleksandryjskiej',
      smallerTitle: 'A. Polzin, Posen, 1904, Opus 18',
      year: 2016,
      tracker: 'pneumatyczna',
      size: '24',
      manual: 'II+P',
      hasDetails: false
    }
  ]);
});

