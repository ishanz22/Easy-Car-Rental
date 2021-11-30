package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDto;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.utill.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin
public class CustomerController {
@Autowired
private CustomerService service;

@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity saveCustomer(@RequestBody CustomerDto dto) {
    if (dto.getId().trim().length() <= 0) {
        throw new RuntimeException("Customer Id Cannot be Empty...");
    }
    service.addCustomer(dto);
    return new ResponseEntity(new StandardResponse("201", "Done", dto), HttpStatus.CREATED);
}

@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public @ResponseBody ArrayList<CustomerDto> getAllCustomers(){
    ArrayList<CustomerDto> allCustomers = service.getAllCustomers();
    return allCustomers;
}
@GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
public @ResponseBody CustomerDto searchCustomer(@PathVariable String id){
    CustomerDto customer = service.searchCustomer(id);
    return customer;
}

@DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity deleteCustomer(@RequestParam String id){
    service.deleteCustomer(id);
    return new ResponseEntity(new StandardResponse("200","Done",null),HttpStatus.OK);
}

@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity updateCustomer(@RequestBody CustomerDto dto){
    if (dto.getId().trim().length()<=0) {
        throw new RuntimeException("Customer Not Found...");
    }
    service.updateCustomer(dto);
    return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
}
}
