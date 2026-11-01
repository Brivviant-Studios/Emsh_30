window.ROUTE_DATA = {
  "zones": [
    {
      "id": "arrival",
      "name": "الانطلاق والاستقبال",
      "short": "البداية",
      "start": 0,
      "end": 100,
      "color": "#008056",
      "description": "بوابة البداية، الاستقبال والاستعلامات.",
      "imagePathEdges": [
        0.411,
        0.564
      ]
    },
    {
      "id": "prevention",
      "name": "مركز الوقاية",
      "short": "الوقاية",
      "start": 100,
      "end": 225,
      "color": "#01b7a1",
      "description": "مركز الوقاية عند ١٥٠ مترا، وعناصر موزعة على الجانبين.",
      "imagePathEdges": [
        0.426,
        0.558
      ]
    },
    {
      "id": "fitness",
      "name": "مساحة اللياقة",
      "short": "اللياقة",
      "start": 225,
      "end": 375,
      "color": "#a4ce43",
      "description": "مساحة اللياقة عند ٣٠٠ متر، مع لوحات ومظاهر جمالية.",
      "imagePathEdges": [
        0.411,
        0.546
      ]
    },
    {
      "id": "wellness",
      "name": "واحة الصحة النفسية والنوم",
      "short": "الصحة النفسية",
      "start": 375,
      "end": 525,
      "color": "#500b74",
      "description": "واحة الصحة النفسية عند ٤٥٠ مترا ومنطقة الأطفال عند ٣٩٠ مترا.",
      "imagePathEdges": [
        0.4,
        0.54
      ]
    },
    {
      "id": "nutrition",
      "name": "منطقة التغذية",
      "short": "التغذية",
      "start": 525,
      "end": 675,
      "color": "#f0c905",
      "description": "منطقة التغذية عند ٦٠٠ متر وعناصر موزعة بطول المنطقة.",
      "imagePathEdges": [
        0.416,
        0.551
      ]
    },
    {
      "id": "challenge",
      "name": "منطقة التحديات",
      "short": "التحديات",
      "start": 675,
      "end": 825,
      "color": "#00a07b",
      "description": "منطقة التحديات عند ٧٥٠ مترا ومنطقة الكبار عند ٦٩٠ مترا.",
      "imagePathEdges": [
        0.417,
        0.553
      ]
    },
    {
      "id": "finish",
      "name": "الختام والتصوير",
      "short": "النهاية",
      "start": 825,
      "end": 1000,
      "color": "#008056",
      "description": "المركز الإعلامي عند ٨٨٠ مترا والفوتوبوث عند ٩٥٠ مترا، ثم بوابة النهاية.",
      "imagePathEdges": [
        0.4,
        0.535
      ]
    }
  ],
  "types": {
    "gate": {
      "name": "بوابة",
      "color": "#008056",
      "dims": [
        7,
        5.2,
        3.5
      ],
      "render": 14
    },
    "reception": {
      "name": "كونتر استقبال",
      "color": "#267a56",
      "dims": [
        3,
        1.2,
        0.6
      ],
      "render": 19
    },
    "information": {
      "name": "كونتر استعلامات",
      "color": "#008f7b",
      "dims": [
        1.2,
        1,
        0.6
      ],
      "render": 2
    },
    "media": {
      "name": "المركز الإعلامي",
      "color": "#500b74",
      "dims": [
        4.3,
        2.8,
        3.3
      ],
      "render": 1
    },
    "decoration": {
      "name": "مظهر جمالي",
      "color": "#8eb53c",
      "dims": [
        2,
        1.2,
        0.25
      ],
      "render": 6
    },
    "kids": {
      "name": "منطقة الأطفال التفاعلية",
      "color": "#784398",
      "dims": [
        2.5,
        2,
        1.5
      ],
      "render": 10
    },
    "adults": {
      "name": "منطقة الكبار التفاعلية",
      "color": "#146f68",
      "dims": [
        3.5,
        2,
        1.6
      ],
      "render": 12
    },
    "sign": {
      "name": "لوحة إرشادية",
      "color": "#466449",
      "dims": [
        1.2,
        1.8,
        0.2
      ],
      "render": 20
    },
    "sticker": {
      "name": "ستيكر أرضي",
      "color": "#c8a600",
      "dims": null,
      "render": 24
    },
    "flag": {
      "name": "علم المسار",
      "color": "#02a68e",
      "dims": null,
      "render": 21
    },
    "prevention": {
      "name": "مركز الوقاية",
      "color": "#00a991",
      "dims": [
        9,
        3.5,
        4
      ],
      "render": 25
    },
    "fitness": {
      "name": "مساحة اللياقة",
      "color": "#a4ce43",
      "dims": [
        12,
        4,
        2.6
      ],
      "render": 26
    },
    "wellness": {
      "name": "واحة الصحة النفسية والنوم",
      "color": "#500b74",
      "dims": [
        12,
        3.5,
        3
      ],
      "render": 27
    },
    "nutrition": {
      "name": "منطقة التغذية",
      "color": "#d5b200",
      "dims": [
        13.5,
        3.5,
        2.6
      ],
      "render": 28
    },
    "challenge": {
      "name": "منطقة التحديات",
      "color": "#008c65",
      "dims": [
        8.5,
        4,
        4
      ],
      "render": 29
    },
    "photo": {
      "name": "الفوتوبوث",
      "color": "#36976b",
      "dims": [
        6,
        3,
        3
      ],
      "render": 3
    }
  },
  "items": [
    {
      "id": "G01",
      "type": "gate",
      "name": "بوابة البداية",
      "m": 0,
      "side": 0,
      "zone": "arrival",
      "render": 14,
      "dims": [
        7,
        5.2,
        3.5
      ],
      "color": "#008056"
    },
    {
      "id": "G02",
      "type": "gate",
      "name": "بوابة النهاية",
      "m": 1000,
      "side": 0,
      "zone": "finish",
      "render": 8,
      "dims": [
        7,
        5.2,
        3.5
      ],
      "color": "#008056"
    },
    {
      "id": "R01",
      "type": "reception",
      "name": "كونتر استقبال",
      "m": 20,
      "side": 1,
      "zone": "arrival",
      "render": 19,
      "dims": [
        3,
        1.2,
        0.6
      ],
      "color": "#267a56"
    },
    {
      "id": "I01",
      "type": "information",
      "name": "كونتر استعلامات",
      "m": 90,
      "side": -1,
      "zone": "arrival",
      "render": 2,
      "dims": [
        1.2,
        1,
        0.6
      ],
      "color": "#008f7b"
    },
    {
      "id": "M01",
      "type": "media",
      "name": "المركز الإعلامي",
      "m": 880,
      "side": 1,
      "zone": "finish",
      "render": 1,
      "dims": [
        4.3,
        2.8,
        3.3
      ],
      "color": "#500b74"
    },
    {
      "id": "K01",
      "type": "kids",
      "name": "منطقة الأطفال التفاعلية",
      "m": 390,
      "side": -1,
      "zone": "wellness",
      "render": 10,
      "dims": [
        2.5,
        2,
        1.5
      ],
      "color": "#784398"
    },
    {
      "id": "A01",
      "type": "adults",
      "name": "منطقة الكبار التفاعلية",
      "m": 690,
      "side": 1,
      "zone": "challenge",
      "render": 12,
      "dims": [
        3.5,
        2,
        1.6
      ],
      "color": "#146f68"
    },
    {
      "id": "P01",
      "type": "photo",
      "name": "الفوتوبوث",
      "m": 950,
      "side": -1,
      "zone": "finish",
      "render": 3,
      "dims": [
        6,
        3,
        3
      ],
      "color": "#36976b"
    },
    {
      "id": "W01",
      "type": "prevention",
      "name": "مركز الوقاية",
      "m": 150,
      "side": 1,
      "zone": "prevention",
      "render": 25,
      "dims": [
        9,
        3.5,
        4
      ],
      "color": "#00a991"
    },
    {
      "id": "W02",
      "type": "fitness",
      "name": "مساحة اللياقة",
      "m": 300,
      "side": -1,
      "zone": "fitness",
      "render": 26,
      "dims": [
        12,
        4,
        2.6
      ],
      "color": "#a4ce43"
    },
    {
      "id": "W03",
      "type": "wellness",
      "name": "واحة الصحة النفسية والنوم",
      "m": 450,
      "side": 1,
      "zone": "wellness",
      "render": 27,
      "dims": [
        12,
        3.5,
        3
      ],
      "color": "#500b74"
    },
    {
      "id": "W04",
      "type": "nutrition",
      "name": "منطقة التغذية",
      "m": 600,
      "side": -1,
      "zone": "nutrition",
      "render": 28,
      "dims": [
        13.5,
        3.5,
        2.6
      ],
      "color": "#d5b200"
    },
    {
      "id": "W05",
      "type": "challenge",
      "name": "منطقة التحديات",
      "m": 750,
      "side": 1,
      "zone": "challenge",
      "render": 29,
      "dims": [
        8.5,
        4,
        4
      ],
      "color": "#008c65"
    },
    {
      "id": "D01",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 60,
      "side": -1,
      "zone": "arrival",
      "render": 6,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S01",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 40,
      "side": 0,
      "zone": "arrival",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F01",
      "type": "flag",
      "name": "علم المسار",
      "m": 25,
      "side": -1,
      "zone": "arrival",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F02",
      "type": "flag",
      "name": "علم المسار",
      "m": 75,
      "side": 1,
      "zone": "arrival",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "D02",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 195,
      "side": 1,
      "zone": "prevention",
      "render": 15,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S02",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 125,
      "side": 0,
      "zone": "prevention",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F03",
      "type": "flag",
      "name": "علم المسار",
      "m": 125,
      "side": -1,
      "zone": "prevention",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F04",
      "type": "flag",
      "name": "علم المسار",
      "m": 175,
      "side": 1,
      "zone": "prevention",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "D03",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 265,
      "side": -1,
      "zone": "fitness",
      "render": 16,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S03",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 225,
      "side": 0,
      "zone": "fitness",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F05",
      "type": "flag",
      "name": "علم المسار",
      "m": 225,
      "side": -1,
      "zone": "fitness",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F06",
      "type": "flag",
      "name": "علم المسار",
      "m": 275,
      "side": 1,
      "zone": "fitness",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "D04",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 365,
      "side": 1,
      "zone": "fitness",
      "render": 17,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S04",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 340,
      "side": 0,
      "zone": "fitness",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F07",
      "type": "flag",
      "name": "علم المسار",
      "m": 325,
      "side": -1,
      "zone": "fitness",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F08",
      "type": "flag",
      "name": "علم المسار",
      "m": 375,
      "side": 1,
      "zone": "wellness",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "D05",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 505,
      "side": -1,
      "zone": "wellness",
      "render": 6,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S05",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 425,
      "side": 0,
      "zone": "wellness",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F09",
      "type": "flag",
      "name": "علم المسار",
      "m": 425,
      "side": -1,
      "zone": "wellness",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F10",
      "type": "flag",
      "name": "علم المسار",
      "m": 475,
      "side": 1,
      "zone": "wellness",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "D06",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 565,
      "side": 1,
      "zone": "nutrition",
      "render": 15,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S06",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 530,
      "side": 0,
      "zone": "nutrition",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F11",
      "type": "flag",
      "name": "علم المسار",
      "m": 525,
      "side": -1,
      "zone": "nutrition",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F12",
      "type": "flag",
      "name": "علم المسار",
      "m": 575,
      "side": 1,
      "zone": "nutrition",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "D07",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 655,
      "side": -1,
      "zone": "nutrition",
      "render": 16,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S07",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 625,
      "side": 0,
      "zone": "nutrition",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F13",
      "type": "flag",
      "name": "علم المسار",
      "m": 625,
      "side": -1,
      "zone": "nutrition",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F14",
      "type": "flag",
      "name": "علم المسار",
      "m": 675,
      "side": 1,
      "zone": "challenge",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "D08",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 805,
      "side": 1,
      "zone": "challenge",
      "render": 17,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S08",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 720,
      "side": 0,
      "zone": "challenge",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F15",
      "type": "flag",
      "name": "علم المسار",
      "m": 725,
      "side": -1,
      "zone": "challenge",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F16",
      "type": "flag",
      "name": "علم المسار",
      "m": 775,
      "side": 1,
      "zone": "challenge",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "D09",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 865,
      "side": -1,
      "zone": "finish",
      "render": 6,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S09",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 835,
      "side": 0,
      "zone": "finish",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F17",
      "type": "flag",
      "name": "علم المسار",
      "m": 825,
      "side": -1,
      "zone": "finish",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F18",
      "type": "flag",
      "name": "علم المسار",
      "m": 875,
      "side": 1,
      "zone": "finish",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "D10",
      "type": "decoration",
      "name": "مظهر جمالي",
      "m": 925,
      "side": 1,
      "zone": "finish",
      "render": 15,
      "dims": [
        2,
        1.2,
        0.25
      ],
      "color": "#8eb53c"
    },
    {
      "id": "S10",
      "type": "sticker",
      "name": "ستيكر أرضي",
      "m": 980,
      "side": 0,
      "zone": "finish",
      "render": 24,
      "dims": null,
      "color": "#c8a600"
    },
    {
      "id": "F19",
      "type": "flag",
      "name": "علم المسار",
      "m": 925,
      "side": -1,
      "zone": "finish",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "F20",
      "type": "flag",
      "name": "علم المسار",
      "m": 975,
      "side": 1,
      "zone": "finish",
      "render": 21,
      "dims": null,
      "color": "#02a68e"
    },
    {
      "id": "N01",
      "type": "sign",
      "name": "لوحة إرشادية",
      "m": 35,
      "side": -1,
      "zone": "arrival",
      "render": 20,
      "dims": [
        1.2,
        1.8,
        0.2
      ],
      "color": "#466449"
    },
    {
      "id": "N02",
      "type": "sign",
      "name": "لوحة إرشادية",
      "m": 270,
      "side": -1,
      "zone": "fitness",
      "render": 20,
      "dims": [
        1.2,
        1.8,
        0.2
      ],
      "color": "#466449"
    },
    {
      "id": "N03",
      "type": "sign",
      "name": "لوحة إرشادية",
      "m": 580,
      "side": -1,
      "zone": "nutrition",
      "render": 20,
      "dims": [
        1.2,
        1.8,
        0.2
      ],
      "color": "#466449"
    },
    {
      "id": "N04",
      "type": "sign",
      "name": "لوحة إرشادية",
      "m": 820,
      "side": -1,
      "zone": "challenge",
      "render": 20,
      "dims": [
        1.2,
        1.8,
        0.2
      ],
      "color": "#466449"
    }
  ],
  "meta": {
    "length": 1000,
    "width": 5,
    "direction": "B → A",
    "note": "توزيع مقترح مبني على المرجع البصري؛ تُطابق حدود الزراعة والمعابر في الموقع قبل التنفيذ.",
    "flags": "٢٠ علما مقترحا؛ مقاس القاعدة غير وارد في ملف المقاسات.",
    "stickers": "١٠ ستيكرات مقترحة؛ المقاس غير وارد في ملف المقاسات.",
    "revision": 2
  }
};
