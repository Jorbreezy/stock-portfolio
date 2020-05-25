class Auth {
  constructor() {
    this.authenticated = false;
    this.email = '';
  }

  login(cb, email) {
    this.authenticated = true;
    this.email = email;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
