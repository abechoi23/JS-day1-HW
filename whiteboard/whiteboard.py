# Your job here is to write a function  which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.
# Do not modify the input.
# Some examples:
# keep_order([1, 2, 3, 4, 7], 5) #=> 4
#                       ^(index 4)
# keep_order([1, 2, 3, 4, 7], 0) #=> 0
#           ^(index 0)
# keep_order([1, 1, 2, 2, 2], 2) #=> 2
#                 ^(index 2)


def keep_order(ary, val):

    for i, num in enumerate(ary):
        print(val, i)
        if num >= val:
            ary.insert(i, val)
            return i
        else:
            continue
    
    return i + 1