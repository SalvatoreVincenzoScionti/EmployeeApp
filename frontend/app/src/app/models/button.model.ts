import { ButtonMode } from '../enums/button-mode';

export interface IButton {
  title: string;
  buttonMode: ButtonMode;
  onClick: (_id: string) => void;
}
