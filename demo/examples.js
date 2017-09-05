examples_main = {
   TH1 : [
     { opt: "", file: "hsimple.root", item: "hpx;1" },
     { opt: "P" },
     { opt: "PO" },
     { name: "star", opt:"*H", title: "draw stars on histogram bins" },
     { opt: "L", title: "draw histogram as line" },
     { name: "LF2", opt:"LF2,fill_blue", title: "draw histogram as line with filled area" },
     { name: "B", opt:"B,fill_red", title: "draw histogram as bar chart" },
     { opt: "A", title: "disables axes draing" },
     { opt: "E" },
     { opt: "E0", title: "draw errors, also for empty bins" },
     { opt: "E1" },
     { opt: "E1X0", title: "draw error markers, without horizontal part" },
     { opt: "pE2" },
     { name: "E3", opt: "e3,fill_red" },
     { name: "E4", opt: "e4,fill_blue" },
     { name: "text", opt: "hist,text" },
     { name: "lego", opt: "lego2,pal50" },
     { opt: "X+Y+" },
     { opt: "inspect", title: "universal object inspector, can be used for any class" },
     { name: "docu", file: "histpainter6.root", layout: "vert32", items: ["two_axis","draw_e1","draw_bar","draw_e34","draw_text"], title:"several TH1 examples from THistPainter documentation" }
   ],
   TH2 : [
     { opt: "", file: "hsimple.root", item: "hpxpy;1" },
     { opt: "col" },
     { opt: "colpal77", title: "example how color palette 77 can be used for drawing" },
     { opt: "colz", title: "color draw with palette" },
     { opt: "acol", title: "disable axes drawing with col option" },
     { opt: "arr", title: "ARR draw option" },
     { opt: "cont", title: "Contor plot" },
     { opt: "cont1", title: "Contor plot with different line colors" },
     { opt: "cont2", title: "Contor plot with different line styles" },
     { opt: "cont3", title: "Contor plot with just lines" },
     { opt: "cont4", title: "Contor plot with background color" },
     { opt: "surf", title: "3D plot with surf option" },
     { opt: "surf1", title: "3D SURF plot with colors levels" },
     { opt: "surf2", title: "3D colored SURF without lines" },
     { opt: "surf3", title: "3D SURF with contour plot on the top" },
     { opt: "surf4", title: "3D SURF with Gouraud shading" },
     { opt: "surf6", title: "Only contour lines in 3D space" },
     { opt: "surf7", title: "3D colored SURF with contours on the top" },
     { opt: "e", title: "3D plot with errors" },
     { opt: "lego", title: "3D lego plot" },
     { opt: "lego0", title: "3D lego plot (without zeros)" },
     { opt: "lego1", title: "3D lego plot with red colors on x-sides" },
     { opt: "lego2", title: "3D lego plot with color levels" },
     { opt: "lego3", title: "lego3 plot - lego1 without border lines" },
     { opt: "lego4", title: "lego4 plot - lego2 without border lines" },
     { opt: "text", title: "draw bins content as text, can be combined with col, box or scat options" },
     { opt: "scat", title: "scatter plot (used as default draw option)" },
     { name: "box", json: "hbox.json.gz", opt: "box", title: "boxes, area proportional to bin content" },
     { name: "box1", json: "hbox.json.gz", opt: "box1", title: "boxes, area proportional to bin content" }
   ],
   TH2Poly : [
      { name: "honeycomb", file: "th2poly.root", item: "honeycomb;1", opt: "l,col" },
      { opt: "lego", file: "th2poly.root", item: "boxes;1" },
      { opt: "col0z", title: "suppress empty bins with 0 option" },
      { name: "europe", item: "europe;1", opt: "", title: "Europe map (relatively old)" },
      { name: "usa", item: "usa;1", opt: "l,col,pal50", title: "USA map" },
      { name: "fibonacci", file: "tutorials_hist.root", item: 'Fibonacci',  title: "Macro outputs from $ROOTSYS/tutorials/hist/Fibonacci.C" }
   ],
   TH3 : [
     { opt: "", file: "histpainter6.root", item: "draw_th3_scat;1" },
     { opt: "box", file: "histpainter6.root", item: "draw_th3_box;1/h3box" },
     { name: "box2", file: "hsimple.root", item: "ntuple", opt: "px:py:pz;hbins:15;drawopt:box2", title: "use colors" },
     { name: "box3", file: "hsimple.root", item: "ntuple", opt: "px:py:pz;hbins:15;drawopt:box3", title: "use colors" },
     { opt: "glbox1", file: "glbox.root", item: "h31;1", title: "draw spheres" },
     { opt: "glbox2", title: "draw spheres with color derived from bin content" },
     { opt: "glcol", file: "histpainter6.root", item: "glvoxel",  title: "draw semi-transparent boxes with color derived from bin content" }
   ],
   TTree : [
      { name: "Draw", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px", title: "Histogram data of TBranch object" },
      { name: "2d", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py", title: "Two-dimensional TTree::Draw" },
      { name: "3d", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py:pz", title: "Three-dimensional TTree::Draw" },
      { name: "dump", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px+py+pz>>dump;num:30", title: "Three-dimensional TTree::Draw" },
      { name: "hist", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py>>hist(50,-5,5,50,-5,5)", title: "TTree::Draw into custom histogram" },
      { name: "cut", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py::pz>5", title: "TTree::Draw with cut condition" },
      { name: "player", asurl: true, file: "hsimple.root", item: "ntuple", opt: "px:py::pz>5;player", title: "Enable player to let change draw expression" },
      { name: "lhcb2", asurl: true, file: "https://root.cern/files/lhcb2.root", item: "E;1//Event/Gen/Header/m_evtNumber", title: "Histogram data of sub-sub-branches from lhcb2.root file" },
      { name: "atlas", asurl: true, file: "https://root.cern/files/atlas30new.root", item: "CollectionTree", opt: "TileMuContainer_p1_TileMuObj.vector.m_phi", title: "Histogram data of tree from atlas30new.root file" },
      { name: "expr", asurl: true, file: "WJets.root", opt: "TMath::Abs(lep1_p4.M())", item: "t", title: "Use of expression and object methods" },
      { name: "vect_expr", asurl: true, file: "WJets.root", item: "t", opt: "jets.M()", title: "Use of expression for objects, stored in the vector" }
   ],
   TProfile : [
     { opt: "", file: "hsimple.root", item: "hprof;1" },
     { opt: "E" },
     { opt: "E1" },
     { opt: "pE2" },
     { opt: "hist" },
     { name: "text", opt: "hist,text" },
     { name: "texte", opt: "hist,texte" }
   ],
   THStack : [
     { opt: "", file: "histpainter6.root", item: "draw_hstack;1", title: "several examples from THistPainter docu" },
     { name: "nostackb", item: "draw_nostackb;1", title: "example of bar chart with stacked histograms" },
     { name: "err", item: "draw_stacke;1", title: "error draw options for stacked histograms" },
     { name: "lego", file: "tutorials_hist.root", item: 'multicolor', title: "Several histograms with different colors, tutorials/hist/multicolor.C" }
   ],
   TF1 : [
     { name: "hist+func", opt: "", url: "?nobrowser&file=$$$fillrandom.root&item=h1f;1+sqroot;1" },
     { name: "canv", opt: "", file: "danilo6.root", item: "canvas;1" },
     { name: "sum", opt: "", file: "tf1new.root", item: "c1;1", title: "newest version of ROOT with new coding rules for the functions parameters" },
     { name: "ff2", file: "ff2.root", item: "c1Dia;1" },
     { name: "ff3", file: "ff3.root", item: "c1Dia;1" }
   ],
   TF2 : [
     { name: "tf2", json: "tf2.json.gz", opt: "nosave", title: "Example of TF2 drawing" },
     { name: "3d", file: "tutorials_graphs.root", item: "annotation3d", title: "Output of tutorials/graphs/annotation3d.C" }
   ],
   TCanvas : [
     { name:"roofit", file: "rf107.root", item: "rf107_plotstyles;1" },
     { name:"subpad", url: "?nobrowser&file=$$$rf107.root&item=rf107_plotstyles;1/[0]", title: "Draw only selected sub-pad from list of TCanvas list of primitives"  },
     { name:"zdemo", file: "zdemo.root", item: "zdemo;1" },
     { name:"legend", asurl: true, file: "legends.root", item: "legends;1", mathjax: true, title: "TCanvas with TLegend, use MathJax.js" },
     { name:"time", file: "ct.root", item: "ct;1" },
     { name:"2d+3d", file: "mix2d3d.root", item: "Canvas;1", title: "Mixture of 2D and 3D drawings on the same canvas (work properly in Firefox and Chrome)" }
   ],
   TGeo : [
     { name:"logo", asurl: true, file: "geom/rootgeom.root", item: "simple1;1", title:"Geometry from rootgeom.C example" },
     { name:"prim", file: "geom/geodemo.root", layout: "vert333", items: ['box','para','arb8','trap','gtra','trd1','trd2','xtru'], opts: ['z','z','z','z','z','z','z','z','z'], title:"Basic TGeo primitives from tutorials/geom/geodemo.C" },
     { name:"prim2", file: "geom/geodemo.root", layout: "vert333", items: ['cone','coneseg','tube','tubeseg','ctub','eltu','pcon','pgon'], opts: ['z','z','z','z','z','z','z','z'], title:"Basic TGeo primitives from tutorials/geom/geodemo.C" },
     { name:"prim3", file: "geom/geodemo.root", layout: "grid3x2", items: ['sphere','torus','parab','hype','comp'], opts: ['z','z','z','z','z'], title:"Basic TGeo primitives from tutorials/geom/geodemo.C" },
     { name:"comp", url: "?nobrowser&file=$$$geom/geodemo.root+&layout=grid2x2&items=[comp;1/Left,comp;1/Right,comp;1,comp;1]&opts=[az,az,comp_az,az]", title:"Components of composite shape" },
     { name:"building", asurl: true, file: "geom/building.root", item: "geom;1", opt: "allz", title: "Geometry from tutorials/geom/building.C" },
     { name:"alice", asurl: true, file: "https://root.cern/files/alice2.root", item: "Geometry;1", opt: "macro:https://root.cern/js/files/geomAlice.C;black", title: "ALICE geometry" },
     { name:"atlas", asurl: true, file: "https://root.cern/files/atlas.root", item: "atlas;1", opt: "dflt;black", title:"ATLAS geometry" },
     { name:"cms", asurl: true, file: "https://root.cern/files/cms.root", item: "cms;1", opt: "macro:https://root.cern/files/cms_cmse.C;clipxyz;black", title: "CMS geomtery" },
     { name:"lhcb", asurl: true, file: "https://root.cern/files/lhcbfull.root", item: "Geometry;1", opt: "all;dflt;black", title: "LHCb geometry" },
     { name:"eve", asurl: true, json: "geom/evegeoshape.json.gz", title: "Example of drawing snapshot of volumes from EVE" },
     { name:"tracks", url: "?nobrowser&json=$$$geom/evegeoshape.json.gz&file=$$$geom/eve_tracks.root&item=evegeoshape.json.gz+eve_tracks.root/tracks;1", title:"Overlap of geometry with tracks, read from separate file" },
     { name:"tracks+hits", url: "?nobrowser&json=$$$geom/simple_alice.json.gz&file=$$$geom/tracks_hits.root&item=simple_alice.json.gz+tracks_hits.root/tracks;1+tracks_hits.root/hits;1&opt=black", title:"Overlap of simple ALICE geometry with tracks and hits, read from separate file" },
     { name: "proj", url: "?nobrowser&layout=h12_21&files=[https://root.cern/files/alice_ESDgeometry.root,$$$geom/eve_tracks.root]&items=[[[0]/Gentle,[1]/tracks],[0]/Gentle,[0]/Gentle]&opts=[main;black,projz;black,projx;black]", title: "Simple ALICE geometry and two projections" }
   ],
   TGraph : [
     { opt: "", file: "graph.root", item: "Graph;1" },
     { opt: "L" },
     { opt: "AX+Y+L" },
     { opt: "P" },
     { name: "star", opt:"*" },
     { opt: "LP" },
     { opt: "B" },
     { opt: "B1" },
     { name: "docu", file: "graph.root", layout: "vert333", items: ['c1','c47','c4','c48','c41','c42','c43','c44','c45'], title:"several canvas from TGraph documentation page" },
     { name: "excl", file: "tutorials_graphs.root", item: "exclusiongraph2", title: "Output of tutorials/graphs/exclusiongraph2.C" }
   ],
   TGraphErrors : [
     { opt:"", file: "graph.root", item: "GraphErrors;1" },
     { opt:"l",  title: 'just line with errors' },
     { opt:"lx", title: 'suppress drawing of the errors' },
     { opt:"z" , title: "do not draw ends"},
     { opt:">" , title: "draw arrows at the ends"},
     { opt:"|>" , title: "draw closed arrows at the ends"},
     { opt:"||" , title: "do not draw main error lines, only ends"},
     { opt:"[]" , title: "do not draw main error lines, only ends as brackets"},
     { opt:"0", title: "do not draw errors for points outside range" },
     { opt:"2", title: "filled rec" },
     { opt:"3" },
     { opt:"4" },
     { opt:"5", title: "filled rec plus line contour" }
   ],
   TGraphAsymmErrors : [
     { opt:"", file: "graph.root", item: "GraphAsymmErrors;1" },
     { opt:"z" , title: "do not draw ends"},
     { opt:">" , title: "draw arrows at the ends"},
     { opt:"|>" , title: "draw closed arrows at the ends"},
     { opt:"||" , title: "do not draw main error lines, only ends"},
     { opt:"[]" , title: "do not draw main error lines, only ends as brackets"},
     { opt:"2", title: "filled rec"  }
   ],
   TMultiGraph : [
     { name: "exclusion", file: "graph.root", item: "exclusion;1" },
     { name: "c1", file: "multigraph.root", item: "c1;1" },
     { name: "c2", item: "c2;1" },
     { name: "c3", item: "c3;1" },
     { name: "c4", item: "c4;1" },
     { name: "c5", item: "c5;1" },
     { name: "all", url: "?nobrowser&file=$$$multigraph.root&layout=grid3x2&items=[c1,c2,c3,c4,c5]" }
   ],
   TGraph2D : [
      { opt:"", file: "graph2d.root", item: "Graph2D", title: "example of TGraph2D" },
      { name:"pcol", item: "pcol", title: "example of TGraph2D, color options" },
      { opt:"err",  item: "cerr", title: "example of TGraph2DErrors, errors drawing" }
   ],
   TLatex : [
     { name:"text", file: "latex.root", layout: "grid2x2", items: ['lva','ex1','ex2','ex3'], title: "Without MathJax.js rendering" },
     { name:"latex", file: "latex.root", layout: "grid2x2", mathjax: true, items: ['lva','ex1','ex2','ex3'], title: "Without MathJax.js rendering" },
     { name:"math", file: "latex.root", item: "math", title: "TMathText drawn always with MathJax.js rendering" }
   ],
   Misc : [
     { name: "ellipse", file: "ellipse.root", item: "c1;1", title: "TEllipse class" },
     { name: "axis", file: "gaxis.root", item: "c1;1", title: "TGaxis class" },
     { name: "arrow", file: "arrow.root", item: "c1;1", title: "TArrow class" },
     { name: "sinfo", url: "?nobrowser&file=$$$hsimple.root&item=StreamerInfo", title: "List of streamer infos" },
     { name: "3dmark", url: "?nobrowser&file=$$$mix2d3d.root&item=Canvas;1/pad4&opt=white", title: "TPloyMarker3D class" },
     { name: "profile2d", file: "profile2d.root", item: "c1;1", title: "TProfile2D class" },
     { name: "polyline", file: "polyline.root", item: "can;1", title: "TPolyLine class (produced with graphics/triangles.C)" },
     { name: "class", json: "draw_class.json.gz", title: "Canvas, produced with DrawClass() call" }

   ]
 };
