angular.module('website', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'}).
            when('/ourVision', {templateUrl: 'partials/ourVision.html', controller: 'AboutCtrl'}).
            when('/administration', {templateUrl: 'partials/administration.html', controller: 'AboutCtrl'}).
            when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'GalleryCtrl'}).
            when('/gphotos', {templateUrl: 'partials/gphotos.html', controller: 'GalleryCtrl'}).
            when('/gvideo', {templateUrl: 'partials/gvideo.html', controller: 'GalleryCtrl'}).
            when('/gmedia', {templateUrl: 'partials/gmedia.html', controller: 'GalleryCtrl'}).
            when('/gpress', {templateUrl: 'partials/gpress.html', controller: 'GalleryCtrl'}).
            when('/studentCorner', {templateUrl: 'partials/studentCorner.html', controller: 'studentCorner'}).
            when('/contact', {templateUrl: 'partials/contact.html', controller: 'AboutCtrl'}).
            when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
            otherwise({redirectTo: '/home'});
        
       
    })
    .controller('AboutCtrl', function ($scope, StateService) {
        $scope.title = 'About Page';
        $scope.body = 'This is the about page body';
      
        $scope.gallerybottom = true;
        $scope.logobottom = true;
        
       
    })
    .controller('HomeCtrl', function ($scope, StateService) {
    	
        $scope.title = 'Home Page';
        $scope.body = 'This is the about home body';
        $scope.gallerybottom = false;
        $scope.logobottom = true;
       
     
        $scope.myIndex = 0;
        carousel();
        
    })
     .controller('GalleryCtrl', function ($scope, StateService, ExperimentsService) {
        $scope.title = 'Gallery';
        $scope.gallerybottom = false;
        $scope.logobottom = false;
        
        /*$scope.gallerybottom = true;
        $scope.logobottom = true;*/
       
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
    setTimeout(carousel, 5000); // Change image every 5 seconds
}