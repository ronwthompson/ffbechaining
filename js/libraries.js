//object level 0 = characters
//object level 1 = attacks
//arrays in level 1:
//[0] = number of hits
//[1] = array of frames
//[2] = casting time (offset)
//[3] = frame delay for walking (0 means the attack does not walk)
//[4] = dual wield offset

// first values are empty so the dropdown menus have reset/clear options

let characters = {
  "": {},
  "Equipment Abilities": {
    "": [],
    "Pod 153 - R020:Mirage": [8, [42,10,10,10,10,10,10,10], 16, 0, 40],
    "Onion Cutter": [16, [42,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 16, 0, 40]
  },
  "21O": {
    "": [],
    "R010: Lazer": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ],
    "Data Analysis": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Support All: 21O": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Support One: DEF/SPR": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Support One: ATK/MAG": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "A100: Decoy": [
      4,
      [
        2,
        10,
        10,
        10
      ],
      16,
      0,
      0
    ],
    "Material Transfer": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ]
  },
  "2B": {
    "": [],
    "R040: Blade": [
      5,
      [
        42,
        40,
        40,
        40,
        40
      ],
      16,
      0,
      40
    ],
    "Fish": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "R050: Spear": [
      3,
      [
        2,
        5,
        5
      ],
      16,
      0,
      0
    ],
    "A150: Vault": [
      1,
      [
        42
      ],
      16,
      0,
      40
    ],
    "Pod Charge": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Self Destruct: 2B": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Speed": [
      10,
      [
        2,
        7,
        7,
        7,
        8,
        8,
        8,
        8,
        8,
        8
      ],
      16,
      0,
      0
    ]
  },
  "9S": {
    "": [],
    "View Hack": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Purge: MAG/SPR": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "ATK HP Recovery": [
      1,
      [
        120
      ],
      16,
      0,
      80
    ],
    "Balance Hack": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Element Purge: Fire/Lightning/Wind": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Element Purge: Ice/Water/Earth": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Self Destruct: 9S": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Spread Shield": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Purge: ATK/DEF": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "A2": {
    "": [],
    "Taunt": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Dash Attack": [
      7,
      [
        9,
        7,
        7,
        8,
        8,
        16,
        8
      ],
      16,
      0,
      7
    ],
    "Horizontal Sweep": [
      1,
      [
        22
      ],
      16,
      0,
      0
    ],
    "Inherit Will": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Offensive Heal Combo": [
      14,
      [
        35,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      39
    ]
  },
  "Abel": {
    "": [],
    "Poison Knife": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ],
    "Sleep Knife": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Paralysis Knife": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Confuse Knife": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Air Attack": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Break Style": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Burst Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Assault Style": [
      1,
      [
        40
      ],
      16,
      0,
      50
    ],
    "Guard Style": [
      1,
      [
        100
      ],
      16,
      0,
      10
    ],
    "Disturbing Knife": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ]
  },
  "Ace": {
    "": [],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Wild Card": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Tri-beam Laser": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ],
    "Burst": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Short Burst": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "HP Charge": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "MP Charge": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Tri-beam Laser +1": [
      7,
      [
        64,
        7,
        7,
        7,
        7,
        7,
        7
      ],
      16,
      0,
      0
    ]
  },
  "Agrias": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Lance": [
      2,
      [
        120,
        0
      ],
      16,
      0,
      40
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Full Break": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Divine Ruination": [
      5,
      [
        70,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Full Break +1": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Full Break +2": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Divine Ruination +1": [
      5,
      [
        70,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Divine Ruination +2": [
      7,
      [
        70,
        7,
        5,
        7,
        7,
        7,
        7
      ],
      16,
      0,
      40
    ]
  },
  "Aiden": {
    "": [],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Heal (Cheer)": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ]
  },
  "Aileen": {
    "": [],
    "Limit Gather": [
      1,
      [
        5
      ],
      16,
      0,
      0
    ],
    "Analyze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Recovery Oil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Refreshing Tool": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ground Work": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Build Earth": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Piledriver": [
      5,
      [
        2,
        15,
        15,
        15,
        15
      ],
      16,
      0,
      0
    ]
  },
  "Alma": {
    "": [],
    "Stone Throw": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bravery": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Faith": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ultima": [
      1,
      [
        365
      ],
      16,
      0,
      40
    ]
  },
  "Amarant": {
    "": [],
    "Throw": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Chakra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Gravity Fist": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Curse": [
      1,
      [
        60
      ],
      16,
      0,
      40
    ],
    "Revive": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ]
  },
  "Amelia": {
    "": [],
    "Burst Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Scattershot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Kick": [
      3,
      [
        2,
        3,
        3
      ],
      16,
      0,
      0
    ],
    "Ricochet": [
      1,
      [
        93
      ],
      16,
      0,
      91
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Trigger-happy": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Killer Bullet": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Disorder": [
      10,
      [
        42,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      40
    ]
  },
  "Anzelm": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Blindna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Vox": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Water": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Aero": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Stone": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Watera": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Stonra": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Paralyna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Regen": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Gravity": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Biora": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ]
  },
  "Arc": {
    "": [],
    "Blizzard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Fire": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Death": [
      1,
      [
        120
      ],
      16,
      0,
      60
    ]
  },
  "Aria": {
    "": [],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shellga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Healing Affection": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Noble Dedication": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Miracle of Rebirth": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ]
  },
  "Artemios": {
    "": [],
    "Shadowbind": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Scattershot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Cheap Shot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ]
  },
  "Ashe": {
    "": [],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Liberating Flash": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Meditate": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Northswain's Glow": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Sword of Kings": [
      7,
      [
        42,
        10,
        10,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Thundaja": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Heaven's Fury": [
      10,
      [
        72,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ]
  },
  "Aura": {
    "": [],
    "Healing Grasses": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Aero Wall": [
      1,
      [
        120
      ],
      16,
      0,
      160
    ],
    "Hundred Thrusts": [
      8,
      [
        47,
        10,
        10,
        10,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Pin-point Focus": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Gale Strike": [
      3,
      [
        0,
        45,
        25
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Excitement": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thousand Thrusts": [
      12,
      [
        47,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        5,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ]
  },
  "Ayaka": {
    "": [],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dispelga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Libra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Hi Regen": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esunaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Meditate": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Purify": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Embolden": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stop Detach": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dedication": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaja": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Resurgence": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Full-Life": [
      1,
      [
        120
      ],
      16,
      0,
      90
    ],
    "Reraise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ]
  },
  "Balthier": {
    "": [],
    "Elemental Shot - Fire": [
      1,
      [
        55
      ],
      16,
      0,
      0
    ],
    "Weapon Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Shield Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Elemental Shot - Lightning": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Elemental Shot - Water": [
      1,
      [
        90
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Elemental Shot - Light": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Killer Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ]
  },
  "Bartz": {
    "": [],
    "Analyze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Store": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Imperil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Life Giver": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Seaker Blade": [
      2,
      [
        0,
        40
      ],
      16,
      0,
      0
    ],
    "Wind Shear": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Wind Shear +1": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Wind Shear +2": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Life Giver +1": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Life Giver +2": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ]
  },
  "Beach Time Fina": {
    "": [],
    "Aquatic Veil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Blindna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Vox": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Pray": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Banish": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Cleanse": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Aqua Fall": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Refreshing Ale": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Lovely Charm": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Bedile": {
    "": [],
    "Thunder Blade": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Bio Blade": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Deshell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deprotect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Imperil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundara Blade": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ]
  },
  "Black Cat Lid": {
    "": [],
    "Magic Shot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Analyze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Maintenance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Metal Kick": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Deprotect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sunbeam": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Healing Force": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deshell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Upgrade": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Hex Strike": [
      1,
      [
        72
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Ultimate Blow": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Power Generator": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ]
  },
  "Bran": {
    "": [],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Thunder Thrust": [
      3,
      [
        25,
        5,
        5
      ],
      16,
      0,
      20
    ],
    "Bright Thrust": [
      3,
      [
        25,
        5,
        5
      ],
      16,
      0,
      20
    ],
    "Total Thrust": [
      4,
      [
        22,
        5,
        5,
        10
      ],
      16,
      0,
      0
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Shockstorm": [
      3,
      [
        25,
        5,
        5
      ],
      16,
      0,
      20
    ],
    "Osmose Blade": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Elven Song": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Lightning Shield": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Brightstorm": [
      3,
      [
        25,
        10,
        10
      ],
      16,
      0,
      0
    ],
    "Thunder Clap": [
      7,
      [
        47,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      40
    ]
  },
  "Camille": {
    "": [],
    "Landslide Flash": [
      1,
      [
        120
      ],
      16,
      0,
      0
    ],
    "Waterfall Slash": [
      1,
      [
        90
      ],
      16,
      0,
      0
    ],
    "Bountiful Dance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ruin Slash": [
      2,
      [
        2,
        5
      ],
      16,
      0,
      0
    ]
  },
  "Cecil": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Libra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Focus +1": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Focus +2": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Celes": {
    "": [],
    "Sealing Blade": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ],
    "Blizzard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Magic Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Faith": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Libra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Cerius": {
    "": [],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deprotect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deshell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barfira": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barblizzara": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barthundara": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bravery": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Faith": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barthundaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barfiraga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barblizzaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Heart of Light": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Charlotte": {
    "": [],
    "Defend": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Shellga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Lift Spirits": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shield Impact": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Embolden": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Lift Spirits +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Lift Spirits +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Chizuru": {
    "": [],
    "Fingersnap": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Finisher": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Light Shell": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Nonpareil": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "No Fear": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Glint": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ],
    "Dismissal": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Phantom Shadow": [
      5,
      [
        22,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      0
    ],
    "Phantom Shadow +1": [
      5,
      [
        22,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      0
    ],
    "Phantom Shadow +2": [
      5,
      [
        22,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      0
    ]
  },
  "Cinque": {
    "": [],
    "Store": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Defend": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Mace Cyclone": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Brace": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Stonra": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Whirling Mace": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ]
  },
  "Cloud of Darkness": {
    "": [],
    "Blind": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Armor Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Aura Ball": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Omni-Veil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Return": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Call of the Void": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Omni-Veil +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Omni-Veil +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Clyne": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Defend": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Crowe": {
    "": [],
    "Emergency Relief": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Magic Code": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Attack Code": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Lone Woman": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Spirit Code": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Defensive Code": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "For Hearth and Home": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Mental Code": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Physical Code": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Cupid Artemios": {
    "": [],
    "Burst Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Sunbloom Bolt": [
      1,
      [
        90
      ],
      16,
      0,
      25
    ],
    "Sunbeam": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Amp Up": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Lux Magna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Cupid Luna": {
    "": [],
    "Scattershot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Twilight Bolt": [
      1,
      [
        90
      ],
      16,
      0,
      25
    ],
    "Chainsaw": [
      7,
      [
        42,
        8,
        8,
        8,
        8,
        8,
        16
      ],
      16,
      0,
      40
    ],
    "Rupture shot": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Impair Shot": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ]
  },
  "Cyan": {
    "": [],
    "Mirror of Equity": [
      1,
      [
        50
      ],
      16,
      0,
      40
    ],
    "Fingersnap": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "No Fear": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Nonpareil": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Iai Strike": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ]
  },
  "Dark Fina": {
    "": [],
    "Waterga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Stonga": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Bioga": [
      1,
      [
        210
      ],
      16,
      0,
      40
    ],
    "Distress": [
      3,
      [
        72,
        30,
        30
      ],
      16,
      0,
      40
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Physical Fall": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ultima": [
      1,
      [
        365
      ],
      16,
      0,
      40
    ],
    "Dystopia": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dystopia +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dystopia +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ultima +1": [
      1,
      [
        365
      ],
      16,
      0,
      40
    ],
    "Ultima +2": [
      7,
      [
        140,
        37,
        38,
        37,
        38,
        38,
        37
      ],
      16,
      0,
      40
    ]
  },
  "Dark Knight Cecil": {
    "": [],
    "Store": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Darkside": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Drain Blade": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Dark Cannon": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ],
    "Gravity Ball": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Dark Flame": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Soul Eater": [
      1,
      [
        20
      ],
      16,
      0,
      0
    ],
    "Soul Eater +1": [
      1,
      [
        20
      ],
      16,
      0,
      0
    ],
    "Soul Eater +2": [
      1,
      [
        20
      ],
      16,
      0,
      0
    ],
    "Dark Cannon +1": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ],
    "Dark Cannon +2": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ]
  },
  "Delita": {
    "": [],
    "Store": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Helm Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Medicate": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundaga Blade": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Shield Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Northswain's Strike": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Meditate": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Shield Break +1": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Shield Break +2": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Helm Break +1": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Helm Break +2": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Meditate +1": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Meditate +2": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Demon Rain": {
    "": [],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Defend": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Stonra": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Stonga": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Ignite": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Desch": {
    "": [],
    "Full Break": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Imperil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Anti-ATK/SPR Spark": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Anti-DEF/MAG Spark": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Anti-ATK/DEF Spark": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Anti-MAG/SPR Spark": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Annihilate": [
      2,
      [
        42,
        10
      ],
      16,
      0,
      40
    ],
    "Thunder Guide": [
      3,
      [
        42,
        20,
        30
      ],
      16,
      0,
      40
    ],
    "Lucky Strike": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ]
  },
  "Dracu Lasswell": {
    "": [],
    "Mirror of Equity": [
      1,
      [
        50
      ],
      16,
      0,
      40
    ],
    "Fingersnap": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Bloodlust": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Hallowed Song": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Black Mist": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Nightmare Assault": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ]
  },
  "Duane": {
    "": [],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Magic Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Armor Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Darkside": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Magic Infuse": [
      1,
      [
        165
      ],
      16,
      0,
      40
    ],
    "Death": [
      1,
      [
        120
      ],
      16,
      0,
      60
    ]
  },
  "Edgar": {
    "": [],
    "Auto Bowgun": [
      5,
      [
        42,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      40
    ],
    "Bio Blaster": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Sunbeam": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Drill": [
      3,
      [
        42,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Chainsaw": [
      7,
      [
        42,
        8,
        8,
        8,
        8,
        8,
        16
      ],
      16,
      0,
      40
    ]
  },
  "Edge": {
    "": [],
    "Throw": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Magic Shuriken+": [
      3,
      [
        17,
        4,
        4
      ],
      16,
      0,
      15
    ],
    "Flame": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Hyoton": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Blitz": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Doton": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Suiton": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Fujin": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Illude": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Kurayami": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Oblivion": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Caltrops": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Eight": {
    "": [],
    "Raging Fist": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Wildfire Stance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Quickbolt Stance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Elle": {
    "": [],
    "Provoke": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Healing Formula": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Water": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Aqua Shot": [
      1,
      [
        85
      ],
      16,
      0,
      0
    ],
    "Watera": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Piercing Lance": [
      1,
      [
        5
      ],
      16,
      0,
      0
    ],
    "Guardian's Spear": [
      1,
      [
        5
      ],
      16,
      0,
      0
    ],
    "Splash Throw": [
      1,
      [
        90
      ],
      16,
      0,
      0
    ]
  },
  "Elza": {
    "": [],
    "Enfeebling Slash": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Lance": [
      2,
      [
        120,
        0
      ],
      16,
      0,
      40
    ],
    "Dark Prayer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ravaging Blow": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Dark Favor": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ravaging Blow +1": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Ravaging Blow +2": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ]
  },
  "Emperor": {
    "": [],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Time Stopper": [
      1,
      [
        40
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Subdue": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Fire From Below": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Present your offering!": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "I'll never die!": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Flare": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ],
    "Control": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Starfall": [
      1,
      [
        350
      ],
      16,
      0,
      40
    ]
  },
  "Eve": {
    "": [],
    "Roundhouse Kick": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Pillar of Light": [
      2,
      [
        100,
        50
      ],
      16,
      0,
      1
    ],
    "Corruption": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Gather Machine Scraps": [
      1,
      [
        100
      ],
      16,
      0,
      1
    ]
  },
  "Exdeath": {
    "": [],
    "Gravity": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Imperil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Faith": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Earth Shaker": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Meteor": [
      1,
      [
        350
      ],
      16,
      0,
      40
    ],
    "Wicked Light": [
      1,
      [
        242
      ],
      16,
      0,
      40
    ],
    "Wicked Light +1": [
      1,
      [
        242
      ],
      16,
      0,
      40
    ],
    "Wicked Light +2": [
      1,
      [
        242
      ],
      16,
      0,
      40
    ],
    "Meteor +1": [
      3,
      [
        310,
        20,
        20
      ],
      16,
      0,
      40
    ],
    "Meteor +2": [
      3,
      [
        310,
        20,
        20
      ],
      16,
      0,
      40
    ]
  },
  "Fang": {
    "": [],
    "Jump": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Flamestrike": [
      1,
      [
        55
      ],
      16,
      0,
      0
    ],
    "Froststrike": [
      1,
      [
        125
      ],
      16,
      0,
      0
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Faris": {
    "": [],
    "Fire": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "No Fear": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Provoke": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Full Break": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ]
  },
  "Fencer": {
    "": [],
    "Swarmstrike": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Shadowstick": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Piercing Blow": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Checkmate": [
      1,
      [
        120
      ],
      16,
      0,
      60
    ],
    "Manastrike": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Darkness Veil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Concentrate": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Fina": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Blindna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Vox": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Pray": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Banish": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Cleanse": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bright Shower": [
      1,
      [
        140
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Superior Healing": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Curada +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cheer +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cheer +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Firion": {
    "": [],
    "Mystery Waltz": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Lance": [
      2,
      [
        120,
        0
      ],
      16,
      0,
      40
    ],
    "Regen": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Drain Blade": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Fin Briar": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Lance +1": [
      2,
      [
        120,
        0
      ],
      16,
      0,
      40
    ],
    "Lance +2": [
      2,
      [
        120,
        0
      ],
      16,
      0,
      40
    ],
    "Fin Briar +1": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Fin Briar +2": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ]
  },
  "Fohlen": {
    "": [],
    "Osmose Lance": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Chocobo Dive": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Aggravate": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Extend": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Vortex": [
      3,
      [
        42,
        20,
        20
      ],
      16,
      0,
      40
    ],
    "Sonic Blast": [
      7,
      [
        10,
        10,
        10,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      0
    ]
  },
  "Fran": {
    "": [],
    "Libra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bio": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deprotect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Biora": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Deshell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Freya": {
    "": [],
    "Jump": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Lance": [
      2,
      [
        120,
        0
      ],
      16,
      0,
      40
    ],
    "Store": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Reis's Wind": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Six Dragons": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Fryevia": {
    "": [],
    "Osmose Blade": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Sabre Flunge": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Ice Block": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Ice Age": [
      2,
      [
        40,
        80
      ],
      16,
      0,
      40
    ],
    "Ice Saber": [
      3,
      [
        27,
        5,
        8
      ],
      16,
      0,
      0
    ],
    "Icy Aura": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Second Intention": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ],
    "Frost Flash": [
      1,
      [
        45
      ],
      16,
      0,
      30
    ],
    "Frost Flower Blitz": [
      7,
      [
        40,
        7,
        5,
        7,
        7,
        7,
        7
      ],
      16,
      0,
      0
    ]
  },
  "Gaffgarion": {
    "": [],
    "Gravity": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Duskblade": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Darkside": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Weapon Bash": [
      1,
      [
        50
      ],
      16,
      0,
      40
    ],
    "Unholy Sacrifice": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Self-Sacrifice": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Abyssal Blade": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blood Weapon": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Dark Weapon": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Abyssal Blade +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Abyssal Blade +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Self-Sacrifice +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Self-Sacrifice +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Galuf": {
    "": [],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Brace": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Chakra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Magic Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ]
  },
  "Garland": {
    "": [],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Stonra": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Defend": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Darkside": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Stonga": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Dark Awakening": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Firey Madness": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Watery Madness": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Windy Madness": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Earthly Madness": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Chaosbringer": [
      1,
      [
        120
      ],
      16,
      0,
      0
    ],
    "Dark Spiral": [
      1,
      [
        160
      ],
      16,
      0,
      60
    ]
  },
  "Garnet": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Regen": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Raise +1": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Raise +2": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Curaga +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Gau": {
    "": [],
    "Iron Needle": [
      3,
      [
        42,
        4,
        4
      ],
      16,
      0,
      40
    ],
    "Poison Sting": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bite": [
      1,
      [
        2
      ],
      16,
      0,
      0
    ],
    "Poison": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Magitek Laser": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Pincer": [
      1,
      [
        3
      ],
      16,
      0,
      0
    ],
    "Megavolt": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Lullaby": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Gilbert": {
    "": [],
    "Lullaby": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Alluring Air": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Silent Verse": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Life's Anthem": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Requiem": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Boost": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Iai Strike": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "Chant": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Gilgamesh": {
    "": [],
    "Jump": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Dancehall Daze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Wind Slash": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Snowpetal": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Tri-Attack": [
      3,
      [
        42,
        20,
        20
      ],
      16,
      0,
      40
    ],
    "Tri-Attack +1": [
      6,
      [
        40,
        4,
        16,
        4,
        16,
        4
      ],
      16,
      0,
      40
    ],
    "Tri-Attack +2": [
      12,
      [
        40,
        4,
        6,
        4,
        6,
        4,
        6,
        4,
        6,
        4,
        6,
        4
      ],
      16,
      0,
      40
    ],
    "Snowpetal +1": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ],
    "Snowpetal +2": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ]
  },
  "Glauca": {
    "": [],
    "Automatic Repairs": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thrust of Respect": [
      1,
      [
        42
      ],
      16,
      0,
      40
    ],
    "Iron Will": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Flash of Despair": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Wall Smash": [
      1,
      [
        70
      ],
      16,
      0,
      60
    ],
    "Daybreak Darkness": [
      8,
      [
        102,
        9,
        9,
        9,
        9,
        9,
        9,
        9
      ],
      16,
      0,
      40
    ],
    "Great Chop": [
      1,
      [
        140
      ],
      16,
      0,
      30
    ]
  },
  "Goken": {
    "": [],
    "Kick": [
      3,
      [
        2,
        3,
        3
      ],
      16,
      0,
      0
    ],
    "Hi Chakra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Go no Ken": [
      6,
      [
        42,
        10,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Gotanden": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Yawa no Ashi": [
      6,
      [
        50,
        10,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ]
  },
  "Golbez": {
    "": [],
    "Bio": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Gravity": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Biora": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Binding Cold": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Bioga": [
      1,
      [
        210
      ],
      16,
      0,
      40
    ]
  },
  "Grace": {
    "": [],
    "Fire Beam": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Thunder Beam": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Blizzard Beam": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Vital Scan": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Magitek Laser": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Magitek Missile": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Flashbang": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Sunbeam": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Whole Fist": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Final Sequence": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Destroy Arm": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Unlimited": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Unlimited +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Whole Fist +1": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Whole Fist +2": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Destroy Arm +1": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Destroy Arm +2": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ]
  },
  "Guromu": {
    "": [],
    "Come At Me!": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Thunder Attack": [
      3,
      [
        42,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Thunder Wall": [
      1,
      [
        120
      ],
      16,
      0,
      160
    ],
    "Lightning Gale": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ]
  },
  "Guy": {
    "": [],
    "Full Force": [
      1,
      [
        5
      ],
      16,
      0,
      0
    ],
    "Nature's Protection": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Latent Potential": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Kick Off": [
      1,
      [
        5
      ],
      16,
      0,
      0
    ],
    "Full Break": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ]
  },
  "Harid": {
    "": [],
    "バックスタッブ": [
      1,
      [
        40
      ],
      16,
      0,
      20
    ]
  },
  "Hayate": {
    "": [],
    "Throw": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Sneak Attack": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "Flame": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Illude": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Wildfire": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Slumber Blade": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Flame Type 2": [
      3,
      [
        42,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Shin-Slumber Blade": [
      1,
      [
        60
      ],
      16,
      0,
      40
    ],
    "Shin-Illude": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Wildfire Type 2": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Flame Type 2 +1": [
      3,
      [
        42,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Wildfire Type 2 +1": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ]
  },
  "Helena": {
    "": [],
    "Analyze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Throw": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Single Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Super Aid": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Urgent Rebirth": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Best Shot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Undiscouraged Heart": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Endless Dream": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Heltich": {
    "": [],
    "Fire": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Aero": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Stone": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ferocious Fang": [
      1,
      [
        42
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Stonra": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Nether Claw": [
      1,
      [
        42
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Magical Awakening": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Stonga": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Beast from the Abyss": [
      2,
      [
        42,
        20
      ],
      16,
      0,
      40
    ]
  },
  "Hope": {
    "": [],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Deshell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Waterga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Waterga +1": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Waterga +2": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Aeroga +1": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Aeroga +2": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ]
  },
  "Hunter Fina": {
    "": [],
    "Brute Strength": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Recovery - Large": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Greatbow": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Active Control": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Life Dust": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Departed Blessing - Guard": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Heaven's Blessing - Aqua": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Darkshard - Fire": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Motivate": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Hunter Lid": {
    "": [],
    "Provocation - Small": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Encourage - Heroic": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Huge Waste": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Hunter Nichol": {
    "": [],
    "Wicked Medicine": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Punt": [
      1,
      [
        2
      ],
      16,
      0,
      0
    ],
    "Demonification": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Hunter Rain": {
    "": [],
    "Guard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Inferno - Supreme": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Strike - Flame": [
      1,
      [
        40
      ],
      16,
      0,
      89
    ],
    "Strike - Stone": [
      1,
      [
        60
      ],
      16,
      0,
      89
    ],
    "Leadership": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Amass": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Ilias": {
    "": [],
    "Paralysis Spray": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Poison Spray": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Recovery": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Special Recipe": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Guard Serum": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bacterial Spray": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Immunization": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Extract": [
      3,
      [
        42,
        10,
        10
      ],
      16,
      0,
      40
    ]
  },
  "Ingus": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Aero": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Sleep": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Fire": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Blind": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Silence": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Convert": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Full Break": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ]
  },
  "Jack": {
    "": [],
    "Iai Strike": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Piercing Gleam": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ]
  },
  "Jake": {
    "": [],
    "Assault Style": [
      1,
      [
        40
      ],
      16,
      0,
      50
    ],
    "Shock Laser": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Guard Style": [
      1,
      [
        100
      ],
      16,
      0,
      10
    ],
    "Flame Laser": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Break Style": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Assault Style +1": [
      1,
      [
        40
      ],
      16,
      0,
      50
    ],
    "Assault Style +2": [
      1,
      [
        40
      ],
      16,
      0,
      50
    ],
    "Break Style +1": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Break Style +2": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ]
  },
  "Jean": {
    "": [],
    "Throw": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Medicant": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Treatment": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Encourage": [
      1,
      [
        5
      ],
      16,
      0,
      40
    ],
    "Piercing Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ]
  },
  "Juggler": {
    "": [],
    "Throw": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Provoke": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "One Man Show": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Pandora's Box": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Healing Smile": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Rolling Ball": [
      1,
      [
        42
      ],
      16,
      0,
      40
    ],
    "Firebomb": [
      1,
      [
        55
      ],
      16,
      0,
      0
    ]
  },
  "Julian": {
    "": [],
    "勇猛なる剣士": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ]
  },
  "Kain": {
    "": [],
    "Jump": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Lance": [
      2,
      [
        120,
        0
      ],
      16,
      0,
      40
    ],
    "Store": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Power Surge": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dragon Dive": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Dragon Dive +1": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Dragon Dive +2": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ]
  },
  "Kamui": {
    "": [],
    "Iai Strike": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "Spiteful Blade": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Sacrificial Flame": [
      6,
      [
        42,
        10,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Fingersnap": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Begrudged Blade": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Hellfire Slash": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Sacrificial Blow": [
      1,
      [
        210
      ],
      16,
      0,
      40
    ]
  },
  "Karl": {
    "": [],
    "Ruinous Cleave": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Verdant Cleave": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Thunder Cleave": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Call to Arms": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Call to Arms +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Call to Arms +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Katarina": {
    "": [],
    "Earthwalker": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "ムーングロウ": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ],
    "シャドウサーバント": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "ムーンシャイン": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ]
  },
  "Kefka": {
    "": [],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Biora": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Trine": [
      1,
      [
        130
      ],
      16,
      0,
      70
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Bioga": [
      1,
      [
        210
      ],
      16,
      0,
      40
    ],
    "Heartless Angel": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Hyperdrive": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Last Footstep": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Light of Judgment": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Light of Judgment +1": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Light of Judgment +2": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ]
  },
  "King": {
    "": [],
    "Point-Blank Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Hawkeye": [
      1,
      [
        130
      ],
      16,
      0,
      50
    ],
    "Magazine Blast": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Indomitable": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Knight Delita": {
    "": [],
    "Wish": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Weapon Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Shield Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Lightning Stab": [
      6,
      [
        42,
        5,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      40
    ],
    "Stasis Sword": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Crush Weapon": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Commanding Blade": [
      8,
      [
        51,
        9,
        9,
        9,
        9,
        9,
        9,
        9
      ],
      16,
      0,
      40
    ],
    "Strategic Blade": [
      1,
      [
        20
      ],
      16,
      0,
      0
    ]
  },
  "Krile": {
    "": [],
    "Libra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Aero": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Bluff": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Convert": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Bluff +1": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Bluff +2": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Kuja": {
    "": [],
    "Gravity": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Barthundara": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Thundaga +1": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Thundaga +2": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Barthundara +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barthundara +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Kupipi": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Pray": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "I've Got You!": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Lani": {
    "": [],
    "Water": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ]
  },
  "Lasswell": {
    "": [],
    "Blizzard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Mirror of Equity": [
      1,
      [
        50
      ],
      16,
      0,
      40
    ],
    "Aero": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Fingersnap": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Mirror of Haze": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Blade Flash - Awakened": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Mirror of Equity +1": [
      1,
      [
        50
      ],
      16,
      0,
      40
    ],
    "Mirror of Equity +2": [
      1,
      [
        50
      ],
      16,
      0,
      40
    ],
    "Blade Flash - Awakened +1": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Blade Flash - Awakened +2": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ]
  },
  "Lawrence": {
    "": [],
    "Swarmstrike": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Shadowstick": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Power Fall": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Magic Fall": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Mirage Shot": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ]
  },
  "Lenna": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Banish": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Regen": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Leo": {
    "": [],
    "Store": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Armor Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Brace": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Leon": {
    "": [],
    "Another Load": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Hypnotize": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Dark Charge": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Blackout": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Maverick": [
      1,
      [
        40
      ],
      16,
      0,
      40
    ]
  },
  "Libertus": {
    "": [],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "No Counting Favors": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Use This!": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Not Dying Now": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Lid": {
    "": [],
    "Magic Shot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Analyze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Maintenance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Metal Kick": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Sunbeam": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Upgrade": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Healing Force": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Power Generator": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Upgrade +1": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Upgrade +2": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Lightning": {
    "": [],
    "Sparkstrike": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Flamestrike": [
      1,
      [
        55
      ],
      16,
      0,
      0
    ],
    "Froststrike": [
      1,
      [
        125
      ],
      16,
      0,
      0
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Crushing Blow": [
      4,
      [
        42,
        20,
        30,
        2
      ],
      16,
      0,
      40
    ],
    "Galestrike": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Electric Blitz": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Heat Blitz": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Ice Blitz": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Aero Blitz": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Crushing Blow +1": [
      4,
      [
        42,
        20,
        30,
        2
      ],
      16,
      0,
      40
    ],
    "Crushing Blow +2": [
      4,
      [
        42,
        20,
        30,
        2
      ],
      16,
      0,
      40
    ]
  },
  "Locke": {
    "": [],
    "Sneak Attack": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "Mystify": [
      1,
      [
        72
      ],
      16,
      0,
      40
    ],
    "Mirage Dive": [
      1,
      [
        6
      ],
      16,
      0,
      4
    ]
  },
  "Loren": {
    "": [],
    "Unhesitating Will": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Pressure": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Arms Eraser": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Armor Eraser": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Full Break+": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Blade Prison": [
      10,
      [
        42,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8
      ],
      16,
      0,
      40
    ],
    "Model of Ares": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Ludmille": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Vox": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blindna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Regen": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Mental Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Stonra": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Cleanse": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Armor Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stonga": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Convert": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Luka": {
    "": [],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cleanse": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Regenerate": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Water God's Breath": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Priestess Miracle": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Water Barrier": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deep Blue": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Priestess Miracle +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Priestess Miracle +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Regenerate +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Regenerate +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Luna": {
    "": [],
    "Libra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Blindna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Covering Fire": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ]
  },
  "Lunera": {
    "": [],
    "Silencing Stance": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Paralyzing Stance": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Stone Statue": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Elven Song": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Beautiful Shield": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esunaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Gleaming Arrow": [
      1,
      [
        410
      ],
      16,
      0,
      0
    ],
    "Holy": [
      1,
      [
        450
      ],
      16,
      0,
      40
    ],
    "Gail Arrow": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Aureole Ray": [
      20,
      [
        42,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4
      ],
      16,
      0,
      40
    ]
  },
  "Luneth": {
    "": [],
    "Cut Through": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Advance": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Cut Through +1": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ]
  },
  "Maria": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Blindna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Vox": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Mystery Waltz": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Regen": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dispelga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Friendly Affection": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ]
  },
  "Marie": {
    "": [],
    "Barfiraga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barthundaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barblizzaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sleep": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Silence": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blind": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Imperil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Lovely Guard": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sweet Lullaby": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Reflect": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Prism Veil": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Baraeroga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barstonga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barwaterga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Anti-Element": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shellga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Love You All": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Love You All +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Love You All +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Lovely Guard +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Lovely Guard +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Reflect +1": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Reflect +2": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ]
  },
  "Medius": {
    "": [],
    "Power Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Magic Shot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Auto Bowgun": [
      5,
      [
        42,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      40
    ],
    "Burst Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Scattershot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Multiburst": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Blazing Glory": [
      4,
      [
        54,
        6,
        7,
        3
      ],
      16,
      0,
      40
    ]
  },
  "Meliadoul": {
    "": [],
    "Shield Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Mind Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shellga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Helm Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Weapon Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Crush Armor": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Crush Weapon": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Banishga": [
      1,
      [
        65
      ],
      16,
      0,
      0
    ],
    "Heaven's Blessing": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Chantage": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Preach": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Belief": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Mercedes": {
    "": [],
    "Water": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Watera": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Waterga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Warcry": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sea King's Chop": [
      1,
      [
        90
      ],
      16,
      0,
      0
    ],
    "Sea King's Chop +1": [
      1,
      [
        90
      ],
      16,
      0,
      0
    ],
    "Sea King's Chop +2": [
      1,
      [
        90
      ],
      16,
      0,
      0
    ],
    "Warcry +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Warcry +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Mercenary Ramza": {
    "": [],
    "Stone Throw": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Esunaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Second Wind": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Weapon Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Ultima": [
      1,
      [
        365
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Mind Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Blade of Justice": [
      8,
      [
        42,
        8,
        8,
        8,
        8,
        8,
        6,
        8
      ],
      16,
      0,
      40
    ]
  },
  "Miyuki": {
    "": [],
    "Throw": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Lightning": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Blitz": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Shadowbind": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Scintilla": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Mustadio": {
    "": [],
    "Power Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Scattershot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Burst Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Multiburst": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Nichol": {
    "": [],
    "Blizzard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Water": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Barblizzard": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Watera": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Barwater": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Impenetrable Stance": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Imperil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Waterga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Barblizzara": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Barwatera": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Back to the Wall": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Back to the Wall +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Back to the Wall +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Impenetrable Stance +1": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Impenetrable Stance +2": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Nine": {
    "": [],
    "Jump": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Javelin Throw": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "Roar": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "Whirling Lance": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ],
    "Clean Sweep": [
      3,
      [
        60,
        15,
        10
      ],
      16,
      0,
      0
    ],
    "Hyper Dive": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ]
  },
  "Noctis": {
    "": [],
    "Blindside": [
      1,
      [
        40
      ],
      16,
      0,
      30
    ],
    "Fish": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Cover": [
      2,
      [
        120,
        0
      ],
      16,
      0,
      40
    ],
    "Link": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Point-Warp": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Fire Flask": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Blizzard Flask": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thunder Flask": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Comeback": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ]
  },
  "Nyx": {
    "": [],
    "Fire": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Warp Plunder": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Warp Charge": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Warp Strike": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Shellga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Kingsglaive": [
      8,
      [
        82,
        8,
        8,
        8,
        8,
        8,
        8,
        8
      ],
      16,
      0,
      40
    ],
    "Hero's Pride": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Life Giver": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Desperate Blow": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ]
  },
  "Olive": {
    "": [],
    "Throw": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Flash Grenade": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Shattering Shot": [
      1,
      [
        103
      ],
      16,
      0,
      0
    ],
    "Grapeshot": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ],
    "Napalm Grenade": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Maiming Shot": [
      1,
      [
        103
      ],
      16,
      0,
      40
    ],
    "Heated Rounds": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "True Shot": [
      1,
      [
        100
      ],
      16,
      0,
      20
    ]
  },
  "Onion Knight": {
    "": [],
    "Splendor of the Wind": [
      13,
      [
        42,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        1
      ],
      16,
      0,
      40
    ],
    "Splendor of the Fire": [
      13,
      [
        42,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        1
      ],
      16,
      0,
      40
    ],
    "Full Speed Bladeblitz": [
      12,
      [
        42,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7
      ],
      16,
      0,
      40
    ],
    "Splendor of the Water": [
      13,
      [
        42,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        1
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Splendor of the Earth": [
      13,
      [
        42,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        1
      ],
      16,
      0,
      40
    ],
    "Onion Slice": [
      12,
      [
        42,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7
      ],
      16,
      0,
      40
    ]
  },
  "Orlandeau": {
    "": [],
    "Stasis Sword": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Night Sword": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Crush Weapon": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Northswain's Strike": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Duskblade": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Lightning Stab": [
      6,
      [
        42,
        5,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Divine Ruination": [
      7,
      [
        70,
        7,
        5,
        7,
        7,
        7,
        7
      ],
      16,
      0,
      40
    ]
  },
  "Orran": {
    "": [],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Gravity": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Song of Life": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Magickal Refrain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Meteor": [
      1,
      [
        350
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Battle Chant": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Angelsong": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shellga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Durai Papers": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Reflect": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Nameless Song": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Ovelia": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Stona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bravery": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Faith": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Penelo": {
    "": [],
    "Curing Waltz": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Water": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Aero": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Jitterbug Duet": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Faith": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sword Dance": [
      6,
      [
        72,
        5,
        5,
        5,
        5,
        20
      ],
      16,
      0,
      40
    ],
    "Watera": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Waterga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Final Dance": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ]
  },
  "Popoi": {
    "": [],
    "Freeze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Sleepy Bud": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Diamond Missile": [
      1,
      [
        170
      ],
      16,
      0,
      40
    ],
    "Air Blast": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Fireball": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Acid Storm": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Lightning Bolt": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Lava Wave": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Earthquake": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Anti-Magic": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Evil Gate": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Syringe": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Explode": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Absorb": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dark Force": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Burst": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ],
    "Spectacular": [
      1,
      [
        365
      ],
      16,
      0,
      40
    ],
    "Lunatic": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Acid Storm +1": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Acid Storm +2": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Burst +1": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ],
    "Burst +2": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ]
  },
  "Primm": {
    "": [],
    "Detect": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Refresh": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Healing Waters": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Ice Saber": [
      1,
      [
        125
      ],
      16,
      0,
      0
    ],
    "Safeguard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Stone Saber": [
      1,
      [
        120
      ],
      16,
      0,
      0
    ],
    "Thunder Saber": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Flaming Wall": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Flame Saber": [
      1,
      [
        55
      ],
      16,
      0,
      0
    ],
    "Rush": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Moon Saber": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Molotov": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Invigorate": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Holy Saber": [
      1,
      [
        410
      ],
      16,
      0,
      0
    ],
    "Saintly Beam": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Healing Waters +1": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Healing Waters +2": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Saintly Beam +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Saintly Beam +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Invigorate +1": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Invigorate +2": [
      1,
      [
        120
      ],
      16,
      0,
      60
    ]
  },
  "Prishe": {
    "": [],
    "Chakra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Kick": [
      3,
      [
        2,
        3,
        3
      ],
      16,
      0,
      0
    ],
    "Dragon Foot": [
      2,
      [
        2,
        10
      ],
      16,
      0,
      0
    ],
    "Carnal Incense": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Raging Fists": [
      8,
      [
        2,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      0
    ],
    "Crushing Fist": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Swelling Vitality": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Berserk Attack": [
      3,
      [
        2,
        10,
        10
      ],
      16,
      0,
      0
    ],
    "Will to Live": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Asuran Fists": [
      7,
      [
        2,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      0
    ],
    "Tornado Kick": [
      3,
      [
        60,
        -30,
        -30
      ],
      16,
      0,
      0
    ]
  },
  "Queen": {
    "": [],
    "Balestra Lunge": [
      1,
      [
        2
      ],
      16,
      0,
      0
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Magic Martyr": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Mana Sphere": [
      3,
      [
        142,
        20,
        20
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Berserk": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Flinchproof Martyr": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Berserk +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Berserk +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Magic Martyr +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Magic Martyr +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Rakshasa": {
    "": [],
    "Aerora Blade": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Sleep": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blind": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Watera Blade": [
      1,
      [
        90
      ],
      16,
      0,
      0
    ],
    "Imperil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Silence": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stonra Blade": [
      1,
      [
        120
      ],
      16,
      0,
      0
    ],
    "Healing Waltz": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Aeroga Blade": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Stonga Blade": [
      1,
      [
        150
      ],
      16,
      0,
      0
    ],
    "Waterga Blade": [
      1,
      [
        90
      ],
      16,
      0,
      0
    ]
  },
  "Ramza": {
    "": [],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Mind Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Medicate": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Holy Blade": [
      1,
      [
        410
      ],
      16,
      0,
      0
    ],
    "Weapon Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Hero's Rime": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Ultima": [
      1,
      [
        365
      ],
      16,
      0,
      40
    ]
  },
  "Randi": {
    "": [],
    "Power Charge": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Finisher": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Slice Thrice": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Power Charge +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Power Charge +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Slice Thrice +1": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ]
  },
  "Rasler": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "All Resist Light": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esunaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Patriotic Slash": [
      7,
      [
        42,
        10,
        10,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ]
  },
  "Reberta": {
    "": [],
    "Jump": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Lance": [
      2,
      [
        120,
        0
      ],
      16,
      0,
      40
    ],
    "Raging Thrust": [
      3,
      [
        42,
        8,
        8
      ],
      16,
      0,
      42
    ],
    "Ice Breath": [
      3,
      [
        80,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Lightning Breath": [
      3,
      [
        10,
        10,
        10
      ],
      16,
      0,
      0
    ],
    "Fire Breath": [
      3,
      [
        80,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Mystic Thrust": [
      7,
      [
        42,
        10,
        10,
        10,
        10,
        10,
        10
      ],
      16,
      0,
      42
    ]
  },
  "Refia": {
    "": [],
    "Stona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Embolden": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Full-Life": [
      1,
      [
        120
      ],
      16,
      0,
      90
    ],
    "Full-Life +1": [
      1,
      [
        120
      ],
      16,
      0,
      90
    ],
    "Full-Life +2": [
      1,
      [
        120
      ],
      16,
      0,
      90
    ],
    "Embolden +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Embolden +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Rem": {
    "": [],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Siphon Sphere": [
      1,
      [
        200
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Healing Prayer": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Protectga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dagger Boomerang": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Undying Wish": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Rikku": {
    "": [],
    "Burning Soul": [
      9,
      [
        40,
        25,
        25,
        25,
        25,
        25,
        25,
        25,
        25
      ],
      16,
      0,
      40
    ],
    "Al Bhed Potion": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Tidal Wave": [
      9,
      [
        40,
        8,
        9,
        8,
        9,
        8,
        9,
        9,
        10
      ],
      16,
      0,
      40
    ],
    "Synthesis": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Winter Storm": [
      9,
      [
        40,
        13,
        14,
        13,
        14,
        13,
        14,
        13,
        16
      ],
      16,
      0,
      40
    ],
    "Lightning Rod": [
      9,
      [
        45,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        10
      ],
      16,
      0,
      40
    ],
    "Mega Phoenix": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ]
  },
  "Robyn": {
    "": [],
    "Imprison": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "マインドステア": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "ナップ": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "サクション": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "ウインドダート": [
      2,
      [
        72,
        10
      ],
      16,
      0,
      40
    ]
  },
  "Rosa": {
    "": [],
    "Stona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cleanse": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sharpshot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Dispelga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Charge Shot": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Bless": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bless +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bless +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sharpshot +1": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Sharpshot +2": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ]
  },
  "Roselia": {
    "": [],
    "Pray": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Blindna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Vox": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Banish": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Paralyna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Regen": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cleanse": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Pray +1": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Pray +2": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ]
  },
  "Ruggles": {
    "": [],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Armor Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Crushing Hammer": [
      1,
      [
        120
      ],
      16,
      0,
      0
    ],
    "Heavy Hammer": [
      3,
      [
        42,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Smashing Hammer": [
      1,
      [
        140
      ],
      16,
      0,
      0
    ],
    "Song of Memories": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Special Hammer": [
      7,
      [
        42,
        8,
        8,
        8,
        8,
        8,
        16
      ],
      16,
      0,
      40
    ],
    "Sharp Spear": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ]
  },
  "Russell": {
    "": [],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Armor Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Finisher": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Provoke": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Rydia": {
    "": [],
    "Blizzard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Bio": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Biora": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bioga": [
      1,
      [
        210
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Meteor": [
      1,
      [
        350
      ],
      16,
      0,
      40
    ]
  },
  "Sabin": {
    "": [],
    "Raging Fist": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Chakra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Store": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Aura Cannon": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ]
  },
  "Sakura": {
    "": [],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shock Blade": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Light Blade": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Dark Blade": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Thunder's Light": [
      2,
      [
        2,
        10
      ],
      16,
      0,
      0
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Bright Flash": [
      2,
      [
        2,
        10
      ],
      16,
      0,
      0
    ],
    "Blighted Gloom": [
      2,
      [
        2,
        10
      ],
      16,
      0,
      0
    ],
    "Thunder's Protection": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Defensive Barrier": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundaja": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Defensive Barrier +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Defensive Barrier +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thunder's Protection +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thunder's Protection +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Santa Roselia": {
    "": [],
    "Stona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Cleanse": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Banish": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Regen": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Healer’s Resolve": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Sara": {
    "": [],
    "Pray": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Aero": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Baraero": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Baraerora": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Princess's Healing": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Retreat Command": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ]
  },
  "Sazh": {
    "": [],
    "Power Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Scattershot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Burst Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Multiburst": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Sparkstrike": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Full Break": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ]
  },
  "Seabreeze Dark Fina": {
    "": [],
    "Aquatic Veil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Waterga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Stonga": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Bioga": [
      1,
      [
        210
      ],
      16,
      0,
      40
    ],
    "Distress": [
      3,
      [
        72,
        30,
        30
      ],
      16,
      0,
      40
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Physical Fall": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ultima": [
      1,
      [
        365
      ],
      16,
      0,
      40
    ],
    "Utopia": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sexy Charm": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Seria": {
    "": [],
    "Emblaze": [
      1,
      [
        55
      ],
      16,
      0,
      0
    ],
    "Heart Blaze": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Champion's Surge": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Heart Blaze +1": [
      2,
      [
        110,
        80
      ],
      16,
      0,
      0
    ],
    "Heart Blaze +2": [
      2,
      [
        110,
        80
      ],
      16,
      0,
      0
    ],
    "Champion's Surge +1": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Champion's Surge +2": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Setzer": {
    "": [],
    "Mysidian Rabbit": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Prismatic Flash": [
      7,
      [
        42,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      16,
      0,
      0
    ],
    "Joker's Death": [
      1,
      [
        120
      ],
      16,
      0,
      60
    ],
    "Cursed Card": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Red Card": [
      10,
      [
        42,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ],
      16,
      0,
      40
    ],
    "Dice": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Double Dice": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ]
  },
  "Seven": {
    "": [],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Drainlash": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Osmoselash": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Frostlash": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Flamelash": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Thunderlash": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Diving Strike": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Elementalash": [
      1,
      [
        120
      ],
      16,
      0,
      0
    ],
    "Elementalash +1": [
      1,
      [
        120
      ],
      16,
      0,
      0
    ],
    "Elementalash +2": [
      1,
      [
        120
      ],
      16,
      0,
      0
    ],
    "Osmoselash +1": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Osmoselash +2": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ]
  },
  "Shadow": {
    "": [],
    "Shadowbind": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Shantotto": {
    "": [],
    "Fire": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Water": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Aero": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Stone": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bio": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blizzard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Stonra": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Watera": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Biora": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Waterga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Stonga": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Firaja": [
      1,
      [
        210
      ],
      16,
      0,
      40
    ],
    "Blizzaja": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ],
    "Thundaja": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Waterja": [
      1,
      [
        190
      ],
      16,
      0,
      40
    ],
    "Aeroja": [
      1,
      [
        170
      ],
      16,
      0,
      40
    ],
    "Stonja": [
      1,
      [
        170
      ],
      16,
      0,
      40
    ],
    "Tornado": [
      12,
      [
        212,
        -12,
        -12,
        -12,
        -12,
        -12,
        -12,
        -12,
        -12,
        -12,
        -12,
        -12
      ],
      16,
      0,
      40
    ]
  },
  "Shera": {
    "": [],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Neue Morgen": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sieg Zoldaad": [
      1,
      [
        110
      ],
      16,
      0,
      0
    ]
  },
  "Shine": {
    "": [],
    "Analyze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Noir Attack": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Assassinate": [
      1,
      [
        120
      ],
      16,
      0,
      60
    ],
    "Dusk Edge": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Surprise Attack": [
      2,
      [
        12,
        10
      ],
      16,
      0,
      0
    ],
    "Double Corruption": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Into Darkness": [
      1,
      [
        23
      ],
      16,
      0,
      0
    ]
  },
  "Sice": {
    "": [],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Negative Aura": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Moxie - MAG": [
      1,
      [
        40
      ],
      16,
      0,
      50
    ],
    "Moxie - SPR": [
      1,
      [
        40
      ],
      16,
      0,
      50
    ],
    "Dark Nebula": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Moxie - DEF": [
      1,
      [
        40
      ],
      16,
      0,
      40
    ],
    "Moxie - ATK": [
      1,
      [
        40
      ],
      16,
      0,
      50
    ],
    "Gravity": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Black Hole": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ],
    "Grim Reaper": [
      1,
      [
        120
      ],
      16,
      0,
      30
    ]
  },
  "Silvia": {
    "": [],
    "Silence Blade": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Sleep Blade": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Blind Blade": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Firaga Blade": [
      1,
      [
        110
      ],
      16,
      0,
      0
    ],
    "Aeroga Blade": [
      1,
      [
        70
      ],
      16,
      0,
      0
    ],
    "Cover Shield": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blast Gem": [
      5,
      [
        50,
        30,
        30,
        10,
        20
      ],
      16,
      0,
      40
    ],
    "Osmose Blade": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Blizzaga Blade": [
      1,
      [
        110
      ],
      16,
      0,
      0
    ],
    "Stop Shield": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Heat Gem": [
      5,
      [
        50,
        30,
        30,
        10,
        20
      ],
      16,
      0,
      40
    ],
    "Holy Blade": [
      1,
      [
        410
      ],
      16,
      0,
      0
    ],
    "Cold Gem": [
      5,
      [
        50,
        30,
        30,
        10,
        20
      ],
      16,
      0,
      40
    ],
    "Magic Blade": [
      1,
      [
        52
      ],
      16,
      0,
      40
    ],
    "Sunlight Gem": [
      5,
      [
        90,
        20,
        10,
        10,
        20
      ],
      16,
      0,
      40
    ]
  },
  "Snow": {
    "": [],
    "Aquastrike": [
      1,
      [
        45
      ],
      16,
      0,
      0
    ],
    "Blizzard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Water": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Watera": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Froststrike": [
      1,
      [
        125
      ],
      16,
      0,
      0
    ],
    "Battle Roar": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Battle Roar +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Battle Roar +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Soleil": {
    "": [],
    "Boost": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Flash of Brilliance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Darkness Dance": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Silence Dance": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Tempting Tango": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Dancehall Daze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Schwert Dance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cannon Dance": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Panzer Dance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shooting Dance": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Schwert Dance +1": [
      2,
      [
        40,
        80
      ],
      16,
      0,
      40
    ],
    "Schwert Dance +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cannon Dance +1": [
      2,
      [
        40,
        90
      ],
      16,
      0,
      40
    ],
    "Cannon Dance +2": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Panzer Dance +1": [
      2,
      [
        40,
        80
      ],
      16,
      0,
      40
    ],
    "Panzer Dance +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Shooting Dance +1": [
      2,
      [
        40,
        90
      ],
      16,
      0,
      40
    ],
    "Shooting Dance +2": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Sozhe": {
    "": [],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Suppression": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Fingersnap": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Provoke": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Sieg Zoldaad": [
      1,
      [
        110
      ],
      16,
      0,
      0
    ],
    "Defense Order": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "On Fire": [
      1,
      [
        200
      ],
      16,
      0,
      0
    ],
    "Boulder Stance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Hell Shaft": [
      1,
      [
        20
      ],
      16,
      0,
      0
    ]
  },
  "Summer Lid": {
    "": [],
    "Magic Shot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Aquatic Veil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Analyze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Maintenance": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Metal Kick": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "Sunbeam": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Upgrade": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Aqua Gear": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Healing Force": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Cutey Charm": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Power Generator": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Aqua Gamble": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Tellah": {
    "": [],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Biora": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Thundaga": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ]
  },
  "Terra": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Fire": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Dispel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Dispelga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ray of Hope": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Flare": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ],
    "Full-Life": [
      1,
      [
        120
      ],
      16,
      0,
      90
    ],
    "Unlock Magic": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Unlock Magic +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Unlock Magic +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Thief": {
    "": [],
    "Steal HP": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Steal MP": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Mercy Stroke": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ]
  },
  "Tidus": {
    "": [],
    "Spiral Cut": [
      1,
      [
        95
      ],
      16,
      0,
      30
    ],
    "Energy Rain": [
      4,
      [
        67,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Get pumped!": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blitz Mania": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Jecht Shot": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Quick Hit": [
      12,
      [
        22,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        20
      ],
      16,
      0,
      20
    ]
  },
  "Tilith": {
    "": [],
    "Prism Heart": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Pretty Steel": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Goddess's Miracle": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Celestial Light": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Rainbow Veil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Affectionate Aura": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sealed Light": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Prism Heal": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Radiant Light": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Goddess's Revelation": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ]
  },
  "Timothy": {
    "": [],
    "Sleep": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Silence": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Blind": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deprotect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deshell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Imperil": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Speaking Tongues": [
      1,
      [
        30
      ],
      16,
      0,
      40
    ],
    "Mischief": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Harsh Words": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ominous Words": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Attack Kill": [
      1,
      [
        20
      ],
      16,
      0,
      0
    ],
    "Defense Kill": [
      1,
      [
        20
      ],
      16,
      0,
      0
    ],
    "Magic Kill": [
      1,
      [
        20
      ],
      16,
      0,
      0
    ],
    "Spirit Kill": [
      1,
      [
        20
      ],
      16,
      0,
      0
    ]
  },
  "Trance Terra": {
    "": [],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Holy": [
      1,
      [
        450
      ],
      16,
      0,
      40
    ],
    "Ultima": [
      1,
      [
        365
      ],
      16,
      0,
      40
    ],
    "Full-Life": [
      1,
      [
        120
      ],
      16,
      0,
      90
    ],
    "Maduin Guard": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Magical Activation": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Chaos Wave": [
      5,
      [
        52,
        20,
        20,
        20,
        20
      ],
      16,
      0,
      50
    ]
  },
  "Trey": {
    "": [],
    "Libra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Burst Shot": [
      1,
      [
        85
      ],
      16,
      0,
      40
    ],
    "Freezing Rain": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Concentrate": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Multiburst": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Burst Delta": [
      1,
      [
        100
      ],
      16,
      0,
      0
    ],
    "Dynamite Arrow": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ]
  },
  "Ulrica": {
    "": []
  },
  "Vaan": {
    "": [],
    "Aero": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Armor Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Full Break": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Biohazard": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Resist Stop": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Assault Strike": [
      8,
      [
        22,
        8,
        8,
        8,
        8,
        8,
        8,
        8
      ],
      16,
      0,
      20
    ]
  },
  "Vanille": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Esuna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deprotect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Deshell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Keep it up!": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cheer +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cheer +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Focus +1": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Focus +2": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Keep it up! +1": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Keep it up! +2": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Vargas": {
    "": [],
    "Flare Saber": [
      1,
      [
        55
      ],
      16,
      0,
      0
    ],
    "Brave Strike": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ],
    "Flare Ride+": [
      5,
      [
        2,
        10,
        10,
        10,
        78
      ],
      16,
      0,
      0
    ],
    "Undying Flame": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Dark Flame's Protection": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Supreme Blaze": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ]
  },
  "Veritas of the Dark": {
    "": [],
    "Gravity": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Osmose Blade": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Defensive Barrier": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Abyss Guard": [
      1,
      [
        120
      ],
      16,
      0,
      80
    ],
    "Impact": [
      1,
      [
        290
      ],
      16,
      0,
      40
    ],
    "Dark Punishment": [
      7,
      [
        70,
        7,
        5,
        7,
        7,
        7,
        7
      ],
      16,
      0,
      40
    ],
    "Dark Edge": [
      1,
      [
        110
      ],
      16,
      0,
      0
    ]
  },
  "Veritas of the Earth": {
    "": [],
    "Stonra": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Omni Block": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stonga": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Crushing Press": [
      4,
      [
        67,
        25,
        25,
        25
      ],
      16,
      0,
      40
    ],
    "Defensive Barrier": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Earthen Ward": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stonja": [
      1,
      [
        170
      ],
      16,
      0,
      40
    ],
    "Steel Body": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Incinerating Press": [
      1,
      [
        3
      ],
      16,
      0,
      0
    ]
  },
  "Veritas of the Flame": {
    "": [],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Flaming Axe": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Defensive Barrier": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Firaja": [
      1,
      [
        210
      ],
      16,
      0,
      40
    ],
    "Earthen Axe": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Aero Axe": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Inspire": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Darksteel Axe": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Heavy Stomp": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ]
  },
  "Veritas of the Heavens": {
    "": [],
    "Spineshatter Dive 1": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Aeroja": [
      1,
      [
        170
      ],
      16,
      0,
      40
    ],
    "Grit": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Heavenly Wind": [
      10,
      [
        40,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15
      ],
      16,
      0,
      40
    ],
    "Spineshatter Dive 2": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Spineshatter Dive 3": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "Spineshatter Dive 0": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ]
  },
  "Veritas of the Light": {
    "": [],
    "Divine": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Charge": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Holy": [
      1,
      [
        450
      ],
      16,
      0,
      40
    ],
    "Negation": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Ultima": [
      1,
      [
        365
      ],
      16,
      0,
      40
    ],
    "Blowback": [
      5,
      [
        370,
        20,
        20,
        20,
        20
      ],
      16,
      0,
      40
    ],
    "Damnation": [
      2,
      [
        80,
        20
      ],
      16,
      0,
      0
    ],
    "Divine Shot": [
      7,
      [
        42,
        9,
        9,
        9,
        9,
        9,
        9
      ],
      16,
      0,
      40
    ]
  },
  "Veritas of the Waters": {
    "": [],
    "Auto-Refresh": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Mind Blast": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "Waterga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Mist": [
      1,
      [
        30
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Waterja": [
      1,
      [
        190
      ],
      16,
      0,
      40
    ],
    "Curaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Esunaga": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Forbidden Arts": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Victoria": {
    "": [],
    "Dark": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Magical Awakening": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Biora": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Darkra": [
      1,
      [
        170
      ],
      16,
      0,
      40
    ],
    "Time Crush": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "Firaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Undying Beauty": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Darkga": [
      1,
      [
        230
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Farewell to Wisdom": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Firaja": [
      1,
      [
        210
      ],
      16,
      0,
      40
    ],
    "Overflow": [
      10,
      [
        57,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24,
        24
      ],
      16,
      0,
      40
    ],
    "Meteor": [
      1,
      [
        350
      ],
      16,
      0,
      40
    ]
  },
  "Vivi": {
    "": [],
    "Fire": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Blizzard": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Thunder": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Water": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Sleep": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Bio": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Fira": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Thundara": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Gravity": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Comet": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Wakka": {
    "": [],
    "Dark Buster": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Sleep Buster": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Water Ball": [
      3,
      [
        42,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Flying Ball": [
      3,
      [
        42,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Silence Buster": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Aurochs Spirit": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Penalty 3": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ]
  },
  "Warrior of Light": {
    "": [],
    "Store": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Breath of Life": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Full Break": [
      1,
      [
        50
      ],
      16,
      0,
      0
    ],
    "Shining Wave": [
      1,
      [
        80
      ],
      16,
      0,
      0
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Embolden": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Brave Presence": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Armor Eraser": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Arms Eraser": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ]
  },
  "Werei": {
    "": [],
    "Hard Slash": [
      2,
      [
        2,
        10
      ],
      16,
      0,
      0
    ],
    "Solid Earthen Wall": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Focus": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Stone Fall": [
      1,
      [
        140
      ],
      16,
      0,
      0
    ]
  },
  "White Knight Noel": {
    "": [],
    "Steel": [
      2,
      [
        130,
        0
      ],
      16,
      0,
      40
    ],
    "Blizzara": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Ice Blitz": [
      1,
      [
        145
      ],
      16,
      0,
      40
    ],
    "Aerora": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Gale Blast": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Bring It On": [
      3,
      [
        130,
        0,
        0
      ],
      16,
      0,
      40
    ],
    "Blizzaga": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "Aeroga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Glacial Wave": [
      6,
      [
        72,
        106,
        6,
        4,
        3,
        3
      ],
      16,
      0,
      40
    ]
  },
  "White Witch Fina": {
    "": [],
    "Cure": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Blindna": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Vox": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Pray": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "Shell": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Poisona": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Protect": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Cura": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Divine Burst": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Banish": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Entrust": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Cleanse": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Curada": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Raise": [
      1,
      [
        120
      ],
      16,
      0,
      55
    ],
    "Cheer": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Ritual": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Wilhelm": {
    "": [],
    "Shield Bash": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "General's Command": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "Invincible Heart": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "General Battlecry": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Impregnable": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Xiao": {
    "": [],
    "Raging Fist": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Power Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Armor Break": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "Kick": [
      3,
      [
        2,
        3,
        3
      ],
      16,
      0,
      0
    ],
    "Chakra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Rockbreaker": [
      3,
      [
        0,
        3,
        3
      ],
      16,
      0,
      0
    ],
    "Perfect Balance": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Crushing Kick": [
      3,
      [
        20,
        16,
        37
      ],
      16,
      0,
      0
    ],
    "Unleashed Chakra": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ]
  },
  "Xon": {
    "": [],
    "Sneak Attack": [
      2,
      [
        40,
        70
      ],
      16,
      0,
      20
    ],
    "Toxic Dagger": [
      3,
      [
        17,
        4,
        4
      ],
      16,
      0,
      15
    ],
    "Lie Low": [
      2,
      [
        110,
        0
      ],
      16,
      0,
      55
    ],
    "Rash Impulse": [
      1,
      [
        100
      ],
      16,
      0,
      10
    ],
    "Desperate Strike": [
      2,
      [
        70,
        40
      ],
      16,
      0,
      40
    ],
    "Twist of Fate": [
      2,
      [
        90,
        30
      ],
      16,
      0,
      40
    ]
  },
  "Yun": {
    "": [],
    "Chakra": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Blazing Heart": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "Angry Peck": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Crimson Rage": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Raging bird": [
      10,
      [
        38,
        3,
        2,
        3,
        4,
        2,
        4,
        2,
        3,
        2
      ],
      16,
      0,
      40
    ],
    "Inferno Rage": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "Blazing Combo": [
      5,
      [
        85,
        4,
        6,
        5,
        8
      ],
      16,
      0,
      40
    ]
  },
  "Yuri": {
    "": [],
    "Fujin": [
      1,
      [
        100
      ],
      16,
      0,
      40
    ],
    "Anti-Insect Stance": [
      4,
      [
        42,
        10,
        10,
        10
      ],
      16,
      0,
      40
    ],
    "Doton": [
      1,
      [
        160
      ],
      16,
      0,
      40
    ],
    "Illude": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Anti-Plantoid Stance": [
      4,
      [
        120,
        20,
        20,
        20
      ],
      16,
      0,
      40
    ],
    "Whirlwind Evasion": [
      8,
      [
        30,
        8,
        8,
        8,
        8,
        8,
        8,
        8
      ],
      16,
      0,
      0
    ],
    "Throw": [
      1,
      [
        130
      ],
      16,
      0,
      0
    ],
    "Earthsplit Evasion": [
      6,
      [
        50,
        8,
        8,
        8,
        8,
        8
      ],
      16,
      0,
      40
    ]
  },
  "Zargabaath": {
    "": [],
    "Hero Crest": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Righteous Sword": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "Berserk Crest": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Sacred Strike": [
      1,
      [
        130
      ],
      16,
      0,
      30
    ],
    "Word of Law": [
      2,
      [
        120,
        150
      ],
      16,
      0,
      40
    ],
    "Judgment Blade": [
      1,
      [
        1
      ],
      16,
      0,
      0
    ],
    "Rejuvenate": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Imperial Commander": [
      1,
      [
        90
      ],
      16,
      0,
      40
    ],
    "Bastion": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Archadian Light": [
      1,
      [
        120
      ],
      16,
      0,
      1
    ]
  },
  "Zidane": {
    "": [],
    "Analyze": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ]
  },
  "Zyrus": {
    "": [],
    "Comet": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Osmose": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Stonga": [
      1,
      [
        180
      ],
      16,
      0,
      40
    ],
    "Blood Scar": [
      1,
      [
        60
      ],
      16,
      0,
      30
    ],
    "Drain": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "Graviga": [
      1,
      [
        0
      ],
      16,
      0,
      110
    ],
    "Blood Curse": [
      1,
      [
        50
      ],
      16,
      0,
      30
    ],
    "Waterga": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "Flare": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ],
    "Blood Pulsar": [
      1,
      [
        130
      ],
      16,
      0,
      30
    ],
    "Blood Rend": [
      1,
      [
        90
      ],
      16,
      0,
      30
    ]
  },
  "はぐれメタル": {
    "": [],
    "イオ": [
      1,
      [
        95
      ],
      16,
      0,
      40
    ],
    "ギラ": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "ベギラマ": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "イオラ": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "イオナズン": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ],
    "ベギラゴン": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ]
  },
  "やまたのおろち": {
    "": [],
    "超ちからため": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "すなけむり": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "火炎の息": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "はげしいおたけび": [
      1,
      [
        45
      ],
      16,
      0,
      40
    ],
    "かがやく息": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "はげしい炎": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ],
    "しゃくねつ": [
      1,
      [
        110
      ],
      16,
      0,
      40
    ]
  },
  "りゅうおう": {
    "": [],
    "ベギラマ": [
      1,
      [
        80
      ],
      16,
      0,
      40
    ],
    "べホイミ": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "ラリホー": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "メラゾーマ": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "ベギラゴン": [
      1,
      [
        70
      ],
      16,
      0,
      40
    ],
    "ドルモーア": [
      1,
      [
        150
      ],
      16,
      0,
      40
    ],
    "光のはどう": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "メラガイアー": [
      1,
      [
        240
      ],
      16,
      0,
      40
    ]
  },
  "カンダタ": {
    "": [],
    "メタル斬り": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "マヒ攻撃": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "超ちからため": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "よろいくだき": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "メッタメタ斬り": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ]
  },
  "キラーマシン": {
    "": [],
    "こんしん斬り": [
      1,
      [
        0
      ],
      16,
      0,
      0
    ],
    "メタル斬り": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ],
    "マヒ攻撃": [
      1,
      [
        30
      ],
      16,
      0,
      0
    ],
    "ねむり攻撃": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "メダパニ斬り": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "いなずま斬り": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "火炎斬り": [
      1,
      [
        55
      ],
      16,
      0,
      0
    ],
    "マヒャド斬り": [
      1,
      [
        125
      ],
      16,
      0,
      0
    ],
    "全身全霊斬り": [
      1,
      [
        10
      ],
      16,
      0,
      0
    ]
  },
  "ゴーレム": {
    "": [],
    "ちからため": [
      1,
      [
        130
      ],
      16,
      0,
      40
    ],
    "たいあたり": [
      1,
      [
        2
      ],
      16,
      0,
      0
    ],
    "いわなげ": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "スカラ": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "かぶとわり": [
      1,
      [
        40
      ],
      16,
      0,
      0
    ],
    "スクルト": [
      1,
      [
        120
      ],
      16,
      0,
      40
    ],
    "ばくれつけん": [
      1,
      [
        60
      ],
      16,
      0,
      0
    ]
  }
}