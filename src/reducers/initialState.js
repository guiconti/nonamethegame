export default {
  auth: {
    signedIn: false,
    loading: false,
    showError: false,
    error: null,
  },
  adventurer: {
    loading: true,
    userAdventurers: [],
    info: {},
    position: {},
  },
  game: {
    loading: false,
    connected: false,
    map: [],
    drawMap: true,
  },
};
