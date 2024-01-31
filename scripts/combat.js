const actionButtons = document.querySelectorAll(".actions-btn");
const actionsButtonsSection =document.querySelector(".actions-btn-container");
const textZone = document.querySelector(".text-zone-container");
const textZone1 = document.querySelector(".tzc1");
const textZone2 = document.querySelector(".tzc2");
const textZone3 = document.querySelector(".tzc3");
const textZone4 = document.querySelector(".tzc4");
const zonesLife = document.querySelectorAll(".characters-zones-life");
const playerHealthBar = document.getElementById("life-1");
const adversaryHealthBar = document.getElementById("life-2");
const player = {health: 330};
const adversary = {health: 330};
const turnCounter = document.getElementById("turn_counter");
const counter = {time: 0};

const portraits = document.querySelectorAll(".player-portrait");
const portraitSection = document.querySelector(".player_selector-container");
const imgPlayer1 = document.getElementById("sprite-1");
const imgPlayer2 = document.getElementById("sprite-2");

const yesBtn = document.querySelector(".pc-yes");
const noBtn = document.querySelector(".pc-no");

const levels = document.querySelectorAll(".level");
const levelsSection = document.querySelector(".level_selector-container");

const player1Name = document.getElementById("player_name-1");
const player2Name = document.getElementById("player_name-2");
const confirmation = document.querySelector(".player-confirmation");
const mainScreen = document.getElementById("html");

const characterZoneContainer = document.querySelector(".characters-zones-container");
const gameScreenTitle = document.querySelector(".startScreen");
const gameStartBtn = document.getElementById("gameStartBtn");
const audioPlayZone = document.getElementById("audioPlayZone");
const audioPlayZone2 = document.getElementById("audioPlayZone2");

const mainMenu = document.querySelector(".mainMenu");

const playerSelectorSection = document.querySelector(".cb-player-portrait");
const cards = document.querySelectorAll(".card");
const jaugesStats = document.querySelectorAll(".gauge-fill");

const characters = {
  char0: {
    name: "Crystal Mauler",
    portrait: "crystal_mauler.png",
    story: "Un titans des montagnes de cristal, incarne la force brute et une résistance inébranlable.",
    id: 0,
    stats: {
        atk: 2,
        mag: 1,
        def: 3,
    },
    atk_img: "assets/img/stats_img/cm_atk.png",
    mag_img: "assets/img/stats_img/cm_mag.png",
    def_img: "assets/img/stats_img/cm_def.png",
    special: "Crystal Counter",
    spe_img: "assets/img/skill_img/Crystal Counter.png",
  },
  char1: {
    name: "Fire Knight",
    portrait: "fire_knight.png",
    story: "Un chevalier du feu, maîtrise la puissance des flammes pour défaire ses ennemis et défendre son royaume.",
    id: 1,
    stats: {
      atk: 2,
      mag: 2,
      def: 2,
    },
    atk_img: "assets/img/stats_img/fk_atk.png",
    mag_img: "assets/img/stats_img/fk_mag.png",
    def_img: "assets/img/stats_img/fk_def.png",
    special: "Triple Fire Slash",
    spe_img: "assets/img/skill_img/Triple Fire Slash.png",
  },
  char2: {
    name: "Metal Bladekeeper",
    portrait: "metal_bladekeeper.png",
    story: "Une voleuse recherchée dans le royaume et qui vend ses services aux plus offrants.",
    id: 2,
    stats: {
    atk: 4,
    mag: 1,
    def: 1,
    },
    atk_img: "assets/img/stats_img/mb_atk.png",
    mag_img: "assets/img/stats_img/mb_mag.png",
    def_img: "assets/img/stats_img/mb_def.png",
    special: "Howling Fangs",
    spe_img: "assets/img/skill_img/Howling Fangs.png",
  },
  char3: {
    name: "Leaf Ranger",
    portrait: "leaf_ranger.png",
    story: "Un ranger de Nervalis'tel qui se fond dans la nature pour traquer ses proies et préserver l'équilibre de la forêt.",
    id: 3,
    stats: {
    atk: 3,
    mag: 2,
    def: 1,
    },
    atk_img: "assets/img/stats_img/lr_atk.png",
    mag_img: "assets/img/stats_img/lr_mag.png",
    def_img: "assets/img/stats_img/lr_def.png",
    special: "Enery Arrow",
    spe_img: "assets/img/skill_img/Energy Arrow.png",
  },
  char4: {
    name: "Water Priestess",
    portrait: "water_priestess.png",
    story: "Une prêtresse de l'eau, soigne les âmes blessées et purifie les eaux troubles de son sanctuaire sacré.",
    id: 4,
    stats: {
    atk: 1,
    mag: 4,
    def: 2,
    },
    atk_img: "assets/img/stats_img/wp_atk.png",
    mag_img: "assets/img/stats_img/wp_mag.png",
    def_img: "assets/img/stats_img/wp_def.png",
    special: "Abyssal Terror",
    spe_img: "assets/img/skill_img/Abyssal Terror.png",
  },
  char5: {
    name: "Wind Hashashin",
    portrait: "wind_hashashin.png",
    story: "Un hashashin du vent, se déplace comme une brise silencieuse pour éliminer ses cibles avec précision.",
    id: 5,
    stats: {
    atk: 3,
    mag: 1,
    def: 2,
    },
    atk_img: "assets/img/stats_img/wp_atk.png",
    mag_img: "assets/img/stats_img/wp_mag.png",
    def_img: "assets/img/stats_img/wp_def.png",
    special: "Blood Slash",
    spe_img: "assets/img/skill_img/Blood Slash.png"
  },
  char6: {
    name: "Spear Guard",
    portrait: "spearwoman.png",
    story: "Un garde-lance, défend son peuple avec une lance acérée et une détermination inébranlable.",
    id: 6,
    stats: {
    atk: 5,
    mag: 0,
    def: 1,
    },
    atk_img: "assets/img/stats_img/mb_atk.png",
    mag_img: "assets/img/stats_img/mb_mag.png",
    def_img: "assets/img/stats_img/mb_def.png",
    special: "Crescent Moon",
    spe_img: "assets/img/skill_img/Crescent Moon.png"
  },
  char7: {
    name: "The Vagabond",
    portrait: "fire_warrior.png",
    story: "Un vagabond errant, cherche la vérité dans les terres désolées et les ruines oubliées.",
    id: 7,
    stats: {
    atk: 3,
    mag: 1,
    def: 2,
    },
    atk_img: "assets/img/stats_img/wp_atk.png",
    mag_img: "assets/img/stats_img/wp_mag.png",
    def_img: "assets/img/stats_img/wp_def.png",
    special: "Critical Strike",
    spe_img: "assets/img/skill_img/Critical Strike.png"
  },
  char8: {
    name: "Earth Monk",
    portrait: "ground_monk.png",
    story: "Un moine de la terre, médite dans les montagnes pour atteindre l'harmonie avec la nature.",
    id: 8,
    stats: {
    atk: 3,
    mag: 3,
    def: 2,
    },
    atk_img: "assets/img/stats_img/gm_atk.png",
    mag_img: "assets/img/stats_img/gm_mag.png",
    def_img: "assets/img/stats_img/gm_def.png",
    special: "The Six Fists Of Heaven",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  }
};


const bgm = {
  mainScreen: {
    name: "Title Theme",
    bgm: "main-title.mp3"
  },
  mainMenu: {
    name: "Main Menu Theme",
    bgm: "main-menu.mp3"
  },
  pressStart: {
    name: "Enter game",
    bgm: "push_start.wav"
  },
  enterChoiceMenu: {
    name: "Enter in menu",
    bgm: "enter_menu.wav"
  }
}

const background_levels = {
  0: {
      name: "Dragon 01",
      field: "bg_cbt_0.gif",
      id: 0,
      bgm: "1-Phat-Phrog-Studios-Legendary-Bosses-Inferno-Serpent.mp3"
  },
  1: {
    name: "Dragon 02",
    field: "bg_cbt_1.gif",
    id: 1,
    bgm:"2-Phat-Phrog-Studios-Legendary-Bosses-Abyssal-Behemoth.mp3"
  },
  2: {
    name: "Falls 01",
    field: "bg_cbt_2.gif",
    id: 2,
    bgm:"3-Phat-Phrog-Studios-Legendary-Bosses-Celestial-Dragon.mp3"
  },
  3: {
    name: "Falls 02",
    field: "bg_cbt_3.gif",
    id: 3,
    bgm:"5-Phat-Phrog-Studios-Legendary-Bosses-Ice-Marauder.mp3"
  },
  4: {
    name: "Falls 03",
    field: "bg_cbt_4.gif",
    id: 4,
    bgm:"8-Phat-Phrog-Studios-Legendary-Bosses-Sunfire-Phoenix.mp3"
  },
  5: {
    name: "Ruins 01",
    field: "bg_cbt_5.gif",
    id: 5,
    bgm:"9-Phat-Phrog-Studios-Legendary-Bosses-Moonlit-Nightmare.mp3"
  },
  6: {
    name: "House in Fire 01",
    field: "bg_cbt_6.gif",
    id: 6,
    bgm:"10-Phat-Phrog-Studios-Legendary-Bosses-Whirlwind-Wraith.mp3"
  }
};

function displayCards() {
  cards.forEach(card => {
    for (i=0; i < cards.length; i++) {
      const card = cards[i];
      if (characters[`char${i}`]) {
        card.innerHTML =
      `<div class="player-infos">
          <img src="assets/img/portraits/${characters[`char${i}`].portrait}" alt="beurk">
          <div class="player-infos-wrapper">
            <div class="player-infos-name"><p>${characters[`char${i}`].name}</p></div>
            <div class="player-infos-story"><p>${characters[`char${i}`].story}</p></div>
          </div>
        </div>
          <div class="player-stats-wrapper">
          <div class="player-stats str">
            <div class="str-img">
              <img src="${characters[`char${i}`].atk_img}" alt="atk icon">
              <span>STR</span>
            </div>
            <div class="str-gauge-bg">
              <div class="str-gauge">
                <div class="gauge-fill"></div>
              </div>
            </div>
          </div>
          <div class="player-stats mag">
            <div class="mag-img">
              <img src="${characters[`char${i}`].mag_img}" alt="atk icon">
              <span>MAG</span>
            </div>
            <div class="def-gauge-bg">
              <div class="mag-gauge">
                <div class="gauge-fill"></div>
              </div>
            </div>
          </div>
          <div class="player-stats def">
            <div class="def-img">
              <img src="${characters[`char${i}`].def_img}" alt="atk icon">
              <span>DEF</span>
            </div>
            <div class="def-gauge-bg">
              <div class="def-gauge">
                <div class="gauge-fill"></div>
              </div>
            </div>
          </div>
          <div class="player-stats spe">
            <div class="spe-img">
              <img src="${characters[`char${i}`].spe_img}" alt="">
              <span>SKILL</span>
            </div>
            <div class="spe-gauge">
              <span>${characters[`char${i}`].special}</span>
            </div>
          </div>
            <div class="selector">
            <span class="selector-no">Retour</span>
              <span class="selector-yes">Choisir</span>
            </div>
          </div>`;
      }
    }
  });


}
displayCards();

function arrows() {
  const arrows = document.querySelectorAll(".arrow");
  arrows.forEach(arrow => {
    arrow.addEventListener("click", function(){
      if (id == "left-arrow") {

      } else {

      }
    });
  });
};

function characterChoice(obj) {
    for (i = 0; i < portraits.length; i++) {
      const portrait = portraits[i];
      if (characters[`char${i}`]) {
        portrait.innerHTML = `<img data-char="${i}" src="assets/img/portraits/${characters[`char${i}`].portrait}" alt="beurk">`;
      }
    }
};

let playerChoice = false;

function selectCharacter() {
  characterZoneContainer.style.display = "none";
  textZone1.textContent = "Bienvenue dans l'arène Invocateur.";
  textZone2.textContent = "Veuillez choisir votre combattant.";
  characterChoice(characters);
  portraits.forEach(portrait => {
    portrait.addEventListener("click", function() {
      console.log("hello");
      const charIndex = portrait.firstChild.getAttribute("data-char");
      if (characters[`char${charIndex}`]) {
        const characterName = characters[`char${charIndex}`].name;
        const random = Math.floor(Math.random() * 5);
        const randomP2Name = characters[`char${random}`].name;
        let characterPortrait = "";
        if (characterName == "Crystal Mauler") {
          textZone3.style.color = "#85dbf2";
          player1Name.style.background = "#85dbf2";
          playerChoice = true;
          characterPortrait = "crystal_mauler.png";
        } else if (characterName == "Fire Knight") {
          textZone3.style.color = "#ee692f";
          player1Name.style.background = "#ee692f";
          playerChoice = true;
          characterPortrait = "fire_knight.png";
        } else if (characterName == "Metal Bladekeeper") {
          textZone3.style.color = "#c3c0c6";
          player1Name.style.background = "#c3c0c6";
          playerChoice = true;
          characterPortrait = "metal_bladekeeper.png";
        } else if (characterName == "Leaf Ranger") {
          textZone3.style.color = "#11eb03";
          player1Name.style.background = "#11eb03";
          playerChoice = true;
          characterPortrait = "leaf_ranger.png";
        } else {
          textZone3.style.color = "#3a8bf9";
          player1Name.style.background = "#3a8bf9";
          playerChoice = true;
          characterPortrait = "water_priestess.png";
        }

        if (randomP2Name == "Crystal Mauler") {
          textZone4.style.color = "#85dbf2";
          player2Name.style.background = "#85dbf2";

        } else if (randomP2Name == "Fire Knight") {
          textZone4.style.color = "#ee692f";
          player2Name.style.background = "#ee692f";

        } else if (randomP2Name == "Metal Bladekeeper") {
          textZone4.style.color = "#c3c0c6";
          player2Name.style.background = "#c3c0c6";

        } else if (randomP2Name == "Leaf Ranger") {
          textZone4.style.color = "#11eb03";
          player2Name.style.background = "#11eb03";
        } else {
          textZone4.style.color = "#3a8bf9";
          player2Name.style.background = "#3a8bf9";
        }

        function characterChoice(obj) {
            for (i = 0; i < portraits.length; i++) {
              const portrait = portraits[i];
              if (characters[`char${i}`]) {
                portrait.innerHTML = `<img data-char="${i}" src="assets/img/portraits/${characters[`char${i}`].portrait}" alt="beurk">`;
              }
            }
        };

        let playerChoice = false;

        function selectCharacter() {
          characterZoneContainer.style.display = "none";
          textZone1.textContent = "Bienvenue dans l'arène Invocateur.";
          textZone2.textContent = "Veuillez choisir votre combattant.";
          characterChoice(characters);
          portraits.forEach(portrait => {
            portrait.addEventListener("click", function() {
              console.log("hello");
              const charIndex = portrait.firstChild.getAttribute("data-char");
              if (characters[`char${charIndex}`]) {
                const characterName = characters[`char${charIndex}`].name;
                const random = Math.floor(Math.random() * 5);
                const randomP2Name = characters[`char${random}`].name;
                let characterPortrait = "";
                if (characterName == "Crystal Mauler") {
                  textZone3.style.color = "#85dbf2";
                  player1Name.style.background = "#85dbf2";
                  playerChoice = true;
                  characterPortrait = "crystal_mauler.png";
                } else if (characterName == "Fire Knight") {
                  textZone3.style.color = "#ee692f";
                  player1Name.style.background = "#ee692f";
                  playerChoice = true;
                  characterPortrait = "fire_knight.png";
                } else if (characterName == "Metal Bladekeeper") {
                  textZone3.style.color = "#c3c0c6";
                  player1Name.style.background = "#c3c0c6";
                  playerChoice = true;
                  characterPortrait = "metal_bladekeeper.png";
                } else if (characterName == "Leaf Ranger") {
                  textZone3.style.color = "#11eb03";
                  player1Name.style.background = "#11eb03";
                  playerChoice = true;
                  characterPortrait = "leaf_ranger.png";
                } else {
                  textZone3.style.color = "#3a8bf9";
                  player1Name.style.background = "#3a8bf9";
                  playerChoice = true;
                  characterPortrait = "water_priestess.png";
                }

                if (randomP2Name == "Crystal Mauler") {
                  textZone4.style.color = "#85dbf2";
                  player2Name.style.background = "#85dbf2";

                } else if (randomP2Name == "Fire Knight") {
                  textZone4.style.color = "#ee692f";
                  player2Name.style.background = "#ee692f";

                } else if (randomP2Name == "Metal Bladekeeper") {
                  textZone4.style.color = "#c3c0c6";
                  player2Name.style.background = "#c3c0c6";

                } else if (randomP2Name == "Leaf Ranger") {
                  textZone4.style.color = "#11eb03";
                  player2Name.style.background = "#11eb03";
                } else {
                  textZone4.style.color = "#3a8bf9";
                  player2Name.style.background = "#3a8bf9";
                }

                textZone3.textContent = `Vous avez choisi ${characterName}.`;
                imgPlayer1.innerHTML = `<img src="assets/img/portraits/${characterPortrait}" alt="${characterPortrait}">`;
                player1Name.style.fontFamily = "Nova Square, sans-serif";
                player1Name.style.fontWeight = "bold";
                player1Name.textContent = characterName;
                confirmation.style.display = "flex";
                player2Name.textContent = randomP2Name;
                player2Name.style.fontFamily = "Nova Square, sans-serif";
                player2Name.style.fontWeight = "bold";
                imgPlayer2.innerHTML = `<img src="assets/img/portraits/${characters[`char${random}`].portrait}" alt="${characters[`char${random}`].portrait}">`;
                textZone4.textContent = `Votre adversaire a choisi ${randomP2Name}.`;

              }
            });
          });
          validatorChoice(yesBtn, noBtn)
        };


        // function validatorChoice(choiceBtn1, choiceBtn2) {
        //   choiceBtn2.addEventListener("click", function() {
        //     textZone1.textContent = "Bienvenue dans l'arène Invocateur.";
        //     textZone2.textContent = "Veuillez choisir votre combattant.";
        //     textZone3.textContent = "";
        //     textZone4.textContent = "";
        //     imgPlayer1.innerHTML = "";
        //     player1Name.textContent = "";
        //     player1Name.style.background = "white";
        //     imgPlayer2.innerHTML = "";
        //     player2Name.textContent = "";
        //     player2Name.style.background = "white";
        //     confirmation.style.display = "none";
        //     removeTextColor(textZone1, textZone2, textZone3, textZone4);
        //     selectCharacter();
        //   });
        //   choiceBtn1.addEventListener("click", function() {
        //     removeTextColor(textZone1, textZone2, textZone3, textZone4);
        //     confirmation.style.display = "none";
        //     portraitSection.style.display = "none";
        //     textZone3.textContent = "....Combattez !"
        //     textZone4.textContent = "";
        //     mainScreen.style.backgroundImage = "url(../assets/img/backgrounds/bg_cbt_dragon_01.gif)";
        //     mainScreen.style.backgroundRepeat = "no-repeat";
        //     mainScreen.style.backgroundSize = "cover";
        //     mainScreen.style.backgroundPosition = "center";
        //     actionsButtonsSection.style.display = "block";
        //     characterZoneContainer.style.display = "flex";
        //     initializingBattle();
        //   });
        // };


        // selectCharacter();




        function playSound(soundElement){
          const soundToPlay = `<audio id="audioPlay" src="assets/bgm/${soundElement}" preload="auto" hidden></audio>`;
          audioPlayZone.innerHTML = soundToPlay;
          const audioPlay = document.getElementById("audioPlay");
          audioPlay.play();
        }
        function playSound2(soundElement){
          const soundToPlay = `<audio id="audioPlay2" src="assets/bgm/${soundElement}" preload="auto" hidden></audio>`;
          audioPlayZone2.innerHTML = soundToPlay;
          const audioPlay2 = document.getElementById("audioPlay2");
          audioPlay2.play();
        }

        function stopSound(){
          const audioPlay = document.getElementById("audioPlay");
          audioPlay.pause();
          audioPlay.currentTime = 0;
        }

        const menus = document.querySelectorAll(".menu");

        // function Menu(){
        //   gameScreenTitle.style.display = "none";
        //   mainMenu.style.display = "flex";
        //   mainScreen.style.backgroundImage = "url(../assets/img/backgrounds/bg_cbt_2.gif)";
        //   mainScreen.style.backgroundRepeat = "no-repeat";
        //   mainScreen.style.backgroundSize = "cover";
        //   mainScreen.style.backgroundPosition = "center";
        //   playSound(bgm.mainMenu.bgm);
        //   menus.forEach(menu => {
        //     menu.addEventListener("click", function(){
        //       playSound2(bgm.enterChoiceMenu.bgm);
        //     });
        //   });
        // };

        textZone3.textContent = `Vous avez choisi ${characterName}.`;
        imgPlayer1.innerHTML = `<img src="assets/img/portraits/${characterPortrait}" alt="${characterPortrait}">`;
        player1Name.style.fontFamily = "Nova Square, sans-serif";
        player1Name.style.fontWeight = "bold";
        player1Name.textContent = characterName;
        confirmation.style.display = "flex";
        player2Name.textContent = randomP2Name;
        player2Name.style.fontFamily = "Nova Square, sans-serif";
        player2Name.style.fontWeight = "bold";
        imgPlayer2.innerHTML = `<img src="assets/img/portraits/${characters[`char${random}`].portrait}" alt="${characters[`char${random}`].portrait}">`;
        textZone4.textContent = `Votre adversaire a choisi ${randomP2Name}.`;

      }
    });
  });
  validatorChoice(yesBtn, noBtn)
};


// function validatorChoice(choiceBtn1, choiceBtn2) {
//   choiceBtn2.addEventListener("click", function() {
//     textZone1.textContent = "Bienvenue dans l'arène Invocateur.";
//     textZone2.textContent = "Veuillez choisir votre combattant.";
//     textZone3.textContent = "";
//     textZone4.textContent = "";
//     imgPlayer1.innerHTML = "";
//     player1Name.textContent = "";
//     player1Name.style.background = "white";
//     imgPlayer2.innerHTML = "";
//     player2Name.textContent = "";
//     player2Name.style.background = "white";
//     confirmation.style.display = "none";
//     removeTextColor(textZone1, textZone2, textZone3, textZone4);
//     selectCharacter();
//   });
//   choiceBtn1.addEventListener("click", function() {
//     removeTextColor(textZone1, textZone2, textZone3, textZone4);
//     confirmation.style.display = "none";
//     portraitSection.style.display = "none";
//     textZone3.textContent = "....Combattez !"
//     textZone4.textContent = "";
//     mainScreen.style.backgroundImage = "url(../assets/img/backgrounds/bg_cbt_dragon_01.gif)";
//     mainScreen.style.backgroundRepeat = "no-repeat";
//     mainScreen.style.backgroundSize = "cover";
//     mainScreen.style.backgroundPosition = "center";
//     actionsButtonsSection.style.display = "block";
//     characterZoneContainer.style.display = "flex";
//     initializingBattle();
//   });
// };


// selectCharacter();


function displayStats(obj) {
  let valeurUn = 66;
  const gaugeStrContainers = document.querySelectorAll(".str-gauge");
  const gaugeMagContainers = document.querySelectorAll(".mag-gauge");
  const gaugeDefContainers = document.querySelectorAll(".def-gauge");

  for (i = 0; i < gaugeStrContainers.length; i++) {
    const gaugeStr = gaugeStrContainers[i];
    if (characters[`char${i}`]) {
      console.log("C")
      const jaugeStr = `${valeurUn}`*`${characters[`char${i}`].stats.atk}`;
      gaugeStr.firstElementChild.style.width =`${jaugeStr}px`;
    }
  }
  for (i = 0; i < gaugeMagContainers.length; i++) {
    const gaugeMag = gaugeMagContainers[i];
    if (characters[`char${i}`]) {
      console.log("C")
      const jaugeMag = `${valeurUn}`*`${characters[`char${i}`].stats.mag}`;
      gaugeMag.firstElementChild.style.width =`${jaugeMag}px`;
    }
  }
  for (i = 0; i < gaugeDefContainers.length; i++) {
    const gaugeDef = gaugeDefContainers[i];
    if (characters[`char${i}`]) {
      console.log("C")
      const jaugeDef = `${valeurUn}`*`${characters[`char${i}`].stats.def}`;
      gaugeDef.firstElementChild.style.width =`${jaugeDef}px`;
    }
  }

};

displayStats(characters);

function playSound(soundElement){
  const soundToPlay = `<audio id="audioPlay" src="assets/bgm/${soundElement}" preload="auto" hidden></audio>`;
  audioPlayZone.innerHTML = soundToPlay;
  const audioPlay = document.getElementById("audioPlay");
  audioPlay.play();
}
function playSound2(soundElement){
  const soundToPlay = `<audio id="audioPlay2" src="assets/bgm/${soundElement}" preload="auto" hidden></audio>`;
  audioPlayZone2.innerHTML = soundToPlay;
  const audioPlay2 = document.getElementById("audioPlay2");
  audioPlay2.play();
}

function stopSound(){
  const audioPlay = document.getElementById("audioPlay");
  audioPlay.pause();
  audioPlay.currentTime = 0;
}

const menus = document.querySelectorAll(".menu");

// function Menu(){
//   gameScreenTitle.style.display = "none";
//   mainMenu.style.display = "flex";
//   mainScreen.style.backgroundImage = "url(../assets/img/backgrounds/bg_cbt_2.gif)";
//   mainScreen.style.backgroundRepeat = "no-repeat";
//   mainScreen.style.backgroundSize = "cover";
//   mainScreen.style.backgroundPosition = "center";
//   playSound(bgm.mainMenu.bgm);
//   menus.forEach(menu => {
//     menu.addEventListener("click", function(){
//       playSound2(bgm.enterChoiceMenu.bgm);
//     });
//   });
// };
