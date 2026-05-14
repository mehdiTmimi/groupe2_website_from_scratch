const viderForm = () => {
    document.getElementById("name").value = ""
    document.getElementById("date").value = ""
    document.getElementById("terrain").value = ""
    document.getElementById("start").value = ""
    document.getElementById("end").value = ""
}
resetBtn.addEventListener("click", () => {
    viderForm()
})
submitBtn.addEventListener('click', () => {
    //recuperation des valeurs
    // jour,mois,heureDepart,heureFin,sport,terrain,nom
    let dateValue = date.value // jour et le mois
    let heureDepart = start.value
    let heureFin = end.value
    const optionSelected = terrain.options[terrain.selectedIndex]
    let terrainValue = optionSelected.textContent
    let sportValue = optionSelected.parentElement.getAttribute("label")
    let nom = document.getElementById("name").value
    // validation du formulaire
    if (dateValue == "" || heureDepart == "" || heureFin == "" || terrainValue == "" ||
        sportValue == "" || nom == ""
    )
        return alert("please fill all the required fields")

    // preparation des donnees
    let d = new Date(date.value)
    let mois = d.toLocaleString("en-US", { month: "short" })
    let jour = d.toLocaleString("en-US", { day: "numeric" })

    let data = {jour, mois, heureDepart, heureFin, sport : sportValue, terrain : terrainValue, nom}
    addReservation_version2(data)

    // vider 
    viderForm()


})