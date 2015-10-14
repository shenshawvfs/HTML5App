/*
 * Game Angular Directives
 * 
 * Copyright (C) 2014 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
 */
app.directive( 'hideMe', function() {
   
    return function( scope, element, attrs ) {
        scope.$watch( attrs.hideMe, function( newVal ) {
            if (newVal) {
                element.delay( 3000 ).fadeOut( 2000 );
            }
        });
    };
});
