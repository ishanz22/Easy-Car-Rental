package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDto;

import java.util.ArrayList;

/**
 * @author : Rashmi De Zoysa
 * @Date :23-Jun-21
 **/
public interface DriverService {
    boolean addDriver(DriverDto dto);
    DriverDto searchDriver(String id);
    boolean deleteDriver(String id);
    boolean updateDriver(DriverDto dto);
    ArrayList<DriverDto> getAllDriver();
}
