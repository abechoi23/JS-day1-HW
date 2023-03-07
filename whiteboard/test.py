from whiteboard import *
import unittest

class MaintainOrderTest(unittest.TestCase):

    def test_one(self):
        self.assertEqual(add_digits([1, 2, 3, 4, 7], 5), 4)
        self.assertEqual(add_digits([1, 2, 3, 4, 7], 0), 0)
    
    def test_two(self):
        self.assertEqual(add_digits([1, 2, 3, 4], -1), 0)
        self.assertEqual(add_digits([1, 2, 3, 4], 3), 2)

unittest.main()