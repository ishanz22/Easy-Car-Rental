package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDto;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author : Rashmi De Zoysa
 * @Date :23-Jun-21
 **/

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public boolean addCustomer(CustomerDto dto) {
        if (repo.existsById(dto.getId())) {
            throw new RuntimeException("Customer Already Exists...");
        }
        repo.save(mapper.map(dto, Customer.class));
        return true;
    }

    @Override
    public CustomerDto searchCustomer(String id) {
        Optional<Customer> customer = repo.findById(id);
        if (customer.isPresent()) {
            Customer c = customer.get();
            return mapper.map(c, CustomerDto.class);
        }
        return null;

    }

    @Override
    public boolean deleteCustomer(String id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Customer Not Found...");
        }
        repo.deleteById(id);
        return true;
    }

    @Override
    public boolean updateCustomer(CustomerDto dto) {
        if (repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, Customer.class));
            return true;
        }
        return false;
    }

    @Override
    public ArrayList<CustomerDto> getAllCustomers() {
        List<Customer> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<CustomerDto>>() {
        }.getType());
    }

    @Override
    public CustomerDto searchCustomerByName(String id, String password) {
        Optional<Customer> customer = repo.findTopByIdAndPassword(id, password);
        if (customer.isPresent()) {
            return mapper.map(customer.get(), CustomerDto.class);
        }
        return null;
    }
    }

