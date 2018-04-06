(function () {
    angular.module("topicApp")
            .service("TopicDataSvc", function ($http,$location,$window) {

                var self = this;

                self.getTopics = function () {
                    var promise1 = $http.get('http://localhost:8080/topics');
                    var promise2 = promise1.then(function (response) {
                        return response.data;
                    });
                    return promise2;
                };
                self.saveTopic = function (topicData) {
                    return $http.put('http://localhost:8080/topics/' + topicData.id, topicData)
                            .then(function (response) {
                                console.log(response);
                                setTimeout(function(){$window.location.reload()},1000);
                            });
                };
                self.createTopic = function (topicData) {
                    return $http.post('http://localhost:8080/topics/', topicData)
                            .then(function (response) {
//                            	$location.path("").replace();
//                            	$location.url();
                                console.log(response);
//                                $location.path("/");
//                                $route.reload();
                                setTimeout(function(){$window.location.reload()},1000);
                            });
                };
                self.deleteTopic = function (topicData) {
                    return $http.delete('http://localhost:8080/topics/' + topicData.id)
                            .then(function (response) {
                                console.log(response);
//                                $location.path("/");
                                setTimeout(function(){$window.location.reload()},500);
                            });
                };
            });
})();
