
//  Auth
export const getSignedIn = state => state.auth.signedIn;
export const getAuthLoading = state => state.auth.loading;
export const getAuthShowError =state => state.auth.showError;

//  Adventurer
export const getAdventurerListLoading = state => state.adventurer.listLoading;
export const getAdventurerCreationLoading = state => state.adventurer.creationLoading;
export const getAdventurerLoading = state => state.adventurer.infoLoading;
export const getAdventurers = state => state.adventurer.userAdventurers;
export const getAdventurerName = state => state.adventurer.name;
export const getAdventurerLevel = state => state.adventurer.level;
export const getAdventurerClass = state => state.adventurer.class;
export const getAdventurerRace = state => state.adventurer.race;
export const getAdventurerExperience = state => state.adventurer.info.experience;
export const getAdventurerHealth = state => state.adventurer.info.health;
export const getAdventurerCurrentHealth = state => state.adventurer.info.currentHealth;
export const getAdventurerMana = state => state.adventurer.info.mana;
export const getAdventurerCurrentMana = state => state.adventurer.info.currentMana;
export const getAdventurerPosition = state => state.adventurer.position;

//  Monster
export const getVisibleMonsters = state => state.monster.visibleMonsters;
export const getVisibleMonstersPositions = state => state.monster.visibleMonstersPositions;
export const getTarget = state => state.monster.target;

//  Game
export const getGameMap = state => state.game.map;
export const getDrawMap = state => state.game.drawMap;