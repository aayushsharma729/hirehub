export default class UserModel {
  static users = [
    {
      id: 1,
      name: "aayush121",
      email: "aayush121@gmail.com",
      password: "aayush",
    },
  ];
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    UserModel.users.push({ id, name, email, password });
  }
  // method to get the user details
  static get = () => {
    return UserModel.users;
  };
  // method to add new user
  static addUser = (user) => {
    UserModel.users.push(user);
  };
  // method to confirm the user login
  static confirmLogin(user) {
    const { email } = user;
    return UserModel.users.find((user) => {
      return user.email === email;
    });
  }
}
