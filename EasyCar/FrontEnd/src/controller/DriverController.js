getAllDriver();
$("#btnDriverAdd").click(function (){

    let id = $("#txtDriverId").val();
    let name = $("#txtName").val();
    let email = $("#txtEmail").val();
    let contact = $("#txtContact").val();
    let address = $("#txtAddress").val();


    $.ajax({
        url:'http://localhost:8080/Backend1_war_exploded/api/v1/driver',
        method:'post',
        async:true,
        contentType:'application/json',
        data:JSON.stringify({
            id:id,
            name:name,
            email:email,
            contact:contact,
            address:address
        }),
        success:function (data){
            console.log(data);
            getAllDriver();
            clearDriver();
        }
    });
});

$("#btnDSearch").click(function (){
    let id=$("#txtDriverId").val();
    $.ajax({
        url:`http://localhost:8080/Backend1_war_exploded/api/v1/driver/${id}`,
        method:'get',
        async:true,
        contentType:'application/json',
        success:function (data){
            console.log(data);
            $("#txtName").val(data.name);
            $("#txtEmail").val(data.email);
            $("#txtContact").val(data.contact);
            $("#txtAddress").val(data.address);
        }
    })
});

$("#txtDriverId").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let id = $("#txtDriverId").val();
        $.ajax({
            url:`http://localhost:8080/Backend1_war_exploded/driver/${id}`,
            method:'get',
            async:true,
            contentType:'application/json',
            success:function (data){
                console.log(data);
                $("#txtName").val(data.name);
                $("#txtEmail").val(data.email);
                $("#txtContact").val(data.contact);
                $("#txtAddress").val(data.address);

            }
        })
    }
});

$("#btnDriverUpdate").click(function (){
    let id = $("#txtDriverId").val();
    let name = $("#txtName").val();
    let email = $("#txtEmail").val();
    let contact = $("#txtContact").val();
    let address = $("#txtAddress").val();

    $.ajax({
        url: 'http://localhost:8080/Backend1_war_exploded/api/v1/driver',
        method: 'put',
        async:true,
        contentType: 'application/json',
        data: JSON.stringify({
            id:id,
            name:name,
            email:email,
            contact:contact,
            address:address
        }),

        success:function (data){
            console.log(data);
            getAllDriver();
            clearDriver();
        }
    });
});

$("#btnDriverDelete").click(function () {
    let id = $("#txtDriverId").val();

    let option=confirm(`Do You Want to Delete Customer ? id:${id}`);
    if (option) {
        $.ajax({
            url: `http://localhost:8080/Backend1_war_exploded/v1/driver/?id=${id}`,
            method: 'delete',
            async: true,
            contentType: 'application/json',

            success: function (data) {
                console.log("deleted");
                alert("Driver Successfully Deleted !");
                getAllDriver();
                clearDriver();
            }

        })
    }

})

function getAllDriver(){
    $("#tblDriver").empty();
    $.ajax({
        url:'http://localhost:8080/Backend1_war_exploded/api/v1/driver',
        method:'get',
        async:true,

        success:function (data,textState, xhr){
            for (var driver of data) {
                console.log(driver);
                let row=`<tr><td>${driver.id}</td><td>${driver.name}</td><td>${driver.email}</td><td>${driver.contact}</td><td>${driver.address}</td></tr>`;
                $("#tblDriver").append(row);
            }
        }
    });
}

function clearDriver() {
    $("#txtDriverId").val("");
    $("#txtName").val("");
    $("#txtAddress").val("");
    $("#txtContact").val("");

}

$("#txtDriverId").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtName').focus();
    }
});

$("#txtName").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtAddress').focus();
    }
});

$("#txtAddress").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtContact').focus();
    }
});
$("#txtContact").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#btnDAdd').focus();
    }
});

let driverIDRegEx=/^(D-)[0-9]{1,3}$/;
$("#txtDriverId").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtName').focus();
    }
    let inputID=$("#txtDriverId").val();
    if (driverIDRegEx.test(inputID)){
        $("#txtDriverId").css('border','1px solid green');
        $("#lbldriverid").text("");
    }else{
        $("#txtDriverId").css('border','1px solid red');
        $("#lbldriverid").text('Invalid Driver ID (D-001)');
    }
});

let dcontact=/^[0-9]{1,10}$/;
$("#txtContact").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#btnDAdd').focus();
    }
    let inputID=$("#txtContact").val();
    if (dcontact.test(inputID)){
        $("#txtContact").css('border','1px solid green');
        $("#lblcontact").text("");
    }else{
        $("#txtContact").css('border','1px solid red');
        $("#lblcontact").text('Invalid Contact Number');
    }
});

