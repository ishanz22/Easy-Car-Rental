package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDto;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
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
 * @Date :24-Jun-21
 **/

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public boolean addDriver(DriverDto dto) {

        if (repo.existsById(dto.getId())) {
            throw new RuntimeException("Driver Already Exists...");
        }
        repo.save(mapper.map(dto, Driver.class));
        return true;
    }

    @Override
    public DriverDto searchDriver(String id) {
        Optional<Driver> driver = repo.findById(id);
        if (driver.isPresent()) {
            Driver c = driver.get();
            return mapper.map(c,DriverDto.class);
        }
        return null;
    }

    @Override
    public boolean deleteDriver(String id) {
        if (! repo.existsById(id)) {
            throw new RuntimeException("Driver Not Found...");
        }
        repo.deleteById(id);
        return true;
    }

    @Override
    public boolean updateDriver(DriverDto dto) {
        if (repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto,Driver.class));
            return true;
        }
        return false;
    }

    @Override
    public ArrayList<DriverDto> getAllDriver() {
        List<Driver> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<DriverDto>>(){}.getType());
    }
    }
