document.getElementById('input1').addEventListener('keyup',function(){
	console.log('appui')
	function traiteResultat(){
		var data=JSON.parse(this.responseText)
		console.log(data)
	}
	var requete = new XMLHttpRequest();
	requete.onload=traiteResultat;
	requete.open('GET',
		'/youtube/v3/search',
		{'maxResults': '25',
		'part': 'snippet',
		'q': document.getElementById('input1').value,
		'type': ''});
	requete.send();
})