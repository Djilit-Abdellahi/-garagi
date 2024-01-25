package garagi.mr.backend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ReviewID")
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "GarageID")
    private Garage garage;

    @ManyToOne
    @JoinColumn(name = "UserID")
    private User user;

    @Column(name = "Rating", nullable = false)
    private int rating;

    @Column(name = "Comment")
    private String comment;

    @Column(name = "Date")
    private Date date;

    // Getters and setters

}
