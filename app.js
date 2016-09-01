(function(){
	var app = angular.module('app',[]);
	var date = new Date().toLocaleDateString('en-GB', {  
			    day : 'numeric',
			    month : 'short',
			    year : 'numeric'
			}).split(' ').join('-');

	app.controller('DataController', function(){
		this.newsFeed = news;
	});

	app.controller('OrderController', function(){
		this.orderItems = orders;
	});

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});


	var orders = [
	{
		name: "iPhone 6s",
		number: "QRS543",
		date: date
	},
	{
		name: "MacBook Pro",
		number: "T45FD32",
		date: date

	},
	{
		name: "Apple Watch",
		number: "89YURF",
		date: date

	}

	]

	var news = [
	{
		title: "Breaking News",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		body: "lorem ipsumfdsaifdasfsdafds",
		image: ""
	},
	{
		title: "Lorem Ipsum",
		description: "Duis rhoncus leo in ex fermentum, ut tristique leo convallis. Aliquam condimentum sit amet lectus ac aliquam.",
		body: "Donec venenatis quam ipsum, a consequat ante congue nec. Nam molestie augue non auctor tincidunt.",
		image: ""
	},
	{
		title: "Lorem Ipsum",
		description: "Integer id tincidunt urna, at consequat metus.",
		body: "Nullam id neque sit amet neque finibus sagittis. Nulla eget quam a dui cursus bibendum at quis velit. Nullam eget odio odio.Nullam id neque sit amet neque finibus sagittis. Nulla eget quam a dui cursus bibendum at quis velit. Nullam eget odio odio.",
		image: ""
	},
	{
		title: "Lorem Ipsum",
		description: "Nullam id neque sit amet neque finibus sagittis. Nulla eget quam a dui cursus bibendum at quis velit. Nullam eget odio odio.",
		body: "Nullam id neque sit amet neque finibus sagittis. Nulla eget quam a dui cursus bibendum at quis velit. Nullam eget odio odio.Nullam id neque sit amet neque finibus sagittis. Nulla eget quam a dui cursus bibendum at quis velit. Nullam eget odio odio.Nullam id neque sit amet neque finibus sagittis. Nulla eget quam a dui cursus bibendum at quis velit. Nullam eget odio odio.",
		image: ""
	}

	]

})();