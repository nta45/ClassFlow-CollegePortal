Events.forEach(event => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${event.EventName}</td>
        <td>${event.EventLocation}</td>
        <td>${event.Date}</td>
        <td>${event.Time}</td>
        <td class="primary">Details</td>
    `;
    console.log(trContent);
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});