angular.module('website', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl: 'partials/about.html'}).
            when('/ourVision', {templateUrl: 'partials/ourVision.html'}).
            when('/administration', {templateUrl: 'partials/administration.html'}).
            when('/gallery', {templateUrl: 'partials/gallery.html'}).
            when('/gphotos', {templateUrl: 'partials/gphotos.html'}).
            when('/gvideo', {templateUrl: 'partials/gvideo.html'}).
            when('/gmedia', {templateUrl: 'partials/gmedia.html'}).
            when('/gpress', {templateUrl: 'partials/gpress.html'}).
            when('/studentCorner', {templateUrl: 'partials/studentCorner.html'}).
            when('/contact', {templateUrl: 'partials/contact.html'}).
            when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
            when('/register', {templateUrl: 'partials/register.html', controller: 'regiCtrl'}).
            otherwise({redirectTo: '/home'});
        
       
    })
   
    .controller('HomeCtrl', function ($scope, StateService) {
    	
        $scope.title = 'Home Page';
        $scope.body = 'This is the about home body';
        $scope.gallerybottom = false;
        $scope.logobottom = true;
       console.log("in home");
     
        $scope.myIndex = 0;
        carousel();
        
    })
    
    .controller('regiCtrl', function ($scope, StateService, ExperimentsService) {
        $scope.title = 'Registration';
        console.log("in regi");
        
        $scope.gallerybottom = false;
        $scope.logobottom = false;
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

myIndex =0; 
function carousel() {
	
    var i;
    var x = document.getElementsByClassName("mySlides");
    if(x == undefined){		
		return;
	}
    if(myIndex == undefined){		
		return;
	}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 5 seconds
}