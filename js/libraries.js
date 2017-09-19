//object level 0 = characters
//object level 1 = attacks
//arrays in level 1:
//[0] = number of hits
//[1] = array of frames
//[2] = casting time (offset)
//[3] = frame delay for walking (0 means the attack does not walk)
//[4] = dual wield offset
let characters = { //first values are empty so the dropdown menus have reset/clear options
	'':{},
	'Equipment Enabled':{'':[], 'Pod 153 - Mirage': [8, [42,10,10,10,10,10,10,10], 0, 0, 16] },
	'A2':{'':[], 'Dash Attack': [7, [9,7,7,8,8,16,8], 0, 0, 7],'Offensive Heal': [7, [40,10,10,10,10,10,10], 0, 0, 40] },
	'Aileen':{'':[], 'Piledriver': [5, [2,15,15,15,15], 0, 0, 16],'Piledriver (Enh +2)': [7, [2,8,8,8,8,8,8], 0, 0, 16] },
	'Chizuru':{'':[], 'Phantom Shadow': [5, [22,5,5,5,5], 0, 0, 16] },
	'Cupid Luna':{'':[], 'Chainsaw': [7, [42,8,8,8,8,8,16], 40, 0, 16] },
	'Dark Veritas':{'':[], 'Dark Punishment':[7, [70,7,5,7,7,7,7], 40, 0, 16]},
	'Edgar':{'':[], 'Chainsaw': [7, [42,8,8,8,8,8,16], 40, 0, 16] },
	'Fryevia':{'':[], 'Frost Flower Blitz':[7, [40,7,5,7,7,7,7], 8, 0, 0]},
	'Gilgamesh':{'':[], 'Tri-Attack': [3, [42,20,20], 40, 3, 8], 'Snowpetal': [1, [60], 0, 0, 16] },
	'Olive':{'':[], 'True Shot': [1, [100], 20, 0, 0] },
	'Onion Knight':{'':[], 'Onion Cutter': [16, [42,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 40, 0, 16], 'Onion Slice': [12, [42,7,7,7,7,7,7,7,7,7,7,7], 40, 0, 16] },
	'Orlandeau':{'':[], 'Divine Ruination':[7, [70,7,5,7,7,7,7], 16, 0, 40]},
	'Rikku':{'':[], 'Burning Soul': [9, [40,25,25,25,25,25,25,25,25], 0, 0, 16], 'Winter Storm': [9, [40,13,14,13,14,13,14,13,16], 0, 0, 16] },
	'Setzer':{'':[], 'Prismatic Flash': [7, [42,5,5,5,5,5,5], 0, 0, 16],'Red Card': [10, [42,3,3,3,3,3,3,3,3,3], 0, 0, 16] },
	'Tidus':{'':[], 'Quick Trick': [12, [22,5,5,5,5,5,5,5,5,5,5,20], 0, 0, 16] },
	'Wind Veritas':{'':[], 'Heavenly Wind': [10, [40,15,15,15,15,15,15,15,15,15], 0, 0, 16] }
}