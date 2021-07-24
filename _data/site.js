const seiskat_pages = [
    {
      "fi": "/seiskat/ohjeet.html",
      "sv": "/seiskat/sv/regler.html",
      "en": "/seiskat/en/details.html"
    },
    {
      "fi": "/seiskat/jarjestajat.html",
      "sv": "/seiskat/sv/arrangorer.html",
      "en": "/seiskat/en/organizers.html"
    },
    {
      "fi": "/seiskat/tehtavat.html",
      "sv": "/seiskat/sv/problem.html",
      "en": "/seiskat/en/problems.html"
    },
    {
      "fi": "/seiskat/tulokset.html",
      "sv": "/seiskat/sv/resultat.html",
      "en": "/seiskat/en/results.html"
    },
    {
      "fi": "/seiskat/yhteys.html",
      "sv": "/seiskat/sv/kontakt.html",
      "en": "/seiskat/en/contact.html"
    },
    {
      "fi": "/seiskat/",
      "sv": "/seiskat/sv/",
      "en": "/seiskat/en/"
    }
];
var seiskat_pages_by_pair = {fi: {}, sv: {}, en: {}};
for (const x of seiskat_pages) {
    seiskat_pages_by_pair["fi"][x.fi] = x;
    seiskat_pages_by_pair["sv"][x.sv] = x;
    seiskat_pages_by_pair["en"][x.en] = x;
}

module.exports = {
    seiskat_pages,
    seiskat_pages_by_pair
};

    
