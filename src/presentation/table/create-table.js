
export const createTable = () =>{
    
    const table = document.createElement('table');
    table.classList.add("table", "table-striped")
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>It is dangerous</th>
            <th>Absolute magnitude</th>
            <th>Diameter min</th>
            <th>Diameter max</th>
            <th>Close approach date</th>
            <th>Relative velocity(km/h)</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append( tableHeaders, tableBody )
    return table;
}