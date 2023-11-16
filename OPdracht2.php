<?php
 
// Auteur: Himanshu
// functie: datum functie
 
//instalisatie

$datum = date('l d F Y');

$tijd = date('H:i');

$month = date("F");

$daysInMonth = date("t");
$week = date("W");


 
//main
echo "Vandaag is het : $datum";

echo"<br>";

echo "Het is nu : $tijd ";

echo"<br>";

echo "Deze maand,  $month heeft $daysInMonth dagen";

echo"<br>";

echo "Deze week is het week: $week ";

 
?>