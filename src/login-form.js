export default class LoginForm {
  constructor(x, email) {
    this.userDirectory = [
      { username: `aaron@theironyard.com`, password: `password123` },
      { username: `admin@google.com`, password: `pandas` },
      { username: email, password: `honeycrisp` },
    ];
  }

  validate(username, password) {
    this.username = username;
    this.password = password;

    const findValid = (snowball, current) => {
      if (current.username === username && current.password === password) {
        return true;
      }

      return snowball;
    };

    return this.userDirectory.reduce(findValid, false);
  }
}
