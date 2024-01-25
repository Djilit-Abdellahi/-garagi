package garagi.mr.backend.repository;


import garagi.mr.backend.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    // Additional custom queries can be defined here
}
