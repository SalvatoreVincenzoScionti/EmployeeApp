import { ButtonMode } from '../enums/button-mode';
import { IEmployee } from './employee.model';

// interface IButtonWithID {
//   title: string;
//   buttonMode: ButtonMode;
//   requiresPayload: true;
//   onClick: (pay: string) => void;
// }

// interface IButtonWithoutID {
//   title: string;
//   buttonMode: ButtonMode;
//   requiresPayload: false;
//   onClick: () => void;
// }

// export type IButton = IButtonWithID | IButtonWithoutID;

export interface IButton {
  title: string;
  buttonMode: ButtonMode;
  onClick: (employee?: IEmployee) => void;
}
