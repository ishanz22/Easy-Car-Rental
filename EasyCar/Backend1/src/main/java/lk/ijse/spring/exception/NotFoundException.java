package lk.ijse.spring.exception;

/**
 * @author : Rashmi De Zoysa
 * @Date :24-Jun-21
 **/
public class NotFoundException extends RuntimeException {
    public NotFoundException(String message) {
        super(message);
    }

}
