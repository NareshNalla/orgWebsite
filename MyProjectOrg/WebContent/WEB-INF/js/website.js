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
   
    .controller('HomeCtrl', function ($scope) {
    	
        $scope.title = 'Home Page';
        $scope.body = 'This is the about home body';
        $scope.gallerybottom = false;
        $scope.logobottom = true;
       console.log("in home");
     
        $scope.myIndex = 0;
        carousel();
        
    })
    
    .controller('regiCtrl', function ($scope,$http) {
        $scope.title = 'Registration';
        console.log("in regi");
        $scope.gallerybottom = false;
        $scope.logobottom = false;
        $scope.submit();
        $scope.submit = function() {
        	$scope.firstName = null;
            $scope.lastName = null;
            $scope.gender = null;
            $scope.email_adr = null;
            $scope.mobl_nm = null;
            $scope.occupation = null;
            $scope.colg_nm = null;
            $scope.colg_join_year = null;
            $scope.adr_ln1 = null;
            $scope.adr_ln2 = null;
            $scope.district = null;
            $scope.state = null;
            $scope.univ_nm = null;
            alert("ccc"+$scope.univ_nm)
            $scope.postdata();
            $scope.postdata = function (firstName, lastName, gender,email_adr,mobl_nm,
            		occupation,colg_nm,colg_join_year,adr_ln1,adr_ln2,district,state,univ_nm) {
            	 alert("firstName: in postData"+firstName)
            	var data = {
            			firstName: firstName,
            			lastName: lastName,
            			gender: gender,
            			email_adr: email_adr,
            			mobl_nm: mobl_nm,
            			occupation: occupation,
            			colg_nm: colg_nm,
            			colg_join_year: colg_join_year,
            			adr_ln1: adr_ln1,
            			adr_ln2: adr_ln2,
            			district: district,
            			state: state,
            			univ_nm: univ_nm
            			
            	};

            	//Call the services
            	$http.post('http://54.200.164.87:8080/hiber/#/register', JSON.stringify(data)).then(function (response) {

            		if (response.data)

            			$scope.msg = "Post Data Submitted Successfully!";
            		alert("sucess"+$scope.msg);

            	}, function (response) {

            		$scope.msg = "Service not Exists";
            		alert("Fail"+$scope.msg);

            		$scope.statusval = response.status;

            		$scope.statustext = response.statusText;

            		$scope.headers = response.headers();

            	});

            };

        };
        
        })
   
     .directive('gotop', function(){
        var linker = function (scope, element, attrs) {
            element.on('click', function(){
                scope.goTop();
            })
        };

        var controller =  function($scope){
            $scope.goTop = function() {
                $scope.$apply(function(){
                    //
                	document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                });
            };
        };

        return {
            scope: true,
            restrict: 'EA',
            /*template: '',*/
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

/*//goto top
window.onscroll = function() {scrollFunction()};*/

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
