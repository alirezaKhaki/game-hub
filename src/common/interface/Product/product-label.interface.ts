export interface ILabel {
  id: string;

  code: string;

  label: string;

  expirationDate: string;

  color: string;

  platforms: string[];

  show: boolean;

  type: string;

  target: Record<string, unknown>;
}
