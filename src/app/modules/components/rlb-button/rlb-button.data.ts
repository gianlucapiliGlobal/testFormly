import { RlbActionData } from "./rlb-action.data";

export interface RlbButtonData extends RlbActionData {
  text?: string;
  disabled?: boolean;
  tooltip?: string;
}

