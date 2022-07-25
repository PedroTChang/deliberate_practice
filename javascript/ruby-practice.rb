# Solve the following problems first in Ruby, then convert the solution to JavaScript.
# 1) Write a function that takes in an array of numbers and returns its sum.
# 2) Write a function that takes in an array of strings and returns the smallest string.
# 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
# 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
# def words(string)
#   string.each do |word|
#     if word[0] == "a"
#       p word
#     end
#   end
# end
# words(["apple", "letter", "dog", "wow"])
# 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

# 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
# 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
# 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
# 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
# 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.

# #* 1.)
# def sum(array)
#   sum = array.reduce(array[0]) do |sum, number|
#     sum + number
#   end
# end
# p sum([1,2, 3, 4, 5, 6, 7])

# #* 2.)
# def shortest_string(array)
#   array.reduce(array[0]) do |shortest_string, word|
#     if shortest_string.length < word.length
#       shortest_string
#     else
#       word
#     end
#   end
# end
# p shortest_string(["sum", "fire", "pencil", "door", "lemonade"])

# #* 3.)
# def reverse(numbers)
#   reverse = numbers.map do |index|
#     numbers[0 - index]
#   end
#   return reverse
# end
# p reverse([1, 2, 3, 4, 5, 6, 7])

# #* 4.)
# def a_word(array)

# end
# p a_word(["apple", "ant", "door", "four"])

# #* 4.)
