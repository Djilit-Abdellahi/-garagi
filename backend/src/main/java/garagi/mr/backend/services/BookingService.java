package garagi.mr.backend.services;

import garagi.mr.backend.model.Booking;
import garagi.mr.backend.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    // Get all bookings
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Get a single booking by ID
    public Optional<Booking> getBookingById(Integer bookingId) {
        return bookingRepository.findById(bookingId);
    }

    // Create a new booking
    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    // Delete a booking
    public void deleteBooking(Integer bookingId) {
        bookingRepository.deleteById(bookingId);
    }
}

