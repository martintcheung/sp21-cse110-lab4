## part a:
1. values added: 20
2. final result: 20
3. values added: 20
4. ReferenceError (tries to call result outside the block when it is only defined within the if statement block)
5. TypeError (tries to assign a new value to a const)
6. TypeError (tries to assign a new value to a const)

## part b:
1. 3 (the i remains referable to because it was declared using the var keyword)
2. 150 (300 * (1-0.5) is printed)
3. 150 (final price rounds the discountedPrice and ends up containing the last one)
4. [ 50, 100, 150 ] (it computes the discounted price of each element and returns the array containing all the prices)
5. ReferenceError (i was declared using let so it isnt referable outside the for loop)
6. ReferenceError (discountedPrice was declared using let so it isnt referable outside the for loop)
7. 150 (final price rounds the discountedPrice and ends up containing the last one, its declared using let in the same block that it is called in, so it is referable to)
8. [ 50, 100, 150 ] (it computes the discounted price of each element and returns the array containing all the prices)
9. ReferenceError (i was declared using let so it isnt referable outside the for loop)
10. 3 (prints the length of the prices array, which was declared using const)
11. [ 50, 100, 150 ] (function still works to calculate the discount because const doesn't mean elements can't be added to the discounted array)
12. a. student.name
    b. student['Grad Year']
    c. student.greeting();
    d. student['Favorite Teacher'].name
    e. student.courseLoad[0]
13. a. '32' (+ acts as concatenation, 2 is converted to string)
    b. 1 (- is subtraction, turns 3 into a number)
    c. 3 (null counts as 0)
    d. '3null' (+ after a string acts as concatenation, turns null into a string)
    e. 4 (true counts as 1)
    f. 0 (false and null both count as 0)
    g. '3undefined' (+ after a string counts as concatenation)
    h. NaN (numerical operation with undefined = NaN)
14. a. true ('2' converted to number)
    b. false (string comparison is alphabetical, not numerical)
    c. true ('2' converted to number)
    d. false (different types returns false)
    e. false (true counts as 1)
    f. true (Boolean(2) counts as true)
15. == converts types when comparing, while === immediately returns false if the types are different.

17. [2,4,6] (it goes through the array passed into the first param and does the doSomething function, which was passed through the callback param, to each element; multiply by 2)

19. 1
    4
    3
    2