class localStorageService {
  static set = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static get = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
  }
}

export default localStorageService;
