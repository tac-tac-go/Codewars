export function* baumSweet(): Generator<number, any, undefined> {
  yield 1;

  let n = 1;
  while (true) {
    const zeroRuns = n.toString(2).split("1");
    const hasOdd = zeroRuns.some(run => run.length % 2 === 1);
    yield hasOdd ? 0 : 1;
    n++;
  }
}
