/* eslint-disable class-methods-use-this */
class GetAllUsersOperation {
  constructor({ usersModel }) {
    this.usersModel = usersModel;
  }

  async execute() {
    const response = await this.usersModel.getAll();
    return response;
  }
}

module.exports = GetAllUsersOperation;
