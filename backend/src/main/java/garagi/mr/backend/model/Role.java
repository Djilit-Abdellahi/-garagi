package garagi.mr.backend.model;

import jakarta.persistence.*;

//import javax.persistence.*;

@Entity
@Table(name = "Roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RoleID")
    private Long roleId;

    @Column(name = "RoleName", nullable = false)
    private String roleName;

    // Getters and setters

}
