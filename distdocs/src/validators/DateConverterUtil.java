/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package validators;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;

public abstract class DateConverterUtil {
    public static LocalDateTime sqlTimestampToLocalDateTime(Timestamp timestamp){
       return timestamp == null? null : new Timestamp(timestamp.getTime()).toLocalDateTime();
    }
    
    public static Timestamp localDateTimeToSqlTimestamp(LocalDateTime localDateTime){
       return localDateTime == null? null : Timestamp.valueOf(localDateTime);
    }
    
    public static LocalDate sqlTimestampToLocalDate(Timestamp timestamp){
       LocalDateTime localDateTime = sqlTimestampToLocalDateTime(timestamp);
       
       return localDateTime == null? null : LocalDate.of(localDateTime.getYear(), localDateTime.getMonth(), localDateTime.getDayOfMonth());
    }
    
    public static YearMonth sqlTimestampToYearMonth(Timestamp timestamp){
       LocalDateTime localDateTime = sqlTimestampToLocalDateTime(timestamp);
       
       return localDateTime == null? null : YearMonth.of(localDateTime.getYear(), localDateTime.getMonth());
    }
    
    public static LocalDate sqlDateToLocalDate(Date sqlDate){
       return sqlDate == null? null : sqlDate.toLocalDate();
    }
    
    public static YearMonth sqlDateToYearMonth(Date sqlDate){
       return sqlDate == null? null : YearMonth.of(sqlDate.toLocalDate().getYear(), sqlDate.toLocalDate().getMonth());
    }
    
    public static Date localDateToSqlDate(LocalDate localDate){
       return localDate == null? null : Date.valueOf(localDate);
    }
    
    public static YearMonth localDateToYearMonth(LocalDate localDate){
       return localDate == null? null : YearMonth.of(localDate.getYear(), localDate.getMonth());
    }
}
