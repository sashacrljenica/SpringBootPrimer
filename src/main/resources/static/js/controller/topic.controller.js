(function () {
    angular.module("topicApp")
            .controller("TopicCtrl", TopicCtrl);

    function TopicCtrl(TopicDataSvc) {
        this.show = false;
        this.show02 = false;
        var self = this;
        self.editMode = false;
        self.addMode = false;

        TopicDataSvc.getTopics()
                .then(function (data) {
                    self.topics = data;
                });
        
        this.selectTopic = function (index) {
            this.selectedTopic = this.topics[index];
            this.show = true;
            this.show02 = true;
            self.successMessage = undefined;
            self.errorMessage = undefined;
        };
        
        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        };
        
        this.saveTopic = function () {
            var topicData = this.selectedTopic;
            if (self.addMode) {
                TopicDataSvc.createTopic(topicData)
                        .then(function () {
                            self.successMessage = "Data successfully created!";
                        },
                                function () {
                                    self.errorMessage = "There was an error with json-server. Please try again!";
                                });
                self.addMode = false;
            } else {
                TopicDataSvc.saveTopic(topicData)
                        .then(function () {
                            self.successMessage = "Data successfully updated!";
                        },
                                function () {
                                    self.errorMessage = "There was an error with json-server. Please try again!";
                                });
            }
            this.show02 = false;
        };
        
        this.deleteTopic = function (){
        	var topicData = this.selectedTopic;       
            TopicDataSvc.deleteTopic(topicData)
            	.then(function () {
                         self.successMessage = "Data successfully deleted!";
                      },
                      function () {
                         self.errorMessage = "There was an error with json-server. Please try again!";
                      });
            this.show02 = false;
        };
        
        this.addTopic = function () {
        	this.toggleEditMode();
            self.addMode = true;
            this.show02 = true;
        };
    }
})();