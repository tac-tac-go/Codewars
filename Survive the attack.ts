export const hasSurvived = (attackers : number[], defenders : number[]) : boolean => {
  let att_c = 0;
  let def_c = 0;
  let att_v = 0;
  let def_v = 0;

  const zipLongest = (arr1:number[], arr2:number[], fillValue:number) => {
      const maxLength = Math.max(arr1.length, arr2.length);
      const result = [];
      for (let i = 0; i < maxLength; i++) {
          result.push([arr1[i] !== undefined ? arr1[i] : fillValue, arr2[i] !== undefined ? arr2[i] : fillValue]);
      }
      return result;
  };

  const pairs = zipLongest(attackers, defenders, 0);
  for (const [i, j] of pairs) {
      if (i > j) {
          att_c++;
      } else if (i < j) {
          def_c++;
      }
      att_v += i;
      def_v += j;
  }

  if (att_c > def_c) {
      return false;
  } else if (att_c < def_c) {
      return true;
  } else {
      return def_v >= att_v;
  }
}
