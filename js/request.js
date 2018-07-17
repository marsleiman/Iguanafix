function ProductsPage() {
	this.url ="https://private-70cb45-aobara.apiary-mock.com/";
	this.defaultProduct = 1;
	this.init = function(){
		this.load(this.defaultProduct);
		this.related();
		this.select(this.defaultProduct);
	}
	this.load = function(defaultProduct){
		$.get(this.url + "product/list", function(data){
			var categoryProducts = $('.category-product');
			console.log(data);
			data.forEach(function(d){
				categoryProducts.append('<option value=' + d.id + ((d.id == defaultProduct) ? ' selected' : '') + '>' + d.description + '</option>');
			});

		});
	}
	this.select = function(productId){
		this.images(this.defaultProduct);
	}
	this.images = function(productId){
		$.get(this.url + "product/" + productId +'/photos', function(data){
			console.log(data);
			$('#carrousel' + 1).attr("src",data[0].url);
			$('#carrousel' + 2).attr("src",data[1].url);
			$('#carrousel' + 3).attr("src",data[2].url);
		});	
	}
	this.related = function(){
		$.get(this.url + "related-product/list", function(data){
			console.log(data);
			$('#upsell' + 1).attr("src",data[0].pictureUrl,"h3",data[0].title);
			$('#upsell' + 2).attr("src",data[1].pictureUrl,"h3",data[0].title);
			$('#upsell' + 3).attr("src",data[2].pictureUrl,"h3",data[0].title);
		});
	}
}

var products = new ProductsPage();
products.init();



