let libraryChar = ['char1','char2','char3','char4','char5','friend']

//upon character select, create ability dropdown list
var char1Select = document.getElementById('char1Select')
char1Select.onchange = makeDropDown.bind(char1Select)

var char2Select = document.getElementById('char2Select')
char2Select.onchange = makeDropDown.bind(char2Select)

var char3Select = document.getElementById('char3Select')
char3Select.onchange = makeDropDown.bind(char3Select)

var char4Select = document.getElementById('char4Select')
char4Select.onchange = makeDropDown.bind(char4Select)

var char5Select = document.getElementById('char5Select')
char5Select.onchange = makeDropDown.bind(char5Select)

var friendSelect = document.getElementById('friendSelect')
friendSelect.onchange = makeDropDown.bind(friendSelect)

function makeDropDown(){
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

function removeOld(name) { //removes visualization markers of a char
	let elements = document.getElementsByClassName(name);
	while (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0]);
	}
}

//create visualization based off of ability selected
var char1Ability = document.getElementById('char1Ability')
char1Ability.onchange = abilityChange.bind(char1Ability)

var char2Ability = document.getElementById('char2Ability')
char2Ability.onchange = abilityChange.bind(char2Ability)


var char3Ability = document.getElementById('char3Ability')
char3Ability.onchange = abilityChange.bind(char3Ability)


var char4Ability = document.getElementById('char4Ability')
char4Ability.onchange = abilityChange.bind(char4Ability)


var char5Ability = document.getElementById('char5Ability')
char5Ability.onchange = abilityChange.bind(char5Ability)


var friendAbility = document.getElementById('friendAbility')
friendAbility.onchange = abilityChange.bind(friendAbility)


function abilityChange(){
	removeOld(this.parentElement.id);
	infoGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
	visGen(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,this.value);
}

var char1Dual = document.getElementById('char1Dual')
char1Dual.onchange = dualChange.bind(char1Dual)

var char2Dual = document.getElementById('char2Dual')
char2Dual.onchange = dualChange.bind(char2Dual)

var char3Dual = document.getElementById('char3Dual')
char3Dual.onchange = dualChange.bind(char3Dual)

var char4Dual = document.getElementById('char4Dual')
char4Dual.onchange = dualChange.bind(char4Dual)

var char5Dual = document.getElementById('char5Dual')
char5Dual.onchange = dualChange.bind(char5Dual)

var friendDual = document.getElementById('friendDual')
friendDual.onchange = dualChange.bind(friendDual)

function dualChange(){
	if (document.getElementById(this.parentElement.id+'Ability').value != ''){
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

function clearInfo(name) { //clears number of hits and frame data
	document.getElementById(name+'Info').innerHTML = '0';
	document.getElementById(name+'Data').innerHTML = 'None Selected'
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
	document.getElementById(name+'Data').innerHTML = characters[char][abil][1] //add frame data display
	let startPos = parseInt(document.getElementById(name+'Delay').value) //user input frame delay
	clearCharChain(name);
	document.getElementById(name+'Start').style.left = (startPos*3)+50+'px'; //multiply by 3 because 3 px for each frame, add 50 for offset
	startPos += characters[char][abil][2];	
	let startPos2 = startPos; //create separate start delay for dual weild
	if (document.getElementById(name+'Dual').checked) {
		startPos2 += (characters[char][abil][2]) + (characters[char][abil][4]); //add casting delay and dual weild delay
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
			maxChainArray.push([startPos2, name+'-2']);
		}
	}
	//console.log(maxChainArray)
	calcMaxChain();
}

function clearCharChain (name) { //removes a characters hits from the chain array so they aren't counted towards the max chain
	for (let i = maxChainArray.length-1; i >= 0; i--) {
		if (maxChainArray[i][1] == name || maxChainArray[i][1] == name+'-2') {
			maxChainArray.splice(i, 1);
		}
	}
}

function calcMaxChain () {
	maxChain = 0;
	let tempMax = 0;
	let maxDelay = 20; //number of frames that will still chain (if you change, change css style [.chains width] as well)
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
var char1Up = document.getElementById('char1Up')
char1Up.onclick = delayModification.bind(char1Up)

var char2Up = document.getElementById('char2Up')
char2Up.onclick = delayModification.bind(char2Up)

var char3Up = document.getElementById('char3Up')
char3Up.onclick = delayModification.bind(char3Up)

var char4Up = document.getElementById('char4Up')
char4Up.onclick = delayModification.bind(char4Up)

var char5Up = document.getElementById('char5Up')
char5Up.onclick = delayModification.bind(char5Up)

var friendUp = document.getElementById('friendUp')
friendUp.onclick = delayModification.bind(friendUp)

var char1Up10 = document.getElementById('char1Up10')
char1Up10.onclick = delayModification.bind(char1Up10)

var char2Up10 = document.getElementById('char2Up10')
char2Up10.onclick = delayModification.bind(char2Up10)

var char3Up10 = document.getElementById('char3Up10')
char3Up10.onclick = delayModification.bind(char3Up10)

var char4Up10 = document.getElementById('char4Up10')
char4Up10.onclick = delayModification.bind(char4Up10)

var char5Up10 = document.getElementById('char5Up10')
char5Up10.onclick = delayModification.bind(char5Up10)

var friendUp10 = document.getElementById('friendUp10')
friendUp10.onclick = delayModification.bind(friendUp10)

var char1Down = document.getElementById('char1Down')
char1Down.onclick = delayModification.bind(char1Down)

var char2Down = document.getElementById('char2Down')
char2Down.onclick = delayModification.bind(char2Down)

var char3Down = document.getElementById('char3Down')
char3Down.onclick = delayModification.bind(char3Down)

var char4Down = document.getElementById('char4Down')
char4Down.onclick = delayModification.bind(char4Down)

var char5Down = document.getElementById('char5Down')
char5Down.onclick = delayModification.bind(char5Down)

var friendDown = document.getElementById('friendDown')
friendDown.onclick = delayModification.bind(friendDown)

var char1Down10 = document.getElementById('char1Down10')
char1Down10.onclick = delayModification.bind(char1Down10)

var char2Down10 = document.getElementById('char2Down10')
char2Down10.onclick = delayModification.bind(char2Down10)

var char3Down10 = document.getElementById('char3Down10')
char3Down10.onclick = delayModification.bind(char3Down10)

var char4Down10 = document.getElementById('char4Down10')
char4Down10.onclick = delayModification.bind(char4Down10)

var char5Down10 = document.getElementById('char5Down10')
char5Down10.onclick = delayModification.bind(char5Down10)

var friendDown10 = document.getElementById('friendDown10')
friendDown10.onclick = delayModification.bind(friendDown10)

function delayModification (){
	switch(this.id.slice(-2)){
		case 'Up':
			document.getElementById(this.parentElement.id+'Delay').value++
			break
		case '10':
			if (this.id.slice(-3) == 'p10'){
				document.getElementById(this.parentElement.id+'Delay').value = 10 + parseInt(document.getElementById(this.parentElement.id+'Delay').value)
			} else if (this.id.slice(-3) == 'n10'){
				if (document.getElementById(this.parentElement.id+'Delay').value > 9){
					document.getElementById(this.parentElement.id+'Delay').value = parseInt(document.getElementById(this.parentElement.id+'Delay').value) - 10;
				} else {
					document.getElementById(this.parentElement.id+'Delay').value = 0;
				}
			}
			break
		case 'wn':
			if (document.getElementById(this.parentElement.id+'Delay').value > 0){
				document.getElementById(this.parentElement.id+'Delay').value--
			}
			break
	}
	if (document.getElementById(this.parentElement.id+'Ability').value.length > 0) {
		visPos(this.parentElement.id, document.getElementById(this.parentElement.id+'Select').value,document.getElementById(this.parentElement.id+'Ability').value, document.getElementById(this.parentElement.id+'Info').innerHTML);
	}
}

document.getElementById('clearAll').onclick = function(){ //clears all selections, hits, delays, and chains
	for (let i = 0; i < libraryChar.length; i++){
		document.getElementById(libraryChar[i]+'Select').value = ''
		document.getElementById(libraryChar[i]+'Ability').innerHTML = ''
		document.getElementById(libraryChar[i]+'Delay').value = 0
		document.getElementById(libraryChar[i]+'Dual').checked = false
		clearCharChain(libraryChar[i]);
		clearInfo(libraryChar[i]);
		removeOld(libraryChar[i]);
	}
	calcMaxChain();
}

function generateMemu () {
	let width = document.getElementById('macroWidth').value
	let height = document.getElementById('macroHeight').value
	let col1 = 0.2778 //char1 = col2,row1
	let col2 = 0.7639 //char2 = col1,row1
	let row1 = 0.6625 //char3 = col2,row2
	let row2 = 0.7617 //char4 = col1,row2
	let row3 = 0.8594 //char5 = col2,row3 (friend = col1, row3)
	document.getElementById('macros').value = '';
	let memu = [];
	if (document.getElementById('char1Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char1Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:'+Math.floor(width*row1)+':'+Math.floor(height*col2));
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:'+height);
	}
	if (document.getElementById('char2Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char2Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:'+Math.floor(width*row1)+':'+Math.floor(height*col1));
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:'+height);
	}
	if (document.getElementById('char3Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char3Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:'+Math.floor(width*row2)+':'+Math.floor(height*col2));
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:'+height);
	}
	if (document.getElementById('char4Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char4Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:'+Math.floor(width*row2)+':'+Math.floor(height*col1));
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:'+height);
	}
	if (document.getElementById('char5Ability').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('char5Delay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:'+Math.floor(width*row3)+':'+Math.floor(height*col2));
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:'+height);
	}
	if (document.getElementById('friendAbility').value != ''){
		let charFinalDelay = 100000 + Math.floor(document.getElementById('friendDelay').value*33333.33333);
		memu.push(charFinalDelay.toString()+'--VINPUT--MULTI:1:0:'+Math.floor(width*row3)+':'+Math.floor(height*col1));
		memu.push((charFinalDelay+10000).toString()+'--VINPUT--MULTI:1:1:0:'+height);
	}
	memu = memu.sort();
	for (let i = 0; i < memu.length; i++) {
		document.getElementById('macros').value += memu[i]+'\n';
	}
}

function generateNox () {
	document.getElementById('macros').value = '';
	let width = document.getElementById('macroWidth').value
	let height = document.getElementById('macroHeight').value
	let col1 = 0.2778 //char1 = col2,row1
	let col2 = 0.7639 //char2 = col1,row1
	let row1 = 0.6625 //char3 = col2,row2
	let row2 = 0.7617 //char4 = col1,row2
	let row3 = 0.8594 //char5 = col2,row3 (friend = col1, row3)
	let nox = [];
	if (document.getElementById('char1Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char1Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:1:0:'+Math.floor(height*col2)+':'+Math.floor(width*row1)+'ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('char2Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char2Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:1:0:'+Math.floor(height*col1)+':'+Math.floor(width*row1)+'ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('char3Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char3Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:1:0:'+Math.floor(height*col2)+':'+Math.floor(width*row2)+'ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('char4Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char4Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:1:0:'+Math.floor(height*col1)+':'+Math.floor(width*row2)+'ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('char5Ability').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('char5Delay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:1:0:'+Math.floor(height*col2)+':'+Math.floor(width*row3)+'ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	if (document.getElementById('friendAbility').value != ''){
		let charFinalDelay = 100 + Math.floor(document.getElementById('friendDelay').value*33.33333);
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:1:0:'+Math.floor(height*col1)+':'+Math.floor(width*row3)+'ScRiPtSePaRaToR'+charFinalDelay.toString());
		nox.push('0ScRiPtSePaRaToR'+height+'|'+width+'|MULTI:0:6ScRiPtSePaRaToR'+(charFinalDelay+1).toString());
	}
	nox.sort(function (a, b) {
	    return (Number(a.match(/\d+$/g)) - Number((b.match(/\d+$/g))));
	})
	for (let i = 0; i < nox.length; i++) {
		document.getElementById('macros').value += nox[i]+'\n';
	}
}

function makeHashClick(){
	document.getElementById('hashCode').value = generateHashCode()
}

function generateHashCode(){
	let codeToHash = ''
	codeToHash += char1Select.value+'!'+char1Ability.value+'!'+char1Delay.value+'!'+char1Dual.checked+'!'
	codeToHash += char2Select.value+'!'+char2Ability.value+'!'+char2Delay.value+'!'+char2Dual.checked+'!'
	codeToHash += char3Select.value+'!'+char3Ability.value+'!'+char3Delay.value+'!'+char3Dual.checked+'!'
	codeToHash += char4Select.value+'!'+char4Ability.value+'!'+char4Delay.value+'!'+char4Dual.checked+'!'
	codeToHash += char5Select.value+'!'+char5Ability.value+'!'+char5Delay.value+'!'+char5Dual.checked+'!'
	codeToHash += friendSelect.value+'!'+friendAbility.value+'!'+friendDelay.value+'!'+friendDual.checked
	return btoa(codeToHash)
}

function loadHashClick(){
	let success = true
	let decodedHash
	try{
		decodedHash = atob(document.getElementById('hashCode').value)
	} catch(e){
		success = false
	} finally{
		if (success && testHash(decodedHash)){
			loadHashCode(decodedHash)
		} else {
			document.getElementById('hashCode').value = "Invalid Hash Code!"
		}
	}
}

function testHash(hash){
	let counterH = 0
	for (let i = 0; i < hash.length; i++){
		if (hash[i] == '!'){
			counterH++
		}
	}
	if (counterH == 23){
		return true
	} 
	return false
}

function loadHashCode(hashCode){
	let decodedArray = []
	let tempValue = ''
	for (let i = 0; i < hashCode.length; i++){
		if (hashCode[i] == '!'){
			decodedArray.push(tempValue)
			tempValue = ''
		} else {
			tempValue += hashCode[i]
		}
	}
	char1Select.value = decodedArray[0]
	makeDropDown.bind(char1Select)()
	char1Delay.value = decodedArray[2]
	char1Dual.checked = decodedArray[3]
	char2Select.value = decodedArray[4]
	makeDropDown.bind(char2Select)()
	char2Delay.value = decodedArray[6]
	char2Dual.checked = decodedArray[7]
	char3Select.value = decodedArray[8]
	makeDropDown.bind(char3Select)()
	char3Delay.value = decodedArray[10]
	char3Dual.checked = decodedArray[11]
	char4Select.value = decodedArray[12]
	makeDropDown.bind(char4Select)()
	char4Delay.value = decodedArray[14]
	char4Dual.checked = decodedArray[15]
	char5Select.value = decodedArray[16]
	makeDropDown.bind(char5Select)()
	char5Delay.value = decodedArray[18]
	char5Dual.checked = decodedArray[19]
	friendSelect.value = decodedArray[20]
	makeDropDown.bind(friendSelect)()
	friendDelay.value = decodedArray[22]
	friendDual.checked = decodedArray[23]

	char1Ability.value = decodedArray[1]
	char2Ability.value = decodedArray[5]
	char3Ability.value = decodedArray[9]
	char4Ability.value = decodedArray[13]
	char5Ability.value = decodedArray[17]
	friendAbility.value = decodedArray[21]

	abilityChange.bind(char1Ability)()
	abilityChange.bind(char2Ability)()
	abilityChange.bind(char3Ability)()
	abilityChange.bind(char4Ability)()
	abilityChange.bind(char5Ability)()
	abilityChange.bind(friendAbility)()
}

var save1Click = document.getElementById('save1')
save1Click.onclick = saveClick.bind(save1Click)

var save2Click = document.getElementById('save2')
save2Click.onclick = saveClick.bind(save2Click)

var save3Click = document.getElementById('save3')
save3Click.onclick = saveClick.bind(save3Click)

var load1Click = document.getElementById('load1')
load1Click.onclick = loadClick.bind(load1Click)

var load2Click = document.getElementById('load2')
load2Click.onclick = loadClick.bind(load2Click)

var load3Click = document.getElementById('load3')
load3Click.onclick = loadClick.bind(load3Click)

function saveClick(){
	localStorage.setItem(this.id, generateHashCode())
}

function loadClick(){
	let loadKey = this.id[4]
	let loadedHash = atob(localStorage.getItem('save'+loadKey))
	loadHashCode(loadedHash)
}

//T3JsYW5kZWF1IURpdmluZSBSdWluYXRpb24hMTAhdHJ1ZSFWZXJpdGFzIG9mIHRoZSBEYXJrIURhcmsgUHVuaXNobWVudCExMyF0cnVlIU9uaW9uIEtuaWdodCFPbmlvbiBTbGljZSEzMCF0cnVlIUdpbGdhbWVzaCFUcmktQXR0YWNrITUwIXRydWUhQ3VwaWQgTHVuYSFDaGFpbnNhdyE0MCF0cnVlIUVkZ2FyIUNoYWluc2F3ITQ1IXRydWU=