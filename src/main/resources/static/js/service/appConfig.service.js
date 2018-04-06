(function () {
    angular.module("topicApp")
            .service("AppDataServiceSvc", function (AppNameSvc) {

                this.name = AppNameSvc;
                this.author = "Sale";
                this.builtDate = new Date().toString();
                this.footer = "Copyright 2017 by Sale";

            });
})();
