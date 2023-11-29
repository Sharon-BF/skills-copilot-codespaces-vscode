function skillMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skill-member.html',
    controller: 'MemberController',
    controllerAs: 'memberCtrl',
    bindToController: true,
    scope: {
      member: '=',
      skills: '='
    }
  };
}