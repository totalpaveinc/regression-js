
/**
 * @deprecated Import from interfaces insead
 */
export interface IRangeOptions {
    low: number;
    high: number;
    preferLowerX: boolean;
    allowOutOfBounds?: boolean;
}

/**
 * @deprecated Import from interfaces insead
 */
export interface IOptions {
    order?: number;
    precision?: number;
    period?: number;
    xRange?: IRangeOptions;
    yRange?: IRangeOptions;
    enforceNegativeSlope?: boolean;
}

export default IOptions;
