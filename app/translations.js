define(['angular', 'angularTranslate'], function(angular) {
  'use strict';

  return angular.module('myApp.translations', ['pascalprecht.translate'])
    .config(['$translateProvider', function($translateProvider) {

      $translateProvider.translations('pl', {
        PAGE_TITLE: 'Organmistrzostwo Zdzisław Mollin',
        INDEX: {
          MAIN_PAGE: 'Strona główna',
            ABOUT_COMPANY: 'O firmie',
            HOW_WE_BUILD: 'Jak budujemy',
            L1: 'Obudowa - szafa organowa',
            L2: 'Kontuar – stół gry',
            L3: 'Traktura gry',
            L4: 'Traktura registrowa',
            L5: 'Wiatrownice',
            L6: 'Miechy',
            L7: 'Wentylatory',
            L8: 'Piszczałki',
            L9: 'Intonacja',
            L10: 'Montaż',
            REALISATIONS: 'Realizacje',
            REFERENCES: 'Referencje',
            CONTACT: 'Kontakt'
        },
        MAIN_PAGE: {
          PAGE_TITLE: 'Strona główna',
          HELLO: 'Witamy',
          P1: 'Twórczość organmistrzowska zakładu prowadzonego obecnie przez Zdzisława Mollin w Odrach k. Chojnic sięga końca pięćdziesiątych lat ubiegłego stulecia. Zamiłowania do zawodu organmistrzowskiego wszczepił senior rodu Marcin Mollin (+1985), długoletni organista miejscowej parafii. Jego syn Józef (+2005) naukę zawodu kształtował pod kierunkiem budowniczego organów Józefa Sobiechowskiego w Bydgoszczy, ukończoną zdaniem egzaminu czeladniczego w 1953 roku oraz mistrzowskiego w 1961 roku.',
          P2: 'Pierwszym jego samodzielnym instrumentem były 11-rejestrowe organy o trakturze pneumatycznej wybudowane w 1958 roku dla miejscowego kościoła parafialnego pw. Wniebowzięcia NMP w Odrach.',
          ABOUT_COMPANY: 'Więcej na temat firmy ...',
          COMPANY_ACTIVITY: 'Działalność naszej firmy obejmuje:',
          L1: 'budowę i rekonstrukcję organów',
          L2: 'pozytywy organowe',
          L3: 'remonty i konserwacje wszystkich systemów',
          L4: 'wyrób piszczałek cynowych i drewnianych',
          L5: 'strojenia',
          L6: 'wyrób piszczałek języczkowych',
          L7: 'elementy traktury gry mechanicznej',
          LAST_REALISATIONS: 'Ostatnie realizacje:'
        },
        ABOUT_COMPANY: {
          TITLE: 'O firmie',
          P1_TITLE: 'Twórczość organmistrzowska zakładu',
          P1_STRONG: 'Organmistrzostwo Zdzisław Mollin w Odrach k. Chojnic',
          P1_CONTENT: 'sięga końca pięćdziesiątych lat ubiegłego stulecia. Zamiłowania do zawodu organmistrzowskiego wszczepił senior rodu Marcin Mollin (+ 1985), długoletni organista miejscowej parafii. Jego syn Józef naukę zawodu kształtował pod kierunkiem budowniczego organów Józefa Sobiechowskiego w Bydgoszczy, ukończoną zdaniem egzaminu czeladniczgo w 1953 roku oraz mistrzowskiego w 1961 roku. Pierwszym jego samodzielnym instrumentem były 11-rejestrowe organy o trakturze pneumatycznej, wybudowane w 1958 roku dla miejscowego kościoła parafialnego pw. Wniebowzięcia NMP w Odrach. Udoskonalane stopniowo doświadczenia warsztatowe, pogłębiane fachową literaturą, znalazły swe odzwierciedlenie w postaci takich instrumentów, jak organy: katedry Św. Trójcy w Chełmży, kościołach w Zblewie, Toruniu, Policach k. Szczecina, Tczewie, kościoła OO Franciszkanów w Łodzi-Łagiewnikach i Koszalinie, kościoła w Czarnej Wodzie i szeregu innych prac, m. in. dla Akademii i Szkół Muzycznych w Bydgoszczy, Gdańsku, Poznaniu, Warszawie, Łodzi i Montabaur (Niemcy).',
          P2: 'Józef Mollin zachęcony przez mgr Mariana Dorawę z Torunia podjął się w 1968 roku przeprowadzenia pod jego kierunkiem konserwacji zabytkowych organów z 1774 roku w pobernardyńskim kościele Narodzenia NMP w Zamartem k. Chojnic. Była to pierwsza konserwacja organów zabytkowych w Polsce, przeprowadzona zgodnie z zasadami konserwatorskimi, której celem było uratowanie zniszczonego instrumentu przy równoczesnym zachowaniu jego wartości zabytkowych. Za nią nastąpiły kolejne realizacje konserwatorskie, wykonywane pod nadzorem konserwatorskim przy takich obiektach zabytkowych, jak: pozytywy w kaplicy zamku lidzbarskiego i kościoła w Przecznie, organy kościoła w Radzyniu Chełmińskim, pozytyw we Wlókach, boczne organy staromiejskiego kościoła św. Jana (obecnie katedry) w Toruniu, organy katedry we Włocławku, kościoła Św. Krzyża w Pruszczu Gdańskim, w Starej Farze w Białymstoku, pozytyw szkatulny i organy kościoła parafialnego w Tykocinie, rekonstrukcja organów kościoła Św. Gertrudy w Darłowie, itd.',
          P3: 'Jako jeden z pierwszych organmistrzów w Polsce podjął się budowy organów o trakturze mechanicznej (organy kościoła parafialnego w Jaktorowie k. Warszawy w 1979 roku).',
          P4: 'Poza budową organów wielkich od 1990 roku buduje również 4-rejestrowe pozytywy, przydatne dla niewielkich kościołów, kaplic, zespołów kameralnych i orkiestr znajdujące się w kraju i zagranicą (Włochy).',
          P5: 'Za całokształt swej działalności artystycznej Józef Mollin uhonorowany został w 1983 roku przez Ministra Kultury i Sztuki tytułem „Mistrz Rzemiosła Artystycznego”.',
          P6: 'W pracy zawodowej wspierał go od 1980 roku syn Zdzisław Mollin, z zawodu elektronik, który z równym powodzeniem kontynuuje dzieło swego ojca. Uhonorowany w 1985 roku świadectwem czeladniczym oraz w 1991 roku dyplomem mistrzowskim doskonalił swoje wykształcenie organmistrzowskie w firmach niemieckich (Heuss i Kreienbrink).',
          P7: 'Wspólnym dziełem Józefa i Zdzisława Mollinów są nowe organy kościoła NMP Królowej Różańca Świętego w Gdańsku-Przymorzu i kościoła św. Stanisława bpa w Gdańsku-Wrzeszczu oraz przeprowadzona w ostatnich latach rekonstrukcja zniszczonych wieloma przebudowami organów kościoła zamkowego pw. św. Jacka w Słupsku. Realizację powyższych prac organmistrzowskich umożliwia rozbudowany i wyposażony w najnowsze i specjalistyczne urządzenia warsztat z halą montażową i składem sezonowego drewna liściastego i iglastego.',
          P8: 'Przeprowadzona w 2003 roku rekonstrukcja barokowego instrumentu bocznych organów Bazyliki Katedralnej w Pelplinie stanowi uwieńczenie całej, kilkudziesięcioletniej działalności organmistrzowskiej Józefa i Zdzisława Mollinów.',
          P9: 'Zdzisław Mollin należy do międzynarodowego stowarzyszenia miłośników organów GDO, dzięki czemu ma stały dostęp do fachowej literatury organowej oraz stały kontakt z firmami zagranicznymi.'
        },
        HOW_WE_BUILD: {
          TITLE: 'Jak budujemy',
          COVER: {
            TITLE: 'Obudowa - szafa organowa',
            CONTENT: 'Projekty architektoniczne wykonujemy samodzielnie lub współpracując  z architektami wnętrz. Każdy projekt wykonywany jest indywidualnie, dopasowując go do architektury wnętrza. Obudowy wykonywane są z drewna dębowego, jesionowego, itp. Płyciny fornirowane lub z drewna litego.',
            CONTENT_STRONG: 'Całość szafy jest zamknięta obudową (dach, ściany).'
          },
          COUNTER: {
            TITLE: 'Kontuar - stół gry',
            P1: 'Wbudowany w szafę organową jako szafka gry lub wolnostojący. Wykonany z różnych gatunków drewna litego lub fornirowany.',
            L1: 'Klawiatury',
            L1_CONTENT: 'Wykonane z drewna sosnowego (dźwignia dwuramienna lub jednoramienna) z okładzinami z drewna egzotycznego. Klawiatury pedałowe z drewna dębowego o układzie klawiszy równoległym, wklęsłym.',
            L2: 'Manubria',
            L2_CONTENT: 'Toczone z drewna egzotycznego z numeracją registrów. Tabliczki grawerowane w metalu lub drewnie.',
            L3: 'Połączenia manuałów',
            L3_CONTENT: 'Wykonane z drewna grabowego jako wahacze osadzone w filcowanych łożyskach. Wałki skrętne metalowe z ramionami grabowymi osadzone w filcowanych klockach. Możliwość zainstalowania Setzera (Pamięć elektroniczna) firmy Heuss oraz Elektronicznego Systemu Połączeń (koppli) – EKS firmy Heuss.'
          },
          GAME_TRACKER: {
            TITLE: 'Traktura gry – mechaniczna',
            CONTENT: 'Budowana w firmie od 1979 roku, cały czas modyfikowana dzięki współpracy z firmami niemieckimi Heuss i Laukhuff. Abstrakty drewniane, wykonane z drewna sosnowego – listewki. Wałki skrętne z drewna dębowego z ramionami z drewna grabowego, osadzone w filcowanych klockach lub z rurek aluminiowych z ramionami grabowymi. Wałki skrętne osadzone na płycie stolarskiej dębowej. Kątowniki i wahacze drewniane, wykonane z drewna grabowego, osadzone w filcowanych klockach.'
          },
          REGISTRY_TRACKER: {
            TITLE: 'Traktura registrowa – mechaniczna lub elektryczna',
            CONTENT: 'Wykonana jako wałki skrętne i wahacze metalowe oraz drążki z drewna dębowego. Również jako elektryczna poprzez elektromagnesy zasuwowe.'
          },
          BARGE: {
            TITLE: 'Wiatrownice',
            CONTENT: 'Wykonywane jako klapowo – zasuwowe z drewna dębowego. Na spodzie wiatrownicy w skrzyni wentylowej instalowany jest mieszek klinowy z wentylem. Wentyle tonowe wykonane są z drewna sosnowego, filcowane i skórowane. Wielkość otworu wlotowego obliczana od ilości głosów na wiatrownicy. Cięgno wentyla tonowego przechodzi przez spód wiatrownicy w formie pulpetu skórzanego. Zasuwy registrowe wykonane są z drewna dębowego lub bakielitu. Kloce i ławeczki piszczałkowe wykonane z drewna dębowego. Uszczelnienia między klocem a zasuwą wykonujemy z pianki jako krążki.'
          },
          BELLOWS: {
            TITLE: 'Miechy',
            CONTENT: 'Wykonujemy jako pływakowe i klinowe (zespoły 3 lub 4 miechy) z drewna sosnowego i skóry. Do miechów instalowany jest regulator powietrza.'
          },
          FANS: {
            TITLE: 'Wentylatory',
            CONTENT: 'Sprowadzamy z firm zagranicznych.'
          },
          PIPES: {
            TITLE: 'Piszczałki',
            CONTENT: 'Wszystkie piszczałki metalowe i drewniane, labialne i języczkowe wykonujemy samodzielnie. Piszczałki labialne ze stopu cynowego od 70 lat XX w., językowe od kilku lat samodzielnie lub sprowadzane są z firm zagranicznych. Metalowe piszczałki labialne i językowe wykonane są ze stopów cyny i ołowiu o różnym składzie procentowym cyny, np. 25%, 50%, 70% i 80%. Blacha na piszczałki jest odlewana, skrawana, polerowana lub z możliwością młotkowania. Piszczałki prospektowe wykonywane są z wysokoprocentowych stopów cyny. Piszczałki drewniane wykonane są z drewna sezonowanego sosnowego i dębowego.'
          },
          INTONATION: {
            TITLE: 'Intonacja',
            CONTENT: 'Wstępna intonacja przeprowadzana jest w warsztacie na wiatrownicy próbnej. Ciśnienie powietrza waha się w granicach 60-80 mm słupa wody. Do stroju stosuje się różne femperacje.'
          },
          MONTAGE: {
            TITLE: 'Montaż',
            CONTENT: 'Wstępny montaż odbywa się na hali montażowej w firmie (hala o wysokości 8m.) Instrument montowany jest w całości z piszczałkami i trakturą, także przed montażem u klienta można sprawdzić wszystkie podzespoły i ich sprawność. Następnie instrument jest demontowany, pakowany oraz transportowany na miejsce przeznaczenia. Taki sposób montażu znacznie skraca końcowy montaż.'
          }
        },
        REALISATIONS: {
          TITLE: 'Realizacje',
          P1: 'W celu uławienia przeglądania naszych realizacji, podzieliliśmy wykonane przez nas organy na:',
          NEW: 'Nowe',
          NEW_TITLE: 'Realizacje nowe',
          RENOVATIONS: 'Renowacje',
          IN_PROGRESS: 'W trakcie prac',
          YEAR: 'Rok:',
          TRACKER: 'Traktura:',
          VOICES: 'Liczba głosów:',
          MANUALS: 'Manuały:',
          DETAILS: 'Szczegóły realizacji',
          REALISATIONS_IN_PROGRESS: 'Realizacje w trakcie',
          CREATOR: 'Twórca:',
          BUILT_YEAR: 'Rok budowy:',
          DETAILS_TITLE: 'Realizacja',
          RENOVATIONS_TITLE: 'Realizacje renowacje'
        },
        REFERENCES: {
          TITLE: 'Referencje',
          CONTENT: 'Na instrumentach realizowanych przez firmę Mollin nagrano następujące płyty CD:'
        },
        CONTACT: {
          TITLE: 'Kontakt',
          CONTENT: 'Jeżeli zainteresowała Państwa nasza oferta i realizacje, zapraszamy do skontaktowania się z Nami:'
        }
      });

      $translateProvider.preferredLanguage('pl');
    }]);
});
