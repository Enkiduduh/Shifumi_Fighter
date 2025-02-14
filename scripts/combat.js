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
    portrait_bd: "crystal_mauler.png",
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
    portrait_bd: "fire_knight.png",
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
    portrait_bd: "fire_knight.png",
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
    portrait_bd: "leaf_ranger.png",
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
    portrait_bd:"water_priestess.png",
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
    portrait_bd: "wind_hashashin.png",
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
    portrait_bd: "spearwoman.png",
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
    portrait_bd: "fire_warrior.png",
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
    portrait_bd: "ground_monk.png",
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
    portrait_bd: "orc_shaman.png",
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
    portrait_bd: "viking.png",
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
    portrait_bd: "human_female_02.png",
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
    special: "Dégainage Eclair",
    spe_img: "assets/img/skill_img/Dégainage Eclair.png"
  },
  char12: {
    name: "Solyn'Eri",
    portrait: "Light_elf_female_01.png",
    portrait_bd: "Light_elf_female_01.png",
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
    portrait_bd: "human_male_02.png",
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
    portrait_bd: "human_female_03.png",
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
    spe_img: "assets/img/skill_img/Danse-Lames du Soleil.png"
  },
  char15: {
    name: "Magus Ombral",
    portrait: "Dark_one_male_04.png",
    portrait_bd: "Dark_one_male_04.png",
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
    portrait_bd: "Dark_one_male_01.png",
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
    portrait_bd: "human_female_01.png",
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
    spe_img: "assets/img/skill_img/Rage de Xor'l.png"
  },
  char18: {
    name: "Elfe De Terre-Feu",
    portrait: "Dark_elf_female_01.png",
    portrait_bd: "Dark_elf_female_01.png",
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
    portrait_bd: "Dark_one_male_03.png",
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
    portrait_bd: "beast_female_01.png",
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
    special: "Griffe Bestiale",
    spe_img: "assets/img/skill_img/Griffe Bestiale.png"
  },
  char21: {
    name: "Chevalier Fantôme",
    portrait: "human_male_04.png",
    portrait_bd: "human_male_04.png",
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
    special: "Colère du Revenant",
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
        <div class="stats-bar">
          <div class="bar"></div>
          <div class="stats"><span>Stats</span></div>
          <div class="bar"></div>
        </div>
          <div class="player-stats-wrapper">
          <div class="player-stats str">
            <div class="str-img">
              <img src="${characters[`char${i}`].atk_img}" alt="atk icon">

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

            </div>
            <div class="def-gauge-bg">
              <div class="def-gauge">
                <div class="gauge-fill"></div>
              </div>
            </div>
          </div>
          <div class="stats-bar">
            <div class="bar"></div>
            <div class="stats"><span>Skill</span></div>
            <div class="bar"></div>
          </div>
          <div class="player-stats spe">
            <div class="spe-img">
              <img src="${characters[`char${i}`].spe_img}" alt="">
            </div>
            <div class="spe-gauge">
              <span>${characters[`char${i}`].special}</span>
            </div>
          </div>
          </div>`;
      }
    }
  });



  // <div class="selector">
  // <span class="selector-no">Retour</span>
  //   <span class="selector-yes">Choisir</span>
  // </div>

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
  textZone1.textContent = "Bienvenue dans l'arène Invocateur.";
  textZone2.textContent = "Veuillez choisir votre combattant.";
  textZone3.textContent = "";
  characterChoice(characters);
  console.log("a")
  portraits.forEach(portrait => {
    portrait.addEventListener("click", function() {
      console.log("b")
      const charIndex = portrait.firstChild.getAttribute("data-char");
      if (characters[`char${charIndex}`]) {
        const characterName = characters[`char${charIndex}`].name;
        textZone3.textContent = `Vous avez choisi ${characterName}.`;
        player1Name.style.fontFamily = "Nova Square, sans-serif";
        player1Name.style.fontWeight = "bold";

      }
    });
  });
  // validatorChoice(yesBtn, noBtn)
};

selectCharacter();

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


selectCharacter();


function displayStats(obj) {
  let valeurUn = 50;
  const gaugeStrContainers = document.querySelectorAll(".str-gauge");
  const gaugeMagContainers = document.querySelectorAll(".mag-gauge");
  const gaugeDefContainers = document.querySelectorAll(".def-gauge");

  for (i = 0; i < gaugeStrContainers.length; i++) {
    const gaugeStr = gaugeStrContainers[i];
    if (characters[`char${i}`]) {
      const jaugeStr = `${valeurUn}`*`${characters[`char${i}`].stats.atk}`;
      gaugeStr.firstElementChild.style.width =`${jaugeStr}px`;
    }
  }
  for (i = 0; i < gaugeMagContainers.length; i++) {
    const gaugeMag = gaugeMagContainers[i];
    if (characters[`char${i}`]) {
      const jaugeMag = `${valeurUn}`*`${characters[`char${i}`].stats.mag}`;
      gaugeMag.firstElementChild.style.width =`${jaugeMag}px`;
    }
  }
  for (i = 0; i < gaugeDefContainers.length; i++) {
    const gaugeDef = gaugeDefContainers[i];
    if (characters[`char${i}`]) {
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

// function displayCardsSelector(){
//   document.addEventListener('DOMContentLoaded', function() {
//     const radios = document.querySelectorAll('.radio-wrapper input[type="radio"]');
//     // Ajoutez un écouteur d'événements à chaque bouton radio
//     radios.forEach((radio, index) => {
//       radio.addEventListener('change', (e) => {
//         if (e.target.checked) {
//           // Calculer la nouvelle position du carrousel
//           // Remplacez 300 par la largeur réelle de vos cartes de carrousel
//           const newPosition = index * -400;
//           // Mettre à jour le style de votre carrousel pour le décaler
//           const carousel = document.getElementById('carousel');
//           carousel.style.transform = `translateX(${newPosition}px)`;
//         }
//       });
//     });
//   });
// }
// displayCardsSelector();


// Fonction pour mettre à jour les propriétés CSS en fonction de la position
function updateCardStyles(selectedIndex) {
  cards.forEach((card, index) => {
    const position = index + 1;
    const offset = selectedIndex + 1;
    const r = offset - position;
    const abs = Math.max(Math.abs(r), Math.abs(-r));
    const zIndex = position - abs;

    card.style.transform = `rotateY(${(-5 * r)}deg) translateX(${(-400 * r)}px)`;
    card.style.zIndex = zIndex;
  });
}

// Écouter les changements de sélection d'éléments radio
const radioInputs = document.querySelectorAll('.radio-hidden');
radioInputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    if (input.checked) {
      updateCardStyles(index);
    }
  });
});
// Initialiser le carrousel à la première position
updateCardStyles(18);
