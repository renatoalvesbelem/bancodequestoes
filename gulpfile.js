const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    /*
	    mix.sass('app.scss')
	       .webpack('app.js')
    */
    mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.js')
    	.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.css')
    	.copy('node_modules/jquery/dist/jquery.min.js','public/js/jquery.js')
    	.copy('node_modules/tether/dist/js/tether.min.js','public/js/tether.js')
    	.copy('node_modules/angular/angular.min.js','public/js/angular.js')
    	.copy('node_modules/font-awesome/css/font-awesome.min.css','public/css/font-awesome.css')
        .copy('node_modules/font-awesome/fonts','public/fonts')
        .copy('node_modules/ng-tags-input/build/ng-tags-input.min.js','public/js/ng-tags-input.js')
    	.copy('node_modules/ng-tags-input/build/ng-tags-input.min.css','public/css/ng-tags-input.css');
    
});
