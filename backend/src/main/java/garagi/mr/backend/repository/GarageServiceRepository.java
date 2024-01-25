package garagi.mr.backend.repository;


import garagi.mr.backend.model.GarageService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GarageServiceRepository extends JpaRepository<GarageService, Integer> {
    // Additional custom queries can be defined here
}
