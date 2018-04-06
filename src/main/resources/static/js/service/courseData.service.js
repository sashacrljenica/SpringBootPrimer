(function () {
    angular.module("topicApp")
            .service("CourseDataSvc", function ($http,$location,$window) {

                var self = this;
                
                self.getCourses = function () {
                    var promise1 = $http.get('http://localhost:8080/courses');
                    var promise2 = promise1.then(function (response) {
                        return response.data;
                    });
                    return promise2;
                };
                self.saveCourse = function (courseData) {
                    return $http.put('http://localhost:8080/courses/' + courseData.id, courseData)
                            .then(function (response) {
                                console.log(response);
                                setTimeout(function(){$window.location.reload()},1000);
                            });
                };
                self.createCourse = function (courseData) {
                    return $http.post('http://localhost:8080/courses/', courseData)
                            .then(function (response) {
                                console.log(response);
                                setTimeout(function(){$window.location.reload()},1000);
                            });
                };
                self.deleteCourse = function (courseData) {
                    return $http.delete('http://localhost:8080/courses/' + courseData.id)
                            .then(function (response) {
                                console.log(response);
                                setTimeout(function(){$window.location.reload()},500);
                            });
                };
            });
})();
