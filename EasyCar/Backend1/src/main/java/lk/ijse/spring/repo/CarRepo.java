package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Rashmi De Zoysa
 * @Date :24-Jun-21
 **/
public interface CarRepo extends JpaRepository<Car,String > {
}
