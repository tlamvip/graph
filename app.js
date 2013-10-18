function fruitCtrl($scope) {  
	$scope.items = [
		{
			title : "Apple",
			value : 45
		},
		{
			title : "Orange",
			value : 17
		},
		{
			title : "banana",
			value : 32
		},
	];
}
  
function itemTableCtrl($scope) {                                 
	$scope.add = function(){          
		$scope.items.push({
			value : 0
		});                                 
	};

    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    };

	$scope.maxValue = function(item){
		if (item.value > 100){ 
			item.value = 100;
		}else if (item.value < 0){
			item.value = 0
		}
	};
}      
    
