package garagi.mr.backend.repository;


import garagi.mr.backend.model.Garage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GarageRepository extends JpaRepository<Garage, Integer> {
    // Additional custom queries can be defined here
}
