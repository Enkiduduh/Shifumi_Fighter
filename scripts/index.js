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
    story: "Un chevalier du feu, maîtrise la puissance des flammes pour défaire ses ennemis.",
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
    story: "Un ranger de Nervalis'tel qui se fond dans la nature pour traquer ses proies.",
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
    story: "Une prêtresse de l'eau qui soigne les âmes blessées et purifie les eaux troubles.",
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
    story: "Un hashashin qui se déplace comme une brise silencieuse pour éliminer ses cibles.",
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
    story: "Un garde-lance qui maîtrise l'art de la lance. Elle adore les duels et ne perd jamais.",
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
    name: "The Wanderer",
    portrait: "fire_warrior.png",
    story: "Un vagabond en quête de vérité dans les terres désolées et les ruines oubliées.",
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
    name: "Moine",
    portrait: "ground_monk.png",
    story: "Un moine qui protège le temple de l'Arbre sacré. Il aurait plus de 500 ans.",
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
  },
  char9: {
    name: "Orc Shaman",
    portrait: "orc_shaman.png",
    story: "Un moine qui protège le temple de l'Arbre sacré. Il aurait plus de 500 ans.",
    id: 9,
    stats: {
    atk: 2,
    mag: 5,
    def: 2,
    },
    atk_img: "assets/img/stats_img/lr_atk.png",
    mag_img: "assets/img/stats_img/lr_mag.png",
    def_img: "assets/img/stats_img/lr_def.png",
    special: "L'Appel Des Esprits Ancestraux",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char10: {
    name: "Viking Des Fjörds",
    portrait: "viking.png",
    story: "Un guerrier brutal qui ne cherche que des adversaires forts. Ne craint pas la mort.",
    id: 10,
    stats: {
    atk: 5,
    mag: 0,
    def: 3,
    },
    atk_img: "assets/img/stats_img/cm_atk.png",
    mag_img: "assets/img/stats_img/cm_mag.png",
    def_img: "assets/img/stats_img/cm_def.png",
    special: "Crocs De Fenrir",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char11: {
    name: "Soldat Valkine",
    portrait: "human_female_02.png",
    story: "Lieutenant de l'avant garde du royaume de Xor'l. Elle est redoutable au combat.",
    id: 11,
    stats: {
    atk: 4,
    mag: 1,
    def: 3,
    },
    atk_img: "assets/img/stats_img/gm_atk.png",
    mag_img: "assets/img/stats_img/gm_mag.png",
    def_img: "assets/img/stats_img/gm_def.png",
    special: "Frappe de l'aigle",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char12: {
    name: "Solyn'Eri",
    portrait: "Light_elf_female_01.png",
    story: "Une haute Elfe de l'Arbre sacré. Sa chevelure prouve qu'elle a plus de 1000 ans.",
    id: 12,
    stats: {
    atk: 2,
    mag: 5,
    def: 2,
    },
    atk_img: "assets/img/stats_img/wp_atk.png",
    mag_img: "assets/img/stats_img/wp_mag.png",
    def_img: "assets/img/stats_img/wp_def.png",
    special: "Transformation Divine",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char13: {
    name: "Maître Magus",
    portrait: "human_male_02.png",
    story: "Un maître de la Tour Grise qui peut manier toutes les formes de magies connues.",
    id: 13,
    stats: {
    atk: 1,
    mag: 5,
    def: 4,
    },
    atk_img: "assets/img/stats_img/fk_atk.png",
    mag_img: "assets/img/stats_img/fk_mag.png",
    def_img: "assets/img/stats_img/fk_def.png",
    special: "Arcanum Fatalis",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char14: {
    name: "Blades Dancer",
    portrait: "human_female_03.png",
    story: "Assassin, danseuse et magicienne. Elle peut faire face à toute situation.",
    id: 14,
    stats: {
    atk: 4,
    mag: 3,
    def: 2,
    },
    atk_img: "assets/img/stats_img/lr_atk.png",
    mag_img: "assets/img/stats_img/lr_mag.png",
    def_img: "assets/img/stats_img/lr_def.png",
    special: "Danse-Lames du Soleil",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char15: {
    name: "Magus Ombral",
    portrait: "Dark_one_male_04.png",
    story: "Un ancien Maître Magus qui s'est laissé dévorer par son propre pouvoir.",
    id: 15,
    stats: {
    atk: 0,
    mag: 4,
    def: 4,
    },
    atk_img: "assets/img/stats_img/wp_atk.png",
    mag_img: "assets/img/stats_img/wp_mag.png",
    def_img: "assets/img/stats_img/wp_def.png",
    special: "Malecus Carnivorae",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char16: {
    name: "Seigneur Ombral",
    portrait: "Dark_one_male_01.png",
    story: "Commandant de l'armée du Magus Ombral. C'est un ancien héro dêchu.",
    id: 16,
    stats: {
    atk: 3,
    mag: 2,
    def: 4,
    },
    atk_img: "assets/img/stats_img/mb_atk.png",
    mag_img: "assets/img/stats_img/mb_mag.png",
    def_img: "assets/img/stats_img/mb_def.png",
    special: "Déchirement ",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char17: {
    name: "Princesse de Xor'l",
    portrait: "human_female_01.png",
    story: "Les princesses de Xor'l apprennent l'art de la guerre dès leur plus jeune âge.",
    id: 17,
    stats: {
    atk: 2,
    mag: 1,
    def: 3,
    },
    atk_img: "assets/img/stats_img/gm_atk.png",
    mag_img: "assets/img/stats_img/gm_mag.png",
    def_img: "assets/img/stats_img/gm_def.png",
    special: "Rage de Xor'l",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char18: {
    name: "Elfe De Terre-Feu",
    portrait: "Dark_elf_female_01.png",
    story: "Une des derniers survivants du clan Terre-Feu. Peut invoquer des esprits célestes",
    id: 18,
    stats: {
    atk: 3,
    mag: 3,
    def: 2,
    },
    atk_img: "assets/img/stats_img/gm_atk.png",
    mag_img: "assets/img/stats_img/gm_mag.png",
    def_img: "assets/img/stats_img/gm_def.png",
    special: "Invocation Des Célestes",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char19: {
    name: "Seigneur Vampire",
    portrait: "Dark_one_male_03.png",
    story: "Une créature qui se nourrit du sang des vivants et peut ensuite les contrôler.",
    id: 19,
    stats: {
    atk: 3,
    mag: 4,
    def: 0,
    },
    atk_img: "assets/img/stats_img/fk_atk.png",
    mag_img: "assets/img/stats_img/fk_mag.png",
    def_img: "assets/img/stats_img/fk_def.png",
    special: "Pluie Sanguine",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char20: {
    name: "Guerrière Lione",
    portrait: "beast_female_01.png",
    story: "Redoutable chasseuse du peuple des bêtes. Ses griffes transpercent les armures.",
    id: 20,
    stats: {
    atk: 4,
    mag: 0,
    def: 3,
    },
    atk_img: "assets/img/stats_img/gm_atk.png",
    mag_img: "assets/img/stats_img/gm_mag.png",
    def_img: "assets/img/stats_img/gm_def.png",
    special: "Pluie Sanguine",
    spe_img: "assets/img/skill_img/Six fists of heaven.png"
  },
  char21: {
    name: "Chevalier Fantôme",
    portrait: "human_male_04.png",
    story: "Un ancien chevalier mort dont l'âme ne trouve pas le repos. Il cherche la vérité.",
    id: 21,
    stats: {
    atk: 3,
    mag: 3,
    def: 3,
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



function actions() {
  actionButtons.forEach(button => {
    button.addEventListener("click", function() {
      textZone1.innerHTML = "";
      let actionMessage = "";
      let actionChoice = "";
      if (button.id == "btn-atk") {
        actionChoice = "Attaque";
        textZone1.classList.add("textColor_atk");
        textZone1.classList.remove("textColor_mag");
        textZone1.classList.remove("textColor_def");
      } else if (button.id == "btn-mag") {
        actionChoice = "Magie";
        textZone1.classList.add("textColor_mag");
        textZone1.classList.remove("textColor_atk");
        textZone1.classList.remove("textColor_def");
      } else {
        actionChoice = "Défense";
        textZone1.classList.add("textColor_def");
        textZone1.classList.remove("textColor_atk");
        textZone1.classList.remove("textColor_mag");
      }
      actionMessage = `Vous avez choisi le boutton d'action ${actionChoice}.`;
      textZone1.innerHTML = actionMessage;
      combat(actionChoice,textZone2, textZone3, counter);

    });
  });
}

function combat(str_choice, text_zone2, text_zone3, time) {
  let resultAdversary = "";
  let actionChoiceAdversary="";
  let result = "";
  const adversaryChoice = ["Attaque", "Magie", "Défense"];
  actionChoiceAdversary = adversaryChoice[Math.floor(Math.random() * 3)];
  if (actionChoiceAdversary == "Attaque") {
    textZone2.classList.add("textColor_atk");
    textZone2.classList.remove("textColor_mag");
    textZone2.classList.remove("textColor_def");
  } else if (actionChoiceAdversary == "Magie") {
    textZone2.classList.add("textColor_mag");
    textZone2.classList.remove("textColor_atk");
    textZone2.classList.remove("textColor_def");
  } else {
    textZone2.classList.add("textColor_def");
    textZone2.classList.remove("textColor_atk");
    textZone2.classList.remove("textColor_mag");
  }

  if (str_choice == "Attaque" && actionChoiceAdversary == "Magie"
    || str_choice == "Magie" && actionChoiceAdversary == "Défense"
    || str_choice == "Défense" && actionChoiceAdversary == "Attaque")
  {
    resultAdversary = `Votre adversaire a choisi le boutton d'action ${actionChoiceAdversary}.`;
    result = `Bien joué ! Votre adversaire perd 1 PV !`;
    time.time += 1;
  } else if (str_choice == "Attaque" && actionChoiceAdversary == "Attaque"
  || str_choice == "Magie" && actionChoiceAdversary == "Magie"
  || str_choice == "Défense" && actionChoiceAdversary == "Défense")
  {
    resultAdversary = `Votre adversaire a choisi le boutton d'action ${actionChoiceAdversary}.`;
    result =`Egalité ! Le combat fait rage !`;
    time.time += 1;
  } else {
    resultAdversary = `Votre adversaire a choisi le boutton d'action ${actionChoiceAdversary}.`;
    result = `Attention ! Vous perdez 1 PV !`;
    time.time += 1;
  }
  turnCounter.innerHTML = `<span class="shadowed-text">Tour: ${time.time}</span>`;
  damageCalculator(player , adversary, playerHealthBar, adversaryHealthBar, result);
  displayHealthBar();
  console.log(player)
  console.log(adversary)
  text_zone2.innerHTML = resultAdversary;
  text_zone3.innerHTML = result;
  combatEnding(player, adversary);
};

function damageCalculator(player1 , player2, player1_life, player2_life, str) {
  if (str == "Bien joué ! Votre adversaire perd 1 PV !") {
    player2.health -= 33;
    player2_life.style.width = `${player2.health}px`;

  } else if (str == "Attention ! Vous perdez 1 PV !") {
    player1.health -= 33;
    player1_life.style.width = `${player1.health}px`;

  }
};

function displayHealthBar() {
if (player.health <= 80) {
  playerHealthBar.classList.add("lifebar-red");
  playerHealthBar.classList.remove("lifebar-orange");
  playerHealthBar.classList.remove("lifebar-green");
} else if (player.health <= 140) {
  playerHealthBar.classList.add("lifebar-orange");
  playerHealthBar.classList.remove("lifebar-red");
  playerHealthBar.classList.remove("lifebar-green");
}

if (adversary.health <= 80) {
  adversaryHealthBar.classList.add("lifebar-red");
  adversaryHealthBar.classList.remove("lifebar-orange");
  adversaryHealthBar.classList.remove("lifebar-green");
} else if (adversary.health <= 140) {
  adversaryHealthBar.classList.add("lifebar-orange");
  adversaryHealthBar.classList.remove("lifebar-red");
  adversaryHealthBar.classList.remove("lifebar-green");
}
};

function initializingBattle() {
  player.health = 330;
  adversary.health = 330;
  counter.time = 0;
  textZone1.textContent = "Veuillez choisir une action.";
  textZone2.textContent = "";
  textZone3.textContent = "";
  playerHealthBar.classList.add("lifebar-green");
  adversaryHealthBar.classList.add("lifebar-green");
  actions();
};

function combatEnding(player , adversary) {
  if (adversary.health <= 0) {
    removeTextColor(textZone1, textZone2, textZone3, textZone4);
    result = `Bravo ! Vous avez remporté la victoire !!`;
    textZone1.textContent = "...";
    textZone2.textContent = `Le combat a duré ${counter.time} tours.`;
    textZone3.textContent = result;
  } else if (player.health <= 0) {
    removeTextColor(textZone1, textZone2, textZone3, textZone4);
    result = `Dommage ! Votre adversaire a triomphé de vous !!`;
    textZone1.textContent = "...";
    textZone2.textContent = `Le combat a duré ${counter.time} tours.`;
    textZone3.textContent = result;
  }
}

function removeTextColor(zoneText1,zoneText2, zoneText3, zoneText4) {
    zoneText1.classList.remove("textColor_def");
    zoneText1.classList.remove("textColor_atk");
    zoneText1.classList.remove("textColor_mag");
    zoneText2.classList.remove("textColor_def");
    zoneText2.classList.remove("textColor_atk");
    zoneText2.classList.remove("textColor_mag");
    zoneText3.classList.remove("textColor_def");
    zoneText3.classList.remove("textColor_atk");
    zoneText3.classList.remove("textColor_mag");
    zoneText3.style.color = "black";
    zoneText4.style.color = "black";
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

function levelChoice(obj) {
  for (i = 0; i < levels.length; i++) {
    const level = levels[i];
    if (background_levels[i]) {
      level.style.backgroundImage = `url(../assets/img/backgrounds/bg_cbt_${i}.gif)`;
    }

  }
};
levelChoice(background_levels)

function levelSelector() {

};

function validatorChoice(choiceBtn1, choiceBtn2) {
  choiceBtn2.addEventListener("click", function() {
    textZone1.textContent = "Bienvenue dans l'arène Invocateur.";
    textZone2.textContent = "Veuillez choisir votre combattant.";
    textZone3.textContent = "";
    textZone4.textContent = "";
    imgPlayer1.innerHTML = "";
    player1Name.textContent = "";
    player1Name.style.background = "white";
    imgPlayer2.innerHTML = "";
    player2Name.textContent = "";
    player2Name.style.background = "white";
    confirmation.style.display = "none";
    removeTextColor(textZone1, textZone2, textZone3, textZone4);
    selectCharacter();
  });
  choiceBtn1.addEventListener("click", function() {
    removeTextColor(textZone1, textZone2, textZone3, textZone4);
    confirmation.style.display = "none";
    portraitSection.style.display = "none";
    textZone3.textContent = "....Combattez !"
    textZone4.textContent = "";
    mainScreen.style.backgroundImage = "url(../assets/img/backgrounds/bg_cbt_dragon_01.gif)";
    mainScreen.style.backgroundRepeat = "no-repeat";
    mainScreen.style.backgroundSize = "cover";
    mainScreen.style.backgroundPosition = "center";
    actionsButtonsSection.style.display = "block";
    characterZoneContainer.style.display = "flex";
    initializingBattle();
  });
};
function roundVictory() {

}

selectCharacter();

let animationCompleted = false;

function pressStart() {
  portraitSection.style.display = "none";
  levelsSection.style.display = "none";
  textZone.style.display = "none";
  mainMenu.style.display = "none";
  playSound(bgm.mainScreen.bgm);

  gameStartBtn.addEventListener("click", function(){
    if(!animationCompleted) {
      gameStartBtn.classList.add("puffOut");
      stopSound();
      playSound(bgm.pressStart.bgm);
      gameStartBtn.addEventListener("animationend", function() {
        gameStartBtn.classList.remove("puffOut");
        animationCompleted = true;
        Menu();
      });
    }
  });
}
pressStart();

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

function Menu(){
  gameScreenTitle.style.display = "none";
  mainMenu.style.display = "flex";
  mainScreen.style.backgroundImage = "url(../assets/img/backgrounds/bg_cbt_1.gif)";
  mainScreen.style.backgroundRepeat = "no-repeat";
  mainScreen.style.backgroundSize = "cover";
  mainScreen.style.backgroundPosition = "center";
  playSound(bgm.mainMenu.bgm);
  menus.forEach(menu => {
    menu.addEventListener("click", function(){
      playSound2(bgm.enterChoiceMenu.bgm);
    });
  });
};
