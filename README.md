# graph-format-converter
Typescript library used to convert a graph format to another

# Installation

You can install Graph Format Converter using npm:

```sh
$ npm install graph-format-converter --save
```

# Usage

To import Graph Format Converter you can do it like so

```js
import {GraphFormatConverter} from "graph-format-converter";
```

Or

```javascript
const {GraphFormatConverter} = require("graph-format-converter");
```

And then you can use it this way

```javascript

const graphAsJson = {
    nodes: [...],
    edges: [...]
}

// Create the graph instance from a JSON graph
const jsonInstance = GraphFormatConverter.fromJson(graphAsJson);

// Get the graph as JSON
jsonInstance.toJson();

// Get the graph as GEXF
jsonInstance.toGexf();

// Get the graph as GRAPHML
jsonInstance.toGraphml();

// And you can create a graph instance from a (valid) 
// - Gexf string (to see the file format => https://gephi.org/gexf/1.2draft/gexf-12draft-primer.pdf)
// - Graphml string (to see the file format => http://graphml.graphdrawing.org/primer/graphml-primer.html#Graph)

const gexfInstance = GraphFormatConverter.fromGexf(graphAsGexfString);

// Or

const graphmlInstance = GraphFormatConverter.fromGraphml(graphAsGraphmlString);
```