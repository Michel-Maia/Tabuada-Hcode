let tabuada = document.querySelector("#tabuada tbody");
let valorA = 5;

tabuada.innerHTML = '';

for (let valorB = 0; valorB <= 10; valorB++) {

    let resultado = valorA * valorB;

    let template = `
        
            <td>${valorA}</td>
            <td>X</td>
            <td>${valorA}</td>
            <td>=</td>
            <td>${resultado}</td>
        `;

        let tr = document.createElement('tr');

        tr.innerHTML = template;

        tabuada.append(tr); 

}