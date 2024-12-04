// FIRST STEP
const firstStep = document.querySelector('#first');

function suivant() {
    const interneInput = firstStep.querySelector('#interne');
    const externeInput = firstStep.querySelector('#externe');
    const natureWrapper = firstStep.querySelector('#transport').closest('.row-fluid');
    const checkedNature = natureWrapper.querySelector(':checked');

    if (!interneInput.checked && !externeInput.checked) {
        alert('Veuillez cocher soit "Élève interne" soit "Demi-pensionnaire".');
        return;
    }

    if (null === checkedNature) {
        alert('Veuillez cocher au moins une nature de la demande.');
        return;
    }

    alert("Formulaire validé, passage à l'étape suivante.");
};

const femininInput = firstStep.querySelector('#feminin');
const élèveWrapper = femininInput.closest('.row-fluid');

let img = document.createElement('img');
élèveWrapper.appendChild(img);

function checkGenre(){
    img.src = femininInput.checked ? 'img/femme.png' : 'img/homme.png';
};

// SECOND STEP
