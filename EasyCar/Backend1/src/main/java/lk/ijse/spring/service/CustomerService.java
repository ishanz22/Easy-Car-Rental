package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDto;

import java.util.ArrayList;

/**
 * @author : Rashmi De Zoysa
 * @Date :23-Jun-21
 **/
public interface CustomerService {
    boolean addCustomer(CustomerDto dto);
    CustomerDto searchCustomer(String id);
    boolean deleteCustomer(String id);
    boolean updateCustomer(CustomerDto dto);
    ArrayList<CustomerDto> getAllCustomers();
    CustomerDto searchCustomerByName(String id,String password);
}
