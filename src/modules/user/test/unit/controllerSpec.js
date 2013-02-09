(function () {
  describe('directives', function() {
    var element, scope, logger, User;
    // Load the user module.
    beforeEach(module('cmf.user'));

    describe ("login", function() {
      // Prepare our dependencies.
      beforeEach(inject(function ($rootScope, $compile, Logger) {
        scope = $rootScope;
        scope.logger = new Logger();
        element = $compile(
          '<login logger="logger"></login>'
        )(scope);
      }));
      it('Should be possible to login', function() {
        scope.username = "user";
        scope.password = "password";
      });
    });
  });
})();