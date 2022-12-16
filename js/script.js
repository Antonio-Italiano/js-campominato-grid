/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 
caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro ed emetto un messaggio in console 
con il numero della cella cliccata.*/ 

/-------------------- FUNZIONI ------------------/
// FUNZIONE PER CREARE LA CELLA
const createCell = () => {
    // Creo la cella 
    const cell = document.createElement('div');
    cell.classList.add('col');
    return cell;
}

/-------------------- OPERAZIONI PRELIMINARI ------------/

// PRENDO ELEMENTI DOM 
const grid = document.getElementById('grid');
console.log(grid)

// IMPOSTAZIONI GRIGLIA
const rows = 10;
const cels = 10;
const totalCels = rows * cels;


/-------------------- OPERAZIONI PRELIMINARI ------------/

// STAMPO LE CELLE IN PAG 
for(let i = 1; i < totalCels + 1; i++) {
    // Creo la cella invocando la funzione createCell
    const cell = createCell();
    // Aggiungo cell come figlio di grid
    grid.appendChild(cell);
    
}
