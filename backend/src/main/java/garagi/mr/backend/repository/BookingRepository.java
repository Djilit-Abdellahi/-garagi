package garagi.mr.backend.repository;


import garagi.mr.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
    // Additional custom queries can be defined here
    @Query("SELECT u.username, COUNT(b) FROM Booking b JOIN b.user u GROUP BY u.username")
    List<Object[]> findBookingsPerUser();

    // Status distribution of bookings
    @Query("SELECT b.status, COUNT(b) FROM Booking b GROUP BY b.status")
    List<Object[]> findBookingStatusDistribution();

    // Number of bookings per garage
    @Query("SELECT g.name, COUNT(b) FROM Booking b JOIN b.garage g GROUP BY g.name")
    List<Object[]> findBookingsPerGarage();
}

