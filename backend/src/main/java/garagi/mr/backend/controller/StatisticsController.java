package garagi.mr.backend.controller;

import garagi.mr.backend.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/statistics")
public class StatisticsController {

    @Autowired
    private BookingRepository bookingRepository;

    @GetMapping("/bookings-per-user")
    public ResponseEntity<List<Object[]>> getBookingsPerUser() {
        List<Object[]> bookingsPerUser = bookingRepository.findBookingsPerUser();
        return ResponseEntity.ok(bookingsPerUser);
    }

    @GetMapping("/booking-status-distribution")
    public ResponseEntity<List<Object[]>> getBookingStatusDistribution() {
        List<Object[]> bookingStatusDistribution = bookingRepository.findBookingStatusDistribution();
        return ResponseEntity.ok(bookingStatusDistribution);
    }

    @GetMapping("/bookings-per-garage")
    public ResponseEntity<List<Object[]>> getBookingsPerGarage() {
        List<Object[]> bookingsPerGarage = bookingRepository.findBookingsPerGarage();
        return ResponseEntity.ok(bookingsPerGarage);
    }
}
