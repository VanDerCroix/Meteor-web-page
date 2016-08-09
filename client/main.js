import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var img_data = [
	{
		img_src:"http://pokemonqrcode.com/image/cache/catalog/Pokemon/Gen1/bulbasaur-500x500.jpg",
		img_alt:"belba"
	},
	{
		img_src:"http://pokemonqrcode.com/image/cache/catalog/Pokemon/Gen1/charmander-500x500.jpg",
		img_alt:"char"
	},
	{
		img_src:"http://pokemonqrcode.com/image/cache/catalog/Pokemon/Gen1/squirtle-500x500.jpg",
		img_alt:"escuero"
	},
];
Template.images.helpers({images:img_data});