// Formula is fictional
// Ingredient names come from https://tide.com/en-us/ingredients/tide-detergent-ingredients-a-to-z
// TODO: Data represents EDGES only. No way to determine node specs
const data = [
  {
    parent:
      "Acrylamide - Methylacrylamideopropyltrimethyl ammonium chloride copolymer",
    child: "Alcohol",
    isDependent: true,
    category: "Process aid",
    KL: 0.5318,
    relative: 0.9762,
  },
  {
    parent: "Bentonite",
    child: "Benzisothiazolinone",
    isDependent: false,
    category: "Process aid",
    KL: 0.5241,
    relative: 0.962,
  },
  {
    parent: "Sodium C10-16 alkylbenzene sulfonate",
    child: "C10-16 alkyldimethylamine oxide",
    isDependent: false,
    category: "Process aid",
    KL: 0.4982,
    relative: 0.9145,
  },
  {
    parent: "Alcohol",
    child: "C12-16 Pareth",
    isDependent: false,
    category: "Process aid",
    KL: 0.4902,
    relative: 0.8998,
  },
  {
    parent: "Bentonite",
    child: "C14-15 Pareth",
    isDependent: false,
    category: "Process aid",
    KL: 0.4531,
    relative: 0.8318,
  },
  {
    parent: "C10-16 Pareth",
    child: "Calcium chloride",
    isDependent: false,
    category: "Surfactant",
    KL: 0.4515,
    relative: 0.8288,
  },
  {
    parent: "Denatonium benzoate",
    child:
      "Acrylamide - Methylacrylamideopropyltrimethyl ammonium chloride copolymer",
    isDependent: false,
    category: "Bittering agent",
    KL: 0.4222,
    relative: 0.7749,
  },
  {
    parent: "Calcium chloride",
    child: "C10-16 alkyldimethylamine oxide",
    isDependent: false,
    category: "Process aid",
    KL: 0.4023,
    relative: 0.7384,
  },
  {
    parent: "Sodium C10-16 alkylbenzene sulfonate",
    child: "Dipropylene glycol",
    isDependent: false,
    category: "Process aid",
    KL: 0.401,
    relative: 0.736,
  },
  {
    parent: "C12-16 Pareth",
    child: "Disodium distyrylbiphenyl disulfonate",
    isDependent: false,
    category: "Surfactant",
    KL: 0.3989,
    relative: 0.7322,
  },
  {
    parent: "Ethanolamine",
    child: "Ethanolamine citrate",
    isDependent: false,
    category: "Process aid",
    KL: 0.388,
    relative: 0.7122,
  },
  {
    parent: "Bentonite",
    child: "Ethanolamine laurate",
    isDependent: false,
    category: "Process aid",
    KL: 0.3844,
    relative: 0.7056,
  },
  {
    parent: "Ethanolamine myristate",
    child: "Ethanolamine palmitate",
    isDependent: false,
    category: "Wash Aid",
    KL: 0.3833,
    relative: 0.7036,
  },
  {
    parent: "Ethanolamine palmitate",
    child: "Denatonium benzoate",
    isDependent: false,
    category: "Wash Aid",
    KL: 0.3761,
    relative: 0.6903,
  },
  {
    parent: "Denatonium benzoate",
    child: "Ethanolamine",
    isDependent: false,
    category: "Bittering agent",
    KL: 0.3677,
    relative: 0.6749,
  },
  {
    parent: "Ethanolamine",
    child: "Ethanolamine oleate",
    isDependent: false,
    category: "Process aid",
    KL: 0.3481,
    relative: 0.6389,
  },
  {
    parent: "Ethanolamine citrate",
    child: "Ethanolamine stearate",
    isDependent: false,
    category: "Wash Aid",
    KL: 0.3442,
    relative: 0.6318,
  },
  {
    parent:
      "Acrylamide - Methylacrylamideopropyltrimethyl ammonium chloride copolymer",
    child: "Fatty acids, C16-18 and C18-unsatd",
    isDependent: false,
    category: "Process aid",
    KL: 0.3428,
    relative: 0.6292,
  },
  {
    parent: "Fatty acids, salts",
    child: "Ethanolamine laurate",
    isDependent: false,
    category: "Surfactant",
    KL: 0.3373,
    relative: 0.6192,
  },
  {
    parent: "Hydrogenated castor oil",
    child: "Ethanolamine oleate",
    isDependent: false,
    category: "Process aid",
    KL: 0.3254,
    relative: 0.5972,
  },
  {
    parent: "Denatonium benzoate",
    child: "Lipase",
    isDependent: false,
    category: "Bittering agent",
    KL: 0.3221,
    relative: 0.5912,
  },
  {
    parent:
      "Acrylamide - Methylacrylamideopropyltrimethyl ammonium chloride copolymer",
    child: "Calcium chloride",
    isDependent: false,
    category: "Process aid",
    KL: 0.322,
    relative: 0.591,
  },
  {
    parent: "Mannanase",
    child: "Organosilicone copolymer",
    isDependent: false,
    category: "Enzyme",
    KL: 0.3215,
    relative: 0.5901,
  },
  {
    parent: "Mannanase",
    child: "Palmitic acid",
    isDependent: false,
    category: "Enzyme",
    KL: 0.3215,
    relative: 0.5901,
  },
  {
    parent: "Alcohol",
    child: "Pectic lyase",
    isDependent: false,
    category: "Process aid",
    KL: 0.3165,
    relative: 0.581,
  },
  {
    parent: "Alcohol",
    child: "Modified Cellulose",
    isDependent: false,
    category: "Process aid",
    KL: 0.3158,
    relative: 0.5797,
  },
  {
    parent: "Ethanolamine citrate",
    child: "C10-16 Pareth",
    isDependent: false,
    category: "Wash Aid",
    KL: 0.3137,
    relative: 0.5759,
  },
  {
    parent: "Alcohol",
    child: "Sodium C10-16 alkylbenzene sulfonate",
    isDependent: false,
    category: "Process aid",
    KL: 0.3135,
    relative: 0.5754,
  },
  {
    parent: "Alcohol",
    child: "Hydrogenated castor oil",
    isDependent: false,
    category: "Process aid",
    KL: 0.3039,
    relative: 0.5578,
  },
  {
    parent: "Ethanolamine myristate",
    child: "Methoxypolyoxymethylene melamine",
    isDependent: false,
    category: "Wash Aid",
    KL: 0.3008,
    relative: 0.5521,
  },
  {
    parent: "Methoxypolyoxymethylene melamine",
    child: "PEG-136 polyvinyl alcohol",
    isDependent: false,
    category: "Polymer",
    KL: 0.2953,
    relative: 0.5421,
  },
  {
    parent: "Methoxypolyoxymethylene melamine",
    child: "PEG",
    isDependent: false,
    category: "Polymer",
    KL: 0.2953,
    relative: 0.5421,
  },
  {
    parent: "C14-15 Pareth",
    child: "Polyethyleneimine, alkoxylated",
    isDependent: false,
    category: "Surfactant",
    KL: 0.538,
    relative: 1.26,
  },
  {
    parent: "Bentonite",
    child: "Polyvinyl alcohol polymer",
    isDependent: false,
    category: "Process aid",
    KL: 0.2921,
    relative: 0.5361,
  },
  {
    parent: "TARGET",
    child: "C10-16 alkyldimethylamine oxide",
    isDependent: false,
    category: "Polymer",
    KL: 0.2872,
    relative: 0.5272,
  },
  {
    parent: "C10-16 Pareth",
    child:
      "Acrylamide - Methylacrylamideopropyltrimethyl ammonium chloride copolymer",
    isDependent: false,
    category: "Surfactant",
    KL: 0.2813,
    relative: 0.5163,
  },
  {
    parent: "Denatonium benzoate",
    child: "Propylene glycol",
    isDependent: false,
    category: "Bittering agent",
    KL: 0.2789,
    relative: 0.5119,
  },
  {
    parent: "Calcium chloride",
    child: "Siloxanes and silicones",
    isDependent: false,
    category: "Process aid",
    KL: 0.2704,
    relative: 0.4964,
  },
  {
    parent: "Ethanolamine stearate",
    child: "Simethicone",
    isDependent: false,
    category: "Wash Aid",
    KL: 0.2634,
    relative: 0.4834,
  },
  {
    parent: "Sodium bisulfite",
    child: "Sodium borate",
    isDependent: false,
    category: "Process aid",
    KL: 0.26,
    relative: 0.4772,
  },
  {
    parent: "Sodium bisulfite",
    child: "Fluorescent brightener",
    isDependent: false,
    category: "Process aid",
    KL: 0.26,
    relative: 0.4772,
  },
  {
    parent: "Sodium bisulfite",
    child: "Fragrance, Perfume",
    isDependent: false,
    category: "Process aid",
    KL: 0.26,
    relative: 0.4772,
  },
  {
    parent: "Polyvinyl alcohol polymer",
    child: "Glycerine",
    isDependent: false,
    category: "Film",
    KL: 0.2586,
    relative: 0.4746,
  },
  {
    parent: "Fatty acids, C16-18 and C18-unsatd",
    child: "Mannanase",
    isDependent: false,
    category: "Wash Aid",
    KL: 0.2496,
    relative: 0.4582,
  },
  {
    parent: "Protease",
    child: "Sodium Aluminosilicate",
    isDependent: false,
    category: "Enzyme",
    KL: 0.2455,
    relative: 0.4507,
  },
  {
    parent: "Protease",
    child: "Phenylpropylethyl methicone",
    isDependent: false,
    category: "Enzyme",
    KL: 0.2455,
    relative: 0.4507,
  },
  {
    parent: "Protease",
    child: "Polyethyleneimine ethoxylate",
    isDependent: false,
    category: "Enzyme",
    KL: 0.2455,
    relative: 0.4507,
  },
  {
    parent: "Propylene glycol",
    child: "Monoethanolamine (MEA)-citrate",
    isDependent: false,
    category: "Process Aid",
    KL: 0.2418,
    relative: 0.4438,
  },
  {
    parent: "C10-16 Pareth",
    child: "Dimethicone",
    isDependent: false,
    category: "Surfactant",
    KL: 0.2383,
    relative: 0.4375,
  },
  {
    parent: "Alcohol",
    child: "Diethylenetriamine pentaacetate",
    isDependent: false,
    category: "Process aid",
    KL: 0.2366,
    relative: 0.4343,
  },
  {
    parent: "TARGET",
    child: "Ethanolamine myristate",
    isDependent: false,
    category: "Polymer",
    KL: 0.2294,
    relative: 0.4211,
  },
  {
    parent: "MEA-LAS",
    child: "Diethylene glycol",
    isDependent: false,
    category: "Surfactant",
    KL: 0.2243,
    relative: 0.4118,
  },
  {
    parent: "PEG",
    child: "MEA-LAS",
    isDependent: false,
    category: "Process aid",
    KL: 0.2243,
    relative: 0.4118,
  },
  {
    parent: "Modified Cellulose",
    child: "MEA-laureth sulfate",
    isDependent: false,
    category: "Polymer",
    KL: 0.2212,
    relative: 0.406,
  },
  {
    parent: "MEA-laureth sulfate",
    child: "Alcohol ethoxylates",
    isDependent: false,
    category: "Surfactant",
    KL: 0.2207,
    relative: 0.4051,
  },
  {
    parent: "MEA-laureth sulfate",
    child: "Sodium bisulfite",
    isDependent: false,
    category: "Surfactant",
    KL: 0.2207,
    relative: 0.4051,
  },
  {
    parent: "MEA-laureth sulfate",
    child: "Alcohol ethoxy sulfate",
    isDependent: false,
    category: "Surfactant",
    KL: 0.2202,
    relative: 0.4042,
  },
  {
    parent: "MEA-laureth sulfate",
    child: "Amylase",
    isDependent: false,
    category: "Surfactant",
    KL: 0.2202,
    relative: 0.4042,
  },
  {
    parent: "TARGET",
    child: "Sodium C10-16 alkylbenzene sulfonate",
    isDependent: false,
    category: "Polymer",
    KL: 0.2192,
    relative: 0.4024,
  },
  {
    parent: "Propylene glycol",
    child: "Calcium formate",
    isDependent: false,
    category: "Process Aid",
    KL: 0.2172,
    relative: 0.3986,
  },
  {
    parent: "Diethylene glycol",
    child: "Cellulase enzyme",
    isDependent: false,
    category: "Process aid",
    KL: 0.2166,
    relative: 0.3975,
  },
  {
    parent: "Ethanolamine citrate",
    child: "Protease",
    isDependent: false,
    category: "Wash Aid",
    KL: 0.2083,
    relative: 0.3824,
  },
  {
    parent: "C14-15 Pareth",
    child: "Colorants (Liquitint Blue AH, Blue 1)",
    isDependent: false,
    category: "Surfactant",
    KL: 0.1953,
    relative: 0.3585,
  },
  {
    parent: "Bentonite",
    child: "Modified Cellulose",
    isDependent: false,
    category: "Process aid",
    KL: 0.1953,
    relative: 0.3585,
  },
];

const colors = new Map([
  ["Process aid", "#EA291F"],
  ["Surfactant", "#F99236"],
  ["Bittering agent", "#FFC233"],
  ["Wash Aid", "#29A366"],
  ["Enzyme", "#15DEF4"],
  ["Polymer", "#006EFF"],
  ["Film", "#2E4552"],
  ["Process Aid", "#6D2269"],
]);
let edges = [];
let nodes = new Map();

const max_size = 75;
const min_size = 5;

for (e of data) {
  const parentNode = {
    data: {
      id: e.parent,
      name: e.parent,
      label: e.parent,
      size: Math.floor(e.KL * (max_size - min_size) + min_size),
      // edgeSize: Math.floor(data.get(x).relative * (60 - 20) + 20),
      categoryColor: colors.get(e.category),
    },
  };

  if (e.isDependent) {
    parentNode.renderedPosition = {
      x: 100,
      y: 300,
    };
  }
  nodes.set(e.parent, parentNode);

  if (!nodes.get(e.child)) {
    let child = {
      data: {
        id: e.child,
        name: e.child,
        label: e.child,
        size: Math.floor(e.KL * (max_size - min_size) + min_size),
        categoryColor: colors.get(e.category),
      },
    };
    nodes.set(e.child, child);
  }

  //Edges
  edges.push({
    data: { source: e.parent, target: e.child },
    classes: "bezier",
  });
}

const elms = [...Array.from(nodes.values()), ...edges];

const drawIt = (layoutName) => {
  window.cy = cytoscape({
    container: document.getElementById("cy"),

    boxSelectionEnabled: false,
    autounselectify: true,
    minDist: 25,
    // maxExpandIterations: 9,
    padding: 10,
    animate: false,

    layout: {
      name: layoutName,
      concentric: function (node) {
        // debugger;
        return Math.floor(node.data().size / 2);
      },
      levelWidth: function (nodes) {
        return 4;
      },
      transform: function (node, position) {
        if (node.data().name.toLowerCase() === "target") {
          return { x: 500, y: 500 };
        }
        if (node.data().name === "Polyethyleneimine ethoxylate") {
          position.y += 90;
        }
        return position;
      },
      minNodeSpacing: 50,
      // minDist: 100,
      // nodeSeparation: 100,
      // idealEdgeLength: 50,
    },

    style: [
      {
        selector: "node",
        style: {
          height: "data(size)",
          width: "data(size)",
          // "background-color": "#a8eae5",
          "background-color": "data(categoryColor)",
          color: "#FFF",
          // "text-outline-width": 1,
          label: "data(name)",
          "font-size": "10px",
          // "text-valign": "center",
          // "text-halign": "center",
        },
      },

      // {
      //   selector: "edge",
      //   style: {
      //     "curve-style": "haystack",
      //     "haystack-radius": 0,
      //     width: 5,
      //     opacity: 0.5,
      //     "line-color": "#f2f08c",
      //   },
      // },
      {
        selector: "edge",
        style: {
          width: 1,
          "curve-style": "bezier",
          // "control-point-step-size": 40,
          // "control-point-distances": 12,
          // "control-point-weights": 0.1,
          // "line-color": "#37434aff",
          "line-color": "#FFF",
          opacity: 0.5,
        },
      },
      // {
      //   selector: "edge[arrow]",
      //   style: {
      //     "target-arrow-shape": "data(arrow)",
      //   },
      // },
      {
        selector: "edge",
        style: {
          // "target-arrow-shape": "vee",
          "target-arrow-color": "#a8eae5",
        },
      },
    ],

    elements: elms,
  });
};

drawIt("cose");

var onChoose = (name) => {
  drawIt(name);
};
