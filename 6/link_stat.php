<?php
error_reporting(0);
//The number of seconds to wait before refreshing the current URL.
$refreshAfter = 5;

//Send a Refresh header to the browser.
//header('Refresh: ' . $refreshAfter);
function curl($url){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0');
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}

$lines_string=curl('https://news.google.com/articles/CBMibWh0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjAvMTEvMDIvZmlyc3QtaXBob25lLTEzLXByb3RvdHlwZS1yZXNlbWJsZXMtaXBob25lLTEyLW5vLXRvdWNoLWlkLXNheXMtdGlwc3Rlci_SAQA?hl=en-IN&gl=IN&ceid=IN%3Aen');
//echo htmlentities($lines_string);
//preg_match('/<main class="HKt8rc CGNRMc" jsname="fjw8sb">(?s).*/', $lines_string, $body);
preg_match('/<a href="(.*?)" jsname="tljFtd" rel="nofollow">(.*?)<\/a>/', $lines_string, $body);

print_r($body);
//echo htmlentities($body[0]);
//echo $body[0][0];
//print_no_contents($body);
//echo json_encode($result);
//echo htmlspecialchars(json_encode($result), ENT_QUOTES, 'UTF-8');
?>