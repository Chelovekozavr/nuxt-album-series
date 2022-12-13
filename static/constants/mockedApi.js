const topAlbumMock = {
 "topAlbum": {
   "name": "lastnewAlbum",
     "album": {
       "id": "104",
       "banner": 2,
       "title": "Alix Senator (Tome 12) - Le Disque d'Osiris",
       "Synopsis": "Dans la cité sacrée d’Abydos, une lueur tranche dans l’obscurité, Enak vient d’ouvrir une boîte contenant les ossements de son fils. Soudain, il est assommé. De mystérieux prêtres sont présents à son réveil. Ils promettent à Enak un remède au mal qui le ronge. En échange, il devra retrouver la cité des Atlantes, ces hommes légendaires au savoir immense. Rejoint par Alix et Tefnout, ils se lancent dans la quête de la mythique Atlantide. Ensemble, ils devront remonter jusqu'aux sources du Nil pour trouver les portes de la cité engloutie.",
       "volume": "12",
       "chapter": null,
       "language": "fr",
       "onlyRead": false,
       "serie_id": "123",
       "serie_name": "Alix Senator",
       "serie_slug": "alix-senator",
       "shelf_name": "BD",
       "shelf_slug": "bd",
       "gender_name": "Historique",
       "gender_slug": "historique",
       "inSubscription": false,
       "previewAvailable": true,
       "fullAvailable": true,
       "price": "9.99",
       "currency": "EUR",
       "priceHTML": "9€<sup>99</sup>",
       "authors": [
         {
           "nickname": "Jacques Martin"
         },
         {
           "nickname": "Thierry Démarez"
         }
       ],
       "publisher": {
         "name": "Casterman"
       }
     }
   }
};

const teasersMock = {
  "list": [
    {
      "id": "163",
      "url": "https://mocklab.io/1",
      "title_bold": "Devenir Super-Lecteur",
      "title_normal": "Rédigez des avis en échange d'albums gratuits"
    },
    {
      "id": "468",
      "url": "https://mocklab.io/2",
      "title_bold": "La Sagesse des Mythes",
      "title_normal": "Des épopées spectaculaires"
    },
    {
      "id": "442",
      "url": "https://mocklab.io/3",
      "title_bold": "Les meilleures BD à venir",
      "title_normal": "Préparez la rentrée en précommandant"
    },
    {
      "id": "443",
      "url": "https://mocklab.io/4",
      "title_bold": "Teaser 443 bold",
      "title_normal": "Teaser 443 normal"
    },
    {
      "id": "444",
      "url": "https://mocklab.io/5",
      "title_bold": "Teaser 444 bold",
      "title_normal": "Teaser 444 normal"
    },
    {
      "id": "445",
      "url": "https://mocklab.io/6",
      "title_bold": "Teaser 445 bold",
      "title_normal": "Teaser 445 normal"
    }
  ]
};

const listOfSeriesesMock =  [
  {
    "slug":"new",
    "name":"new",
    "id":"new",
    "type":"new",
    "series":[
      {
        "id":"1",
        "name":"Journal Spirou",
        "slug":"journal-spirou",
        "language":"fr",
        "shelf_id":"1",
        "shelf_name":"BD",
        "shelf_slug":"bd",
        "gender_name":"Magazine",
        "gender_slug":"magazine",
        "synopsis":"Le <em>Journal de Spirou</em> est une publication emblématique du 9<sup>ème</sup> Art. Créé en 1938 par Jean Dupuis, il va rapidement devenir le fer de lance de la bande dessinée franco-belge. De très nombreux auteurs ont œuvré dans ses pages et de nombreuses séries aujourd’hui considérées comme des classiques y ont fait leur début. <em>Les Tuniques Bleues, Cédric, Lucky Luke, Gaston</em>, toutes ses séries sont encore lues par des milliers de lecteurs chaque semaine. Chaque mercredi, retrouvez le dernier numéro du journal et découvrez les dernières séries pré-publiées comme <em>Les Nombrils, Harmony, Dad </em>ou encore <em>Magic 7</em> !",
        "gender":"Magazine",
        "albums_count":68,
        "target":{
          "id":"5",
          "name":"Tout Public"
        },
        "lowest_price":"1.99",
        "lowest_currency":"EUR",
        "lowest_price_html":"1€<sup>99</sup>",
        "lowest_oldprice":"N/A",
        "lowest_oldprice_html":"N/A",
        "banner":2
      },
      {
        "id":"2",
        "name":"Jour J",
        "slug":"jour-j",
        "language":"fr",
        "shelf_id":"1",
        "shelf_name":"BD",
        "shelf_slug":"bd",
        "gender_name":"Science Fiction",
        "gender_slug":"science-fiction",
        "synopsis":"1503 : Les machines de guerre de Leonardo Da Vinci révolutionnent l’art de la guerre en Méditerranée… Un opus machiavélique instrumentalisé par Fred Duval, Jean-Pierre Pécau et Igor Kordey.Cinquante ans après la chute de Constantinople, la citadelle ottomane de Smyrne, tombe aux mains des Mamelouks. Fait étrange, ces derniers auraient employé des machines de guerre très inhabituelles. Et si de Vinci avait vendu ses inventions ? Le pape veut en savoir plus. Dans l’ombre, quelqu’un tire les ficelles…",
        "gender":"Science Fiction",
        "albums_count":48,
        "target":{
          "id":"2",
          "name":"12 ans et +"
        },
        "lowest_price":"8.99",
        "lowest_currency":"EUR",
        "lowest_price_html":"8€<sup>99</sup>",
        "lowest_oldprice":"N/A",
        "lowest_oldprice_html":"N/A",
        "banner":6
      },
      {
        "id":"3",
        "name":"Le Roi des Mapuche",
        "slug":"le-roi-des-mapuche",
        "language":"fr",
        "shelf_id":"1",
        "shelf_name":"BD",
        "shelf_slug":"bd",
        "gender_name":"Historique",
        "gender_slug":"historique",
        "synopsis":"C’est l’histoire tragique d’un peuple, les Indiens Mapuche, dans les années 1860, qui vit sur les terres d’Araucanie et de Patagonie, dont les armées d’Argentine et du Chili veulent s’approprier les territoires. C’est l’histoire d’un homme, Antoine de Tounes, un modeste juriste de Périgueux, qui débarque au Chili animé par une idée fixe : être roi, et qui le deviendra sous le nom d’Orélie-Antoine 1er. Il crééra le royaume indépendant Mapuche pour lutter contre cette colonisation. S’il est cru au Chili, on le moque en France. Magnil, le grand chef des Mapuche, rencontre dans un rêve un étranger monté sur un cheval blanc. Pour les oracles, le message est clair, il s’agit de Cherbubue, le puissant chef que son peuple attend pour les guider face aux envahisseurs chiliens. Le 17 novembre 1860, Antoine de Lunens, un aventurier français poussé par un même rêve, a tout quitté pour venir au Chili à la rencontre des Indiens. Il est couronné roi des Mapuche par le fils de Magnil, Kilapan, dont le père avait raconté son rêve prémonitoire. Il déclare la fondation du royaume d’Auricanie et de Patagonie et revendique les territoires occupés par les tribus Mapuche que revendiquent aussi le Chili et l’Argentine. Arrêté par les autorités chiliennes, mis en prison, il est jugé fou et expulsé du pays. Huit ans plus tard, il monte une nouvelle expédition pour venir en aide aux Mapuche et récupérer son royaume… De cette histoire vraie, extraordinaire, Nicolas Dumontheuil et Christophe Dabitch tirent un récit libre, où le vrai et le faux s’entremêlent pour mieux en montrer le caractère tragi-comique.",
        "gender":"Historique",
        "albums_count":2,
        "target":{
          "id":"5",
          "name":"Tout Public"
        },
        "lowest_price":"11.99",
        "lowest_currency":"EUR",
        "lowest_price_html":"11€<sup>99</sup>",
        "lowest_oldprice":"N/A",
        "lowest_oldprice_html":"N/A",
        "banner":2
      }
    ],
    "current":"0"
  },
  {
    "slug":"preorder",
    "name":"preorder",
    "id":"preorder",
    "type":"top",
    "series":[

    ],
    "current":1
  },
  {
    "slug":"goodDeals",
    "name":"goodDeals",
    "id":"goodDeals",
    "type":"goodDeals",
    "series":[
      {
        "id":"21",
        "name":"Les Ailes de l'espérance",
        "slug":"les-ailes-de-l-esperance",
        "language":"fr",
        "shelf_id":"1",
        "shelf_name":"BD",
        "shelf_slug":"bd",
        "gender_name":"Historique",
        "gender_slug":"historique",
        "synopsis":"Été 1940. Tandis que la guerre fait rage dans les cieux de l'Angleterre, le petit Tom, passionné par les avions, adore les visites que les aviateurs d'une base de la RAF font à sa mère, Ruby. Celle-ci, obligée de se prostituer après la mort de son mari, fait croire à Tom que, comme dans un conte de fées, les soldats lui rendent visite pour qu'elle choisisse lequel d'entre eux sera son nouveau papa. Vic Stone, excellent pilote récemment transféré à la base, tombe amoureux de Ruby. Mais chaque nouveau jour et chaque nouveau vol peut être le dernier de la vie de Vic. Celui-ci, pilote d'un vieux Hawker-Hurricane, doit compter sur beaucoup de chance contre les Messerschmitts allemands bien supérieurs. Et le danger est partout. Le sadique Peter, souteneur de Ruby, n'est pas du tout content que sa protégée lui échappe. Il est prêt à tout, et même à la violence, pour maintenir son contrôle sur sa principale source de revenus.",
        "gender":"Historique",
        "albums_count":2,
        "target":{
          "id":"5",
          "name":"Tout Public"
        },
        "lowest_price":"3.99",
        "lowest_currency":"EUR",
        "lowest_price_html":"3€<sup>99</sup>",
        "lowest_oldprice":"N/A",
        "lowest_oldprice_html":"N/A",
        "banner":2
      },
      {
        "id":"22",
        "name":"La Malédiction des sept boules vertes",
        "slug":"la-malediction-des-sept-boules-vertes",
        "language":"fr",
        "shelf_id":"1",
        "shelf_name":"BD",
        "shelf_slug":"bd",
        "gender_name":"Jeunesse",
        "gender_slug":"jeunesse",
        "synopsis":"Voyageur imprudent, tu es un peu magicien, Guilio, tu poursuis ton rêve sur des chemins où se tendent mille pièges. Où le destin te prends en ses mains. Et pour te sauver, il te faut sans cesse aller de l'avant. La Poursuite, c'est tout ce qu'il te reste.",
        "gender":"Jeunesse",
        "albums_count":5,
        "target":{
          "id":"5",
          "name":"Tout Public"
        },
        "lowest_price":"3.99",
        "lowest_currency":"EUR",
        "lowest_price_html":"3€<sup>99</sup>",
        "lowest_oldprice":"5.99",
        "lowest_oldprice_html":"5€<sup>99</sup>",
        "banner":2
      }
    ],
    "current":"4"
  },
  {

  },
  {

  },
  {
    "slug":"documentaire",
    "name":"Documentaire",
    "id":"8",
    "type":"genre",
    "series":[
      {
        "id":"51",
        "name":"Le Droit du sol",
        "slug":"le-droit-du-sol",
        "language":"fr",
        "shelf_id":"1",
        "shelf_name":"BD",
        "shelf_slug":"bd",
        "gender_name":"Documentaire",
        "gender_slug":"documentaire",
        "synopsis":"En juin 2019, Étienne Davodeau entreprend, à pied et sac au dos, un périple de 800 km, entre la grotte de Pech Merle et Bure. Des peintures rupestres, trésors de l’humanité encore protégés aux déchets nucléaires enfouis dans le sous-sol, malheur annoncé pour les espèces vivantes. Étienne Davodeau, sapiens parmi les sapiens, interroge notre rapport au sol. Marcheur-observateur, il lance l’alerte d’un vertige collectif imminent et invite à un voyage dans le temps et dans l’espace. De quelle planète les générations futures hériteront-elles ? Qu’allons-nous laisser à celles et ceux qui naîtront après nous ? Comment les alerter de ce terrible et réel danger pour leur survie ? Il est de notre responsabilité collective d’avancer sur les questions énergétiques pour protéger la ' peau du monde '. Dans cette marche à travers la France, il est parfois accompagné d’amis, de sa compagne, mais aussi de spécialistes, qu’il convoque sur ces sentiers pour qu’ils nous racontent l’histoire unique du sol de notre planète, ou encore celle du nucléaire et de ses déchets, dangereux pendant plusieurs centaines de milliers d’années. À la marge du témoignage et du journalisme augmenté, le Droit du sol marque le grand retour d’Étienne Davodeau à la bande dessinée de reportage.",
        "gender":"Documentaire",
        "albums_count":1,
        "target":{
          "id":"5",
          "name":"Tout Public"
        },
        "lowest_price":"17.99",
        "lowest_currency":"EUR",
        "lowest_price_html":"17€<sup>99</sup>",
        "lowest_oldprice":"N/A",
        "lowest_oldprice_html":"N/A",
        "banner":2
      },
      {
        "id":"52",
        "name":"Singes",
        "slug":"singes",
        "language":"fr",
        "shelf_id":"1",
        "shelf_name":"BD",
        "shelf_slug":"bd",
        "gender_name":"Documentaire",
        "gender_slug":"documentaire",
        "synopsis":"L’homme descend-t-il du singe ? Cette enquête graphique explore les rapports que nous entretenons avec nos cousins les singes. Si nous avons un ancêtre commun, nous avons suivi des branches différentes de l’évolution… Aurel est allé interviewer les plus grands primatologues (Frans de Waal, Sabrina Krief), une philosophe (Vinciane Despret) et des artistes (Patrick Bouchitey, le regretté Jean-Claude Carrière). Le grand retour à la bande dessinée d’Aurel, après tous les prix remportés avec son dessin animé Josep. Pour le premier tirage, les lecteurs pourront choisir leur singe ' préféré '. Quatre illustrations de couverture différentes seront proposées de manière aléatoire : chimpanzé, gorille, orang-outan et bonobo.",
        "gender":"Documentaire",
        "albums_count":1,
        "target":{
          "id":"5",
          "name":"Tout Public"
        },
        "lowest_price":"17.99",
        "lowest_currency":"EUR",
        "lowest_price_html":"17€<sup>99</sup>",
        "lowest_oldprice":"N/A",
        "lowest_oldprice_html":"N/A",
        "banner":2
      },
      {
        "id":"53",
        "name":"À la Maison des femmes",
        "slug":"a-la-maison-des-femmes",
        "language":"fr",
        "shelf_id":"1",
        "shelf_name":"BD",
        "shelf_slug":"bd",
        "gender_name":"Documentaire",
        "gender_slug":"documentaire",
        "synopsis":"Les violences faites aux femmes sont plus visibles qu'avant. Mais ces avancées sont fragiles et l'on craint toujours l'effet du moment qui ne dure pas. Des volontés se sont réunies au sein de la maison des femmes, plaine Saint Denis, qui s'obstinent à venir en aide à celles qui en ont besoin. Nicolas Wild, véritable éponge émotionnelle, est allé les interviewer. Son reportage est fort et édifiant...",
        "gender":"Documentaire",
        "albums_count":1,
        "target":{
          "id":"5",
          "name":"Tout Public"
        },
        "lowest_price":"16.99",
        "lowest_currency":"EUR",
        "lowest_price_html":"16€<sup>99</sup>",
        "lowest_oldprice":"N/A",
        "lowest_oldprice_html":"N/A",
        "banner":2
      }
    ],
    "current":"5"
  }
]

export { topAlbumMock, teasersMock, listOfSeriesesMock };
