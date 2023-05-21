class Solution:
    def minMaxDifference(self, num: int) -> int:
        max_v = max(map(int,[str(num).replace(i,"9") for i in str(num)]))
        min_v = min(map(int,[str(num).replace(i,"0") for i in str(num)]))
        return max_v - min_v
