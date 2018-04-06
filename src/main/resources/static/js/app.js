angular.module("topicApp", [])
        .controller("HeaderCtrl", HeaderCtrl)
        .controller("FooterCtrl", FooterCtrl);
        
function HeaderCtrl(AppDataServiceSvc) {
    this.appTitle = AppDataServiceSvc.name;
};
function FooterCtrl(AppDataServiceSvc) {
    this.appTitle = AppDataServiceSvc.footer;
    this.builtDate = AppDataServiceSvc.builtDate;
};



