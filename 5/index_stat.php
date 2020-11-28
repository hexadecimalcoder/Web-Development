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

$lines_string=curl('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen');
//echo htmlentities($lines_string);
preg_match('/<main class="HKt8rc CGNRMc" jsname="fjw8sb">(?s).*/', $lines_string, $body);
//print_r($body);
//echo htmlentities($body[0]);
//echo $body[0][0];
//print_no_contents($body);

//preg_match_all('/<article class=" MQsxIb xTewfe R7GTQ keNKEd j7vNaf Cc0Z5d EjqUne" jscontroller="mhFxVb" jsaction=";rcuQ6b:npT2md; click:KjsqPd;EXlHgb:HQ4Dqd" jsmodel="QWGJif hT8rr" jslog="85008"(?s).*>(?s).*<\/article>/', $body[0][0], $something);
//print_r($something);
//echo htmlentities($something[0][0]);
//echo $body[0][0];
//print_no_contents($something);

preg_match_all('/<h3 class="ipQwMb ekueJc RD0gLb"><a href="(.*?)" class="DY5T1d" >(.*?)<\/a><\/h3>/', $body[0], $some);
//print_r($some[0]);
//echo htmlentities($some[0][0]);

preg_match_all('/<img class="tvs3Id QwxBBf" srcset="(.*?)" aria-label="(.*?)" alt="(.*?)" src="(.*?)" id="i\d{1,3}" loading="lazy"\/>/', $body[0], $someimg);
//print_r($someimg);
//echo htmlentities($someimg[0][0]);
//echo "<br>";
// for ($i=0; $i < count($someimg[0]); $i++) { 
//     preg_match('/src="(.*?)" id="i\d{1,3}" loading="lazy"\/>/', $someimg[0][$i], $data);
//     echo $i."::: ";
//     echo $data[1];
//     //echo htmlentities($someimg[0][$i]);
//     echo "<br>";
//     # code...
// }
//preg_match_all('/<img class="tvs3Id QwxBBf"(?s).*>/', $body[0][0], $someimg);
//print_r($someimg);
//echo htmlentities($someimg[0][0]);



$result = array();
for ($i=0; $i < 30; $i++) { 
    preg_match('/<h3 class="ipQwMb ekueJc RD0gLb"><a href="(.*?)" class="DY5T1d" >(.*?)<\/a><\/h3>/', $some[0][$i], $data1);
    preg_match('/src="(.*?)" id="i\d{1,3}" loading="lazy"\/>/', $someimg[0][$i], $data2);
    $link = str_replace(".","",$data1[1]);
    // echo "https://news.google.com/".$data[1]."<br>";
    // echo $data[2];
    $temp=array();
    $temp[0] = "https://news.google.com".$link;
    $temp[1] = $data1[2];
    $temp[2] = $data2[1];
    $result[$i] = $temp;
    // echo ($i+1)."<br>";
    // echo "<a href=\"https://news.google.com".$link."\" target=\"_blank\">".$data1[2]."</a><br>";
    // echo "<a href=\"".$data2[1]."\" target=\"_blank\">".$data2[1]."</a><br>";
    //print_r($data);
    # code...
}
echo json_encode($result);
?>