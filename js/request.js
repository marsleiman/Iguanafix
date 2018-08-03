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
			let productName = $('.product-name');
			let categoryProducts = $('.category-product');
			console.log(data);
			data.forEach(function(d){
				categoryProducts.append('<option value=' + d.id + ((d.id == defaultProduct) ? ' selected' : '') + '>' + d.description + '</option>');
				productName.text(d.id);
			});
		});
	}
	this.select = function(productId){
		this.images(productId);
	}
	this.setMainImage = function(src){
		$('#carrouselMain').attr("src",src);
	}
	this.images = function(productId){
		var me = this;
		$.get(this.url + "product/" + productId +'/photos', function(data){
			me.setMainImage(data[0].url);
			data.forEach(function(el, index){
				$('#carrousel' + index).attr("src",el.url);
			})
		});	
	}
	this.related = function(){
		$.get(this.url + "related-product/list", function(data){
			console.log(data);
			data.forEach(function(el, index){
				$('#upsell' + index).attr("src",el.pictureUrl);
				$("#title" + index).append(el.title);
				$("#description" + index).append(el.description);
			});
		});
	}
}

var products = new ProductsPage();
products.init();