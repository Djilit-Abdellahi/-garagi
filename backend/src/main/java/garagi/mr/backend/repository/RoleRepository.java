package garagi.mr.backend.repository;

import garagi.mr.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  RoleRepository extends JpaRepository<Role, Integer> {
}
