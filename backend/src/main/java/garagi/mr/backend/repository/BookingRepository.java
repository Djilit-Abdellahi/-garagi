package garagi.mr.backend.repository;


import garagi.mr.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
    // Additional custom queries can be defined here
}

