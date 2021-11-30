package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Rashmi De Zoysa
 * @Date :23-Jun-21
 **/
public interface DriverRepo extends JpaRepository<Driver,String> {
}
