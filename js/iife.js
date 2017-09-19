(function () { //builds the dropdown character menus on page load
	let html2Insert = '';
	for (let i in characters) {
		html2Insert += '<option value="' + i + '"">' + i + '</option>';
	}
	document.getElementById('char1Select').innerHTML = html2Insert;
	document.getElementById('char2Select').innerHTML = html2Insert;
	document.getElementById('char3Select').innerHTML = html2Insert;
	document.getElementById('char4Select').innerHTML = html2Insert;
	document.getElementById('char5Select').innerHTML = html2Insert;
	document.getElementById('friendSelect').innerHTML = html2Insert;
}());