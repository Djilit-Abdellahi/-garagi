package garagi.mr.backend.controller;

import garagi.mr.backend.model.Booking;
import garagi.mr.backend.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("http://localhost:4200/")
public class BookingController {

    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // Path: /api/bookings/getAllBookings
    @GetMapping("/getAllBookings")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // Path: /api/bookings/getBooking/{bookingId}
    @GetMapping("/getBooking/{bookingId}")
    public Optional<Booking> getBookingById(@PathVariable Integer bookingId) {
        return bookingService.getBookingById(bookingId);
    }

    // Path: /api/bookings/save
    @PostMapping("/save")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    // Path: /api/bookings/delete/{bookingId}
    @DeleteMapping("/delete/{bookingId}")
    public void deleteBooking(@PathVariable Integer bookingId) {
        bookingService.deleteBooking(bookingId);
    }
}
