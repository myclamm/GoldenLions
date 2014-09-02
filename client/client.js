angular.module('githubscout', [
	'githubscout.user',
	'githubscout.language',
	'githubscout.search',
	'githubscout.home',
	'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home/home.html',
			controller: 'HomeController'
		})
		.state('user', {
			url: '/user',
			templateUrl: 'user/user.html',
			controller: 'UserController'
		})
		.state('language', {
			url: '/language',
			templateUrl: 'language/language.html',
			controller: 'LanguageController'
		});

	$urlRouterProvider.otherwise('/');
})