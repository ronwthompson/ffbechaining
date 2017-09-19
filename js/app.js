//upon character select, create ability dropdown list
document.getElementById('char1Select').onchange = function () {
	clearCharChain(this.parentElement.id);
	clearInfo(this.parentElement.id);
	calcMaxChain();
	charDropDown(this.parentElement.id, this.value);
	removeOld(this.parentElement.id);
}

document.getElementById('char2Select').onchange = function () {
	clearCharChain(this.parentElement.id);
	clearInfo(this.parentElement.id);
	calcMaxChain();
	charDropDown(this.parentElement.id, this.value);
	removeOld(this.parentElement.id);
}

document.getElementById('char3Select').onchange = function () {
	clearCharChain(this.parentElement.id);
	clearInfo(this.parentElement.id);
	calcMaxChain();
	charDropDown(this.parentElement.id, this.value);
	removeOld(this.parentElement.id);
}

document.getElementById('char4Select').onchange = function () {
	clearCharChain(this.parentElement.id);
	clearInfo(this.parentElement.id);
	calcMaxChain();
	charDropDown(this.parentElement.id, this.value);
	removeOld(this.parentElement.id);
}

document.getElementById('char5Select').onchange = function () {
	clearCharChain(this.parentElement.id);
	clearInfo(this.parentElement.id);
	calcMaxChain();
	charDropDown(this.parentElement.id, this.value);
	removeOld(this.parentElement.id);
}

document.getElementById('friendSelect').onchange = function () {
	clearCharChain(this.parentElement.id);
	clearInfo(this.parentElement.id);
	calcMaxChain();
	charDropDown(this.parentElement.id, this.value);
	removeOld(this.parentElement.id);
}

function charDropDown(name, char) {
	let html2Insert = '';
	for (let i in characters[char]) {
		html2Insert += '<option value="' + i + '"">' + i + '</option>';
	}
	document.getElementById(name+'Ability').innerHTML = html2Insert;
}

function removeOld(name) {
	let elements = document.getElementsByClassName(name);
	while (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0]);
	}
}

//create visualization based off of ability selected
document.getElementById('char1Ability').onchange = function () {
	removeOld(this.parentElement.id);
	infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
	visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
}

document.getElementById('char2Ability').onchange = function () {
	removeOld(this.parentElement.id);
	infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
	visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
}

document.getElementById('char3Ability').onchange = function () {
	removeOld(this.parentElement.id);
	infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
	visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
}

document.getElementById('char4Ability').onchange = function () {
	removeOld(this.parentElement.id);
	infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
	visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
}

document.getElementById('char5Ability').onchange = function () {
	removeOld(this.parentElement.id);
	infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
	visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
}

document.getElementById('friendAbility').onchange = function () {
	removeOld(this.parentElement.id);
	infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
	visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
}

document.getElementById('char1Dual').onchange = function () {
	if (document.getElementById('char1Ability').value != ''){
		removeOld(this.parentElement.id);
		infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
		visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
	}
}

document.getElementById('char2Dual').onchange = function () {
	if (document.getElementById('char2Ability').value != ''){
		removeOld(this.parentElement.id);
		infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
		visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
	}
}

document.getElementById('char3Dual').onchange = function () {
	if (document.getElementById('char3Ability').value != ''){
		removeOld(this.parentElement.id);
		infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
		visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
	}
}

document.getElementById('char4Dual').onchange = function () {
	if (document.getElementById('char4Ability').value != ''){
		removeOld(this.parentElement.id);
		infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
		visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
	}
}

document.getElementById('char5Dual').onchange = function () {
	if (document.getElementById('char5Ability').value != ''){
		removeOld(this.parentElement.id);
		infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
		visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
	}
}

document.getElementById('friendDual').onchange = function () {
	if (document.getElementById('friendAbility').value != ''){
		removeOld(this.parentElement.id);
		infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
		visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value);
	}
}

function infoGen(name, char, abil) { //finds and displays ability information
	let html2Insert = '';
	if (characters[char][abil][0] != undefined){
		if (document.getElementById(name+'Dual').checked){
			html2Insert += characters[char][abil][0]*2;
		} else {
			html2Insert += characters[char][abil][0];
		}
	}
	document.getElementById(name+'Info').innerHTML = html2Insert;
}

function clearInfo(name) { //clears number of hits
	document.getElementById(name+'Info').innerHTML = '0';
}

function visGen(name, char, abil) { //generate vertical visualization markers
	let html2Insert = '<span class="'+name+' charStart" id="'+name+'Start"></span>';
	let totalGen;
	if (document.getElementById(name+'Dual').checked){
		totalGen = characters[char][abil][0]*2;
	} else {
		totalGen = characters[char][abil][0];
	}
	for (let i = 0; i < totalGen; i++){
		html2Insert += '<span class="'+name+' hits" id="'+name+'Hit'+(i+1)+'"></span><span class="'+name+' chains" id="'+name+'Chain'+(i+1)+'"></span>';
	}
	document.getElementById('charHits').innerHTML += html2Insert;
	visPos(name, char, abil, totalGen);
}

var maxChainArray = [];
var maxChain = 0;

function visPos(name, char, abil, totalGen) { //align visualization markers on timeline
	let startPos = parseInt(document.getElementById(name+'Delay').value); //user input frame delay
	let startPos2 = startPos; //if the char is dual weilding, create separate start delay
	clearCharChain(name);
	document.getElementById(name+'Start').style.left = (startPos*3)+50+'px'; //multiply by 3 because 3 px for each frame, add 50 for offset
	if (document.getElementById(name+'Dual').checked) {
		startPos += characters[char][abil][2];
		startPos2 += (characters[char][abil][2] * 2) + (characters[char][abil][4]);
	}
	for (let i = 0; i < totalGen; i++) {
		if (i < characters[char][abil][0]){
			startPos += characters[char][abil][1][i]; //add regular hits
			document.getElementById(name+'Hit'+(i+1)).style.left = (startPos*3)+50+'px';
			document.getElementById(name+'Hit'+(i+1)).style.zIndex = (startPos*3)+50;
			document.getElementById(name+'Chain'+(i+1)).style.left = (startPos*3)+50+'px';
			document.getElementById(name+'Chain'+(i+1)).style.zIndex = (startPos*3)+50;
			maxChainArray.push([startPos, name]);
		} else if (i >= characters[char][abil][0] && i < characters[char][abil][0]*2) { //add dual wield hits
			startPos2 += characters[char][abil][1][i-characters[char][abil][0]];
			document.getElementById(name+'Hit'+(i+1)).style.left = (startPos2*3)+50+'px';
			document.getElementById(name+'Hit'+(i+1)).style.zIndex = (startPos2*3)+50;
			document.getElementById(name+'Chain'+(i+1)).style.left = (startPos2*3)+50+'px';
			document.getElementById(name+'Chain'+(i+1)).style.zIndex = (startPos2*3)+50;
			maxChainArray.push([startPos2, name]);
		}
	}
	calcMaxChain();
}

function clearCharChain (name) { //removes a characters hits from the chain array so they aren't counted towards the max chain
	for (let i = maxChainArray.length-1; i >= 0; i--) {
		if (maxChainArray[i][1] == name) {
			maxChainArray.splice(i, 1);
		}
	}
}

function calcMaxChain () {
	maxChain = 0;
	let tempMax = 0;
	let maxDelay = 25; //number of frames that will still chain (if you change, change css style [.chains width] as well)
	maxChainArray.sort(function(a, b) {
		if(a[0] === b[0]){ //if frame # is same, sort by char (prevents chain breaking from spark chains)
	        return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
	    }
		return a[0] - b[0] //sort by frame #
	});
	for (let i = 1; i < maxChainArray.length; i++) {
		if (maxChainArray[i][0] - maxChainArray[i-1][0] <= maxDelay) { //is it within 25 frames?
			if (maxChainArray[i][1] != maxChainArray[i-1][1]) { //better make sure its not the same char
				tempMax++;
				if (tempMax > maxChain) {
					maxChain = tempMax;
				}
			} else {
				tempMax = 0;
			}
		} else {
			tempMax = 0;
		}
	}
	document.getElementById('maxNum').innerHTML = '  '+maxChain;
}

//delay button listeners
document.getElementById('char1Up').onclick = function () {
	document.getElementById('char1Delay').value++;
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char2Up').onclick = function () {
	document.getElementById('char2Delay').value++;
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char3Up').onclick = function () {
	document.getElementById('char3Delay').value++;
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char4Up').onclick = function () {
	document.getElementById('char4Delay').value++;
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char5Up').onclick = function () {
	document.getElementById('char5Delay').value++;
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('friendUp').onclick = function () {
	document.getElementById('friendDelay').value++;
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char1Up10').onclick = function () {
	document.getElementById('char1Delay').value = 10 + parseInt(document.getElementById('char1Delay').value);
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char2Up10').onclick = function () {
	document.getElementById('char2Delay').value = 10 + parseInt(document.getElementById('char2Delay').value);
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char3Up10').onclick = function () {
	document.getElementById('char3Delay').value = 10 + parseInt(document.getElementById('char3Delay').value);
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char4Up10').onclick = function () {
	document.getElementById('char4Delay').value = 10 + parseInt(document.getElementById('char4Delay').value);
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char5Up10').onclick = function () {
	document.getElementById('char5Delay').value = 10 + parseInt(document.getElementById('char5Delay').value);
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('friendUp10').onclick = function () {
	document.getElementById('friendDelay').value = 10 + parseInt(document.getElementById('friendDelay').value);
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char1Down').onclick = function () {
	if (document.getElementById('char1Delay').value > 0){
		document.getElementById('char1Delay').value--;
		if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
			visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
		}
	}
}

document.getElementById('char2Down').onclick = function () {
	if (document.getElementById('char2Delay').value > 0){
		document.getElementById('char2Delay').value--;
		if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
			visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
		}
	}
}

document.getElementById('char3Down').onclick = function () {
	if (document.getElementById('char3Delay').value > 0){
		document.getElementById('char3Delay').value--;
		if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
			visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
		}
	}
}

document.getElementById('char4Down').onclick = function () {
	if (document.getElementById('char4Delay').value > 0){
		document.getElementById('char4Delay').value--;
		if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
			visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
		}
	}
}

document.getElementById('char5Down').onclick = function () {
	if (document.getElementById('char5Delay').value > 0){
		document.getElementById('char5Delay').value--;
		if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
			visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
		}
	}
}

document.getElementById('friendDown').onclick = function () {
	if (document.getElementById('friendDelay').value > 0){
		document.getElementById('friendDelay').value--;
		if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
			visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
		}
	}
}

document.getElementById('char1Down10').onclick = function () {
	if (document.getElementById('char1Delay').value > 9){
		document.getElementById('char1Delay').value = parseInt(document.getElementById('char1Delay').value) - 10;
	} else {
		document.getElementById('char1Delay').value = 0;
	}
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char2Down10').onclick = function () {
	if (document.getElementById('char2Delay').value > 9){
		document.getElementById('char2Delay').value = parseInt(document.getElementById('char2Delay').value) - 10;
	} else {
		document.getElementById('char2Delay').value = 0;
	}
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char3Down10').onclick = function () {
	if (document.getElementById('char3Delay').value > 9){
		document.getElementById('char3Delay').value = parseInt(document.getElementById('char3Delay').value) - 10;
	} else {
		document.getElementById('char3Delay').value = 0;
	}
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char4Down10').onclick = function () {
	if (document.getElementById('char4Delay').value > 9){
		document.getElementById('char4Delay').value = parseInt(document.getElementById('char4Delay').value) - 10;
	} else {
		document.getElementById('char4Delay').value = 0;
	}
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('char5Down10').onclick = function () {
	if (document.getElementById('char5Delay').value > 9){
		document.getElementById('char5Delay').value = parseInt(document.getElementById('char5Delay').value) - 10;
	} else {
		document.getElementById('char5Delay').value = 0;
	}
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('friendDown10').onclick = function () {
	if (document.getElementById('friendDelay').value > 9){
		document.getElementById('friendDelay').value = parseInt(document.getElementById('friendDelay').value) - 10;
	} else {
		document.getElementById('friendDelay').value = 0;
	}
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

function generateMemu () {
	document.getElementById('macros').value = '';
	let memu = [];
	if (document.getElementById('char1Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char1Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:848:550');
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:720');
	}
	if (document.getElementById('char2Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char2Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:848:200');
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:720');
	}
	if (document.getElementById('char3Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char3Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:975:550');
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:720');
	}
	if (document.getElementById('char4Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char4Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:975:200');
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:720');
	}
	if (document.getElementById('char5Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char5Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:1100:550');
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:720');
	}
	if (document.getElementById('friendAbility').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('friendDelay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:1100:200');
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:720');
	}
	memu = memu.sort();
	for (let i = 0; i < memu.length; i++) {
		document.getElementById('macros').value += memu[i]+'\n';
	}
}

function generateNox () {
	document.getElementById('macros').value = '';
	let nox = [];
	if (document.getElementById('char1Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char1Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:1:0:848:550ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MSBRL:1337814:-1072938ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('char2Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char2Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:1:0:848:200ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MSBRL:1337814:-1072938ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('char3Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char3Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:1:0:975:550ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MSBRL:1337814:-1072938ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('char4Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char4Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:1:0:975:200ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MSBRL:1337814:-1072938ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('char5Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char5Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:1:0:1100:550ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MSBRL:1337814:-1072938ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('friendAbility').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('friendDelay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:1:0:1100:200ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
		nox.push('0ScRiPtSePaRaToR720|1280|MSBRL:1337814:-1072938ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	for (let i = 0; i < nox.length; i++) {
		document.getElementById('macros').value += nox[i]+'\n';
	}
	//need to sort by timestamp
	//can timestamps be 4 digits all the time?  dunno, nox sucks
}