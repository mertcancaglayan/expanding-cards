const cards = document.querySelectorAll(".image-container");

let expandedCard = null;

function removeBlur() {
    cards.forEach((otherCard) => {
        otherCard.classList.remove("blur");
    });
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (expandedCard !== card) {
            if (expandedCard) {
                expandedCard.classList.remove("expand");
            }

            expandedCard = card;
            card.classList.add("expand");
            removeBlur();
            cards.forEach((otherCard) => {
                if (otherCard !== card) {
                    otherCard.classList.add("blur");
                }
            });
        } else {
            expandedCard.classList.remove("expand");
            expandedCard = null;
            removeBlur();
        }
    });
});
