// Read the JSON File
const fs = require("fs");
const {GraphFormatConverter} = require("./dist/index")

// Read the JSON file
const jsonFile = JSON.parse(fs.readFileSync("data/Movie.json", "utf8"))
const jsonGraph = GraphFormatConverter.fromJson(jsonFile);

// Read the JSON file from a Graphology export
const graphologyJsonFile = JSON.parse(fs.readFileSync("data/MovieFromGraphology.json", "utf8"))
const graphologyJGraph = GraphFormatConverter.fromGraphology(graphologyJsonFile);

// Read the GEXF File
const gexfFile = fs.readFileSync("data/Movie.gexf", "utf8")
const gexfGraph = GraphFormatConverter.fromGexf(gexfFile);

// Read the Graphml File
const graphmlFile = fs.readFileSync("data/Movie.graphml", "utf8")
const graphmlGraph = GraphFormatConverter.fromGraphml(graphmlFile);

// GEPHI : | UI : OK
fs.writeFileSync("data/output/JSON_TO_JSON.json", JSON.stringify(jsonGraph.toJson(), null, '\t'))
// GEPHI : | UI : OK
fs.writeFileSync("data/output/GEXF_TO_JSON.json", JSON.stringify(gexfGraph.toJson(), null, '\t'))
// GEPHI : | UI : OK
fs.writeFileSync("data/output/GRAPHML_TO_JSON.json", JSON.stringify(graphmlGraph.toJson(), null, '\t'))
// GEPHI : | UI : OK
fs.writeFileSync("data/output/GRAPHOLOGY_TO_JSON.json", JSON.stringify(graphologyJGraph.toJson(), null, '\t'))

// GEPHI : OK | UI : OK
fs.writeFileSync("data/output/JSON_TO_GEXF.gexf", jsonGraph.toGexf())
// GEPHI : OK | UI : OK
fs.writeFileSync("data/output/GEXF_TO_GEXF.gexf", gexfGraph.toGexf())
// GEPHI : OK | UI : OK
fs.writeFileSync("data/output/GRAPHML_TO_GEXF.gexf", graphmlGraph.toGexf())
// GEPHI : OK | UI : OK
fs.writeFileSync("data/output/GRAPHOLOGY_TO_GEXF.gexf", graphologyJGraph.toGexf())

// GEPHI : OK | UI : OK
fs.writeFileSync("data/output/JSON_TO_GRAPHML.graphml", jsonGraph.toGraphml())
// GEPHI : OK | UI : OK
fs.writeFileSync("data/output/GEXF_TO_GRAPHML.graphml", gexfGraph.toGraphml())
// GEPHI : OK | UI : OK
fs.writeFileSync("data/output/GRAPHML_TO_GRAPHML.graphml", graphmlGraph.toGraphml())
// GEPHI : OK | UI : OK
fs.writeFileSync("data/output/GRAPHOLOGY_TO_GRAPHML.graphml", graphologyJGraph.toGraphml())