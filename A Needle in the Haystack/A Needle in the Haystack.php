function findNeedle($haystack) {
    $index=array_search("needle",$haystack);
    return "found the needle at position {$index}";
}
