/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

export const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Inserting a row and storing the new RowID
const newRowId: RowID = CRUD.insertRow(row);

// Updating the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowId, updatedRow);

// Deleting the row
CRUD.deleteRow(newRowId);