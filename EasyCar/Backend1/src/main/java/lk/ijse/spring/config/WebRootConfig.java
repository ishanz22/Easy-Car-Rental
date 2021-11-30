package lk.ijse.spring.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author : Rashmi De Zoysa
 * @Date :24-Jun-21
 **/
@Configuration
@Import(JPAConfig.class)
public class WebRootConfig {
}
