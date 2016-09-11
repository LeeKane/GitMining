/**
 * Created by Akari on 16/5/27.
 */
$(document).ready(function() {
    var type = $("#viewtype").text();
    if (type == "USER") {
        $("#useritem").attr("class", "item active");
    } else {
        $("#useritem").attr("class", "item");
    }

    $("#dropdown-icon").click(function() {
        $("#searchitem").slideToggle();

    });

//	$('#repomenu .item').tab();
});

var tags = "";
var key="";
if ($("#searchkey").text().indexOf(":") !=-1){
    key=$("#searchkey").text().split(" : ")[1];
}

var app = angular
    .module(
        'userapp',
        [],
        function($httpProvider) {
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        });

app.controller('generalCtrl', [
    '$scope',
    'UserService',
    function($scope, UserService) {
        //general:1;follower:2;repo:3
        $scope.type = 1;

        $scope.isActive={
            isGen:true,
            isFollower:false,
            isRepo:false,
        };

        $scope.isHidden=false;

        $scope.changeState=function(){
            if($scope.isHidden==false){
                $scope.isHidden=true;
            }else{
                $scope.isHidden=false;
            }
        }

        // 配置分页基本参数
        $scope.paginationConf = {
            currentPage : 1,
            itemsPerPage : 10
        };

        $scope.changeuser = function(retype) {
            $scope.type = retype;
            $scope.paginationConf.currentPage = 1
            if(retype==1){
                $scope.isActive.isGen=true;
                $scope.isActive.isFollower=false;
                $scope.isActive.isRepo=false;
            }else if(retype==2){
                $scope.isActive.isFollower = true;
                $scope.isActive.isGen=false;
                $scope.isActive.isRepo=false;
            }else if(retype==3){
                $scope.isActive.isRepo = true;
                $scope.isActive.isGen=false;
                $scope.isActive.isFollower=false;
            }
        };

        var GetUsers = function() {
            var postData = {
                pageIndex : $scope.paginationConf.currentPage,
                pageSize : $scope.paginationConf.itemsPerPage,
                type: $scope.type,
                key:key
            }

            UserService.getUsers(postData).success(
                function(response) {
                    $scope.paginationConf.totalItems = response.count;
                    $scope.generalusers = response.users;
                });
        }

        /*******************************************************************
         * 当页码和页面记录数发生变化时监控后台查询 如果把currentPage和itemsPerPage分开监控的话则会触发两次后台事件。
         ******************************************************************/
        $scope.$watch(
            'paginationConf.currentPage + paginationConf.itemsPerPage + type',
            GetUsers);

    } ]);