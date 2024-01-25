package garagi.mr.backend.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.Objects;


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


    public Long getBookingId() {
        return bookingId;
    }

    public User getUser() {
        return user;
    }

    public Garage getGarage() {
        return garage;
    }

    public GarageService getGarageService() {
        return garageService;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public Date getServiceDate() {
        return serviceDate;
    }

    public String getStatus() {
        return status;
    }


    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setGarage(Garage garage) {
        this.garage = garage;
    }

    public void setGarageService(GarageService garageService) {
        this.garageService = garageService;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public void setServiceDate(Date serviceDate) {
        this.serviceDate = serviceDate;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Booking booking)) return false;
        return Objects.equals(getBookingId(), booking.getBookingId()) && Objects.equals(getUser(), booking.getUser()) && Objects.equals(getGarage(), booking.getGarage()) && Objects.equals(getGarageService(), booking.getGarageService()) && Objects.equals(getBookingDate(), booking.getBookingDate()) && Objects.equals(getServiceDate(), booking.getServiceDate()) && Objects.equals(getStatus(), booking.getStatus());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getBookingId(), getUser(), getGarage(), getGarageService(), getBookingDate(), getServiceDate(), getStatus());
    }


}
