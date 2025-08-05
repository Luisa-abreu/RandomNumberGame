document.getElementById("generateNumber").addEventListener("click",generateRandomNumber);

function generateRandomNumber () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let numberGuessed = parseInt(prompt("Adivinhe o número gerado: (1-100)"));

    while (randomNumber !== numberGuessed) {
        if (numberGuessed > randomNumber) {
            alert("o numero é menor! Tente de novo.");
        } else if (numberGuessed < randomNumber) {
            alert("O numero é maior! Tente de novo.");
        }

        numberGuessed = parseInt(prompt("Adivinhe o número gerado:"));

    }

    alert("Acertou! o numero era: " + randomNumber)
}

