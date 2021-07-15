/*
Data types dictionary from graphql-type to sequelize-type
*/

module.exports = {

  "Int" : 'INTEGER',
  "String": 'TEXT',
  "Float": 'FLOAT',
  "Boolean": 'BOOLEAN',
  "Date": "DATEONLY",
  "Time": "TIME",
  "DateTime": "DATE",
  "Point": "GEOMETRY",
  "MultiPoint": "GEOMETRY",
  "LineString": "GEOMETRY",
  "MultiLineString": "GEOMETRY",
  "Polygon": "GEOMETRY",
  "MultiPolygon": "GEOMETRY",
  "GeometryCollection": "GEOMETRY",
  "Feature": "GEOMETRY",
  "FeatureCollection": "GEOMETRY",
  "[String]": "TEXT",
  "[Int]": "TEXT",
  "[Float]": "TEXT",
  "[Boolean]": "TEXT",
  "[Date]": "TEXT",
  "[Time]": "TEXT",
  "[DateTime]": "TEXT",
  "[Point]": "TEXT",
  "[MultiPoint]": "TEXT",
  "[LineString]": "TEXT",
  "[MultiLineString]": "TEXT",
  "[Polygon]": "TEXT",
  "[MultiPolygon]": "TEXT",
  "[GeometryCollection]": "TEXT",
  "[Feature]": "TEXT",
  "[FeatureCollection]": "TEXT",
}
