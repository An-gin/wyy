<?php
include('mysql.php');
// 有数据发送过来 - 先接收数据
// echo '<pre>';
// print_r($_POST);
$username = $_POST['username'];
$password = $_POST['password'];
// $tel = $_POST['tel'];
// $email = $_POST['email'];
// 检查是用户名是否被占用 - 拿用户名到数据库中查询
$res = mysqli_query($link,"SELECT * FROM user WHERE username='$username'");
// 提取数据
$row = mysqli_fetch_assoc($res);
// echo '<pre>';
// print_r($row); // 没有提取到数据是null
if($row){
    // echo 11;
    $arr = [
        "meta"=>[
            "status"=>2,
            "msg"=>"用户名被占用"
        ]
    ];
}else{ // 如果是null - 没有查到数据 - 用户名没有被占用
    // echo 22;
    // 将数据添加到数据库
    $res = mysqli_query($link,"INSERT INTO user(username,password) VALUES('$username','$password')");
    // 增的结果是布尔值
    if($res){
        // echo 33;
        $arr = [
            "meta"=>[
                "status"=>0,
                "msg"=>"注册成功"
            ]
        ];
    }else{
        // echo 44;
        $arr = [
            "meta"=>[
                "status"=>1,
                "msg"=>"注册失败"
            ]
        ];
    }
}
echo json_encode($arr);