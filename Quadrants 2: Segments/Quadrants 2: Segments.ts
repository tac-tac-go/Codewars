import {Coord} from "./preloaded";
export function quadrantSegment(A: Coord, B: Coord): boolean {
  return A.x * B.x < 0 || A.y * B.y < 0;
}
