<?php
error_reporting(0);
//The number of seconds to wait before refreshing the current URL.
$refreshAfter = 5;
set_time_limit(0);
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

$lines_string=curl('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen');
//echo htmlentities($lines_string);
//preg_match('/<main class="HKt8rc CGNRMc" jsname="fjw8sb">(?s).*/', $lines_string, $body);
preg_match('/<div class="lBwEZb BL5WZb GndZbb" jsname="esK7Lc" jscontroller="svoF2b" jsmodel="DLq0be hT8rr" jsdata="tbf4if;CAQqLggAKioICiIkQ0JBU0ZRb0lMMjB2TURkak1YWVNCV1Z1TFVkQ0dnSkpUaWdBUAE,;7" data-n-et="200" data-n-ham="true">(?s).*<\/div><div class="TleV1d" jsname="Hzufd"><div jsaction="ZYIfFd:QdqIqe">/', $lines_string, $body);

//print_r($body);
//echo htmlentities($body[0]);
//echo $body[0][0];
//print_no_contents($body);

preg_match_all('/<div jscontroller="d0DtYd" jsmodel="DLq0be;hT8rr" jsaction="JIbuQc:h5M12e;rcuQ6b:npT2md;" data-n-et="250" data-n-ham="true" (.*?)>(.*?)<\/div>/', $body[0], $some);
//print_r($some[2]);
//echo htmlentities(($some[2][0]));
//print_r($some[0]);
//echo htmlentities($some[0][0]);
$result = array();
for ($i=0; $i < 15; $i++) { 
    preg_match('/<h3 class="ipQwMb ekueJc RD0gLb"><a href="(.*?)" class="DY5T1d" >(.*?)<\/a><\/h3>/', $some[2][$i], $data1);
    preg_match('/src="(.*?)" id="i\d{1,3}" loading="lazy"\/>/', $some[2][$i], $data2);
    preg_match('/<span class="xBbh9">(.*?)<\/span>/', $some[2][$i], $data3);
    $link = str_replace(".","",$data1[1]);

    $red_link_html=curl("https://news.google.com".$link);
    //echo htmlentities($lines_string);
    //preg_match('/<main class="HKt8rc CGNRMc" jsname="fjw8sb">(?s).*/', $lines_string, $body);
    preg_match('/<a href="(.*?)" jsname="tljFtd" rel="nofollow">(.*?)<\/a>/', $red_link_html, $red_link);
    // echo "https://news.google.com/".$data[1]."<br>";
    // echo $data[2];
    //echo $red_link[1]."<br>";
    $temp=array();
    $temp[0] = $red_link[1];
    $temp[1] = $data1[2];
    $temp[2] = $data2[1];
    $temp[3] = $data3[1];
    $result[$i] = $temp;
}
echo json_encode($result);
//echo htmlspecialchars(json_encode($result), ENT_QUOTES, 'UTF-8');
?>