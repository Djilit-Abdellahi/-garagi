package garagi.mr.backend.controller;

import garagi.mr.backend.model.Garage;
import garagi.mr.backend.model.Role;
import garagi.mr.backend.services.GarageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/garages")
@CrossOrigin("http://localhost:4200/")
public class GarageController {

    private final GarageService garageService;

    @Autowired
    public GarageController(GarageService garageService) {
        this.garageService = garageService;
    }


    @GetMapping("/getAllGarages")
    public ResponseEntity<List<Garage>> getAllRoles() {
        return garageService.getAllGarages();
    }

    // Path: /api/garages/getAllGarages
//    @GetMapping("/getAllGarages")
//    public List<Garage> getAllGarages() {
//        return garageService.getAllGarages();
//    }

    // Path: /api/garages/getGarage/{garageId}
    @GetMapping("/getGarage/{garageId}")
    public Optional<Garage> getGarageById(@PathVariable Integer garageId) {
        return garageService.getGarageById(garageId);
    }

    @GetMapping("/moughataa/{moughataa}")
    public ResponseEntity<List<Garage>> getGaragesByMoughataa(@PathVariable String moughataa) {
        List<Garage> garages = garageService.getGaragesByMoughataa(moughataa);
        return ResponseEntity.ok(garages);
    }

    // Path: /api/garages/save
    @PostMapping("/save")
    public Garage createGarage(@RequestBody Garage garage) {
        return garageService.createGarage(garage);
    }

    // Path: /api/garages/delete/{garageId}
    @DeleteMapping("/delete/{garageId}")
    public void deleteGarage(@PathVariable Integer garageId) {
        garageService.deleteGarage(garageId);
    }
}

