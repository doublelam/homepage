<?php 
	$formData=$_POST['fileinput'];
	$typeImg=$_POST['filetype'];

	// echo 'dafds';
	// $type=array("jpg","gif","bmp","jpeg","png");
	// $imgType=(@end(explode(".",$inputVal)));
	// echo $imgType;
	// if(in_array($imgType,$type)){
	// 	echo 'is type';
	// }else{
	// 	echo 'wrong type';
	// };
	// if()
	if($typeImg=='jpeg'){
		$typeImg='jpg';
	};
	$newFormData= substr(strstr($formData,','),1);
	$img = base64_decode($newFormData);
	$timeTab='image'.date('mdHis');
	$imgTab='img'.rand(10000,99999);
	$imageFold='./images';
	if(!is_dir($imageFold)){
		mkdir ($imageFold);
	};
	$direFil=$imageFold.'/'.$timeTab.$imgTab.'.'.$typeImg;
	$a = file_put_contents($direFil, $img);//返回的是字节数

	$arrayData=array($typeImg,$direFil);
	echo  json_encode($arrayData);
// so












 ?>