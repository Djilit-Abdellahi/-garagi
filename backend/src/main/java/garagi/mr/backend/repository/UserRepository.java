package garagi.mr.backend.repository;

import garagi.mr.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    // Additional custom queries can be defined here
}
