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
          P1_CONTENT: 'sięga końca pięćdziesiątych lat ubiegłego stulecia. Zamiłowania do zawodu organmistrzowskiego wszczepił senior rodu Marcin Mollin (+ 1985), długoletni organista miejscowej parafii. Jego syn Józef (+2005) naukę zawodu kształtował pod kierunkiem budowniczego organów Józefa Sobiechowskiego w Bydgoszczy, ukończoną zdaniem egzaminu czeladniczgo w 1953 roku oraz mistrzowskiego w 1961 roku. Pierwszym jego samodzielnym instrumentem były 11-rejestrowe organy o trakturze pneumatycznej, wybudowane w 1958 roku dla miejscowego kościoła parafialnego pw. Wniebowzięcia NMP w Odrach. Udoskonalane stopniowo doświadczenia warsztatowe, pogłębiane fachową literaturą, znalazły swe odzwierciedlenie w postaci takich instrumentów, jak organy: katedry Św. Trójcy w Chełmży, kościołach w Zblewie, Toruniu, Policach k. Szczecina, Tczewie, kościoła OO Franciszkanów w Łodzi-Łagiewnikach i Koszalinie, kościoła w Czarnej Wodzie i szeregu innych prac, m. in. dla Akademii i Szkół Muzycznych w Bydgoszczy, Gdańsku, Poznaniu, Warszawie, Łodzi i Montabaur (Niemcy).',
          P2: 'Józef Mollin zachęcony przez mgr Mariana Dorawę z Torunia podjął się w 1968 roku przeprowadzenia pod jego kierunkiem konserwacji zabytkowych organów z 1774 roku w pobernardyńskim kościele Narodzenia NMP w Zamartem k. Chojnic. Była to pierwsza konserwacja organów zabytkowych w Polsce, przeprowadzona zgodnie z zasadami konserwatorskimi, której celem było uratowanie zniszczonego instrumentu przy równoczesnym zachowaniu jego wartości zabytkowych. Za nią nastąpiły kolejne realizacje konserwatorskie, wykonywane pod nadzorem konserwatorskim przy takich obiektach zabytkowych, jak: pozytywy w kaplicy zamku lidzbarskiego i kościoła w Przecznie, organy kościoła w Radzyniu Chełmińskim, pozytyw we Wlókach, boczne organy staromiejskiego kościoła św. Jana (obecnie katedry) w Toruniu, organy katedry we Włocławku, kościoła Św. Krzyża w Pruszczu Gdańskim, w Starej Farze w Białymstoku, pozytyw szkatulny i organy kościoła parafialnego w Tykocinie, rekonstrukcja organów kościoła Św. Gertrudy w Darłowie, itd.',
          P3: 'Jako jeden z pierwszych organmistrzów w Polsce podjął się budowy organów o trakturze mechanicznej (organy kościoła parafialnego w Jaktorowie k. Warszawy w 1979 roku).',
          P4: 'Poza budową organów wielkich od 1990 roku buduje również 4-rejestrowe pozytywy, przydatne dla niewielkich kościołów, kaplic, zespołów kameralnych i orkiestr znajdujące się w kraju i zagranicą (Włochy).',
          P5: 'Za całokształt swej działalności artystycznej Józef Mollin uhonorowany został w 1983 roku przez Ministra Kultury i Sztuki tytułem „Mistrz Rzemiosła Artystycznego”.',
          P6: 'W pracy zawodowej wspierał go od 1980 roku syn Zdzisław Mollin, z zawodu elektronik, który z równym powodzeniem kontynuuje dzieło swego ojca. Uhonorowany w 1985 roku świadectwem czeladniczym oraz w 1991 roku dyplomem mistrzowskim doskonalił swoje wykształcenie organmistrzowskie w firmach niemieckich (Heuss i Kreienbrink).',
          P7: 'Wspólnym dziełem Józefa i Zdzisława Mollinów są nowe organy kościoła NMP Królowej Różańca Świętego w Gdańsku-Przymorzu i kościoła św. Stanisława bpa w Gdańsku-Wrzeszczu oraz przeprowadzona w ostatnich latach rekonstrukcja zniszczonych wieloma przebudowami organów kościoła zamkowego pw. św. Jacka w Słupsku. Realizację powyższych prac organmistrzowskich umożliwia rozbudowany i wyposażony w najnowsze i specjalistyczne urządzenia warsztat z halą montażową i składem sezonowego drewna liściastego i iglastego.',
          P8: 'Przeprowadzona w 2003 roku rekonstrukcja barokowego instrumentu bocznych organów Bazyliki Katedralnej w Pelplinie stanowi uwieńczenie całej, kilkudziesięcioletniej działalności organmistrzowskiej Józefa i Zdzisława Mollinów.',
          P9: 'Zdzisław Mollin prowadząc samodzielnie firmę zbudował wiele nowych instrumentów oraz wykonał renowacje wielu zabytkowych organów na terenie całego kraju. Za całokształt 50 letniej działalności firmy, Zdzisław Mollin został w roku 2007 uhonorowany przez Biskupa Pelplińskiego Jana Bernarda Szlagę, ',
          P10: 'medalem za zasługi dla Diecezji Pelplińskiej.'
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

      $translateProvider.translations('de', {
        PAGE_TITLE: 'Orgelbaumeister Zdzisław Mollin',
        INDEX:{
          MAIN_PAGE: 'Hauptseite',
          ABOUT_COMPANY: 'Über uns',
          HOW_WE_BUILD: 'Wie entstehen unsere Orgeln? ',
          L1: 'Gehäuse',
          L2: 'Spieltisch',
          L3: 'Traktur ',
          L4: 'Registertraktur',
          L5: 'Windladen',
          L6: ' Blasebälge ',
          L7: 'Gebläse',
          L8: 'Pfeifen',
          L9: 'Intonation',
          L10: 'Montage',
          REALISATIONS: 'Unsere Arbeiten',
          REFERENCES: 'Referenzen ',
          CONTACT: 'Kontakt'
        },
        MAIN_PAGE:{
          PAGE_TITLE: 'Hauptseite',
          HELLO: 'Herzlich Willkommen! ',
          P1: 'Die Orgelbautätigkeit der Firma Organmistrzostwo Zdzisław Mollin in Odry bei  Chojnice reicht in die fünfziger Jahre des vergangenen Jahrhunderts zurück.  Die Liebe für den Orgelbau kam vom Familienoberhaupt Marcin Mollin (+ 1985), der viele Jahre lang Organist der hiesigen Pfarrgemeinde war. Sein Sohn, Józef (+2005), lernte das Fach unter der Aufsicht des Orgelbauers Józef Sobiechowski in Bydgoszcz kennen. 1953 erhielt er sein Gesellendiplom und 1961 seinen Meistertitel.',
          P2: 'Das erste, selbständig erbaute Instrument war eine Orgel mit 11 Registern und pneumatischer Traktur, die 1958 für die lokale Pfarrkirche Maria Himmelfahrt entstand. ',
          ABOUT_COMPANY: 'Weitere Informationen zu unserer Firma …',
          COMPANY_ACTIVITY: 'Tätigkeitsgebiete unserer Firma: ',
          L1: 'Orgelbau und Orgelrekonstruktion ',
          L2: 'Orgelpositive ',
          L3: 'Renovierung und Pflege aller Systeme ',
          L4: 'Herstellung von Zinn- und Holzpfeifen ',
          L5: 'Stimmen ',
          L6: 'Herstellung von Zungenpfeifen ',
          L7: 'Elemente mechanischer Spiel-Traktur ',
          LAST_REALISATIONS: 'Letzte Ausführungen:'
        },
        ABOUT_COMPANY:{
          TITLE: 'Über uns',
          P1_TITLE: 'Die Orgelbautätigkeit der Firma ',
          P1_STRONG: 'Organmistrzostwo Zdzisław Mollin in Odry bei  Chojnice ',
          P1_CONTENT: 'reicht in die fünfziger Jahre des vergangenen Jahrhunderts zurück.  Die Liebe für den Orgelbau kam vom Familienoberhaupt Marcin Mollin (+ 1985), der viele Jahre lang Organist der hiesigen Pfarrgemeinde war. Sein Sohn, Józef, lernte das Fach unter der Aufsicht des Orgelbauers Józef Sobiechowski in Bydgoszcz kennen. 1953 erhielt er sein Gesellendiplom und 1961 seinen Meistertitel. Das erste, selbständig erbaute Instrument war eine Orgel mit 11 Registern und pneumatischer Traktur, die 1958 für die lokale Pfarrkirche Himmelfahrtskirche in Odry entstand. Die Handwerkserfahrung, die im Laufe der Zeit verbessert wurde sowie das Studium der Fachliteratur haben ihre Widerspiegelung in der Form folgender Instrumente gefunden: Orgel im Dom der Heiligen Dreifaltigkeit  in Chełmża sowie die Orgeln in den Kirchen in Zblewo, Torun, Police bei  Szczecin, Tczew, Franziskanerkirche in Łódź-Łagiewniki, Koszalin sowie in Czarna Woda. Darüber hinaus wurden viele andere Aufträge fertiggestellt, u.a. für die Akademie und die Musikschulen in Bydgoszcz, Gdansk, Poznań, Warszawa, Łódź und Montabaur (Deutschland).',
          P2: '1968 wurde Józef Mollin von Marian Dorawa aus Torun ermutigt, unter seiner Leitung, die historische Orgel von 1774 in der ehemaligen Bernhardiner-Kirche in Zamarte bei  Chojnice zu restaurieren. Es war die erste Restaurierung einer historischen Orgel in Polen, die gemäß Restaurierungsregeln durchgeführt wurde und das beschädigte Instrument retten und gleichzeitig seine historischen Werte bewahren sollte. Danach folgten weitere Restaurierungsaufträge, die unter denkmalpflegerischer Aufsicht durchgeführt wurden. Es handelte sich um Restaurierungen folgender Objekte: die Positive in der Kapelle des Schlosses in Lidzbark Warmiński und in der Kirche in Przeczno, die Orgel in der Kirche in Radzyń Chełmiński, das Positiv in Wólki, die Seitenorgel der altstädtischen  Johanneskirche in Torun (heute Dom), die Orgel im Dom von Włocławek,  die Orgel in der Kreuzkirche in Pruszcz Gdański, die Orgel in der Alten Pfarrkirche in Białystok, das Kastenpositiv in der Pfarrkirche in Tykocin, die Rekonstruktion der Orgel in der  Gertrudenkirche in Darłowo usw. ',
          P3: 'Józef Mollin war einer der ersten Orgelbauer in Polen, der den Auftrag für den Bau einer Orgel mit der mechanischen Traktur übernahm (die Orgel in der Pfarrkirche Jaktorów bei Warszawa, 1979). ',
          P4: 'Neben dem Bau großer Orgel baut Józef Mollin seit 1990 auch Positive mit vier Registern, die vor allem für kleinere Kirchen, Kapellen, Kammerensembles und Orchester im In- und Ausland (Italien) bestimmt sind.',
          P5: '1983 wurde Józef Mollin für sein Gesamtwerk vom Minister für Kultur und Kunst mit dem Titel „Meister des Kunsthandwerks“ ausgezeichnet. ',
          P6: 'Seit 1980 wurde er von seinem Sohn Zdzisław Mollin, gelernter Elektroniker, in seiner Berufstätigkeit begleitet. Zdzisław Mollin führt das Werk seines Vaters mit Erfolg fort.  1985 erhielt er sein Gesellendiplom und 1991 seinen Meistertitel. Er bildete sich als Orgelbauer in den deutschen Firmen Heuss und Kreienbrink weiter.',
          P7: 'Das gemeinsame Werk von Józef und Zdzisław Mollin sind die Orgel in der Marienkirche in Gdańsk-Przymorze, die Orgel in Stanislauskirche in  Gdańsk-Wrzeszcz sowie die, in den letzten Jahren durchgeführte Rekonstruktion der durch viele Umbaumaßnahmen zerstörten Orgel in der Hl. Jacek- Schlosskirche  in Słupsk.  Die Ausführung der Aufträge aus dem Orgelbaubereich ermöglicht eine Werkstatt, die mit modernsten Fachgeräten ausgestattet ist, eine Montagehalle sowie eine Lagerhalle für Laub- und Nadelholz. ',
          P8: 'Die Rekonstruktion des barocken Instruments der Seitenorgel in der Dombasilika in Pelplin, die 2003 durchgeführt wurde, ist die Bekrönung  der gesamten Orgelbauertätigkeit von Józef und Zdzisław Mollin.',
          P9: 'Nach dem Zdzisław Mollin die Firma übernahm, hat er selbstständig viele neue Instrumente erbaut und viele historische Orgel in ganz Polen restauriert. 2007 wurde Zdzisław Mollin für die 50-jährige Firmentätigkeit vom Bischof von Pelplin, Jan Bernard Szlaga, mit der Medaille  ',
          P10: 'für die Verdienste für die Diözese Pelplin ausgezeichnet.'
        },
        HOW_WE_BUILD:{
          TITLE: 'Wie entstehen unsere Orgeln?',
          COVER:{
            TITLE: 'Gehäuse',
            CONTENT: 'Die architektonischen Projekte entwickeln wir selbständig oder in Zusammenarbeit mit Innenarchitekten.  Jeder Entwurf ist einzigartig und an die Architektur des jeweiligen Innenraums angepasst.  Das Gehäuse wird aus Eichenholz, Eschenholz usw. hergestellt. Die  Füllungen sind furniert oder aus Massivholz hergestellt. ',
            CONTENT_STRONG: 'Die gesamte Orgel befindet sich in einem Gehäuse (Dach, Wände).   '
          },
          COUNTER:{
            TITLE: 'Spieltisch ',
            P1: 'In die Orgel eingebaut oder freistehend. Aus zwei Massivholzarten hergestellt oder furniert. ',
            L1: 'Klaviaturen ',
            L1_CONTENT: 'Aus Kiefernholz (zweiarmiger oder einarmiger Hebel) mit Verkleidungen aus exotischem Holz.   Die Klaviaturen mit Fußpedal sind aus Eichenholz, parallel-konkav.',
            L2: 'Manubrien ',
            L2_CONTENT: 'Aus exotischem Holz mit Registernummerierung.  Die Schilder sind im Metall oder im Holz graviert. ',
            L3: 'Koppeln',
            L3_CONTENT: 'Hergestellt aus Hainbuchenholz in Form von Wippen in Filzlagern.  Wellen aus Eichenholz mit Hainbuchenholzarmen in Filzklötzen. Es können ein Setzer (elektronischer Speicher) der Firma Heuss sowie das elektronische Koppelsystem (Koppeln) der Firma Heuss montiert werden.'
          },
          GAME_TRACKER:{
            TITLE: 'Mechanische Spieltraktur ',
            CONTENT: 'Die mechanische Spieltraktur wird seit 1979 in unserer Firma gebaut. Im Laufe der Jahre wurde sind dank der Zusammenarbeit mit den deutschen Firmen Heuss und Laukhuff ständig verbessert. Abstrakten aus Kiefernholz – Holzleisten.  Wellen aus Eichenholz mit Hainbuchenholzarmen in Filzklötzen oder aus Alurohren mit Hainbuchenholzarmen.  Die Wellen sind auf einer Tischlerplatte aus Eichenholz montiert.  Winkel und Holzwippen aus Hainbuchenholz in Filzklötzen. '
          },
          REGISTRY_TRACKER:{
            TITLE: 'Mechanische oder elektrische Registertraktur ',
            CONTENT: 'Ausgeführt in der Form von Wellen, Metallwippen und Eichenholzstangen. Erhältlich auch elektrische Traktur mit Riegelmagneten.'
          },
          BARGE:{
            TITLE: 'Windladen ',
            CONTENT: 'Schleifladen aus Eichenholz.  Auf dem Boden der Windlade, im Windkasten, wird ein Keilbalg mit Ventil montiert.  Tonventile aus Fichtenholz, mit Filzschicht und enthäutet.   Die Größe der Eingangsöffnung ist von der Stimmenanzahl der Windlade abhängig. Das Glied des Tonventils geht durch den Boden der Windlade in der Form der Lederpulpete durch.  Die Registerschleifen sind aus Eichenholz oder Bakelit hergestellt.  Die Klötze und Pfeifenbänke bestehen aus Eichenholz. Die Abdichtungen zwischen dem Klotz und der Schleife werden aus Schaumstoff in Kreisform ausgeführt.'
          },
          BELLOWS:{
            TITLE: 'Blasebälge',
            CONTENT: 'Stellen wir als Schwimmerbälge oder Keilbälge (3-4 Bälge) aus Kifernholz und Leder her. Für die Bälge wird ein Luftregler montiert.'
          },
          FANS:{
            TITLE: 'Gebläse ',
            CONTENT: 'Bestellen wir bei ausländischen Firmen.'
          },
          PIPES:{
            TITLE: 'Pfeifen',
            CONTENT: 'Alle Metall- und Holzpfeifen, Labial- und Zungenpfeifen werden selbständig von uns hergestellt. Labialpfeifen aus Zinnlegierung werden seit den siebziger Jahren des 20. Jh. und die Zungenpfeifen seit einigen Jahren entweder selbständig von uns hergestellt oder bei ausländischen Firmen bestellt. Metallene Labial- und Zungenpfeifen sind aus Zinn- und Bleilegierungen mit unterschiedlichen Zinnanteil (z.B. 25%, 50%, 70% und 80%) hergestellt.  Das Blech für die Pfeifen wird gegossen, geschnitten und poliert und kann auch gehämmert werden. Die Prospektpfeifen werden aus hochprozentigen Zinnlegierungen hergestellt. Die Holzpfeifen werden aus trockenen Kiefern- oder Eichenholz gebaut. '
          },
          INTONATION:{
            TITLE: 'Intonation',
            CONTENT: 'Die erste Intonation wird in der Werkstatt mit einer Testwindlade durchgeführt.  Der Luftdruck beträgt ca. 60-80 mm Wassersäule. Das Stimmen erfolgt in unterschiedlichen Temperaturen. '
          },
          MONTAGE:{
            TITLE: 'Montage',
            CONTENT: 'Die vor Montage erfolgt in der firmeneigenen Montagehalle (Höhe 8 m).  Das Instrument wird vollständig mit Pfeifen und Trakturen montiert. Auf diese Weise werden vor der Montage beim Kunden alle Teile sowie ihre  ordnungsgemäße Funktion überprüft. Danach wird das Instrument zerlegt, verpackt und an den Bestimmungsort transportiert. Auf diese Weise wird die Dauer der endgültigen Montage wesentlich verkürzt.'
          }
        },
        REALISATIONS:{
          TITLE: 'Unsere Arbeiten',
          P1: 'Um die Durchsicht unserer Arbeiten zu vereinfachen, haben wir unsere Orgeln auf folgende Art und Weise unterteilt: ',
          NEW: 'Neue Instrumente ',
          NEW_TITLE: 'Neue Orgeln ',
          RENOVATIONS: 'Restaurierungen ',
          IN_PROGRESS: 'Laufende Projekte',
          YEAR: 'Baujahr:',
          TRACKER: 'Traktur: ',
          VOICES: 'Anzahl der Stimmen: ',
          MANUALS: 'Manuale: ',
          DETAILS: 'Detaillierte Informationen ',
          REALISATIONS_IN_PROGRESS: 'Laufende Projekte ',
          CREATOR: 'Meister:',
          BUILT_YEAR: 'Baujahr: ',
          DETAILS_TITLE: 'Projekt ',
          RENOVATIONS_TITLE: 'Restaurierungsprojekt '
        },
        REFERENCES:{
          TITLE: 'Referenzen',
          CONTENT: 'Auf den von der Firma  Mollin gebauten Instrumenten wurden folgende CDs aufgenommen:'
        },
        CONTACT:{
          TITLE: 'Kontakt',
          CONTENT: 'Wenn Sie unser Angebot und unsere ausgeführten Projekte interessant finden, dann nehmen Sie bitte Kontakt mit uns auf: '
        }
      });

      $translateProvider.translations('en', {
      PAGE_TITLE: 'Pipe Organ Craftsmanship Zdzisław Mollin',
        INDEX:{
        MAIN_PAGE: 'Main page',
          ABOUT_COMPANY: 'About company',
          HOW_WE_BUILD: 'How we build',
          L1: 'Organ case',
          L2: 'Organ console',
          L3: 'Key action system',
          L4: 'Tracker action system',
          L5: 'Wind chests',
          L6: 'Bellows',
          L7: 'Wind chests',
          L8: 'Pipes',
          L9: 'Tuning',
          L10: 'Installation',
          REALISATIONS: 'Realisations',
          REFERENCES: 'References',
          CONTACT: 'Contact'
      },
      MAIN_PAGE:{
        PAGE_TITLE: 'Main page',
          HELLO: 'Welcome',
          P1: 'Zdzisław Mollin Pipe Organ Craftsmanship in Odry, a village north-east of Chojnice, started in the late fifties of the past century. The passion for organ pipe craftsmanship was imbued in Zdzisław Mollin by the patriarch of the Mollin family, i.e., Marcin Mollin (+ 1985), an organist of a local parish for many years. His son Józef was learning pipe organ craftsmanship from an organ builder Józef Sobiechowski in Bydgoszcz. As a result, Józef Mollin qualified as a journeyman by examination in 1953 and he passed master craftsman’s exam in 1961. ',
          P2: 'The first instrument made by Józef was 11-stop pneumatic organ built in 1958 for the local parish church dedicated to the Blessed Virgin Mary in Odry.',
          ABOUT_COMPANY: 'More about the Mollin Company ...',
          COMPANY_ACTIVITY: 'A range of our works comprises:',
          L1: 'Building and reconstructing of organs',
          L2: 'Organ positives',
          L3: 'Repairs and restoration of all the systems',
          L4: 'Crafting tin pipes and wooden pipes',
          L5: 'Tuning',
          L6: 'Production of reed tongue pipes',
          L7: 'Elements of mechanical action systems',
          LAST_REALISATIONS: 'Recent realisation:'
      },
      ABOUT_COMPANY:{
        TITLE: 'About Mollin company',
          P1_TITLE: 'Work of pipe organ craftsmanship by Mollin company',
          P1_STRONG: 'Zdzisław Mollin Pipe Organ Craftsmanship in Odry, a village north-east of Chojnice, ',
          P1_CONTENT: 'started in the late fifties of the past century. The passion for organ pipe craftsmanship was imbued in Zdzisław Mollin by the patriarch of the Mollin family, i.e., Marcin Mollin (+ 1985), an organist of a local parish for many years. His son Józef was learning pipe organ craftsmanship from an organ builder Józef Sobiechowski in Bydgoszcz. As a result, Józef Mollin qualified as a journeyman by examination in 1953 and he passed master craftsman’s exam in 1961. The first instrument Józef crafted on his own was 11-stop pneumatic organ built in 1958 for the local parish church dedicated to the Blessed Virgin Mary in Odry. Gradually perfected crafts, advanced with the use of professional literature, were reflected in crafting of such instruments as organ in the Cathedral of the Holy Trinity in Chełmża, churches in Zblew, Toruń, Police (one of the biggest towns of Szczecin agglomeration), Tczew, the Franciscan church in Łódź-Łagiewniki and Koszalin, the church in Czarna Woda and many other works, for the Academy of Music and Music Schools in Bydgoszcz, Gdańsk, Poznań, Warszawa, Łódź and Montabaur (Germany).',
          P2: 'Józef Mollin, encouraged by Marian Dorawa, MA from Toruń, in 1968 took a decision to renovate,  under Dorawa’s direction, antique pipe organ from 1774 in the Post-Observartine Church of the Nativity of the Blessed Virgin Mary in Zamarte next to Chojnice. It was the first restoration of the antique pipe organ in Poland. It was carried out in accordance with the rules of restoration. The aim of the conservation was to save the damaged instrument with the view to maintain its antique value. The afore-mentioned conservation was followed by the other conservative realisations performed under the conservator’s supervision close to such national heritage sites as: the positives in the chapel of the Castle of Warmian Bishops in Lidzbark Warmiński and the church in Przeczno, the pipe organs in the church in Radzyń Chełmiński, the positive in Wlóki, cross-section organ in the old town Church of St. John (at present the Cathedral of Toruń Diocese), the pipe organ of the Cathedral in Włocławek, the pipe organ in the Church of the Holy Cross in Pruszcz Gdański, in the Old Parish Church in Białystok, the regal and the pipe organ in the parish church in Tykocin, conservation of the pipe organ in the Church of St. Gertrude in Darłowo, etc.',
          P3: 'As one of the first pipe organ craftsmen in Poland, in 1979 Józef Mollin took a decision to build the pipe organ with mechanical action system (the pipe organ in the parish church in Jaktorów close to Warsaw.',
          P4: 'Apart from making the great organs, since 1990 Józef Molin has built also the 4-stop positives, used in small churches, chapels, small bands and orchestras both in Poland and abroad (Italy).',
          P5: 'For his lifetime achievement, Józef Mollin was honoured in 1983 with the title Master of Artisanal Handicraft by the Minister of Culture and National Heritage.',
          P6: 'Since 1980 Józef Mollin in his artistic work has been supported by his son Zdzisław Mollin, an electronic by profession, who continues artistic work of his father with the same success. Honoured in 1985 with a journeyman trade certificate and in 1991 with master craftsman certificate he was enhancing his qualifications in Germna companies (Heuss and Kreienbrink).',
          P7: 'The shared masterpiece of Józef and Zdzisław Mollins are the new pipe organ in the Church of the Blessed Virgin Mary the Queen of the Holy Rosary in Gdańsk Przymorze and the church of St. Stanislav the Bishop in Gdańsk Wrzeszcz and the reconstruction of the pipe organ, damaged by many alterations, in the castle church of St. Jack in Słupsk carried out in the recent years. The realisation of the afore-mentioned works is facilitated thanks to an extended workshop, which is equipped with the cutting-edge, specialised tools as well as an assembly hall and a yard for the season hardwood and conifer wood.',
          P8: 'The reconstruction of cross-section organ in the Cathedral Basilica of the Assumption in Pelplin in 2003 was the crown of a few dozen years of Józef and Zdzisław Mollin’s organ craftsmanship activity.',
          P9: 'Zdzisław Mollin, running his company independently, has crafted many new instruments and has restored a lot of antique organs in different Polish cities. In 2007, for the entire 50 years of running his company, Zdzisław Mollin was honoured with the order of ',
          P10: 'merit for the Pelplin Diocese by the Bishop of Pelplin.'
      },
      HOW_WE_BUILD:{
        TITLE: 'How we build',
          COVER:{
          TITLE: 'Organ case',
            CONTENT: 'We make the architectural projects on our own or collaborating with interior designers. Each project is customised and adjusted to architectural style of a given interior. Cases are made from oak and ash trees. We use veneered panels or solid wood.',
            CONTENT_STRONG: 'The whole organ case is contained in an organ chamber (roof, walls).'
        },
        COUNTER:{
          TITLE: 'Console – key desk',
            P1: 'It is built in an organ case as an organ key rack or it can be detached. It is made from different kinds of solid wood or it is veneered.',
            L1: 'Keyboards',
            L1_CONTENT: 'They are made from pine tree wood (single or double lever) with facings made from exotic wood. Pedal keyboards are made from oak tree wood with the parallel, concave layout of keys.',
            L2: 'Manubria',
            L2_CONTENT: 'Manubria are turned from exotic wood with numbers of trackers. Plates are engraved in metal or wood.',
            L3: 'Manual couplers',
            L3_CONTENT: 'They are made from hornbeam wood in the form of control arms and they are fixed in felt bearings. Metal torsion rollers with hornbeam arms are fixed in felted boards. It is possible to install Setzer (electronic memory) by Heuss and Electronic Coupler System by Heuss.'
        },
        GAME_TRACKER:{
          TITLE: 'Mechanic action systems',
            CONTENT: 'Mechanic action systems have been built in the Molin Company since 1979. They are constantly modified due to the cooperation with two German companies, namely Heuss and Laukhuff. Wooden abstracts are made from pine tree wood – wooden slats. Torsion bars are made from oak tree wood with arms made from hornbeam wood, fixed in felted boards or made from aluminium pipes with hornbeam arms. Torsion bars are fixed in oak plywood board. Bevels and control arms are wooden, made from horbeam, fixed in felted boards.'
        },
        REGISTRY_TRACKER:{
          TITLE: 'Tracker action systems  – mechanic or electric',
            CONTENT: 'The tracker action system is composed of torsion rollers and metal control arms as well as bars made from oak tree wood. Tracker can be also electric thanks to bolted electromagnets.'
        },
        BARGE:{
          TITLE: 'Wind chests',
            CONTENT: 'Wind chests are valve plate – bolt from oak tree wood. At the bottom of a wind chest in ventilation box a wedge bellows with valve is installed. The tune valves are made from pine tree wood. They are felted and leathered. The size of inlet valve is measured on the basis of a number of tunes in the wind chest. Band of a tune valve  goes through the botton of a wind chest in a form of a leather console. Tracker sliders are made from oak tree wood or bakelite. Boards and reed tongue pipe racks are made from oak tree wood. The insulations between boards and bolts are made from foam in the form of rollers.'
        },
        BELLOWS:{
          TITLE: 'Bellows',
            CONTENT: 'We can distinguish two types of bellows, namely wedge bellows and floating bellows (units 3 or 4 pairs of bellows). They are made from pine tree wood and leather. The pairs of bellows are supplied with an air adjuster.'
        },
        FANS:{
          TITLE: 'Fans',
            CONTENT: 'We import them from abroad.'
        },
        PIPES:{
          TITLE: 'Pipes',
            CONTENT: 'All pipes: metal and wooden, labial and reed tongue are made by us. Labial pipes from tin alloy have been made by us since the 70s of the 20th century. The reed tongue pipes are made by us or they are imported from abroad. Metal labial pipes and reed tongue pipes are made from alloys of tin and leed with different amounts of tin, e.g., 25%, 50%, 70% i 80%. Tin for pipes is cast, cut and polished or hammered. Prospect pipes are made from high-grade alloys of tin. Wooden pipes are made from season pine and oak tree wood.'
        },
        INTONATION:{
          TITLE: 'Tuning',
            CONTENT: 'Initial tuning is carried out in our workshop with the use of trial wind chest. Air pressure oscillates between 60-80 mm of water columns. Different temperaments are used during tuning of an instrument.'
        },
        MONTAGE:{
          TITLE: 'Assembly',
            CONTENT: 'Initial assembly takes place in our assembly hall in the Mollin Company (the hall is 8 metres high). An instrument is assembled together with pipes and action systems. Before an instrument is assembled at a client’s place, it is possible to examine all the sub-systems and their efficiency. After that, an instrument is disassembled, packed and transported to its final destination. This method of assembling shortens a final assembly significantly.'
        }
      },
      REALISATIONS:{
        TITLE: 'Realisations',
          P1: 'To facilitate browsing through our realisations, organs made by us are divided into:',
          NEW: 'New',
          NEW_TITLE: 'New realisation',
          RENOVATIONS: 'Restoration',
          IN_PROGRESS: 'Under work',
          YEAR: 'Year:',
          TRACKER: 'Action:',
          VOICES: 'Number of tunes:',
          MANUALS: 'Manuals:',
          DETAILS: 'The details of realisation',
          REALISATIONS_IN_PROGRESS: 'Under realisation',
          CREATOR: 'Craftsman:',
          BUILT_YEAR: 'Year of realisation:',
          DETAILS_TITLE: 'Realisations',
          RENOVATIONS_TITLE: 'Realisations restorations'
      },
      REFERENCES:{
        TITLE: 'References',
          CONTENT: 'The following CDs were recorded with the use of the instruments built by the Mollin Company:'
      },
      CONTACT:{
        TITLE: 'Contact',
          CONTENT: 'Should you be interested in our offer and realisations, do not hesitate to contact us:'
      }
    });


  $translateProvider.fallbackLanguage(['pl', 'de', 'en']);
      var prefferedLanguage = sessionStorage.lang ? sessionStorage.lang : 'pl';
      $translateProvider.preferredLanguage(prefferedLanguage);
    }]);
});
