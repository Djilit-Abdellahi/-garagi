package garagi.mr.backend.model;


//import javax.persistence.*;
import jakarta.persistence.*;


@Entity
@Table(name = "GarageServices")
public class GarageService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ServiceID")
    private Long serviceId;

    @ManyToOne
    @JoinColumn(name = "GarageID")
    private Garage garage;

    @Column(name = "ServiceType", nullable = false)
    private String serviceType;

    // Getters and setters

}
