/**
 * @license angularFlexTex v1.0.0
 * (c) 2016 smohan http://www.smohan.net
 * License: MIT
 */
+(function(){
    "use strict";
    angular.module('angular-flexText', [])
        .directive('flexText', ['$timeout', function ($timeout) {
            return {
                scope : {
                    minHeight : '=',
                    maxHeight : '='
                },
                link : function (scope, element, attrs) {
                    var minHeight = parseFloat(scope.minHeight) || 0,
                        maxHeight = parseFloat(scope.maxHeight) || 9999;
                    /**
                     * 获取影响元素高度属性的和
                     * @returns {number}
                     */
                    var getOffset = function () {
                        var style = window.getComputedStyle(element[0], null);
                        var boxSizing = style['boxSizing'];
                        if(boxSizing == 'border-box') return 0;
                        var offset = 0;
                        ['paddingTop', 'paddingBottom', 'borderTopWidth', 'borderBottomWidth'].forEach(function (value) {
                            offset += parseFloat(style[value]);
                        });
                        return offset;
                    };
                    var offset = getOffset();
                    /**
                     * autoHeight
                     */
                    var flexHeight = function () {
                        var height = {};
                        if((element[0].scrollHeight - offset) > maxHeight){
                            element[0].style.overflowY = 'scroll';
                            height = maxHeight;
                        } else {
                            element[0].style.overflowY = 'hidden';
                            element[0].style.height = 'auto';
                            height = element[0].scrollHeight - offset;
                        }
                        height = Math.max(minHeight, height);
                        element[0].style.height = height + 'px';
                    };
                    $timeout(flexHeight);
                    angular.element(window).bind('resize', flexHeight);
                    element[0].addEventListener('input', flexHeight);
                    element[0].addEventListener('focus', flexHeight);
                    element[0].addEventListener('change', flexHeight);
                }
            };
        }]);
}());