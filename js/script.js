// Copyright (c) 2020 Mark Palfi All rights reserved
//
// Created by: Mark Palfi
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  let answer = 0
  
  // input
  const factor1 = document.getElementById("factor1").value
  const factor2 = parseInt(document.getElementById("factor2").value)

  // output
  for (let counter = 0; counter < factor2; counter++) {
    answer = answer + factor1
  }
  text = "The answer is " + answer + "<br>";
}
