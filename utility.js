const data = [
  ["A1", "A2", false, , 0.5318, 0.9762, 2.28, 0.4709, , 0.503],
  ["B1", "B2", false, , 0.5241, 0.962, 2.25, 0.5316, 38.85, 0.889],
  ["Z1", "C1", false, , 0.4982, 0.9145, 2.14, 0.1383, 90.3, 0.3346],
  ["A2", "D1", false, , 0.4902, 0.8998, 2.1, 0.4233, 11.92, 0.3083],
  ["B1", "E1", false, , 0.4531, 0.8318, 1.94, 0.435, 42.16, 0.7226],
  ["F1", "F2", false, , 0.4515, 0.8288, 1.94, 0.2509, 75.07, 0.471],
  ["G1", "A1", false, , 0.4222, 0.7749, 1.81, 0.2602, 22.22, 0.3865],
  ["F2", "C1", false, , 0.4023, 0.7384, 1.72, 0.1351, 20.41, 0.0495],
  ["Z1", "H1", false, , 0.401, 0.736, 1.72, 0.3408, 12.23, 0.5599],
  ["D1", "H2", false, , 0.3989, 0.7322, 1.71, 0.3263, 26.86, 0.1853],
  ["H3", "H4", false, , 0.388, 0.7122, 1.66, 0.3607, 37.8, 0.5144],
  ["B1", "I1", false, , 0.3844, 0.7056, 1.65, 0.2703, 42.32, 0.6369],
  ["J1", "J2", false, , 0.3833, 0.7036, 1.64, 0.4653, 39.57, 0.678],
  ["J2", "G1", false, , 0.3761, 0.6903, 1.61, 0.4695, 68.98, 0.6765],
  ["G1", "H3", false, , 0.3677, 0.6749, 1.58, 0.2507, 55.13, 0.2432],
  ["H3", "J3", false, , 0.3481, 0.6389, 1.49, 0.2685, 22.99, 0.2299],
  ["H4", "K1", false, , 0.3442, 0.6318, 1.48, 0.2942, 29.1, 0.7008],
  ["A1", "K2", false, , 0.3428, 0.6292, 1.47, 0.2896, 52.1, 0.5664],
  ["L1", "I1", false, , 0.3373, 0.6192, 1.45, 0.2154, 27.35, 0.2328],
  ["M1", "J3", false, , 0.3254, 0.5972, 1.39, 0.2365, 27.23, 0.5548],
  ["G1", "M2", false, , 0.3221, 0.5912, 1.38, 0.2456, 31.66, 0.4305],
  ["A1", "F2", false, , 0.322, 0.591, 1.38, 0.0953, 24.96, 0.2679],
  ["N1", "O1", false, , 0.3215, 0.5901, 1.38, 0.4484, 8.15, 0.9991],
  ["N1", "P1", false, , 0.3215, 0.5901, 1.38, 0.4484, 99.67, 0.9991],
  ["A2", "Q1", false, , 0.3165, 0.581, 1.36, 0.3067, 99.67, 0.6487],
  ["A2", "N3", false, , 0.3158, 0.5797, 1.35, 0.2593, 36.85, 0.4776],
  ["H4", "F1", false, , 0.3137, 0.5759, 1.34, 0.2197, 29.0, -0.4319],
  ["A2", "Z1", false, , 0.3135, 0.5754, 1.34, 0.2286, 22.82, 0.5164],
  ["A2", "M1", false, , 0.3039, 0.5578, 1.3, 0.237, 20.86, 0.6909],
  ["J1", "N2", false, , 0.3008, 0.5521, 1.29, 0.3861, 28.24, 0.8671],
  ["N2", "R1", false, , 0.2953, 0.5421, 1.27, 0.3744, 63.44, 0.7979],
  ["N2", "S1", false, , 0.2953, 0.5421, 1.27, 0.3744, 80.7, 0.8134],
  ["E1", "T1", false, , 0.538, 1.26, 0.2848, 80.7, 0.8725],
  ["B1", "U1", false, , 0.2921, 0.5361, 1.25, 0.2699, 66.77, 0.5904],
  ["V1", "C1", false, , 0.2872, 0.5272, 1.23, 0.0376, 53.21, -0.1776],
  ["F1", "A1", false, , 0.2813, 0.5163, 1.21, 0.0912, 3.28, 0.0406],
  ["G1", "W1", false, , 0.2789, 0.5119, 1.2, 0.3786, 6.96, 0.5915],
  ["F2", "X1", false, , 0.2704, 0.4964, 1.16, 0.2405, 47.19, -0.3793],
  ["K1", "X2", false, , 0.2634, 0.4834, 1.13, 0.2929, 28.4, 0.9252],
  ["Y1", "Y2", false, , 0.26, 0.4772, 1.11, 0.2805, 81.94, 0.986],
  ["Y1", "L2", false, , 0.26, 0.4772, 1.11, 0.2805, 99.3, 0.9847],
  ["Y1", "L3", false, , 0.26, 0.4772, 1.11, 0.2805, 99.3, 0.9848],
  ["U1", "L4", false, , 0.2586, 0.4746, 1.11, 0.2847, 99.3, 0.9054],
  ["K2", "N1", false, , 0.2496, 0.4582, 1.07, 0.2171, 75.34, 0.4551],
  ["W2", "X3", false, , 0.2455, 0.4507, 1.05, 0.2929, 35.6, 0.996],
  ["W2", "S2", false, , 0.2455, 0.4507, 1.05, 0.2929, 92.42, 1],
  ["W2", "S3", false, , 0.2455, 0.4507, 1.05, 0.2929, 100.0, 1],
  ["W1", "N4", false, , 0.2418, 0.4438, 1.04, 0.2723, 100.0, 0.7896],
  ["F1", "G4", false, , 0.2383, 0.4375, 1.02, 0.1754, 63.41, -0.0675],
  ["A2", "G3", false, , 0.2366, 0.4343, 1.01, 0.2268, 17.74, 0.4637],
  ["V1", "J1", false, , 0.2294, 0.4211, 0.98, 0.2294, 35.16, -0.1547],
  ["N5", "G2", false, , 0.2243, 0.4118, 0.96, 0.2929, 25.47, 0.9986],
  ["S1", "N5", false, , 0.2243, 0.4118, 0.96, 0.2929, 92.42, 0.8861],
  ["N3", "N6", false, , 0.2212, 0.406, 0.95, 0.2395, 81.94, 0.9181],
  ["N6", "A3", false, , 0.2207, 0.4051, 0.95, 0.221, 56.5, 0.7753],
  ["N6", "Y1", false, , 0.2207, 0.4051, 0.95, 0.2414, 77.19, 0.9451],
  ["N6", "A4", false, , 0.2202, 0.4042, 0.94, 0.2406, 92.06, 0.9975],
  ["N6", "A5", false, , 0.2202, 0.4042, 0.94, 0.2406, 99.1, 0.9975],
  ["V1", "Z1", false, , 0.2192, 0.4024, 0.94, 0.1343, 99.1, 0.0141],
  ["W1", "F4", false, , 0.2172, 0.3986, 0.93, 0.2479, 12.26, 0.7699],
  ["G2", "F5", false, , 0.2166, 0.3975, 0.93, 0.2195, 67.91, 0.8786],
  ["H4", "W2", false, , 0.2083, 0.3824, 0.89, 0.201, 75.28, 0.6504],
  ["E1", "F6", false, , 0.1953, 0.3585, 0.84, 0.1996, 43.43, 0.4145],
  ["B1", "N3", false, , 0.1953, 0.3585, 0.84, 0.1996, 43.43, 0.4145],
];

const formatted = new Map([
  [
    "A1",
    {
      replace:
        "Acrylamide - Methylacrylamideopropyltrimethyl ammonium chloride copolymer",
      category: "Process aid",
    },
  ],
  ["A2", { replace: "Alcohol", category: "Process aid" }],
  ["A3", { replace: "Alcohol ethoxylates", category: "Surfactant" }],
  ["A4", { replace: "Alcohol ethoxy sulfate", category: "Surfactant" }],
  ["A5", { replace: "Amylase", category: "Enzyme" }],
  ["B1", { replace: "Bentonite", category: "Process aid" }],
  ["B2", { replace: "Benzisothiazolinone", category: "Preservative" }],
  [
    "C1",
    { replace: "C10-16 alkyldimethylamine oxide", category: "Surfactant" },
  ],
  ["D1", { replace: "C12-16 Pareth", category: "Surfactant" }],
  ["E1", { replace: "C14-15 Pareth", category: "Surfactant" }],
  ["F1", { replace: "C10-16 Pareth", category: "Surfactant" }],
  ["F2", { replace: "Calcium chloride", category: "Process aid" }],
  ["F4", { replace: "Calcium formate", category: "Stabilizer" }],
  ["F5", { replace: "Cellulase enzyme", category: "Enzyme" }],
  [
    "F6",
    {
      replace: "Colorants (Liquitint Blue AH, Blue 1)",
      category: "Aesthetics",
    },
  ],
  ["G1", { replace: "Denatonium benzoate", category: "Bittering agent" }],
  ["G2", { replace: "Diethylene glycol", category: "Process aid" }],
  [
    "G3",
    { replace: "Diethylenetriamine pentaacetate", category: "Sodium salt" },
  ],
  ["G4", { replace: "Dimethicone", category: "Process aid" }],
  ["H1", { replace: "Dipropylene glycol", category: "Solvent" }],
  [
    "H2",
    {
      replace: "Disodium distyrylbiphenyl disulfonate",
      category: "Brightener",
    },
  ],
  ["H3", { replace: "Ethanolamine", category: "Process aid" }],
  ["H4", { replace: "Ethanolamine citrate", category: "Wash Aid" }],
  ["I1", { replace: "Ethanolamine laurate", category: "Wash Aid" }],
  ["J1", { replace: "Ethanolamine myristate", category: "Wash Aid" }],
  ["J2", { replace: "Ethanolamine palmitate", category: "Wash Aid" }],
  ["J3", { replace: "Ethanolamine oleate", category: "Wash Aid" }],
  ["K1", { replace: "Ethanolamine stearate", category: "Wash Aid" }],
  [
    "K2",
    { replace: "Fatty acids, C16-18 and C18-unsatd", category: "Wash Aid" },
  ],
  ["L1", { replace: "Fatty acids, salts", category: "Surfactant" }],
  ["L2", { replace: "Fluorescent brightener", category: "Brightener" }],
  ["L3", { replace: "Fragrance, Perfume", category: "Scent" }],
  ["L4", { replace: "Glycerine", category: "Process aid" }],
  ["M1", { replace: "Hydrogenated castor oil", category: "Process aid" }],
  ["M2", { replace: "Lipase", category: "Enzyme" }],
  ["N1", { replace: "Mannanase", category: "Enzyme" }],
  ["N2", { replace: "Methoxypolyoxymethylene melamine", category: "Polymer" }],
  ["N3", { replace: "Modified Cellulose", category: "Polymer" }],
  ["N4", { replace: "Monoethanolamine (MEA)-citrate", category: "Surfactant" }],
  ["N5", { replace: "MEA-LAS", category: "Surfactant" }],
  ["N6", { replace: "MEA-laureth sulfate", category: "Surfactant" }],
  ["O1", { replace: "Organosilicone copolymer", category: "Process aid" }],
  ["P1", { replace: "Palmitic acid", category: "Wash Aid" }],
  ["Q1", { replace: "Pectic lyase", category: "Enzyme" }],
  ["R1", { replace: "PEG-136 polyvinyl alcohol", category: "Polymer" }],
  ["S1", { replace: "PEG", category: "Process aid" }],
  ["S2", { replace: "Phenylpropylethyl methicone", category: "Process aid" }],
  ["S3", { replace: "Polyethyleneimine ethoxylate", category: "Polymer" }],
  ["T1", { replace: "Polyethyleneimine, alkoxylated", category: "Polymer" }],
  ["U1", { replace: "Polyvinyl alcohol polymer", category: "Film" }],
  ["V1", { replace: "Propoxylated ethoxylated amine", category: "Polymer" }],
  ["W1", { replace: "Propylene glycol", category: "Process Aid" }],
  ["W2", { replace: "Protease", category: "Enzyme" }],
  ["X1", { replace: "Siloxanes and silicones", category: "Process aid" }],
  ["X2", { replace: "Simethicone", category: "Process aid" }],
  ["X3", { replace: "Sodium Aluminosilicate", category: "Process aid" }],
  ["Y1", { replace: "Sodium bisulfite", category: "Process aid" }],
  ["Y2", { replace: "Sodium borate", category: "Process aid" }],
  [
    "Z1",
    {
      replace: "Sodium C10-16 alkylbenzene sulfonate",
      category: "Process aid",
    },
  ],
]);

const colors = new Map([
  ["Process aid", ""],
  ["Surfactant", ""],
  ["Bittering agent", ""],
  ["Wash Aid", ""],
  ["Enzyme", ""],
  ["Polymer", ""],
  ["Film", ""],
  ["Process Aid", ""],
]);

const out = [];

const cat = new Set();

for (i in data) {
  let a = formatted.get(data[i][0]);
  let b = formatted.get(data[i][1]);

  if (!a) {
    console.log(data[i][0]);
  }
  if (!b) {
    console.log(data[i][1]);
  }

  cat.add(a.category);
  //   console.log(`${a.replace}, ${b.replace}`);
  out.push({
    parent: a.replace,
    child: b.replace,
    isDependent: false,
    category: a.category,
    KL: data[i][4],
    relative: data[i][5],
  });
}

console.log(JSON.stringify(out));
