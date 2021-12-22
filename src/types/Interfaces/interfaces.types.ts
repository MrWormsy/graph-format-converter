import {AttributeType, EdgeType, GraphMode} from "../Types";

/**
 * An attribute's representation
 */
export interface IAttribute {

    /**
     * The id of the attribute
     */
    id: string;

    /**
     * The display name of the attribute
     */
    title: string;

    /**
     * The type of the attribute
     */
    type: AttributeType
}

/**
 * A node attribute's representation
 */
export type INodeAttribute = IAttribute

/**
 * An edge attribute's representation
 */
export type IEdgeAttribute = IAttribute

/**
 * The attributes a graph can take
 */
export interface IGraphAttribute {

    /**
     * The id of the graph
     */
    id: string;

    /**
     * The default edge type
     */
    edgeType: EdgeType;

    /**
     * The default mode
     */
    mode: GraphMode;
}