package garagi.mr.backend.model;

import jakarta.persistence.*;


@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID")
    private Long userId;

    @Column(name = "Username", nullable = false)
    private String username;

    @Column(name = "Email", nullable = false)
    private String email;

    @Column(name = "PasswordHash", nullable = false)
    private String passwordHash;

    @ManyToOne
    @JoinColumn(name = "RoleID")
    private Role role;

    // Getters and setters

}

