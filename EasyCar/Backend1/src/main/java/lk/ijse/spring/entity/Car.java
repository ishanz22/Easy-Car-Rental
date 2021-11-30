package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Car {

    @Id
    private String carId;
    private String brand;
    private String category;
    private String transmission;
    private String fuelType;
    private double dailyRate;
    private int freeKmforDay;
    private double monthlyRate;
    private int freeKmforMonth;
    private double priceforExtraKm ;
    private String registrationNumber;
    private String color;

}
