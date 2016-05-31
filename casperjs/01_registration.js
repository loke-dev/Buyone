casper.test.begin('01 Registration', function suite() {
	
	casper.options.viewportSize = {
		width: 1200,
		height: 900
	};
	casper.options.waitTimeout = 25000;
 
 
    casper.start(function () {
        this.open('http://buyone.se/');
        this.test.assertHttpStatus(200);
        this.test.comment('Open home page');
    });
    casper.thenOpen('https://buyone.se/customer/account/create/', function(){
        this.test.comment('Open and check registration customer page');
        this.test.assertHttpStatus(200);
        this.test.assertUrlMatch('https://buyone.se/customer/account/create/', 'You on the registration page');
        this.test.assertSelectorHasText('title', 'Create New Customer Account', 'Page title - is present');
        this.test.comment('Check form input fields');
        this.test.assertExist('#firstname', 'First name input - is present');
        this.test.assertExist('#lastname', 'Last name input - is present');
        this.test.assertExist('#password', 'Password input - is present');
        this.test.assertExist('#password-confirmation', 'Password confirmation input - is present');
        this.test.assertExist('#email_address', 'E-mail input - is present');
        this.test.assertExist('#is_subscribed', 'Subscription checkbox - is present');
        this.test.assertExist('.submit', 'Submit button - is present');
        this.test.pass('Opened and checked registration customer page')
    });
    casper.then(function(){
        this.test.comment('Fill and submit registration form');
        this.fill('.form-create-account', {
            'firstname': 'Test',
            'lastname': 'Testsson',
            'email': 'testarMagento4@test.com',
            'password': 'testpassword',
            'password_confirmation': 'testpassword',
            'is_subscribed': true
        }, false);
        this.click('.submit');
        this.wait(400);
    });

 
    casper.then(function(){
        this.test.comment('Check successful registration and Logout');
        this.test.assertHttpStatus(200);
        this.test.assertUrlMatch('https://buyone.se/customer/account/', 'You on the My account page');
        this.test.pass('Registration successful')
    });
 
 
    casper.run(function () {
            this.test.done();
        }
    )
});