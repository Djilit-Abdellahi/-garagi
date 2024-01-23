package garagi.mr.backend.model;

//import javax.persistence.*;

import jakarta.persistence.*;

import java.util.Date;


@Entity
@Table(name = "Bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BookingID")
    private Long bookingId;

    @ManyToOne
    @JoinColumn(name = "UserID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "GarageID")
    private Garage garage;

    @ManyToOne
    @JoinColumn(name = "ServiceID")
    private GarageService garageService;

    @Column(name = "BookingDate", nullable = false)
    private Date bookingDate;

    @Column(name = "ServiceDate", nullable = false)
    private Date serviceDate;

    @Column(name = "Status", nullable = false)
    private String status;

    // Getters and setters

}
