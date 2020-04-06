
//  Auth
export const getSignedIn = state => state.auth.signedIn;
export const getAuthLoading = state => state.auth.loading;

//  Adventurer
export const getAdventurerLoading = state => state.adventurer.loading;
export const getAdventurers = state => state.adventurer.userAdventurers;
export const getAdventurerName = state => state.adventurer.info.name;
export const getAdventurerLevel = state => state.adventurer.info.level;
export const getAdventurerExperience = state => state.adventurer.info.experience;
export const getAdventurerHealth = state => state.adventurer.info.health;
export const getAdventurerCurrentHealth = state => state.adventurer.info.currentHealth;
export const getAdventurerMana = state => state.adventurer.info.mana;
export const getAdventurerCurrentMana = state => state.adventurer.info.currentMana;
export const getAdventurerClass = state => state.adventurer.info.class;
export const getAdventurerRace = state => state.adventurer.info.race;
export const getAdventurerPosition = state => state.adventurer.position;

//  Game
export const getGameMap = state => state.game.map;
export const getDrawMap = state => state.game.drawMap;