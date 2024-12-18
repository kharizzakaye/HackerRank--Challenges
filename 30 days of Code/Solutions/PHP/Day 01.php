<?php
    $handle = fopen ("php://stdin","r");
    $i = 4;
    $d = 4.0;
    $s = "HackerRank ";

    // Declare second integer, double, and String variables.
    $secondInteger;
    $secondDouble;
    $secondString;

    // Read and save an integer, double, and String to your variables.
    $secondInteger = intval(fgets($handle));
    $secondDouble = floatval(fgets($handle)); 
    $secondString = fgets($handle);

    // Print the sum of both integer variables on a new line.
    echo ($i + $secondInteger) . "\n";

    // Print the sum of the double variables on a new line.
    echo number_format(($d + $secondDouble), 1) . "\n";

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    echo $s . $secondString;

    fclose($handle);
?>