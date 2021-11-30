getAllCars();
$("#btnVehicleAdd").click(function (){
    let carId = $("#txtcarcode").val();
    let brand = $("#txtbrand").val();
    let category = $("#txtcategory").val();
    let transmission = $("#txttransmission").val();
    let fuelType = $("#txtfueltype").val();
    let dailyRate = $("#txtdailyrate").val();
    let freeKmforDay = $("#txtfreeday").val();
    let monthlyRate = $("#txtmonthlyrate").val();
    let freeKmforMonth = $("#txtfreemoth").val();
    let priceforExtraKm = $("#txtextrafee").val();
    let registrationNumber = $("#txtregnumber").val();
    let color = $("#txtcolor").val();

    $.ajax({
        url:'http://localhost:8080/Backend1_war_exploded/api/v1/car',
        method:'post',
        async:true,
        contentType:'application/json',
        data:JSON.stringify({
            carId:carId,
            brand:brand,
            category:category,
            transmission:transmission,
            fuelType:fuelType,
            dailyRate:dailyRate,
            freeKmforDay:freeKmforDay,
            monthlyRate:monthlyRate,
            freeKmforMonth:freeKmforMonth,
            priceforExtraKm:priceforExtraKm,
            registrationNumber:registrationNumber,
            color:color
        }),

        success:function (data){
            console.log(data);
            getAllCars();
            clearcar();
        }
    });
    alert("Car Successfully Added !");
});

$("#btnVehicleUpdate").click(function (){
    let carId = $("#txtcarcode").val();
    let brand = $("#txtbrand").val();
    let category = $("#txtcategory").val();
    let transmission = $("#txttransmission").val();
    let fuelType = $("#txtfueltype").val();
    let dailyRate = $("#txtdailyrate").val();
    let freeKmforDay = $("#txtfreeday").val();
    let monthlyRate = $("#txtmonthlyrate").val();
    let freeKmforMonth = $("#txtfreemoth").val();
    let priceforExtraKm = $("#txtextrafee").val();
    let registrationNumber = $("#txtregnumber").val();
    let color = $("#txtcolor").val();

    let option=confirm(`Do You Want to Update Car ? id:${carId}`);
    if (option) {

        $.ajax({
            url: 'http://localhost:8080/Backend1_war_exploded/api/v1/car',
            method: 'put',
            async: true,
            contentType: 'application/json',
            data: JSON.stringify({
                carId: carId,
                brand: brand,
                category: category,
                transmission: transmission,
                fuelType: fuelType,
                dailyRate: dailyRate,
                freeKmforDay: freeKmforDay,
                monthlyRate: monthlyRate,
                freeKmforMonth: freeKmforMonth,
                priceforExtraKm: priceforExtraKm,
                registrationNumber: registrationNumber,
                color: color
            }),

            success: function (data) {
                console.log(data);
                getAllCars();
                clearcar();
                alert("Car Successfully Updated !");
            }
        });
    }
});


$("#btnCarSearch").click(function (){
    let id = $("#txtcarcode").val();
    $.ajax({
        url:`http://localhost:8080/Backend1_war_exploded/api/v1/car/${id}`,
        method:'get',
        async:true,
        contentType:'application/json',

        success:function (data){
            console.log(data);
            $("#txtbrand").val(data.brand);
            $("#txtcategory").val(data.category);
            $("#txttransmission").val(data.transmission);
            $("#txtfueltype").val(data.fuelType);
            $("#txtdailyrate").val(data.dailyRate);
            $("#txtfreeday").val(data.freeKmforDay);
            $("#txtmonthlyrate").val(data.monthlyRate);
            $("#txtfreemoth").val(data.freeKmforMonth);
            $("#txtextrafee").val(data.priceforExtraKm);
            $("#txtregnumber").val(data.registrationNumber);
            $("#txtcolor").val(data.color);
        }
    });
});

$("#btnVehicleDelete").click(function () {
    let carId = $("#txtcarcode").val();

    let option=confirm(`Do You Want to Delete Car ? id:${carId}`);
    if (option) {
        $.ajax({
            url: `http://localhost:8080/Backend1_war_exploded/api/v1/car/?id=${carId}`,
            method: 'delete',
            async: true,
            contentType: 'application/json',

            success: function (data) {
                console.log("deleted");
                getAllCars();
                clearcar();
                alert("Car Successfully Deleted !");
            }

        })
    }

})




$("#txtcarcode").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let id = $("#txtcarcode").val();
        $.ajax({
            url:`http://localhost:8080/Backend1_war_exploded/api/v1/car/${id}`,
            method:'get',
            async:true,
            contentType:'application/json',

            success:function (data){
                console.log(data);
                $("#txtbrand").val(data.brand);
                $("#txtcategory").val(data.category);
                $("#txttransmission").val(data.transmission);
                $("#txtfueltype").val(data.fuelType);
                $("#txtdailyrate").val(data.dailyRate);
                $("#txtfreeday").val(data.freeKmforDay);
                $("#txtmonthlyrate").val(data.monthlyRate);
                $("#txtfreemoth").val(data.freeKmforMonth);
                $("#txtextrafee").val(data.priceforExtraKm);
                $("#txtregnumber").val(data.registrationNumber);
                $("#txtcolor").val(data.color);
            }
        });
    }
});


function getAllCars(){
    $("#tblVehicle").empty();
    console.log("Hi")
    $.ajax({
        url:'http://localhost:8080/Backend1_war_exploded/api/v1/car',
        method:'get',
        contentType: 'application/json',
        async:true,

        success:function (data){
            console.log(typeof data)
            console.log(data)
            for (let cars of Object.keys(data)) {
                /*let row=`<tr><td>${cars.carId}</td><td>${cars.brand}</td><td>${cars.category}</td>
                         <td>${cars.transmission}</td><td>${cars.fuelType}</td><td>${cars.dailyRate}</td><td>${cars.freeKmforDay}</td>
                        <td>${cars.monthlyRate}</td><td>${cars.freeKmforMonth}</td><td>${cars.priceforExtraKm}</td>
                        <td>${cars.registrationNumber}</td><td>${cars.color}</td></tr>`;
                $("#tblVehicle").append(row);
                console.log(data);*/
                var capital = data[cars];
                console.log(cars, capital);
            }

        }
    });
}



function clearcar() {
    $("#txtcarcode").val("");
    $("#txtbrand").val("");
    $("#txtcategory").val("");
    $("#txttransmission").val("");
    $("#txtfueltype").val("");
    $("#txtdailyrate").val("");
    $("#txtfreeday").val("");
    $("#txtmonthlyrate").val("");
    $("#txtfreemoth").val("");
    $("#txtextrafee").val("");
    $("#txtregnumber").val("");
    $("#txtcolor").val("");
}
$("#txtcarcode").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtbrand').focus();
    }
});

$("#txtbrand").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtcategory').focus();
    }
});

$("#txtcategory").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txttransmission').focus();
    }
});
$("#txttransmission").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfueltype').focus();
    }
});
$("#txtfueltype").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtdailyrate').focus();
    }
});
$("#txtdailyrate").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtmonthlyrate').focus();
    }
});

$("#txtfreeday").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfreemoth').focus();
    }
});

$("#txtmonthlyrate").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfreeday').focus();
    }
});

$("#txtfreemoth").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtextrafee').focus();
    }
});
$("#txtextrafee").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtregnumber').focus();
    }
});
$("#txtregnumber").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtcolor').focus();
    }
});
$("#txtcolor").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#btnCarAdd').focus();
    }
});

let carIDRegEx=/^(Car-)[0-9]{1,3}$/;
$("#txtcarcode").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtbrand').focus();
    }
    let inputID=$("#txtcarcode").val();
    if (carIDRegEx.test(inputID)){
        $("#txtcarcode").css('border','1px solid green');
        $("#lblcarcode").text("");
    }else{
        $("#txtcarcode").css('border','1px solid red');
        $("#lblcarcode").text('Invalid Car Code (Car-001)');
    }
});

let dailyRateRegEx=/^[0-9]{1,10}$/;
$("#txtdailyrate").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtmonthlyrate').focus();
    }
    let inputID=$("#txtdailyrate").val();
    if (dailyRateRegEx.test(inputID)){
        $("#txtdailyrate").css('border','1px solid green');
        $("#lbldailyrate").text("");
    }else{
        $("#txtdailyrate").css('border','1px solid red');
        $("#lbldailyrate").text('Daily rate must be a number');
    }
});

let freeDayRegEx=/^[0-9]{1,10}$/;
$("#txtfreeday").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfreemoth').focus();
    }
    let inputID=$("#txtfreeday").val();
    if (freeDayRegEx.test(inputID)){
        $("#txtfreeday").css('border','1px solid green');
        $("#lblfreeday").text("");
    }else{
        $("#txtfreeday").css('border','1px solid red');
        $("#lblfreeday").text('Free km for a day must be a number');
    }
});


let freeMonthRegEx=/^[0-9]{1,10}$/;
$("#txtfreemoth").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtextrafee').focus();
    }
    let inputID=$("#txtfreemoth").val();
    if (freeMonthRegEx.test(inputID)){
        $("#txtfreemoth").css('border','1px solid green');
        $("#lblfreemoth").text("");
    }else{
        $("#txtfreemoth").css('border','1px solid red');
        $("#lblfreemoth").text('Free km for a month must be a number');
    }
});

let monthlyRateRegEx=/^[0-9]{1,10}$/;
$("#txtmonthlyrate").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtfreeday').focus();
    }
    let inputID=$("#txtmonthlyrate").val();
    if (monthlyRateRegEx.test(inputID)){
        $("#txtmonthlyrate").css('border','1px solid green');
        $("#lblmonthlyrate").text("");
    }else{
        $("#txtmonthlyrate").css('border','1px solid red');
        $("#lblmonthlyrate").text('Monthly rate must be a number');
    }
});


let extraFeeRegEx=/^[0-9]{1,10}$/;
$("#txtextrafee").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtregnumber').focus();
    }
    let inputID=$("#txtextrafee").val();
    if (freeMonthRegEx.test(inputID)){
        $("#txtextrafee").css('border','1px solid green');
        $("#lblextrafee").text("");
    }else{
        $("#txtextrafee").css('border','1px solid red');
        $("#lblextrafee").text('Price for extra km must be a number');
    }
});
