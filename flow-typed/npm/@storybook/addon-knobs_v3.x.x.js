// flow-typed signature: 1d070c8c148bbd6cffdd01bd531ba221
// flow-typed version: be6afbe662/@storybook/addon-knobs_v3.x.x/flow_vx.x.x

declare module "@storybook/addon-knobs/react" {
  declare type Renderable = React$Element<any>;
  declare type GroupId = string;

  declare function array<T>(string, (Array<mixed> | {}), ?string, ?GroupId): Array<string>;
  declare function boolean(string, boolean, ?GroupId): boolean;
  declare function button(string, ((?{}) => void), ?GroupId): void;
  declare function color(string, string, ?GroupId): string;
  declare function date(string, Date, ?GroupId): Date;
  declare function number(string, number, ?{ range?: boolean, min?: number, max?: number, step?: number }, ?GroupId): number;
  declare function object(string, any, ?GroupId): any;
  declare function select<T>(string, Array<T> | { [T]: string }, T, ?GroupId): T;
  declare function selectV2<T>(string, Array<T> | { [string]: T }, T, ?GroupId): T;
  declare function text(string, string, ?GroupId): string;
  declare function withKnobs(() => Renderable, { kind: string, story: string }): Renderable;
}