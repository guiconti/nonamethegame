export default {
  auth: {
    signedIn: false,
    loading: false,
    showError: false,
    error: null,
  },
  adventurer: {
    listLoading: true,
    creationLoading: false,
    infoLoading: true,
    userAdventurers: [],
    _id: '',
    name: '',
    level: 1,
    class: '',
    race: '',
    info: {},
    position: {},
    inventory: {
      miscellaneous: {},
      consumable: {},
      equipment: {},
      card: {},
    },
  },
  game: {
    loading: false,
    connected: false,
    map: [],
    drawMap: true,
  },
  monster: {
    visibleMonsters: {},
    visibleMonstersPositions: {},
    target: null,
  },
  item: {
    listLoading: true,
    list: {},
  },
  battleLog: {
    messages: [],
  },
};
