var CvApp = angular.module("CvApp", []);
         
CvApp.controller('CvController', [ '$scope', 
   function( $scope ) {
      $scope.cv = {
         firstName: { 
				displayName: 'first name',
				value: '',
				reqired: true ,
				type:"text"
			},
         midName: { 
				displayName: 'middle name',
				value: '',
				reqired: false,
				type:"text"
			},
         lastName: { 
				displayName: 'last name',
				value: '',
				reqired: false ,
				type:"text"
			},
         date: { 
				displayName: 'date',
				value: '',
				reqired: true,
				type:"number"
			},
         city: { 
				displayName: 'city',
				value: '',
				reqired: true,
				type:"text"
			},
         street: { 
				displayName: 'street',
				value: '',
				reqired: true,
				type:"number"
			},
         number: { 
				displayName: 'number',
				value: '',
				reqired: true,
				type:"number"
			},
         apartment: { 
				displayName: 'apartment',
				value: '',
				reqired: false,
				type:"number"
			},
         zipCode: { 
				displayName: 'zip code',
				value: '',
				reqired: false,
				type:"number"
			},
         email: { 
				displayName: 'email',
				value: '',
				reqired: true,
				type:"email"
			},
         email2: { 
				displayName: 'email2',
				value: '',
				reqired: false,
				type:"email"
			},
         phone: { 
				displayName: 'phone',
				value: '',
				reqired: true,
				type:"number"
			},
         phone2: { 
				displayName: 'phone2',
				value: '',
				reqired: false,
				type:"number"
			},
      };

      $scope.validCheck = function(){
         if ($scope.cv.firstname.value.$invalid )//|| cv.lastname.value.$invalid ||  cv.email.value.$invalid || cv.lastname.value.$invalid || cv.street.value.$invalid ||  cv.number.value.$invalid || cv.zipcode.value.$invalid ||cv.phone.value.$invalid ||cv.email.value.$invalid) 
            {return true}
         else {return false}
      },

      $scope.reset = function(){ // reset values
         angular.forEach($scope.cv, function(value, key){
            
                  value.value = "";
            
         });
      },

      $scope.saveValues = function(){   
         var cvString = "";
         angular.forEach($scope.cv, function(value, key){
                  if (value.value) {cvString +=value.displayName + " : " + value.value + " , "}
            
         });
         var blob = new Blob([cvString], {type: "text/plain;charset=utf-8"});
         saveAs(blob, "testfile1.txt");
      },
      $scope.submitForm = function(){

      }
}]);

