func movie(card: Double, ticket: Double, perc: Double) -> Int {
    var cnt = 0
    var currentCard = card
    while Double(ticket) * Double(cnt) <= ceil(currentCard) {
        cnt += 1
        currentCard += ticket * pow(perc, Double(cnt))
    }
    return cnt
}
