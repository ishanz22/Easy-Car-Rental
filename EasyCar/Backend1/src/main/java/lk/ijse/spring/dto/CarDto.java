package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author : Rashmi De Zoysa
 * @Date :23-Jun-21
 **/

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarDto {
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
