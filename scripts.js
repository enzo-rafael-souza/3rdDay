function frontEndOrBackEnd() {
    const decision1 = prompt("Você quer seguir para a área de Front-End ou Back-End?\nDigite 'Front' ou 'Back'");
    
    if (decision1 === "Front") {
        frontEndChoices();
    } else if (decision1 === "Back") {
        backEndChoices();
    } else {
        alert("Escolha inválida. Por favor, digite 'Front' ou 'Back'.");
        frontEndOrBackEnd();
    }
}

function frontEndChoices() {
    const decision2 = prompt("Você quer aprender React ou Vue?\nDigite 'React' ou 'Vue'");

    if (decision2 === "React") {
        showResult("Front-End", "React");
    } else if (decision2 === "Vue") {
        showResult("Front-End", "Vue");
    } else {
        alert("Escolha inválida. Por favor, digite 'React' ou 'Vue'.");
        frontEndChoices();
    }
}

function backEndChoices() {
    const decision2 = prompt("Você quer aprender C# ou Java?\nDigite 'C#' ou 'Java'");

    if (decision2 === "C#") {
        showResult("Back-End", "C#");
    } else if (decision2 === "Java") {
        showResult("Back-End", "Java");
    } else {
        alert("Escolha inválida. Por favor, digite 'C#' ou 'Java'.");
        backEndChoices();
    }
}

function showResult(area, tech) {
    const decision3 = prompt(`Você escolheu ${area} e deseja aprender ${tech}.\nQue legal 😊\nAgora você pode escolher se especializar ou se tornar Fullstack.\nDigite 'Especializar' ou 'Fullstack'`);

    if (decision3 === "Especializar") {
        const technologies = [];
        learnTechnologies(technologies);
    } else if (decision3 === "Fullstack") {
        alert("Parabéns, você escolheu se desenvolver como Fullstack!");
        const technologies = [];
        learnTechnologies(technologies);
    } else {
        alert("Escolha inválida. Por favor, digite 'Especializar' ou 'Fullstack'.");
        showResult(area, tech);
    }
}

function learnTechnologies(techList) {
    const tech = prompt("Quais tecnologias você gostaria de aprender?\nDigite o nome de uma tecnologia:");
    techList.push(tech);

    const moreTech = prompt("Tem mais alguma tecnologia que você gostaria de aprender?\nDigite 'ok' para continuar ou 'sair' para encerrar.");

    if (moreTech.toLowerCase() === "ok") {
        learnTechnologies(techList);
    } else if (moreTech.toLowerCase() === "sair") {
        showTechList(techList);
    } else {
        alert("Resposta inválida. Por favor, digite 'ok' ou 'sair'.");
        learnTechnologies(techList);
    }
}

function showTechList(techList) {
    let message = "Você gostaria de aprender as seguintes tecnologias:\n";
    techList.forEach((tech, index) => {
        message += `${index + 1}. ${tech}\n`;
    });
    alert(message);
    alert("Obrigado por jogar! Espero que você se desenvolva muito em suas escolhas!");
}

frontEndOrBackEnd();