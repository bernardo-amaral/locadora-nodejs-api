const User = require('../model/UsersModel');
const TokenVerify = require('../model/TokensModel');

class UserController {
  static async listAll(ctx) {
    const response = await ctx.container.cradle.getAllUsersOperation.execute();
    return ctx.res.status(200).json(response);
  }

  static async authUser(ctx) {
    const response = await ctx.container.cradle.authUserOperation.execute(ctx.body);
    return ctx.res.status(200).json(response);
  }

  static logoutUser(request, response) {
    const { userId } = request.body;
    if (!userId) {
      response.status(400).send({ error: true, message: 'Please provide userId' });
    } else {
      TokenVerify.disableUsersTokens(userId, (error) => {
        if (error) { response.send(error); }
        response.json({ message: 'Session closed' });
      });
    }
  }

  static getById(request, response) {
    User.getById(request.params.userId, (error, user) => {
      if (error) { response.send(error); }
      response.json(user);
    });
  }

  static delete(request, response) {
    User.delete(request.params.userId, (error, dbResponse) => {
      if (error) { response.send(error); }
      response.json({ success: dbResponse });
    });
  }

  static async createAUser(request, response) {
    const newUser = new User(request.body);
    await User.createUser(newUser, (error, result) => {
      if (error) {
        response.status(500).json({
          success: false,
          message: error,
        });
      } else {
        response.status(200).json({
          success: true,
          userId: result.userId,
          email: result.email,
          name: result.name,
        });
      }
    });
    // if (error) { response.json(error); }
    // });
  }
}

module.exports = UserController;
