import { Scroll } from '../../models/TimelineCollnModel';
declare type Mode = "HORIZONTAL" | "VERTICAL" | "TREE";
declare let useNewScrollPosition: (mode: Mode, itemWidth?: number) => [number, (e: HTMLElement, s: Partial<Scroll>) => void];
export default useNewScrollPosition;
