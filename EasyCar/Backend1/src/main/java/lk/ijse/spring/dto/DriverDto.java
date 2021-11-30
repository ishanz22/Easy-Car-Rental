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
public class DriverDto {
    private String id;
    private String name;
    private String email;
    private int contact;
    private String address;

}
