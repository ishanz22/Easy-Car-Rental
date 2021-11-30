package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDto;
import lk.ijse.spring.dto.CustomerDto;

import java.util.ArrayList;

/**
 * @author : Rashmi De Zoysa
 * @Date :23-Jun-21
 **/
public interface CarService {
    boolean addCar(CarDto dto);
    CarDto searchCar(String id);
    boolean deleteCar(String id);
    boolean updateCar(CarDto dto);
    ArrayList<CarDto> getAllCars();

}
