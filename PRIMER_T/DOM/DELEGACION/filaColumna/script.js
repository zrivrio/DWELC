document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.querySelector("#myTable");
    const info = document.querySelector("#info");
    let resaltoAnt = []; // To store previous row and column cells for resetting

    // Select all <td> elements in the table
    const cells = tabla.querySelectorAll("td");

    // Add event listener to each <td> cell
    cells.forEach(cell => {
        cell.addEventListener('click', function (event) {
            const row = cell.parentNode.rowIndex;
            const col = cell.cellIndex;
            
            // Clear previous highlights
            resaltoAnt.forEach(c => c.classList.remove('highlight'));
            resaltoAnt = [];

            // Change the color based on key press
            if (event.ctrlKey) {
                cell.style.backgroundColor = 'lightpink';
            } else if (event.shiftKey) {  // Corrected typo from `shiftlKey` to `shiftKey`
                cell.style.backgroundColor = 'lightblue';
            } else {
                cell.style.backgroundColor = 'lightgreen';
            }

            // Get all cells in the same row and column
            const rowCells = Array.from(tabla.rows[row].cells);
            const colCells = Array.from(tabla.rows).map(row => row.cells[col]);

            // Highlight row and column cells and store them for resetting
            rowCells.forEach(c => {
                if (c !== cell) {
                    c.classList.add('highlight');
                    resaltoAnt.push(c);
                }
            });

            colCells.forEach(c => {
                if (c !== cell) {
                    c.classList.add('highlight');
                    resaltoAnt.push(c);
                }
            });

            // Create an object with the required properties
            const cellInfo = {
                tag: cell.tagName,
                id: cell.id || 'No ID',
                textContent: cell.textContent,
                rowTextContent: rowCells.map(c => c.textContent),
                colTextContent: colCells.map(c => c.textContent)
            };

            // Display the cell information
            info.innerHTML = `
                <p>Tag: ${cellInfo.tag}</p>
                <p>ID: ${cellInfo.id}</p>
                <p>Text Content: ${cellInfo.textContent}</p>
                <p>Row Content: ${cellInfo.rowTextContent.join(', ')}</p>
                <p>Column Content: ${cellInfo.colTextContent.join(', ')}</p>
            `;
        });
    });
});
