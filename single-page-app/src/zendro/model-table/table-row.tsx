import React, { ReactElement } from 'react';
import {
  TableCell as MuiTableCell,
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps,
} from '@mui/material';
import { DataRecord, ParsedAttribute } from '@/types/models';

export type TableRowActionHandler = (primaryKey: string | number) => void;

export type TableRowAssociationHandler = (
  primaryKey: string | number,
  list: 'toAdd' | 'toRemove',
  action: 'add' | 'remove'
) => void;

interface TableRowProps extends MuiTableRowProps {
  attributes: ParsedAttribute[];
  record: DataRecord;
}

const gisTypes = [
  "Point",
  "MultiPoint",
  "LineString",
  "MultiLineString",
  "Polygon",
  "MultiPolygon",
  "GeometryCollection",
  "Feature",
  "FeatureCollection"
];

export default function TableRow({
  attributes,
  record,
  ...props
}: TableRowProps): ReactElement {
  return (
    <MuiTableRow {...props}>
      {props.children}
      {attributes.map((attribute, index) => (
        <MuiTableCell
          key={`${attribute.name}-${index}`}
          align={
            attribute.type.includes('Int') || attribute.type.includes('Float')
              ? 'right'
              : 'left'
          }
        >
          {String(
            record[attribute.name] !== null ? (gisTypes.includes(attribute.type) || attribute.type == 'JSON') ? JSON.stringify(record[attribute.name]) : record[attribute.name] : ''
          )}
        </MuiTableCell>
      ))}
    </MuiTableRow>
  );
}
