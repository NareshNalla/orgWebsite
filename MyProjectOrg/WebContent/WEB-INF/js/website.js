angular.module('website', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'}).
            when('/ourVision', {templateUrl: 'partials/ourVision.html', controller: 'AboutCtrl'}).
            when('/administration', {templateUrl: 'partials/administration.html', controller: 'AboutCtrl'}).
            when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'AboutCtrl'}).
            when('/gphotos', {templateUrl: 'partials/gphotos.html', controller: 'AboutCtrl'}).
            when('/gvideo', {templateUrl: 'partials/gvideo.html', controller: 'AboutCtrl'}).
            when('/gmedia', {templateUrl: 'partials/gmedia.html', controller: 'AboutCtrl'}).
            when('/gpress', {templateUrl: 'partials/gpress.html', controller: 'AboutCtrl'}).
            when('/studentCorner', {templateUrl: 'partials/studentCorner.html', controller: 'studentCorner'}).
            when('/contact', {templateUrl: 'partials/contact.html', controller: 'AboutCtrl'}).
            when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
            otherwise({redirectTo: '/home'});
        
       
    })
    .controller('AboutCtrl', function ($scope, StateService) {
        $scope.title = 'About Page';
        $scope.body = 'This is the about page body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    })
    .controller('ExperimentsCtrl', function ($scope, StateService, ExperimentsService) {
        $scope.title = 'Experiments Page';
        $scope.body = 'This is the about experiments body';

        $scope.message = StateService.getMessage();
        $scope.experiments = ExperimentsService.getExperiments();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    })
    .controller('HomeCtrl', function ($scope, StateService) {
        $scope.title = 'Home Page';
        $scope.body = 'This is the about home body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
        $scope.myIndex = 0;
        carousel();
        //showSlides(); 
    })
 
    .factory('StateService', function () {
        var message = 'Hello Message';
        var getMessage = function () {
            return message;
        };
        var setMessage = function (m) {
            message = m;
        };

        return {
            getMessage: getMessage,
            setMessage: setMessage
        }
    })
    .service('ExperimentsService', function () {
        var service = this,
            experiments = [
                {name: 'Experiment 1', description: 'This is an experiment', completed:0},
                {name: 'Experiment 2', description: 'This is an experiment', completed:0},
                {name: 'Experiment 3', description: 'This is an experiment', completed:0},
                {name: 'Experiment 4', description: 'This is an experiment', completed:0}
            ];

        service.getExperiments = function() {
            return experiments;
        };
    })
    .directive('experiment', function(){
        var linker = function (scope, element, attrs) {
            element.on('click', function(){
                scope.doExperiment();
            })
        };

        var controller =  function($scope){
            $scope.doExperiment = function() {
                $scope.$apply(function(){
                    $scope.experiment.completed++;
                });
            };
        };

        return {
            scope: true,
            restrict: 'E',
            template: '<div class="experiment">' +
                '<h3>{{experiment.name}}</h3>' +
                '<p>{{experiment.description}}</p>' +
                '<p><strong>{{experiment.completed}}</strong></p>' +
                '</div>',
            link: linker,
            controller: controller
        }
    });


function showSlides() {
	console.log("1@");
	var slideIndex = 0;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    console.log("1@slideIn"+slideIndex);
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        console.log("dotsclassN"+dots[i].className);
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var myIndex = 0;
function carousel() {

    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}