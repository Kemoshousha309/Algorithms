// DYNAMIC PROGRAMMING
// break a problem into subproblems which are characterized by overlaping and optimal substructre
// overlap subproblem => the same subproblem apears many times
// optimal subproblem => the optimal solution of some subproblem construct the optimal solution of other one

// TECHNIQUES
// Memoization => store the result of the inputs that we got so we can use them later with the same inputs faster(top-bottom)
// tabulation => (down-top)

// the difference is the direction of processing

// 0, 1, 1, 2, 3, 5, 8
// 0, 1, 2, 3, 4, 5, 6

// top to down precessing direction
function fib_recursive(n, memo = [0, 1]) { // time Complexity O(n) , space Complexity O(n)
  if(memo[n] || memo[n] === 0) return memo[n];
  const result = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = result;
  return result;
}

// down to up precessing direction
function fib_tabulation(n) { // time Complexity O(n) , space Complexity O(n)
  const table = [0, 1];
  for(let i = table.length; i <= n; i++) {
    table.push(table[i-1] + table[i-2])
  }
  return table.pop();
}



console.log(fib_tabulation(5))