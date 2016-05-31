casper.test.begin('02 Add to cart', function suite() {
 
	casper.options.viewportSize = {
		width: 1920,
		height: 1080
	};
	casper.options.waitTimeout = 25000;
 
    casper.start(function () {
        this.open('http://buyone.se/');
        this.test.assertHttpStatus(200);
        this.test.comment('Open home page');
    });
 
    casper.thenOpen('http://buyone.se/joust-duffle-bag.html', function(){
        this.test.assertHttpStatus(200);
        this.test.comment('Open simple product page (Joust Duffle Bag)');
        this.test.info('Current location is ' + this.getCurrentUrl());
		this.waitForUrl('http://buyone.se/joust-duffle-bag.html');
        this.test.assertSelectorExist('#product-addtocart-button', 'Add to cart btn - is present');
        this.test.assertSelectorHasText('.page-title-wrapper span', 'Joust Duffle Bag', 'Product name - is present');
        this.test.assertSelectorExist('.price', 'Product price - is present');
        this.test.assertSelectorExist('.stock', 'Qty input field - is present');
		this.capture('1.png');
        this.test.pass('Product page have been opened successfully');
    });
	
	casper.thenClick('#product-addtocart-button', function() {
		this.test.assertHttpStatus(200);
		this.test.comment('Open checkout page');
		this.test.info('Current location is ' + this.getCurrentUrl());
		this.waitForUrl('https://buyone.se/checkout/cart');
		this.capture('2.png');
		if (this.visible('.message-success')) {
			this.echo('Found success message, it workes!');
		} else {
			this.echo('Did not find any messages, something is wrong!');
		}
		this.test.comment('Added product to cart (Joust Duffle Bag)');
		this.test.pass('Product added to cart successfully');
		
	});
	
    casper.thenOpen('https://buyone.se/checkout',function(){
		this.test.assertHttpStatus(200);
		this.test.comment('Open checkout page');
        this.test.info('Current location is ' + this.getCurrentUrl());
		this.waitForUrl('https://buyone.se/checkout');
		this.capture('3.png');
        this.test.pass('Checkout opened successfully')
    });
    
    casper.run(function () {
            this.test.done();
        }
    )
});