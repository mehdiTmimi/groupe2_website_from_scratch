const addReservation = (jour,mois,heureDepart,heureFin,sport,terrain,nom)=>{

        listReservation.innerHTML += `<li class="reservation-item">
                        <div class="rsv-date">
                            <span class="rsv-day">${jour}</span>
                            <span class="rsv-month">${mois}</span>
                        </div>
                        <div class="rsv-body">
                            <div class="rsv-top">
                                <h3 class="rsv-name">${nom }</h3>
                                <span class="tag tag-tennis">${sport}</span>
                            </div>
                            <div class="rsv-meta">
                                <span class="meta">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    ${heureDepart} → ${heureFin}
                                </span>
                                <span class="meta">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    ${terrain}
                                </span>
                            </div>
                        </div>
                        <div class="rsv-status">
                            <span class="status status-confirmed">Confirmée</span>
                        </div>
                    </li>`
}