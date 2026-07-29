func growingPlant(_ upSpeed: Int, _ downSpeed: Int, _ desiredHeight: Int) -> Int {
    var days = 1
    var height = upSpeed

    while height < desiredHeight {
        days += 1
        height += (upSpeed - downSpeed)
    }

    return days
}
