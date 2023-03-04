function solve(expression, x) {
    const exprWithX = expression.replace(/x/g, x);
    return eval(exprWithX);
  }

  
  const result = solve("(x + 2) * 3 - 5", 4);

  console.log(result)