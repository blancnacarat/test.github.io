$.ajax({
    url: "https://grounded-will-216322.appspot.com",
    dataType: 'jsonp',
    success: function(headers) {
    	console.log("success");
        language = headers['Accept-Language'];
        console.log(language);
        if (language.indexOf(',') !== -1) {
        	language = language.split(',')[0];
        }
        if (language.indexOf('-') !== -1){
    		language = language.split('-')[0];
        }
		if (language.indexOf('_') !== -1){
    		language = language.split('_')[0];
		}
		console.log(language);
        //nowDoSomethingWithIt(language);
        if (language == 'fr'){
        	console.log("test");
        	console.log(language);
        	setTimeout(function() {
  			window.location.href = "https://test.blancnacarat.com/fr/";
			}, 2200);
        } else{
        	console.log("test else");
        	console.log(language);
        	setTimeout(function() {
  			window.location.href = "https://test.blancnacarat.com/en/";
			}, 2200);
        }
    }, error: function() {
    	language = window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage ;
        console.log("error");
        console.log(language);
        if (language.indexOf(',') !== -1) {
        	language = language.split(',')[0];
        }
        if (language.indexOf('-') !== -1){
    		language = language.split('-')[0];
        }
		if (language.indexOf('_') !== -1){
    		language = language.split('_')[0];
		}
		console.log(language);
        //nowDoSomethingWithIt(language);
        if (language == 'fr' || language == 'fr-be' || language == 'fr-ca' || language == 'fr-fr' || language == 'fr-lu' || language == 'fr-mc' || language == 'fr-ch'){
        	console.log("test");
        	console.log(language);
        	setTimeout(function() {
  			window.location.href = "https://test.blancnacarat.com/fr/";
			}, 2200);
        } else{
        	console.log("test else");
        	console.log(language);
        	setTimeout(function() {
  			window.location.href = "https://test.blancnacarat.com/en/";
			}, 2200);
    }
   	}
});