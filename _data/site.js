const menuItems = {
  'index': {
    path: {
      fi: 'index.html',
      sv: 'index.html',
      en: 'index.html'
    },
    title: {
      fi: 'Alku',
      sv: 'Hem',
      en: 'Home'
    }
  },
  'ohjeet': {
    path: {
      fi: 'ohjeet.html',
      sv: 'regler.html',
      en: 'details.html'
    },
    title: {
      fi: 'Ohjeet ja säännöt',
      sv: 'Regler',
      en: 'Details'
    }
  },
  'jarjestajat': {
    path: {
      fi: 'jarjestajat.html',
      sv: 'arrangorer.html',
      en: 'organizers.html'
    },
    title: {
      fi: 'Järjestäjät',
      sv: 'Arrangörer',
      en: 'Organizers'
    }
  },
  'tehtavat': {
    path: {
      fi: 'tehtavat.html',
      sv: 'problem.html',
      en: 'problems.html'
    },
    title: {
      fi: 'Tehtävät ja vastaukset',
      sv: 'Problem och lösningar',
      en: 'Problems and Solutions'
    }
  },
  'tulokset': {
    path: {
      fi: 'tulokset.html',
      sv: 'resultat.html',
      en: 'results.html'
    },
    title: {
      fi: 'Tulokset',
      sv: 'Resultat',
      en: 'Results'
    }
  },
  'yhteys': {
    path: {
      fi: 'yhteys.html',
      sv: 'kontakt.html',
      en: 'contact.html'
    },
    title: {
      fi: 'Yhteystiedot',
      sv: 'Kontakta oss',
      en: 'Contact Information'
    }
  }
};

const menuOrder = ['index', 'ohjeet', 'jarjestajat', 'tehtavat', 'tulokset', 'yhteys'];

const languages = {
  fi: 'Suomeksi',
  sv: 'På svenska',
  en: 'In English'
};

const langPaths = {
  fi: '',
  sv: 'sv/',
  en: 'en/'
};

const siteTitle = {
  fi: '7. luokkalaisten alueellinen matematiikkakilpailu',
  sv: 'Regional matematiktävling för åk 7',
  en: 'Regional Mathematics Competition for 7th Graders'
};

// Map between Finnish slugs and language-specific slugs
const slugMap = {
  fi: { 
    'index': 'index',
    'ohjeet': 'ohjeet', 
    'jarjestajat': 'jarjestajat', 
    'tehtavat': 'tehtavat', 
    'tulokset': 'tulokset', 
    'yhteys': 'yhteys' 
  },
  sv: { 
    'index': 'index',
    'ohjeet': 'regler', 
    'jarjestajat': 'arrangorer', 
    'tehtavat': 'problem', 
    'tulokset': 'resultat', 
    'yhteys': 'kontakt' 
  },
  en: { 
    'index': 'index',
    'ohjeet': 'details', 
    'jarjestajat': 'organizers', 
    'tehtavat': 'problems', 
    'tulokset': 'results', 
    'yhteys': 'contact' 
  }
};

export const seiskat = {
    menuItems,
    menuOrder,
    languages,
    langPaths,
    siteTitle,
    slugMap,
};
