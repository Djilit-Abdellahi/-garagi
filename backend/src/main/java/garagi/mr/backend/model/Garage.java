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


    public Long getGarageId() {
        return garageId;
    }

    public void setGarageId(Long garageId) {
        this.garageId = garageId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getManagerName() {
        return managerName;
    }

    public void setManagerName(String managerName) {
        this.managerName = managerName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getGpsLatitude() {
        return gpsLatitude;
    }

    public void setGpsLatitude(Double gpsLatitude) {
        this.gpsLatitude = gpsLatitude;
    }

    public Double getGpsLongitude() {
        return gpsLongitude;
    }

    public void setGpsLongitude(Double gpsLongitude) {
        this.gpsLongitude = gpsLongitude;
    }

    public String getMoughataa() {
        return moughataa;
    }

    public void setMoughataa(String moughataa) {
        this.moughataa = moughataa;
    }
}

