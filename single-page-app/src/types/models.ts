/* ATTRIBUTES */

import { Assign } from 'utility-types';
import { ParsedPermissions } from './acl';

export type AttributeScalarType =
  | 'JSON'
  | 'Boolean'
  | 'uuid'
  | 'DateTime'
  | 'Date'
  | 'Float'
  | 'Int'
  | 'String'
  | 'Array'
  | 'Point'
  | 'Multipoint'
  | 'LineString'
  | 'MultiLineString'
  | 'Polygon'
  | 'MultiPolygon'
  | 'GeometryCollection'
  | 'Feature'
  | 'FeatureCollection';

export type AttributeArrayType =
  | '[Boolean]'
  | '[DateTime]'
  | '[Date]'
  | '[Float]'
  | '[Int]'
  | '[String]'
  | '[Point]'
  | '[MultiPoint]'
  | '[LineString]'
  | '[MultiLineString]'
  | '[Polygon]'
  | '[MultiPolygon]'
  | '[GeometryCollection]'
  | '[Feature]'
  | '[FeatureCollection]';

export type StorageType =
  | 'sql'
  | 'distributed-data-model'
  | 'zendro-server'
  | 'generic'
  | 'cassandra'
  | 'mongodb'
  | 'amazon-s3'
  | 'trino'
  | 'presto'
  | 'neo4j'
  // ? to be ignored
  | 'sql-adapter'
  | 'ddm-adapter'
  | 'zendro-webservice-adapter'
  | 'generic-adapter'
  | 'cassandra-adapter'
  | 'mongodb-adapter'
  | 'amazon-s3-adapter'
  | 'trino-adapter'
  | 'presto-adapter'
  | 'neo4j-adapter';

export interface Attributes {
  [key: string]: AttributeScalarType | AttributeArrayType;
}

export type AttributeValue = AttributeScalarValue | AttributeArrayValue;

export type AttributeScalarValue = boolean | Date | number | string | object |null;

export type AttributeArrayValue =
  | boolean[]
  | Date[]
  | number[]
  | string[]
  | object[]
  | null[]
  | null;

export interface ParsedAttribute {
  name: string;
  type: AttributeScalarType | AttributeArrayType;
  primaryKey?: boolean;
  foreignKey?: boolean;
  automaticId?: boolean;
}

export interface DataRecord {
  [key: string]: AttributeValue | DataRecord | undefined;
}

/* ASSOCIATIONS */

export type AssociationType =
  | 'one_to_one'
  | 'many_to_one'
  | 'one_to_many'
  | 'many_to_many';

export type ImplementationType = 'foreignkeys' | 'generic' | 'sql_cross_table';

export interface Association {
  type: AssociationType;
  implementation: ImplementationType;
  targetStorageType: StorageType;
  reverseAssociation: string;
  target: string;
  targetKey: string;
  sourceKey?: string;
  keysIn?: string;
  label?: string;
  sublabel?: string;
}

export interface ParsedAssociation extends Association {
  name: string;
}

/* DATA MODELS */

export interface ApiPrivileges {
  textSearch: boolean;
  backwardPagination: boolean;
  sort: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
  bulkAddCsv: boolean;
}

export interface DataModel {
  associations?: Record<string, Association>;
  attributes: Attributes;
  internalId?: string;
  model: string;
  storageType: StorageType;
}

export type ParsedDataModel = Assign<
  DataModel,
  {
    apiPrivileges: ApiPrivileges;
    associations?: ParsedAssociation[];
    attributes: ParsedAttribute[];
    primaryKey: string;
  }
>;

export interface Model extends ParsedDataModel {
  permissions: ParsedPermissions;
}
