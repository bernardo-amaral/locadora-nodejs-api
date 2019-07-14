class DefaultController {
  static main(request, response) {
    response.json({ success: true, message: 'Welcome!' });
  }
}

module.exports = DefaultController;
