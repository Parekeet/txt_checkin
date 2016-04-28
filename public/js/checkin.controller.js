(function() {
  "use strict";

  angular
    .module('app')
    .controller('CheckInController', CheckInController);

  CheckInController.$inject = ["$log"];

  function CheckInController($log) {
    var vm = this;

    vm.first_name = "";
    vm.last_name  = "";
    vm.submitCheckin     = submitCheckin;

    function submitCheckin (){
      console.log("hello?");
    }


    // vm.formData = {
    //   first_name: "",
    //   last_name:  ""
    // };
    // vm.submitCheckin = submitCheckin;

    // function submitCheckin() {
    //   if (first_name && last_name = true) {
    //     console.log(first_name);
    //   }
    // }

    $log.info('CheckInController Loaded!');
  }

})();
