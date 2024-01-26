export class G964 {
    public static nbDig(n: number, d: number): number {
        let count: number = 0;
        for (let k: number = 0; k <= n; k++) {
            count += (k * k).toString().split(d.toString()).length - 1;
        }
        return count;
    }
}
