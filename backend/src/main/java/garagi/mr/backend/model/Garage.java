package garagi.mr.backend.model;

//import javax.persistence.*;

import jakarta.persistence.*;


@Entity
@Table(name = "Garages")
public class Garage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "GarageID")
    private Long garageId;

    @Column(name = "Name", nullable = false)
    private String name;

    @Column(name = "ManagerName")
    private String managerName;

    @Column(name = "ContactNumber")
    private String contactNumber;

    @Column(name = "Address")
    private String address;

    @Column(name = "GPSLatitude")
    private Double gpsLatitude;

    @Column(name = "GPSLongitude")
    private Double gpsLongitude;

    @Column(name = "Moughataa")
    private String moughataa;

    // Getters and setters

}

