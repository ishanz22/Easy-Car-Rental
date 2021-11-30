package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author : Rashmi De Zoysa
 * @Date :23-Jun-21
 **/
public interface CustomerRepo extends JpaRepository<Customer,String> {
    Optional<Customer> findTopByIdAndPassword(String id, String password);

}
