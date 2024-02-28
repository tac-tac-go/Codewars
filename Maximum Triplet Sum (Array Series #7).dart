int maxTriSum(nums) => ((nums.toSet().toList()..sort()).reversed.take(3)).fold(0, (a, b) => a + b);
