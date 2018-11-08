angular.module('MyApp',['ngMaterial', 'ngMessages', 'pascalprecht.translate'])
.controller('translateCtrl', function($translate, $scope) {
	$scope.changeLanguage = function(langKey){
		$translate.use(langKey);
	};
})
.config(function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: 'lang/',
		suffix: '.json'
	});
	
	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('escape');
})
.controller('MyAppCtrl', function($scope) {
	$scope.data = {
		lyrics: '',
		chord: 'G Em Am7 D G Em Am7 D Bm Em Am7 D Bm Em Am D G D Em C D G C Em Am7 D G Em Am D G Em Am D G D Em C D G C Em Am7 D Cadd9 Bm7 C D G C Em Am7 D C D Bm7 Em C D G C Bm7 E Am7 D G Am7 D G',
		addSpace : true,
		chordDelimiter : true,
		rate: 500
	};
})
;