import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConvertFormComponent } from '../convert-form/convert-form.component';
import { SolveFormComponent } from '../solve-form/solve-form.component';

export type UIType = 'Convert' | 'Solve';
export interface Unit {
  id: number;
  val: string;
  latex: string;
}

export interface UnitSet{
  id:number;
  val:string;
  list:Unit[];
  convMatrix: number[][];
}

export const lengthUnits: Unit[] = [
  { id: 0, val: 'kilometers', latex: 'km' },
  { id: 1, val: 'meters', latex: 'm' },
  { id: 2, val: 'centimeters', latex: 'cm' },
  { id: 3, val: 'millimeters', latex: 'mm' },
  { id: 4, val: 'micrometers', latex: '\\mu m' },
  { id: 5, val: 'nanometers', latex: 'nm' },
  { id: 6, val: 'inches', latex: 'in' },
  { id: 7, val: 'feet', latex: 'ft' },
  { id: 8, val: 'yards', latex: 'yd' },
  { id: 9, val: 'miles', latex: 'mi' },
  { id: 10, val: 'nautical_miles', latex: 'sm' },
];
//lengthConvMatrix[fromUnit][toUnit]
export const lengthConvMatrix: number[][] = [
  [1, 1000, 100000, 1000000, 1000000000, 1000000000000, 39370.1, 3280.84, 1093.61, 0.621371, 0.539957], //from Kilometers
  [0.001, 1, 100, 1000, 1000000, 1000000000, 39.3701, 3.28084, 1.09361, 0.000621371, 0.000539957], //from Meters
  [0.00001, 0.01, 1, 10, 10000, 10000000, .393701, 0.0328084, 0.0109361, 0.00000621371, 0.00000539957], //from centimeters
  [0.000001, 0.001, 0.1, 1, 1000, 1000000, .0393701, 0.00328084, 0.00109361, 0.000000621371, 0.000000539957], //from millimeters
  [0.000000001, 0.000001, 0.0001, 0.001, 1, 1000, .0000393701, 0.00000328084, 0.00000109361, 0.000000000621371, 0.000000539957], //from micrometers
  [0.000000000001, 0.000000001, 0.0000001, 0.000001, 0.000001, 0.001, .0000000393701, 0.00000000328084, 0.00000000109361, 0.000000000000621371, 0.000000539957], //from nanometers
  [0.0000254, 0.0254, 2.54, 25.4, 25400, 25400000, 1, 0.083333333, 0.02777777778, 0.000015783, 0.000013715], //from inches
  [0.0003048, 0.3048, 30.48, 304.8, 3048000, 3048000000, 12, 1, 0.333333333, 0.000189394, 0.000164579],
];
export const areaUnits: any = [
  { id: 0, val: 'meterssqu', latex: 'm^2' },
  { id: 1, val: 'cmeterssqu', latex: 'cm^2' },
];

export const unitSetList: UnitSet[] = [
  {
    id: 0,
    val: 'Length',
    list: lengthUnits,
    convMatrix: lengthConvMatrix,
  },
];
@Component({
  selector: 'app-convert-ui',
  templateUrl: './convert-ui.component.html',
  styleUrls: ['./convert-ui.component.scss'],
})
export class ConvertUIComponent implements OnInit {
  currentUI = new FormControl('Convert');
  unitSet = new FormControl(0);

  internalUnitSetList = unitSetList;
  //currentUnitSet: any;

  get showConvertUI() {
    return this.currentUI.value == 'Convert';
  }

  get showSolveUI() {
    return this.currentUI.value === 'Solve';
  }

  constructor() {}

  ngOnInit(): void {}
}
