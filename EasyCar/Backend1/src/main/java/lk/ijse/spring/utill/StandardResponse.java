package lk.ijse.spring.utill;

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
public class StandardResponse {
    private String code;
    private String message;
    private Object data;
}
