def incrementer(nums):
    return [int(str(nums[i]+i+1)[-1]) for i in range(len(nums))]
