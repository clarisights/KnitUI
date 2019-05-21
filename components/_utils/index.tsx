import { ThemedStyledFunction } from "styled-components";

export const insertIf = (
  obj: any = {},
  condition: boolean,
  isArray: boolean = false
) => {
  if (condition) {
    return obj;
  }
  if (isArray) {
    return [];
  }
  return {};
};

// https://github.com/styled-components/styled-components/issues/630
export function withProps<U>() {
  return <
    P extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object = {}
  >(
    fn: ThemedStyledFunction<P, T, O>
  ): ThemedStyledFunction<P & U, T, O & U> =>
    (fn as unknown) as ThemedStyledFunction<P & U, T, O & U>;
}
