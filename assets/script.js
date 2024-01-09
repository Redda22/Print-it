// Contenus de textes et d'adresses d'images des 4 différentes slides.
const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowLeft  = document.querySelector(".arrow_left"); // flèche gauche.
const arrowRight = document.querySelector(".arrow_right");// flèche droite.
const dots       = document.querySelectorAll(".dot");
const bannerImg  = document.querySelector(".banner-img");
const text       = document.querySelector(".text");
let imgUrl       = ""; // Url d'images pour l'instant vièrge.
var slideState = 1;    // État initial à 1, celle-ci correspond à l'état de la slide (1ère image, 1er texte, 1ère dot).

state(); // lancement de la fonction state avec slideState à 1, afin de lancer le cas initial.

// Écouteur de clique flèche gauche.
arrowLeft.addEventListener("click", function () {
	slideState--; // Soustraction en cas de clique gauche.

	// Condition de retour à la slide 4 si l'état de la slide est inférieur à 1.
	if (slideState < 1) {
		slideState = 4;
	}
	state(); // Appel de la fonction state afin d'effectuer les changements de valeurs sur la slide.
})


// Écouteur de clique flèche droite.
arrowRight.addEventListener("click", function () {
	slideState++; // Addition en cas de clique droit.

	// Condition de retour à la slide 1 si l'état de la slide est supérieur à 4.
	if (slideState > 4) {
		slideState = 1;
	}
	state();
})

// Fonction destiné à appliquer tous les changements de valeurs dû à slideState.
function state() {
	// Détermination du contenus à afficher selon le cas de slideState, ça varie donc entre 1 et 4.
	switch (slideState) {
		case 1:
			imgUrl = slides[0].image; // Détermination de l'adresse de l'image 1 dédié à la slide 1.
			bannerImg.src = imgUrl; // Implémentation de l'adresse à la balise img, afin d'afficher l'image.

			text.innerHTML = slides[0].tagLine; // Détermination du texte selon le protocole html afin d'implémenter le le contenu de p, et prendre en compte la span.
			
			// Association et dissociation de la classe dot-selected, afin d'appliquer ou non le code css lié à cette classe, ainsi on peut se localiser entre les slides.
			dots[0].classList.add("dot_selected");
			dots[1].classList.remove("dot_selected");
			dots[2].classList.remove("dot_selected");
			dots[3].classList.remove("dot_selected");
			break;
		case 2:
			imgUrl = slides[1].image;
			bannerImg.src = imgUrl;
			text.innerHTML = slides[1].tagLine;
			dots[0].classList.remove("dot_selected");
			dots[1].classList.add("dot_selected");
			dots[2].classList.remove("dot_selected");
			dots[3].classList.remove("dot_selected");
			break
		case 3:
			imgUrl = slides[2].image;
			bannerImg.src = imgUrl;
			text.innerHTML = slides[2].tagLine;
			dots[0].classList.remove("dot_selected");
			dots[1].classList.remove("dot_selected");
			dots[2].classList.add("dot_selected");
			dots[3].classList.remove("dot_selected");
			break;
		case 4:
			imgUrl = slides[3].image;
			bannerImg.src = imgUrl;
			text.innerHTML = slides[3].tagLine;
			dots[0].classList.remove("dot_selected");
			dots[1].classList.remove("dot_selected");
			dots[2].classList.remove("dot_selected");
			dots[3].classList.add("dot_selected");
			break;
	}
}
