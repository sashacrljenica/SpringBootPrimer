(function () {
    angular.module("topicApp")
            .controller("CourseCtrl", CourseCtrl);

    function CourseCtrl(CourseDataSvc) {
        this.show = false;
        this.show03 = false;
        var self = this;
        self.editMode = false;
        self.addMode = false;
        
        CourseDataSvc.getCourses()
        	.then(function (data) {
        		self.courses = data;
        });
        
        this.selectCourse = function (index) {
            this.selectedCourse = this.courses[index];
            this.show = true;
            this.show03 = true;
            self.successMessage = undefined;
            self.errorMessage = undefined;
        };
        
        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        };
        
        this.saveCourse = function () {
            var courseData = this.selectedCourse;
            if (self.addMode) {
                CourseDataSvc.createCourse(courseData)
                        .then(function () {
                            self.successMessage = "Data successfully created!";
                        },
                                function () {
                                    self.errorMessage = "There was an error with json-server. Please try again!";
                                });
                self.addMode = false;
            } else {
                CourseDataSvc.saveCourse(courseData)
                        .then(function () {
                            self.successMessage = "Data successfully updated!";
                        },
                                function () {
                                    selfc.errorMessage = "There was an error with json-server. Please try again!";
                                });
            }
            this.show03 = false;
        };
        
        this.deleteCourse = function (){
        	var courseData = this.selectedCourse;       
            CourseDataSvc.deleteCourse(courseData)
            	.then(function () {
                         self.successMessage = "Data successfully deleted!";
                      },
                      function () {
                         self.errorMessage = "There was an error with json-server. Please try again!";
                      });
            this.show03 = false;
        };
        
        this.addCourse = function () {
        	this.toggleEditMode();
            self.addMode = true;
            this.show03 = true;
        };
    }
})();