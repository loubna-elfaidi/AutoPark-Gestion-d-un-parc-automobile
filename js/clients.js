/*
 * AutoPark â€” Partie 2 : Composez votre location
 * Starter JavaScript â€” Ã  complÃ©ter par les apprenants.
 * Charger ce fichier dans votre HTML avec l'attribut defer.
 *
 * Parcours : vÃ©hicule et dates â†’ rÃ©cupÃ©ration â†’ options â†’ rÃ©capitulatif.
 * Les tarifs sont exprimÃ©s en MAD.
 */

// 1. CONFIGURATION : les donnÃ©es proposÃ©es par l'agence.
const config = {
  voitures: [
    {
      id: 1,
      marque: "Dacia",
      modele: "Sandero",
      immatriculation: "AUTO-001",
      categorie: "Citadine",
      prixJour: 250,
      statut: "Disponible",
    },
    {
      id: 2,
      marque: "Renault",
      modele: "Clio",
      immatriculation: "AUTO-002",
      categorie: "Citadine",
      prixJour: 300,
      statut: "Disponible",
    },
    {
      id: 3,
      marque: "Dacia",
      modele: "Duster",
      immatriculation: "AUTO-003",
      categorie: "SUV",
      prixJour: 450,
      statut: "Disponible",
    },
  ],

  modesRecuperation: [
    { id: "agence", nom: "Ã€ lâ€™agence", fraisFixes: 0 },
    { id: "aeroport", nom: "Ã€ lâ€™aÃ©roport", fraisFixes: 150 },
    { id: "adresse", nom: "Ã€ une adresse", fraisFixes: 100 },
  ],

  agences: ["Casablanca â€” Centre-ville", "Rabat â€” Agdal", "Marrakech â€” GuÃ©liz"],

  aeroports: ["Casablanca â€” Mohammed V", "Rabat â€” SalÃ©", "Marrakech â€” MÃ©nara"],

  options: [
    { id: "siegeBebe", nom: "SiÃ¨ge bÃ©bÃ©", prixParJour: 30 },
    {
      id: "conducteurSupplementaire",
      nom: "Conducteur supplÃ©mentaire",
      prixParJour: 200,
    },
  ],
};

// 2. SÃ‰LECTION : les choix de l'utilisateur, Ã  actualiser avec les formulaires.
// Les identifiants correspondent aux id dÃ©finis dans config.
// Les dates seront des chaÃ®nes au format AAAA-MM-JJ (valeur d'un input date).
const selectedConfig = {
  etape: 1,
  voitureId: null,
  dateDebut: "",
  dateFin: "",
  modeRecuperation: "agence",

  recuperation: {
    // Mode agence uniquement.
    heureRecuperation: "",

    // Mode aeroport uniquement.
    aeroport: "",
    numeroVol: "",
    heureArrivee: "",

    // Mode adresse uniquement.
    ville: "",
    adresse: "",
    heureLivraison: "",
  },

  options: {
    siegeBebe: false,
    conducteurSupplementaire: false,
  },
};

const cartes = document.querySelector("#cartes");

function afficherlocation() {
  config.voitures.forEach((voiture) => {
    cartes.textContent = "";
    const carte = document.createElement("div");
    carte.className = "carte";
    const carte_haut = document.createElement("div");
    carte_haut.className = "carte_haut";
    const categorie = document.createElement("span");
    categorie.className = "carte_categorie";
    categorie.textContent = voiture.categorie;
    const carte_choix = document.createElement("input");
    carte_choix.className = "carte_choix";
    carte_choix.setAttribute("type", "radio");
    carte_choix.setAttribute("name", "vehicule");
    carte.append(categorie, carte_choix);
    const div_voiture = document.createElement("div");
    const voiture_nom = document.createElement("h3");
    voiture_nom.className = "voiture_nom";
    voiture_nom.textContent = voiture.marque + '' + voiture.modele ; 
    const voiture_statut = document.createElement("p");
    voiture_statut.className = "voiture_statut";
    voiture_statut.textContent = voiture.statut ;
    const voiture_prix = document.createElement("p");
    voiture_prix.className = "voiture_prix";
    voiture_prix.textContent = voiture.prixJour;
    div_voiture.append(voiture_nom, voiture_statut, voiture_prix);
    cartes.append(carte, div_voiture);
  })
}
afficher();



