const fit_in = (a, b, m, n) => (a + b <= m && Math.max(a, b) <= n) || (a + b <= n && Math.max(a, b) <= m);
