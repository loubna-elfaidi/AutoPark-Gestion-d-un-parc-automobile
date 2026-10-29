import { voituresInitiales } from "./data.js";
let voitures = voituresInitiales;
let prochainId = 7;
let idModifier = null;

const tbody = document.querySelector("#liste-voitures");
const input_marque = document.querySelector("#marque");
const input_modele = document.querySelector("#modele");
const input_immatriculation = document.querySelector("#immatriculation");
const input_categorie = document.querySelector("#categorie");
const input_prixJour = document.querySelector("#prix-jour");
const input_statut = document.querySelector("#statut");
const erreur_marque = document.querySelector("#erreur_marque");
const erreur_modele = document.querySelector("#erreur_modele");
const erreur_immatriculation = document.querySelector("#erreur_immatriculation");
const erreur_categorie = document.querySelector("#erreur_categorie");
const erreur_prix_jour = document.querySelector("#erreur_prix_jour");
const erreur_statut = document.querySelector("#erreur_statut");
const form = document.querySelector("#formulaire-voiture");



function afficherVoitures() {
    tbody.textContent = ""
    voitures.forEach(function (d) {
        const tr = document.createElement("tr")
        const tdMarque = document.createElement("td")
        const strong = document.createElement("strong")
        strong.textContent = d.marque
        tdMarque.append(strong)

        const tdModele = document.createElement("td")
        tdModele.textContent = d.modele

        const tdMatricule = document.createElement("td")
        const spanMatricule = document.createElement("span")
        spanMatricule.textContent = d.immatriculation
        tdMatricule.append(spanMatricule)

        const tdCategorie = document.createElement("td")
        tdCategorie.textContent = d.categorie

        const tdPrice = document.createElement("td")
        const spanPrice = document.createElement("span")
        spanPrice.textContent = d.prixJour
        tdPrice.append(spanPrice)

        const tdStatut = document.createElement("td")
        const spanStatut = document.createElement("span")
        spanStatut.textContent = d.statut
        tdStatut.append(spanStatut)

        const tdBtn = document.createElement("td")
        const div = document.createElement("div")
        div.className = "row-actions"
        const buttonModifier = document.createElement("button")
        buttonModifier.setAttribute("type", "button")
        buttonModifier.className = "button button-edit"
        buttonModifier.setAttribute("data-action", "modifier")
        buttonModifier.setAttribute("data-id", d.id)
        buttonModifier.setAttribute("aria-label", `Modifier ${d.marque} ${d.modele}, ${d.immatriculation}`);
        buttonModifier.textContent = "Modifier";
        buttonModifier.addEventListener("click", () => {
            Modifier(d.id);
            idModifier = d.id;
        })
        const buttonSupprimer = document.createElement("button")
        buttonSupprimer.setAttribute("type", "button")
        buttonSupprimer.className = "button button-delete"
        buttonSupprimer.setAttribute("data-action", "supprimer")
        buttonSupprimer.setAttribute("data-id", d.id)
        buttonSupprimer.setAttribute("aria-label", `supprimer ${d.marque} ${d.modele}, ${d.immatriculation}`);
        buttonSupprimer.textContent = "Supprimer";
        buttonSupprimer.addEventListener("click", () => {
            supprimer(d.id);
        })
        div.append(buttonModifier, buttonSupprimer)
        tdBtn.append(div)
        tr.append(tdMarque, tdModele, tdMatricule, tdCategorie, tdPrice, tdStatut, tdBtn)
        tbody.append(tr)
    })
}
afficherVoitures();


// Ajouter

const formulaire = document.querySelector("#bouton-enregistrer");
formulaire.addEventListener("click", function (event) {
    event.preventDefault();
    const nouvelleVoiture = {
        id: prochainId,
        marque: input_marque.value.trim(),
        modele: input_modele.value.trim(),
        immatriculation: input_immatriculation.value.trim(),
        categorie: input_categorie.value,
        prixJour: input_prixJour.value,
        statut: input_statut.value

    }


    if (idModifier === null) {
        voitures.push(nouvelleVoiture);
        form.reset();
        prochainId++
    }
    else {

        const voiture = voitures.find((v) => v.id === idModifier);
        let index = voitures.indexOf(voiture);
        const modifierVoiture = {
            id: voiture.id,
            marque: input_marque.value.trim(),
            modele: input_modele.value.trim(),
            immatriculation: input_immatriculation.value.trim(),
            categorie: input_categorie.value,
            prixJour: input_prixJour.value,
            statut: input_statut.value

        }
        voitures[index] = modifierVoiture;
        idModifier = null;
    }

    afficherVoitures();

});


function supprimer(id) {
    const voiture = voitures.find((v) => v.id === id);
    if (!voiture) return;
    if (!confirm(
        `Voulez-vous vraiment supprimer ${voiture.marque} ${voiture.modele} (${voiture.immatriculation}) ?`
    )) return;
    voitures = voitures.filter((v) => v.id !== id);
    afficherVoitures();
}

function Modifier(id) {
    const voiture = voitures.find((v) => v.id === id);
    if (!voiture) return;
    input_marque.value = voiture.marque;
    input_modele.value = voiture.modele;
    input_immatriculation.value = voiture.immatriculation;
    input_categorie.value = voiture.categorie;
    input_prixJour.value = voiture.prixJour;
    input_statut.value = voiture.statut;
    document.querySelector("#titre-formulaire").textContent = "Enregistrer les modifications";
    document.querySelector("#annuler-modification").hidden = false;
    document.querySelector("#bouton-enregistrer").textContent = "Modifier la voiture";


} if (idModifier !== null) {
    const voituremodifier = voituresInitiales.find((v) => v.id === idModifier)


    if (voituremodifier) {
        voituremodifier.marque = input_marque;
        voituremodifier.modele = input_modele;
        voituremodifier.immatriculation = input_immatriculation;
        voituremodifier.categorie = input_categorie;
        voituremodifier.prixJour = input_prixJour;
        voituremodifier.statut = input_statut;
        idModifier = null;
        
    }


}

