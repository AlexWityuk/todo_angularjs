app.controller('MainController', ['$scope','$http', '$route',
    function ($scope, $http, $route) {
        $http.get('/all')
            .success(function(data) {
                $scope.rows = data;
                console.log($scope.rows);
            })
            .error(function(data) {
                console.log('Error: ' + data);
        });
        $scope.submitForm = function () {
            $scope.deadline = $("#datepick").val();
            var data = {
                title: $scope.title,
                deadline: $scope.deadline
            };
            $http({
                method  : 'POST',
                url     : '/insert',
                data:  data,
                headers : { 'Content-Type': 'application/json' }
            })
                .success(function(result) {
                    $uibModalInstance.close('Запись добавлена успешно.');
                    //window.location.reload();
                })
                .error(function(data){
                    console.log('Error: ' + data);
                });
            $route.reload();
        };
        $scope.answers = {};
        $scope.myCheck = function(index) {
            var id = $('input[name=' + index +']').val();
            $http.put('/checked/' + id)
                .success(function(result) {
                    $uibModalInstance.close('Запись вычеркнута.');
                    window.location.reload();
                })
                .error(function(data){
                    console.log('Error: ' + data);
                });
            $route.reload();
        }
    }]);
