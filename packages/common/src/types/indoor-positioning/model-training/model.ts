export interface LocationModelPerFloor {
    model: Buffer;
    classNames: string[];
    featureNames: string[];
  }
  
  export interface IndoorPositioningLocationModel {
    organizationId: string;
    lastUpdated: Date;
    /** Floor classifier ONNX from ai-modules (Keras/tf2onnx). Optional if single floor. */
    floorModel?: Buffer;
    /** Floor label names in model output order. */
    floorClassNames?: string[];
    /** Feature names for floor model (order matters). */
    floorFeatures?: string[];
    /** Global location feature names (reference). */
    locFeatures?: string[];
    /** Per-floor location classifier ONNX (Keras/tf2onnx) and metadata. */
    locationModels?: Record<string, LocationModelPerFloor>;
    /** Single location-only model (no floor): one ONNX classifier for locationId. */
    locationModel?: Buffer;
    /** Feature names for single location model (order matters). */
    locationFeatures?: string[];
    /** Location ID class names in model output order. */
    locationClassNames?: string[];
  }