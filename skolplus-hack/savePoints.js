class hiScore_class{
	constructor(siteURL){
		this._hiscores_load_URL='http://skolplus.se/callback/hiscores_load.php';
		this._hiscores_save_URL='http://skolplus.se/callback/hiscores_save.php';
	}

	saveHiscore(gameID,name,score,callback_saved) {
		name=name.trim();
		if (name==''){
			console.log('not saved, name missing');
			return;
		}
		if (score==0){
			console.log('not saved, score zero');
			return;
		}
		var myindex=Math.floor(Math.random()*1000000);
		var hash=(myindex+score)%637;

		

		var formData = new FormData();
		formData.append("i", myindex);
		formData.append("g", gameID);
		formData.append("n", name);
		formData.append("s", score);
		formData.append("h", hash);
		
         var xhr = new window.XMLHttpRequest()
		  xhr.onreadystatechange = function() {
			  if (this.readyState == 4){
				if (this.status == 200) {
					if (this.responseText=='OK'){
						callback_saved(true);
					}
					else {
						console.log(this.responseText);
						callback_saved(false);
					}	
				}
				 else {
					 console.log('Ajax ERROR: '+this.statusText);
					 callback_saved(false);
				 }
			  }
		  };
         xhr.open('POST', this._hiscores_save_URL, true)
         //xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
         xhr.send(formData);
		 //console.log(formData);
		 console.log(`Hiscore saved as ${name} with ${score} points`);

	}
	safetext(text){
		var table = {'<': 'lt','>': 'gt','"': 'quot','\'': 'apos','&': 'amp','\r': '#10','\n': '#13'};
		return text.toString().replace(/[<>"'\r\n&]/g, function(chr){return '&' + table[chr] + ';';	});
	};
}