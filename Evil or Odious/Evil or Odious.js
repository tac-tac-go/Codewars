function evil(n) {
    return n.toString(2).split("").reduce((a,b) => Number(a)+Number(b),0)%2==1 ? "It's Odious!" : "It's Evil!";
}
